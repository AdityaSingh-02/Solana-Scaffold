"use client";
import React, { FC, use, useState } from "react";
import { Button } from "../Button/Button";
import { useWallet,useConnection } from "@solana/wallet-adapter-react";
import { PublicKey, Transaction } from "@solana/web3.js";
import { ASSOCIATED_TOKEN_PROGRAM_ID, TOKEN_PROGRAM_ID, createAssociatedTokenAccountInstruction, createMint, createMintToInstruction, getAccount, getAssociatedTokenAddress } from "@solana/spl-token";

export const MintTo: FC = () => {
  const [userData, setUserData] = useState({
    tokenMint: "",
    recepientAdd: "",
  });
  const [amount , setAmount] = useState<number>();
  const [txSig, setTxSig] = useState<string>("")
  const [balance, setBalance] = useState<string>("")
  const [tokenAccount, setTokenAccount] = useState<string>("")

  const {connection} = useConnection();
  const {publicKey, sendTransaction} = useWallet();

  const mintTo = async (e: React.MouseEvent<MouseEvent>) => {
    e.preventDefault();
    const transaction = new Transaction();
    const mintPubKey = new PublicKey(userData.tokenMint);
    const recepientPubKey = new PublicKey(userData.recepientAdd);
    
    const associatedAcc = await getAssociatedTokenAddress(
        mintPubKey,
        recepientPubKey,
        false,
        TOKEN_PROGRAM_ID,
        ASSOCIATED_TOKEN_PROGRAM_ID
    )

    transaction.add(createMintToInstruction(
        mintPubKey,
        associatedAcc,
        recepientPubKey,
        amount!,
    ))

    const sig = await sendTransaction(transaction, connection);
    await connection.confirmTransaction(sig, "confirmed");
    setTxSig(sig);
    setTokenAccount(associatedAcc.toString());
    const acc = await getAccount(connection, associatedAcc);
    setBalance(acc.amount.toString());

  }

  return (
    <>
      <div className="flex flex-col space-y-4 py-5 ">
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
          placeholder="Enter Recepient Address"
          value={userData.recepientAdd}
          onChange={(e) =>
            setUserData({ ...userData, recepientAdd: e.target.value })
          }
          className="px-2 py-2 rounded-md w-[500px] border-4 focus:outline-none focus:border-purple-500"
        />
        <input
          type="number"
          placeholder="Enter Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.valueAsNumber)}
          className="px-2 py-2 rounded-md w-[500px] border-4 focus:outline-none focus:border-purple-500"
        />
      </div>
      <Button inputText="Mint Tokens" gradient={true} btnClick={mintTo} />
      {txSig ? (
        <div>
          <p>Token Balance: {balance} </p>
          <p>Token acc: {tokenAccount} </p>
        </div>
      ) : null}
    </>
  );
};
