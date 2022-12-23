import {
  getAccount,
  getMint,
  getOrCreateAssociatedTokenAccount
} from '@solana/spl-token';
import { Connection, PublicKey } from '@solana/web3.js';
import { getPayer } from './utils.js';

const connection = new Connection('http://localhost:8899', 'confirmed');
const payer = await getPayer();

const mintAddress = new PublicKey(
  '98NDWqjUTudLQY2kbiEcH8ZWRH8RpHiqkEHUU3CsHJdq'
);
const mint = await getMint(connection, mintAddress);

console.log('mint:', mint);

const tokenAccount = await getOrCreateAssociatedTokenAccount(
  connection,
  payer,
  mint.address,
  payer.publicKey
);

console.log('Token Account Address:', tokenAccount.address.toBase58());

const tokenAccountInfo = await getAccount(connection, tokenAccount.address);

console.log(tokenAccountInfo.amount);