'use client';
import React, {FC} from "react";
interface Props {
    btnClick: any,
    inputText:string,
}

export const Button = (props:Props) => {
    return (
        <>
      <div className="border-2 px-4 py-2 rounded-2xl border-zinc-700 bg-zinc-900 hover:scale-105 hover:ease-linear transition-all duration-150">
        <button className="text-white" onClick={props.btnClick} >{props.inputText}</button>
      </div>
    </>
  );
};
