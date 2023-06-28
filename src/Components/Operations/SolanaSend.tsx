import React, { FC, useState } from "react";
import { Button } from "../Button/Button";
import { useConnection, useWallet} from "@solana/wallet-adapter-react";
import { SendSol } from "@/Function/SendSol";
import { Keypair, PublicKey } from "@solana/web3.js";

export const SolanaSend: FC = () => {
  const { connection } = useConnection();
  const { publicKey } = useWallet();
  const [amount, setAmount] = useState<number>(0);
  const [sendTo, setSendTo] = useState<string>("");

  const clickToSendSol = async () => {
    if (!connection || !publicKey) {
      return;
    }
    const sec = Uint8Array.from([252,220,205,41,109,21,7,250,229,220,47,202,101,206,23,114,66,127,213,78,98,147,71,197,81,166,96,146,58,44,254,138,73,99,8,184,140,31,11,200,140,190,161,25,121,237,65,88,18,216,72,217,138,87,168,77,89,141,13,64,139,158,0,187])
    const fromKeyPair = Keypair.fromSecretKey(sec)
    await SendSol(fromKeyPair, new PublicKey(sendTo), amount, connection).then(
      (res) => {
        if (res === "error") {
          return;
        }
        if (res === "success") {
          return;
        }
        return;
      }
    );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    if (name === "amount") {
      setAmount(parseInt(value));
    }
    if (name === "sendTo") {
      setSendTo(value);
    }
  };

  return (
    <>
      <div className=" text-white text-xl">
        <h1>Enter Amount</h1>
        <input
          type="number"
          name="amount"
          onChange={handleChange}
          placeholder="Enter Amount"
          className={`w-[700px] text-black mb-10 rounded-lg px-3 focus-within:outline-none py-2 border-4`}
        />
      </div>
      <div className=" text-white text-xl">
        <h1>To</h1>
        <input
          type="text"
          name="sendTo"
          placeholder="Enter Public Key of receiver"
          onChange={handleChange}
          className={`w-[700px] text-black mb-10 rounded-lg px-3 focus-within:outline-none py-2 border-4`}
        />
      </div>
      <Button inputText="Send" gradient={true} btnClick={clickToSendSol} />
    </>
  );
};
