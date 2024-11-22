const ethers= require('ethers');
const abi= require('./abi.json');

async function readContract() {
  const provider = new ethers.JsonRpcProvider('https://ethereum-sepolia-rpc.publicnode.com');
  const contractAddress = '0x9a26273805758299C6ee5205060aDa3BF085391D';
  const contract = new ethers.Contract(contractAddress, abi, provider);
  const value = await contract.read();
  console.log(value, "value")
  console.log(contract);
}

readContract()