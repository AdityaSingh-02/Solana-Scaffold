import {
  createMint,
  createAccount,
  mintTo,
  approve,
  transfer,
} from "@solana/spl-token";
import { Connection, Keypair, PublicKey, Signer } from "@solana/web3.js";


// Creating a MINT account
export const createMintAcc = async (
  conn: Connection,
  payer: Signer,
  mintAuthority: PublicKey,
  freezeAuthority: PublicKey,
  decimals: number
) => {
  
};

// Creating a TOKEN account
export const createTokenAccount = async (
  conn: Connection,
  payer: Keypair,
  mint: PublicKey,
  owner: PublicKey
) => {
  const newAccount = await createAccount(conn, payer, mint, owner);
  return newAccount;
};

export const mintTokens = async (
  conn: Connection,
  payer: Keypair,
  mint: PublicKey,
  destination: PublicKey,
  authority: Keypair | PublicKey,
  amount: number | bigint
) => {
  const transactionSignature = await mintTo(
    conn,
    payer,
    mint,
    destination,
    authority,
    amount
  );
  return transactionSignature;
};

export const approveDelegate = async (
  conn: Connection,
  payer: Keypair,
  account: PublicKey,
  delegate: PublicKey,
  owner: Keypair | PublicKey,
  amount: number | bigint
) => {
  const transactionSignatureApprove = await approve(
    conn,
    payer,
    account,
    delegate,
    owner,
    amount
  );
  return transactionSignatureApprove;
};

export const transferTokens = async (
  conn: Connection,
  payer: Keypair,
  source: PublicKey,
  destination: PublicKey,
  owner: Keypair | PublicKey,
  amount: number | bigint
) => {
  const transactionSignatureTransferToken = await transfer(
    conn,
    payer,
    source,
    destination,
    owner,
    amount
  );
  return transactionSignatureTransferToken;
};
