import Web3 from "web3"

const web3=new Web3(window.ethereum)

export const createEthereumAccount=()=>{
 
 const account= web3.eth.accounts.create();
 return account;
}

export const getUserAccount=async()=>{
const accounts = await web3.eth.getAccounts()
return accounts[0];
}