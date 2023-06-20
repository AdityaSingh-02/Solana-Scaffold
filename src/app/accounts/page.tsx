'use client';
import React from "react";
import { NextPage } from "next";
import { Navbar, DetailsForm } from "../../Components";
import { getBalance } from "./getBalance";
import { airdrop } from "./Airdrop";

// /Accounts page
const page: NextPage = () => {

  const [balance, setBalance] = React.useState<number>();
  const [pubKey, setPubKey] = React.useState<string>(""); 

  const handleSubmit = async(userInputKey:string) => {
    setPubKey(userInputKey);
    const res = await getBalance(userInputKey);
    if(res == -1) {
      alert("Please enter a valid public key");
      return;
    }
    setBalance(res);
  };

  const handleAirDrop = async() => {
    if(pubKey.length != 44) {
      alert("Please enter a valid public key");
      return;
    }
    return await airdrop(pubKey).then((res) => {
      alert("Airdrop Successful");
      handleSubmit(pubKey);
    }).catch((err) => {
      alert("Airdrop Failed");
    });
  }

  return (
    <>
      <Navbar airdrop = {handleAirDrop} />
      <DetailsForm getKey={handleSubmit} solBalance = {balance} />
    </>
  );
};

export default page;
