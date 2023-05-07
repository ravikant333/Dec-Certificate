import { BrowserRouter, Route, Routes } from "react-router-dom";
import IssueCertificate from "./components/IssueCertificate/IssueCertificate";
import BlockchainConnector from "./context/BlockchainConnecter";
import RegisterStudent from "./components/RegisterStudent/RegisterStudent";
import RegisterTeacher from "./components/RegisterTeacher/RegisterTeacher";
import VerifyCertificate from "./components/VerifyCertificate/VerifyCertificate";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <BlockchainConnector>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="registerStudent" element={<RegisterStudent />} />
          <Route path="registerTeacher" element={<RegisterTeacher />} />
          <Route path="issueCertificate" element={<IssueCertificate />} />
          <Route path="verifyCertificate" element={<VerifyCertificate />} />
        </Routes>
      </BlockchainConnector>
    </BrowserRouter>
  );
}

export default App;
