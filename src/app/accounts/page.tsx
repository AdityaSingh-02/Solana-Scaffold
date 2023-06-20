'use client';
import React from "react";
import { NextPage } from "next";
import { Navbar, DetailsForm } from "../../Components";

// /Accounts page
const page: NextPage = () => {
  
  const handleSubmit = (userInputKey:string|undefined) => {
    console.log("HEllo")
  }

  return (
    <>
      <Navbar />
      <DetailsForm getKey={handleSubmit} />
    </>
  );
};

export default page;
