import { useState, useEffect } from "react";
import { getUserAccount } from "../utils/createEthAccount";

export const detectCurrentProvider = () => {
  let provider;
  if (window.ethereum) {
    provider = window.ethereum;
  } else {
    window.location.href = "https://metamask.io/";
  }
  return provider;
};

function LoginWithMetamask() {
  const [account, setAccount] = useState("");

  useEffect(() => {
    if (window?.ethereum) changeAccount();
  }, []);

  const changeAccount = async () => {
    const userAccount = await getUserAccount();
    setAccount(userAccount);
  };

  window.ethereum?.on("accountsChanged", function () {
    changeAccount();
  });

  const connectWithMetamask = async () => {
    try {
      const currentProvider = detectCurrentProvider();
      await currentProvider.request({ method: "eth_requestAccounts" });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <button onClick={!account ? connectWithMetamask : () => {}}>
        {account ? account : "Connect"}
      </button>
    </div>
  );
}

export default LoginWithMetamask;
