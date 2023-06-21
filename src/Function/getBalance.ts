import {PublicKey, Connection, LAMPORTS_PER_SOL} from '@solana/web3.js'



export const getBalance = async (pubKey:string) => {
    const conn = new Connection("https://api.devnet.solana.com","confirmed");
    const publicKey = new PublicKey(pubKey)
    const balance = await conn.getAccountInfo(publicKey);
    let bal;
    try{
        bal = balance!.lamports / LAMPORTS_PER_SOL
    }catch(err){
        return -1
    }
    return bal
}