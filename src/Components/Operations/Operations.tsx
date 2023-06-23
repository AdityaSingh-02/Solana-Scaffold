"use client";
import React, { useEffect, useState } from "react";
import { SolanaSend } from "./SolanaSend";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

export const operationsPage = async () => {
  return (
    <>
      <div className="flex justify-center pt-16 ">
        <div className="flex flex-col  pt-16 items-center rounded-lg w-[800px] h-[600px] text-black bg-gradient-to-r from-green-400 to-purple-500">
          <WalletMultiButton />
          <SolanaSend />
        </div>
      </div>
    </>
  );
};
