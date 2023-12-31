"use client";
import React, { FC } from "react";
import Image from "next/image";
import SolanaImg from "../../../public/solana.png";
import { Button } from "../Button/Button";
import Link from "next/link";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

interface Props {
  airdrop?: () => void;
  todoAirdrop?: boolean;
}

export const Navbar = (props: Props) => {
  const handleClick = () => {
    props.airdrop?.();
  };

  return (
    <div className="flex z-20 justify-between px-12 items-center h-14 backdrop-blur-3xl">
      {/* <div className="flex justify-between px-12 items-center h-12 bg-gradient-to-r from-purple-500 to-green-500"> */}
      <div className="flex flex-row text-2xl text-black font-semibold justify-center items-center">
        <Image src={SolanaImg} alt="Solana" height={200} width={200} /> 
      </div>
      <div>
        <ul className="flex space-x-3">
          <li>
            {!props.todoAirdrop ? (
              <Button
                key={1}
                inputText="Airdrop 1 Sol"
                gradient={true}
                btnClick={handleClick}
              />
            ) : (
              <Link href={"/accounts"}>
                <Button key={1} inputText="Home" gradient={true} />
              </Link>
            )}
          </li>
          <li>
            <Link href={"/send-solana"}>
              <Button key={3} inputText="Send Solana" gradient={true} />
            </Link>
          </li>
          <li>
            <Link href={"/create-token"}>
              <Button key={4} inputText="Create Token" gradient={true} />
            </Link>
          </li>
          <li>
            <Link href={'/anchor'}>
              <Button key={6} inputText="AnchorCon" gradient={true} />
            </Link>
          </li>
          <li>
            <Link href={'/gifs'}>
              <Button key={7} inputText="Gifs contract" gradient={true} />
            </Link>
          </li>
          <li>
            <WalletMultiButton />
          </li>
        </ul>
      </div>
    </div>
  );
};
