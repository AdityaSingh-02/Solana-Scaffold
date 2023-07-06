"use client";
import React, { FC, useEffect, useState } from "react";
import { Button } from "../Button/Button";
import { useAnchorWallet, useConnection } from "@solana/wallet-adapter-react";
import * as anchor from "@project-serum/anchor";
import idl from "../../../idl.json";

export interface Props {
  counter: any;
  setTransactionUrl: any;
}
const PROGRAM_ID = new anchor.web3.PublicKey(idl.metadata.address);
export const Increment: FC<Props> = ({ counter, setTransactionUrl }) => {
    const [count, setCount] = useState(0)
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
      refreshCount(program)
    }, [])
  
    const incrementCount = async () => {
      const sig = await program?.methods
        .increment()
        .accounts({
          counter: counter,
          user: wallet.publicKey,
        })
        .rpc()
  
      setTransactionUrl(`https://explorer.solana.com/tx/${sig}?cluster=devnet`)
    }
  
    const refreshCount = async (program:anchor.Program) => {
      const counterAccount = await program.account.counter.fetch(counter)
      setCount(counterAccount.count.toNumber())
    }
  

  return (
    <>
      <div className="flex space-x-5">
        <Button inputText="Increment" btnClick={incrementCount} gradient={true} />
        <Button inputText="Resfresh" btnClick={refreshCount(program!)} />
        <div>
            Count: {count}
        </div>
      </div>
    </>
  );
};
