"use client";
import React, { useState } from "react";
import { GifInitializer, AddGifs } from "@/Components/index";
import { useWallet } from "@solana/wallet-adapter-react";
import { Navbar } from "@/Components/index";

const Gifs = () => {
  const wallet = useWallet();
  const [baseAccount, setBaseAccount] = useState();

  return (
    <>
      <div className="bg-teal-700 h-screen w-screen">
        <Navbar />
        <div className="flex items-center justify-center w-screen">
          {baseAccount ? (
            <GifInitializer setBaseAccount={setBaseAccount} />
          ) : (
              <AddGifs baseAccount={baseAccount}/>
          )}
        </div>
      </div>
    </>
  );
};

export default Gifs;
