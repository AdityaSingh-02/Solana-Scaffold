import React, { FC } from "react";
import Image from "next/image";
import SolanaImg from "../../../public/solana.png";
import { Button } from "../Button/Button";

interface Props {
  airdrop: () => void;
}

export const Navbar = (props:Props) => {
  return (
    <div className="flex justify-between px-12 items-center h-12 bg-gradient-to-r from-purple-500 to-green-500">
      <div className="flex flex-row text-2xl text-black font-semibold justify-center items-center">
        <Image src={SolanaImg} alt="Solana" height={200} width={200} />
        {' '}Scaffold
      </div>
      <div>
        <ul className="flex space-x-3">
          <li><Button key={1} inputText="Airdrop 1 Sol" gradient={true} btnClick={() => props.airdrop()} /></li>
          <li><Button key={2} inputText="Connect Wallet" gradient={true} /></li>
          <li><Button key={3} inputText="Show wallet" gradient={true} /></li>
        </ul>
      </div>
    </div>
  );
};
