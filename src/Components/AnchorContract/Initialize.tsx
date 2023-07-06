"use client"
import React, { FC, useEffect, useState } from 'react'
import * as anchor from "@project-serum/anchor";
import idl from '../../../idl.json'
import { useAnchorWallet, useConnection } from '@solana/wallet-adapter-react';
import { Button } from '../Button/Button';

export const Initialize:FC = () => {

  const [program, setProgram] = useState<anchor.Program>()
  const {connection} = useConnection();
  const wallet = useAnchorWallet()!;

  useEffect(() => {
    let provider: anchor.Provider;
    try {
      provider = anchor.getProvider();
    } catch {
      provider = new anchor.AnchorProvider(connection, wallet, {});
      anchor.setProvider(provider);
    }

    const prog = new anchor.Program(idl as anchor.Idl, idl.metadata.address);
    setProgram(prog)
  },[]);

  const onClick = async() => {
    const newAccount = anchor.web3.Keypair.generate();

    try {
      const sig = await program?.methods.initialize().accounts({
        counter: newAccount.publicKey,
        user: wallet.publicKey,
        systemProgram: anchor.web3.SystemProgram.programId,
      }).signers([newAccount]).rpc();
      console.log("Created" , sig);
    } catch{
      console.log("Transaction Error")
    }
    // setTransactionUrl(`https://explorer.solana.com/tx/${sig}?cluster=devnet`);
    // setCounter(newAccount.publicKey)
  }

  return (
    <>
        <Button inputText='Initialize' btnClick={onClick} />
    </>
  )
}
