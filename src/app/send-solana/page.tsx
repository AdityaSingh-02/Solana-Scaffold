import { NextPage } from "next";
import React from "react";
import { Navbar } from "@/Components";
import { Operations } from "@/Components";
import Head from "next/head";
import WalletContextProvider from "@/Contexts/WalletContextProvider";

const page: NextPage = () => {
  return (
    <>
      <Head>
        <title>Send Solana</title>
        <meta name="description" content="Send Solana" />
      </Head>
      <Navbar todoAirdrop={true} />
      <WalletContextProvider>
        <Operations />
      </WalletContextProvider>
    </>
  );
};

export default page;
