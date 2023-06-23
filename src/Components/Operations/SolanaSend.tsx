import React, { FC, useState } from "react";
import { Button } from "../Button/Button";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { SendSol } from "@/Function/SendSol";
import { Keypair, PublicKey } from "@solana/web3.js";

export const SolanaSend:FC = () => {
  const {connection} = useConnection();
  const {publicKey} = useWallet();
  const [amount, setAmount] = useState<number>(0);
  const [sendTo, setSendTo] = useState<string>('');

  const clickToSendSol = async() => {
    if(!connection || !publicKey){
      return;
    }
    await SendSol(Keypair.fromSeed(publicKey.toBytes()), new PublicKey(sendTo), amount );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    if (name === "amount") {
      setAmount(parseInt(value));
    }
    if(name === 'sendTo'){
      setSendTo(value);
    }
  }

  return (
    <>
      <div className=" text-white text-xl">
        <h1>Enter Amount</h1>
        <input
          type="number"
          name="amount"
          onChange = {handleChange}
          className={`w-[700px] text-black mb-10 rounded-lg px-3 focus-within:outline-none py-2 border-4`}
        />
      </div>
      <div className=" text-white text-xl">
        <h1>To</h1>
        <input
          type="text"
          name="sendTo"
          onChange={handleChange}
          className={`w-[700px] text-black mb-10 rounded-lg px-3 focus-within:outline-none py-2 border-4`}
        />
      </div>
      <Button inputText="Send" gradient={true} btnClick={clickToSendSol} />
    </>
  );
};
