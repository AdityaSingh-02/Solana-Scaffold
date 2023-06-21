import {Connection, PublicKey} from '@solana/web3.js'

export const airdrop = async (pubKey:string) => {
    const conn = new Connection("https://api.devnet.solana.com","confirmed");
    const publikKey = new PublicKey(pubKey)
    const sig = await conn.requestAirdrop(publikKey, 1000000000);
    conn.confirmTransaction(sig);
}