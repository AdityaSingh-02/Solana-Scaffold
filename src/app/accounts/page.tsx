'use client';
import React from "react";
import { NextPage } from "next";
import { Navbar, DetailsForm } from "../../Components";
import { getBalance } from "./getBalance";

// /Accounts page
const page: NextPage = () => {
  const [balance, setBalance] = React.useState<number>();
  
  const handleSubmit = async(userInputKey:string) => {
    const res = await getBalance(userInputKey);
    setBalance(res);
  };

  const handleAirDrop = async() => {
    console.log("airdrop")
  }

  return (
    <>
      <Navbar airdrop = {handleAirDrop} />
      <DetailsForm getKey={handleSubmit} solBalance = {balance} />
    </>
  );
};

export default page;
