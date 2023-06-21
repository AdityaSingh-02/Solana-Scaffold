import { PublicKey, Connection, LAMPORTS_PER_SOL } from '@solana/web3.js'

export const getBalance = async (pubKey: PublicKey | string | undefined): Promise<number> => {
    const conn = new Connection("https://api.devnet.solana.com", "confirmed");
    if (typeof pubKey === 'object') {
        const balance = await conn.getAccountInfo(pubKey);
        let bal;
        try {
            bal = balance!.lamports / LAMPORTS_PER_SOL
        } catch (err) {
            return -1
        }
        return bal
    }
    if (typeof pubKey === 'string') {
        const pubKeyString = new PublicKey(pubKey);
        const balance = await conn.getAccountInfo(pubKeyString);
        let bal;
        try {
            bal = balance!.lamports / LAMPORTS_PER_SOL
        } catch (err) {
            return -1
        }
        return bal
    }
    return -1;
}