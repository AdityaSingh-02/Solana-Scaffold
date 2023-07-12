"use client";

import React, { FC, useEffect, useState } from "react";
import { Button } from "../Button/Button";
import * as anchor from "@project-serum/anchor";
import gifsIDl from "@/../../gifsIDl.json";
import { useAnchorWallet, useConnection } from "@solana/wallet-adapter-react";
import Image from "next/image";

interface Props {
  baseAccount: any;
}
export const AddGifs: FC<Props> = ({ baseAccount }: Props) => {
  const PROGRAM_ID = new anchor.web3.PublicKey(gifsIDl.metadata.address);
  const [gifLink, addGifLink] = useState<string>("");
  const [program, setProgram] = useState<anchor.Program>();
  const [gifList, setGifAccount] = useState([]);
  const { connection } = useConnection();
  const wallet = useAnchorWallet()!;

  // Gets the program and sets the program value ie. a new anchor program
  useEffect(() => {
    let provider: anchor.Provider;
    try {
      provider = anchor.getProvider();
    } catch (error) {
      provider = new anchor.AnchorProvider(connection, wallet, {});
      anchor.setProvider(provider);
    }
    const prog = new anchor.Program(gifsIDl as anchor.Idl, PROGRAM_ID);
    setProgram(prog);
    getGifList();
  }, [wallet]);

  // Getting the list of all the gifs available in the account
  const getGifList = async () => {
    try {
      const account = await program?.account.BaseAccount.fetch(
        baseAccount.publicKey
      );
      console.log("Found Gif account");
      setGifAccount(account?.gifList);
    } catch (error) {
      console.log("unable to get gifs", error);
    }
  };

  // This is to upload the gifs
  const addGif = async () => {};

  const fakeGifs = [
    {
      id: "1",
      item: "https://media.giphy.com/media/yI0x1UrRiZLW7UtneP/giphy.gif",
    },
    {
      id: "2",
      item: "https://media.giphy.com/media/yI0x1UrRiZLW7UtneP/giphy.gif",
    },
    {
      id: "3",
      item: "https://media.giphy.com/media/xTiTnqUxyWbsAXq7Ju/giphy.gif",
    },
  ];

  return (
    <>
      <div className="flex flex-col justify-center items-center py-11 space-y-4 w-screen ">
        <input
          type="text"
          className="px-4 py-2 w-[70%] rounded-lg"
          value={gifLink}
          onChange={(e) => addGifLink(e.target.value)}
        />
        <Button inputText="Add" gradient={true} btnClick={addGif} />
        {gifLink === null ? (
          <div className="grid grid-cols-3 p-5">
            {/* {fakeGifs.map(({ id, item }: any) => (
              <div key={id} className="p-6">
                <Image src={item} alt="gifs" height={200} width={200} />
              </div>
            ))} */}
            no gifs
          </div>
        ) : (
          <div className="grid grid-cols-3 p-5">
            {fakeGifs.map(({ id, item }: any) => (
              <div key={id} className="p-6">
                <Image src={item} alt="gifs" height={200} width={200} />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
