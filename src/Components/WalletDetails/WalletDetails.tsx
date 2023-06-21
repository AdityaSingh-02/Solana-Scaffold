import React from "react";
import WalletContextProvider from "@/Contexts/WalletContextProvider";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
require("@solana/wallet-adapter-react-ui/styles.css");

export const WalletDetails = () => {
  return (
    <>
      <div className="flex justify-center pt-16">
        <div className="flex flex-col  pt-16 items-center w-[800px] h-[600px] text-black bg-zinc-900">
          <p className="text-white pb-5">Connect Wallet</p>
          <WalletContextProvider>
            <WalletMultiButton />
          </WalletContextProvider>
        </div>
      </div>
    </>
  );
};
