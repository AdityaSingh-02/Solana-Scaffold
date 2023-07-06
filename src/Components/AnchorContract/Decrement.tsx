"use client";
import React, { FC, useEffect, useState } from "react";
import { Props } from "./Increment";
import { useAnchorWallet, useConnection } from "@solana/wallet-adapter-react";
import * as anchor from "@project-serum/anchor";
import idl from "../../../idl.json";
import { Button } from "../Button/Button";

export const Decrement: FC<Props> = ({ counter, setTransactionUrl }) => {
  const PROGRAM_ID = new anchor.web3.PublicKey(idl.metadata.address);
  const [program, setProgram] = useState<anchor.Program>();
  const { connection } = useConnection();
  const wallet = useAnchorWallet()!;

  useEffect(() => {
    let provider: anchor.Provider;
    try {
      provider = anchor.getProvider();
    } catch {
      provider = new anchor.AnchorProvider(connection, wallet, {});
      anchor.setProvider(provider);
    }

    const prog = new anchor.Program(idl as anchor.Idl, PROGRAM_ID);
    setProgram(prog);
  }, []);

  const decrementCounter = async () => {
    const sig = await program?.methods
      .decrement()
      .accounts({
        counter: counter,
        user: wallet.publicKey,
      })
      .rpc();
    setTransactionUrl(`https://explorer.solana.com/tx/${sig}?cluster=devnet`);
  };


  return (
    <>
      <div className="flex">
        <Button
          inputText="Decrement"
          btnClick={decrementCounter}
          gradient={true}
        />
      </div>
    </>
  );
};
