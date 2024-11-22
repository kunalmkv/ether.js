const ethers= require('ethers');
const abi= require('./abi.json');
require ('dotenv').config();

async function writeContract() {
    const provider = new ethers.JsonRpcProvider('https://ethereum-sepolia-rpc.publicnode.com');
    const contractAddress = '0x9a26273805758299C6ee5205060aDa3BF085391D';
    const privateKEY= process.env.PRIVATE_KEY;
    console.log(privateKEY, "private key");
    const wallet= new ethers.Wallet(privateKEY, provider);
    const contract = new ethers.Contract(contractAddress, abi, wallet);
    const value= contract.store(1000);
    console.log(value, "value")
    console.log(contract);
}

writeContract()