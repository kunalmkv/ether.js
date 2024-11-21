const ethers = require('ethers');

async function connectToBlockchain() {
  const provider = new ethers.JsonRpcProvider('https://ethereum-sepolia-rpc.publicnode.com');
  return provider
}

async function getBalance(address) {
  const signer = await connectToBlockchain();
  const balance = await signer.getBalance(address);
  const balanceInEth = ethers.formatEther(balance);
  console.log(balanceInEth, "balance")
}

;(async () => {
    await getBalance('0x29c9316479A965a12b3547df4aDFc38F8031D6b7');
})()