"use client";
import React, { useState } from "react";
import { Increment, Navbar, Decrement } from "@/Components";
import { Initialize } from "@/Components";
import { useWallet } from "@solana/wallet-adapter-react";
import Link from "next/link";
import { Keypair } from "@solana/web3.js";

const AnchorProgram = () => {
  const [count, setCounter] = useState<Keypair>();
  const [transactionUrl, setTransactionUrl] = useState("");
  const wallet = useWallet();
  return (
    <>
      <div className="bg-slate-800 h-screen">
        <Navbar todoAirdrop={true} />
        <div className="flex  justify-center space-x-4">
          {wallet.connected ? (
            count ? (
              <div className="flex flex-col space-y-4">
                <Increment
                  counter={count}
                  setTransactionUrl={setTransactionUrl}
                />
                <Decrement
                  counter={count}
                  setTransactionUrl={setTransactionUrl}
                />
              </div>
            ) : (
              <Initialize
                setCounter={setCounter}
                setTransactionUrl={setTransactionUrl}
              />
            )
          ) : (
            <div>Connect your Wallet</div>
          )}
        </div>
        {transactionUrl && (
          <Link href={transactionUrl}>View most recent transaction</Link>
        )}
      </div>
    </>
  );
};

export default AnchorProgram;
