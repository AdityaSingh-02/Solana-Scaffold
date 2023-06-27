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
      <div className="bg-SolBg2 bg-cover bg-no-repeat h-screen">
        <Navbar todoAirdrop={true} />
        <WalletContextProvider>
          <Operations />
        </WalletContextProvider>
      </div>
    </>
  );
};

export default page;
