"use client";
import React, { useEffect, useState } from "react";
import { SolanaSend } from "./SolanaSend";

export const operationsPage = async () => {
  return (
    <>
      <div className="flex justify-center pt-16 ">
        <div className="flex flex-col  pt-16 items-center rounded-lg w-[800px] h-[600px] text-black backdrop-blur-2xl">
          <SolanaSend />
        </div>
      </div>
    </>
  );
};
