"use client";
import React, { useState } from "react";
import { GifInitializer, AddGifs } from "@/Components/index";
import { useWallet } from "@solana/wallet-adapter-react";
import { Navbar } from "@/Components/index";
import kp from '@/Components/Gifs/keypair.json'
import * as anchor from '@project-serum/anchor';

const Gifs = () => {
  const wallet = useWallet();
  // const [baseAccount, setBaseAccount] = useState<string>('');

  const arr = Object.values(kp._keypair.secretKey);
  const secret = new Uint8Array(arr);
  const baseAccount = anchor.web3.Keypair.fromSecretKey(secret);
  const comparison:string = baseAccount.publicKey.toString()
  return (
    <>
      <div className="bg-teal-700 h-screen w-screen">
        <Navbar />
        <div className="flex items-center justify-center w-screen">
          {comparison === '' ? (
            <GifInitializer />
          ) : (
              <AddGifs baseAccount={comparison!}/>
          )}
        </div>
      </div>
    </>
  );
};

export default Gifs;
