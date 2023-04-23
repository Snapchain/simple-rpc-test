import { ethers } from 'ethers';

async function main(rpcUrl: string) {
  // create an ethers.js provider that is connected to the local Ethereum RPC endpoint
  const provider = new ethers.JsonRpcProvider(rpcUrl);

  // get the latest block number
  const latestBlockNumber = await provider.getBlockNumber();

  // get the latest block info
  const latestBlock = await provider.getBlock(latestBlockNumber);

  console.log('Latest block number:', latestBlockNumber);
  console.log('Latest block info:', latestBlock);
}

const rpcUrl = process.argv[2];

if (!rpcUrl) {
  console.error('Please provide an Ethereum RPC endpoint URL as an argument.');
  process.exit(1);
}

main(rpcUrl).catch((error) => {
  console.error(error);
  process.exit(1);
});
