import React from "react";
import { NextPage } from "next";
import { Navbar, DetailsForm } from "../../Components";

// /Accounts page
const page: NextPage = () => {
  return (
    <>
      <Navbar />
      <DetailsForm />
    </>
  );
};

export default page;
