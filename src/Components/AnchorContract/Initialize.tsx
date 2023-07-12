"use client"
import React, { FC, useEffect, useState } from 'react'
import * as anchor from "@project-serum/anchor";
import idl from '../../../idl.json'
import { useAnchorWallet, useConnection } from '@solana/wallet-adapter-react';
import { Button } from '../Button/Button';

export interface Props{
  setCounter:any
  setTransactionUrl:any
}
const PROGRAM_ID = new anchor.web3.PublicKey(idl.metadata.address);
export const Initialize:FC<Props> = ({setCounter, setTransactionUrl}) => {

  const [program, setProgram] = useState<anchor.Program>()

  const { connection } = useConnection()
  const wallet = useAnchorWallet()!;

  useEffect(() => {
    let provider: anchor.Provider

    try {
      provider = anchor.getProvider()
    } catch {
      provider = new anchor.AnchorProvider(connection, wallet, {})
      anchor.setProvider(provider)
    }

    const program = new anchor.Program(idl as anchor.Idl, PROGRAM_ID)
    setProgram(program)
  }, [program])

  const onClick = async () => {
    const newAccount = anchor.web3.Keypair.generate()

    const sig = await program?.methods
      .initialize()
      .accounts({
        counter: newAccount.publicKey,
      })
      .signers([newAccount])
      .rpc()

    setTransactionUrl(`https://explorer.solana.com/tx/${sig}?cluster=devnet`)
    setCounter(newAccount.publicKey)
  }


  return (
    <>
        <Button inputText='Initialize' btnClick={onClick} />
    </>
  )
}
