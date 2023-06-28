import React from "react";
import CreateMint from "./CreateMint";

export const CreateToken = () => {

  return (
    <>
      <div className={`flex justify-center `}>
        <div className="flex flex-col  pt-16 mt-16 items-center rounded-lg w-[1000px] h-[600px] text-black backdrop-blur-2xl">
          <CreateMint />
        </div>
      </div>
    </>
  );
};
