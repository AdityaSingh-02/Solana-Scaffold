"use client"
import React, { FC, useEffect, useState } from 'react';
import * as anchor from "@project-serum/anchor";
import gifsIDl from '@/../../gifsIDl.json';
import { useAnchorWallet, useConnection } from '@solana/wallet-adapter-react';
import { Button } from '../Button/Button';

interface Props {
    setBaseAccount: any
}

export const GifInitializer:FC<Props> = ({setBaseAccount}: Props) => {
    const PROGRAM_ID = new anchor.web3.PublicKey(gifsIDl.metadata.address);
    const { connection } = useConnection();
    const wallet = useAnchorWallet()!;
    const [program, setProgram] = useState<anchor.Program>();

    useEffect(() => {
        let provider: anchor.Provider;
        try {
            provider = anchor.getProvider();
        } catch (error) {
            provider = new anchor.AnchorProvider(connection, wallet, {});
            anchor.setProvider(provider); 
        }
        const prog = new anchor.Program(gifsIDl as anchor.Idl, PROGRAM_ID);
        setProgram(prog);
    },[program])

    const handleInitialize = async () => {
        const newAcc = anchor.web3.Keypair.generate();
        const sig = await program?.methods.starter().accounts({
            baseAccount: newAcc.publicKey
        }).signers([newAcc]).rpc()
        setBaseAccount(newAcc.publicKey)
    }

  return (
    <>
        <Button inputText='Initialize Gifs Acc' btnClick={handleInitialize} />
    </>
  )
}
