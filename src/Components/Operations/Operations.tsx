"use client";
import React, { useEffect, useState } from "react";
import { SolanaSend } from "./SolanaSend";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

export const operationsPage = async () => {
  return (
    <>
      <div className="flex justify-center pt-16 h-screen bg-SolBg3 bg-cover bg-no-repeat ">
        <div className="flex flex-col  pt-16 items-center rounded-lg w-[800px] h-[600px] text-black backdrop-blur-2xl">
          <WalletMultiButton />
          <SolanaSend />
        </div>
      </div>
    </>
  );
};
