import { useState } from "react";
import axios from "axios";
import "./VerifyCertificate.css";
import Input from "../Input/Input";
import FormButton from "../SubmitButton/FormButton";
import { useContext } from "react";
import { BlockchainContext } from "../../context/BlockchainConnecter";
import Certificate from "./Certificate";

const VerifyCertificate = () => {
  const [certificateNo, setCertficateNo] = useState("");
  const [certificate, setCertficate] = useState(null);
  const { contractInstance } = useContext(BlockchainContext);

  const handleInputChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setCertficateNo(value);
  };

  const verifyCertificate = async () => {
    try {
      const ipfsHash = await contractInstance.methods
        .verifyCertificate(certificateNo)
        .call();
      const cid = ipfsHash.substring(7);
      const res = await axios.get(`https://ipfs.io/ipfs/${cid}`);
      setCertficate(res.data)
    } catch (err) {
      alert("Not Valid Certificate!");
    }
  };
  console.log(certificate)

  return (
   <>
   { !certificate?
    <section className="verifyCertificateContainer">
      <h1>Verify Certificate</h1>
      <div className="inputContainer">
        <Input
          placeholder="Enter Certificate Number"
          value={certificateNo}
          onChange={handleInputChange}
          name="certificateNo"
        />
        <FormButton onClick={verifyCertificate}>Verify</FormButton>
      </div>
    </section> :
    <Certificate data={certificate}/>
}
    </>
  );
};

export default VerifyCertificate;
