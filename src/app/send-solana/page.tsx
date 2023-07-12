import { NextPage } from "next";
import React from "react";
import { Navbar } from "@/Components";
import { Operations } from "@/Components";
import Head from "next/head";

const page: NextPage = () => {
  return (
    <>
      <Head>
        <title>Send Solana</title>
        <meta name="description" content="Send Solana" />
      </Head>
      <div className="bg-gradient-to-t from-blue-500 to-green-500 h-screen">
        <Navbar todoAirdrop={true} />
        <Operations />
      </div>
    </>
  );
};

export default page;
