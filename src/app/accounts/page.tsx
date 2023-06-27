'use client';
import React from "react";
import { NextPage } from "next";
import { Navbar, DetailsForm } from "../../Components";
import { getBalance } from "../../Function/getBalance";
import { airdrop } from "../../Function/Airdrop";
import { PublicKey } from "@solana/web3.js";
// /Accounts page
const page: NextPage = () => {

  const [balance, setBalance] = React.useState<number>();
  const [pubKey, setPubKey] = React.useState<string>(""); 
  const [validInput, setValidInput] = React.useState<boolean>(true);

  const handleSubmit = async(userInputKey:string) => {
    setPubKey(userInputKey);
    const res = await getBalance(new PublicKey(userInputKey));
    if(res == -1) {
      setValidInput(false)
      alert("Please enter a valid public key");
      return;
    }
    setBalance(res);
    setValidInput(true);
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
    <div className="bg-SolBg bg-cover bg-no-repeat h-screen">
      <Navbar airdrop = {handleAirDrop} />
      <DetailsForm getKey={handleSubmit} solBalance = {balance} validInput = {validInput} />
    </div>
    </>
  );
};

export default page;
