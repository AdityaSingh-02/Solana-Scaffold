"use client";
import React from "react";
import { Navbar, WalletDetails } from "@/Components";
import WalletContextProvider from "@/Contexts/WalletContextProvider";

const page = () => {
  return (
    <>
      <Navbar todoAirdrop={true} />
      <WalletContextProvider>
        <WalletDetails />
      </WalletContextProvider>
    </>
  );
};

export default page;
