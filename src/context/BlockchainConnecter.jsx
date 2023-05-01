import { createContext, useState } from "react";
import Web3 from "web3";
import { abi } from "../utils/abi";
import { ContractAddress } from "../constants/variables";
export const BlockchainContext = createContext();
const { Provider } = BlockchainContext;

const BlockchainConnector = ({ children }) => {

   let contractInstance=null
    if (typeof window.ethereum !== "undefined") {
      const web3 = new Web3(window.ethereum);
       contractInstance = new web3.eth.Contract(abi, ContractAddress);
    } else {
      alert("Please Install Metamask");
    }
  return <Provider value={contractInstance}>{children}</Provider>;
};

export default BlockchainConnector;
