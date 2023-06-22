"use client";
import React from "react";
import { Navbar, WalletDetails } from "@/Components";


const page = () => {
  return (
    <>
      <Navbar  todoAirdrop={true} />
      <WalletDetails />
    </>
  );
};

export default page;
