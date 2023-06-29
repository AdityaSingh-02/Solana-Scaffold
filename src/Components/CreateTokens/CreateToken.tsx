import React from "react";
import { CreateMint } from "./CreateMint";
import { CreateTokenAccount } from "./CreateTokenAccount";
import { MintTo } from "./MintTo";

export const CreateToken = () => {
  return (
    <>
      <div className={`flex justify-center `}>
        <div className="flex flex-col  pt-16 mt-16 items-center rounded-lg w-[1000px] h-[600px] text-black backdrop-blur-2xl">
          <CreateMint />
          <CreateTokenAccount />
          <MintTo />
        </div>
      </div>
    </>
  );
};
