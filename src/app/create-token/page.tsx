import { Navbar } from "@/Components";
import React from "react";
import { CreateToken } from "@/Components";

const page = () => {
  return (
    <>
      <div className="bg-SolBg6 bg-cover bg-no-repeat h-screen">
        <Navbar todoAirdrop={true} />
        <CreateToken />
      </div>
    </>
  );
};

export default page;
