"use client"
import React, { FC, useEffect, useState } from 'react'
import { Button } from '../Button/Button'
import { useAnchorWallet, useConnection } from '@solana/wallet-adapter-react'
import * as anchor from '@project-serum/anchor'
import idl from '../../../idl.json'

export const Increment:FC = () => {
    const[program, setProgram] = useState<anchor.Program>();
    const[count,setCounter] = useState<number>(0);

    const wallet = useAnchorWallet()!;
    const {connection} = useConnection();

    useEffect(() => {
        let provider: anchor.Provider;
        try {
            provider = anchor.getProvider();
        } catch {
            provider = new anchor.AnchorProvider(connection, wallet,{})
            anchor.setProvider(provider);
        }
        let prog = new anchor.Program(idl as anchor.Idl, idl.metadata.address);
        setProgram(prog);
    })

  return (
    <>
        <Button inputText='Increment' btnClick={onclick} />
    </>
  )
}
