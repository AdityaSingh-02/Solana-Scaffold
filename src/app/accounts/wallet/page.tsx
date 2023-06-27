"use client";
import React from "react";
import { Navbar, WalletDetails } from "@/Components";

const page = () => {
  return (
    <>
      <div className="bg-SolBg5 bg-cover bg-no-repeat h-screen">
        <Navbar todoAirdrop={true} />
          {/* <WalletDetails /> */}
      </div>
    </>
  );
};

export default page;
