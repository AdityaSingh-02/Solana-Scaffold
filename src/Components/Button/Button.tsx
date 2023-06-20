"use client";
import React, { FC } from "react";
interface Props {
  btnClick?: any;
  inputText: string;
  gradient?: boolean | false;
}

export const Button = (props: Props) => {
  return (
    <>
      <div
        className={`border-2 z-40 px-4 py-2 rounded-2xl ${
          !props.gradient
            ? "bg-zinc-900 border-zinc-700"
            : "bg-gradient-to-r from-blue-500 to-purple-500 border-none hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 hover:ease-in hover:transition-all duration-300 "
        } hover:scale-105 hover:ease-linear transition-all duration-150`}>
        <button className="text-white" onClick={props.btnClick}>
          {props.inputText}
        </button>
      </div>
    </>
  );
};
