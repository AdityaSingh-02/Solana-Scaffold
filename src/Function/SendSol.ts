import {
  PublicKey,
  Keypair,
  Connection,
  Transaction,
  SystemProgram,
  LAMPORTS_PER_SOL,
  sendAndConfirmTransaction,
} from "@solana/web3.js";

export const SendSol = async (
  from: Keypair,
  to: PublicKey,
  amount: number,
  conn: Connection
) => {

  if (amount <= 0) throw new Error("Amount must be greater than 0");
  if (amount > 2) throw new Error("Amount must be less than 2");

  const tx = new Transaction();

  const inx = SystemProgram.transfer({
    fromPubkey: from.publicKey,
    toPubkey: to,
    lamports: amount * LAMPORTS_PER_SOL,
  });

  tx.add(inx);

  try {
    await sendAndConfirmTransaction(conn, tx, [from]).then((sig) => {
      console.log("Transaction Success", sig);
      alert("Transaction Success")
    });

  } catch (err) {
    return "error";
    alert("Transaction Failed")
  }
};
