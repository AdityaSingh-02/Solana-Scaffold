"use client";
import React, { FC, MouseEventHandler, useEffect, useState } from "react";
import { Button } from "../Button/Button";

interface Props {
  getKey: (userInputKey: string) => void;
  solBalance?: number;
}

export const DetailsForm = (props: Props) => {
  // Some States Which are used for values and focus
  const [userKey, setUserKey] = useState<string>("");
  const [focus, setFocus] = useState<boolean>(false);
  const [showKey, setShowKey] = useState<boolean>(false);

  // Handle Value Change Function
  const handleChange = (e: any) => {
    const { value } = e.target;
    setShowKey(false);
    setUserKey(value);
  };

  // Handle Focus Change Function which updates satate of focus
  useEffect(() => {
    if (userKey.length == 44) {
      setFocus(true);
    } else {
      setFocus(false);
    }
  },[,userKey]);

  // This is for handling button click which passes the userKey to the parent component
  const handleClick = (e: any) => {
    e.preventDefault();
    if (userKey.length != 44) {
      alert("Please enter a valid public key");
      return;
    }
    setShowKey(true);
    props.getKey(userKey);
  };

  return (
    <>
      <div className="flex justify-center pt-16">
        <div className="flex flex-col  pt-16 items-center w-[800px] h-[600px] text-black bg-zinc-900">
          <p className="text-white pb-5">Get Account Balance</p>
          <input
            type="text"
            placeholder="Enter Public Key"
            name="publicKey"
            value={userKey}
            onChange={handleChange}
            className={`w-[700px] mb-10 rounded-lg px-3 focus-within:outline-none py-2 border-4 border-zinc-900 ${
              focus ? "focus:border-purple-500" : "focus:border-red-500"
            }`}
          />
          <Button btnClick={handleClick} inputText={"Show Balance"} />
          <div className="flex flex-col items-center text-white pt-12">
            {showKey? <div>{userKey}</div>: ""}
            {showKey? <div>{props.solBalance} Sol</div>:""}
          </div>
        </div>
      </div>
    </>
  );
};
