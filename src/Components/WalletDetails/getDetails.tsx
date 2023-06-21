"use client";
import React, { FC, useEffect, useState } from "react";
import { Button } from "../Button/Button";
import { useConnection } from "@solana/wallet-adapter-react";
import { useWallet } from "@solana/wallet-adapter-react";
import { getBalance } from "@/Function/getBalance";

export const GetDetails: FC = () => {
  const [balance, updtBalance] = useState<number>(0);
  const { publicKey } = useWallet();
  const { connection } = useConnection();
  const sendKey = publicKey?.toBase58();

  useEffect(() => {
    if (publicKey) {
      console.log(publicKey.toBase58());
    }
    getBalance(sendKey).then((bal) => updtBalance(bal));
  }, [publicKey, connection]);

  const handleClick = () => {
    console.log(balance);
  };

  return (
    <>
      <h1>HEllo</h1>
      <Button inputText="Ping me" btnClick={handleClick} />
      {publicKey && <p>Public Key: {publicKey.toBase58()}</p>}
      {publicKey && <p>SOL Balance: {(balance || 0).toLocaleString()}</p>}
    </>
  );
};
