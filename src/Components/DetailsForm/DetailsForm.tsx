'use client';
import React, { FC, MouseEventHandler } from "react";
import { Button } from "../Button/Button";

interface Props {
  getKey: (userInputKey:string) => void ,
}

export const DetailsForm = (props:Props) =>  {

    const handleClick = () => {
        props.getKey("Hell")
    }

  return (
    <>
      <div className="flex justify-center pt-16">
        <div className="flex flex-col  pt-16 items-center w-[800px] h-[600px] text-black bg-zinc-900">
          <p className="text-white pb-5">Get Account Balance</p>
          <input type="text" placeholder="Enter Public Key" name="publicKey" className="w-[700px] mb-10 rounded-lg px-3 focus-within:outline-none py-2 border-4 border-zinc-900 focus:border-purple-500" />
          <Button btnClick={handleClick} inputText={"Show Balance"} />
        </div>
      </div>
    </>
  );
};
