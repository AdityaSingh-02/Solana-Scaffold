"use client";
import React, { FC, useState } from "react";
import { Button } from "../Button/Button";
import { SystemProgram, Transaction, PublicKey } from "@solana/web3.js";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import {
  ASSOCIATED_TOKEN_PROGRAM_ID,
  TOKEN_PROGRAM_ID,
  createAssociatedTokenAccount,
  createAssociatedTokenAccountInstruction,
  getAssociatedTokenAddress,
} from "@solana/spl-token";

export const CreateTokenAccount: FC = () => {
  const [userData, setUserData] = useState({
    tokenMint: "",
    ownerPubKey: "",
  });
  const [txSig, setTxSig] = useState("");
  const [tokenAccount, setTokenAccount] = useState("");

  const { publicKey, sendTransaction } = useWallet();
  const { connection } = useConnection();

  const createTokenAccHandler = async (e: React.MouseEvent<MouseEvent>) => {
    e.preventDefault();

    if (!publicKey && !connection) alert("Please Connect Wallet First");
    const transaction = new Transaction();

    const mint = new PublicKey(userData.tokenMint);
    const owner = new PublicKey(userData.ownerPubKey);

    const associatedAcc = await getAssociatedTokenAddress(
      mint,
      owner,
      false,
      TOKEN_PROGRAM_ID,
      ASSOCIATED_TOKEN_PROGRAM_ID
    );

    transaction.add(
      createAssociatedTokenAccountInstruction(
        publicKey!,
        associatedAcc,
        owner,
        mint,
        TOKEN_PROGRAM_ID,
        ASSOCIATED_TOKEN_PROGRAM_ID
      )
    );
    sendTransaction(transaction, connection).then((sig) => {
      setTxSig(sig);
      setTokenAccount(associatedAcc.toString());
    });
  };

  return (
    <>
      {publicKey && (<div className="flex flex-col space-y-4 py-5 ">
        <input
          type="text"
          placeholder="Enter Token Mint"
          value={userData.tokenMint}
          onChange={(e) =>
            setUserData({ ...userData, tokenMint: e.target.value })
          }
          className="px-2 py-2 rounded-md border-4 w-[500px] focus:outline-none focus:border-purple-500"
        />
        <input
          type="text"
          placeholder="Enter Token Account Owner PublicKey"
          value={userData.ownerPubKey}
          onChange={(e) =>
            setUserData({ ...userData, ownerPubKey: e.target.value })
          }
          className="px-2 py-2 rounded-md w-[500px] border-4 focus:outline-none focus:border-purple-500"
        />
      </div>) }
      {publicKey && <Button
        inputText="Create Token Account"
        btnClick={createTokenAccHandler}
        gradient={true}
      />}
      {txSig ? (
        <div>
          <p>Token Account Address: {tokenAccount}</p>
        </div>
      ) : null}
    </>
  );
};

