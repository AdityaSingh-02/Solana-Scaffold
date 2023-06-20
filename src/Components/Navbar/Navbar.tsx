import React, { FC } from "react";
import Image from "next/image";
import SolanaImg from "../../../public/solana.png";

export const Navbar: FC = () => {
  return (
    <div className="flex justify-between px-12 items-center h-12 bg-gradient-to-r from-purple-500 to-green-500">
      <div className="flex flex-row text-2xl text-black font-semibold justify-center items-center">
        <Image src={SolanaImg} alt="Solana" height={200} width={200} />
        {' '}Scaffold
      </div>
      <div>
        <ul className="flex space-x-3">
          <li>Menu1</li>
          <li>Menu2</li>
          <li>Menu3</li>
        </ul>
      </div>
    </div>
  );
};
