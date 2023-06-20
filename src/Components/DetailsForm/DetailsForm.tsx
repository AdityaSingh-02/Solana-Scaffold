'use client';
import React, { FC, MouseEventHandler } from "react";
import { Button } from "../Button/Button";

export const DetailsForm: FC = () =>  {

    const handleClick = () => {
        console.log("name")
    }

  return (
    <>
      <div className="flex justify-center pt-16">
        <div className="flex flex-col justify-center items-center w-[800px] h-[600px] text-black bg-zinc-900">
          <input type="text" name="publicKey" className="w-96 mb-10 rounded-lg active:border-none px-3 py-2" />
          <Button btnClick={handleClick} inputText={"Get Started"} />
        </div>
      </div>
    </>
  );
};
