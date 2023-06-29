"use client";
import React, { FC, useState } from "react";
import { Button } from "../Button/Button";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { Keypair, SystemProgram, Transaction } from "@solana/web3.js";
import {
  MINT_SIZE,
  TOKEN_PROGRAM_ID,
  createInitializeMintInstruction,
  getMinimumBalanceForRentExemptAccount,
} from "@solana/spl-token";

export const CreateMint: FC = () => {
  const [txid, setTxid] = useState<string>("");
  const [mint, setMint] = useState<string>("");

  // Wallet Contexts
  const { publicKey, sendTransaction } = useWallet();
  const { connection } = useConnection();

  const createMintHandler = async (e: React.MouseEvent<MouseEvent>) => {
    e.preventDefault();

    const newUser = Keypair.generate();
    const rentExempt = await getMinimumBalanceForRentExemptAccount(connection);

    const transaction = new Transaction();

    transaction.add(
      SystemProgram.createAccount({
        fromPubkey: publicKey!,
        newAccountPubkey: newUser.publicKey,
        lamports: rentExempt,
        space: MINT_SIZE,
        programId: TOKEN_PROGRAM_ID,
      }),
      createInitializeMintInstruction(
        newUser.publicKey,
        2,
        publicKey!,
        publicKey
      )
    );
    await sendTransaction(transaction, connection, { signers: [newUser] }).then(
      (res) => {
        setTxid(res);
        setMint(newUser.publicKey.toString());
      }
    );
  };

  return (
    <>
      {publicKey ? (
        <Button inputText="Create Mint" btnClick={createMintHandler} gradient={true} />
      ) : (
        "Please Connect Wallet"
      )}
      {txid ? (
        <div>
          <p>Transaction ID: {txid}</p>
          <p>Mint Address: {mint}</p>
        </div>
      ) : null}
    </>
  );
};

