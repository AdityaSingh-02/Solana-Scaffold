"use client";
import React from "react";
import { Navbar, WalletDetails } from "@/Components";
import WalletContextProvider from "@/Contexts/WalletContextProvider";

const page = () => {
  return (
    <>
      <div className="bg-SolBg5 bg-cover bg-no-repeat h-screen">
        <Navbar todoAirdrop={true} />
        <WalletContextProvider>
          <WalletDetails />
        </WalletContextProvider>
      </div>
    </>
  );
};

export default page;
