import IssueCertificate from "./components/IssueCertificate/IssueCertificate";
import LoginWithMetamask from "./components/MetamaskLogin";
import BlockchainConnector from "./context/BlockchainConnecter";
import RegisterStudent from "./components/RegisterStudent/RegisterStudent";
import RegisterTeacher from "./components/RegisterTeacher/RegisterTeacher";
import VerifyCertificate from "./components/VerifyCertificate/VerifyCertificate";

function App() {
  return (
    <BlockchainConnector>
       <LoginWithMetamask/>
    <div>
    {/* <RegisterTeacher/> */}
    {/* <RegisterStudent/> */}
   
    {/* <IssueCertificate/> */}
    <VerifyCertificate/>
    </div>
    </BlockchainConnector>
  );
}

export default App;

//walletIntegration
//loadBlockchain as context
//add student call
//add teacher call/
//issue certificate call
//verify call and make a page to show the details about it.
