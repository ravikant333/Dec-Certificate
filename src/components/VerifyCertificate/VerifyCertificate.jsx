import { useState } from "react";
import './VerifyCertificate.css'
import Input from "../Input/Input";
import FormButton from "../SubmitButton/FormButton";

const VerifyCertificate = () => {
  const [certificateNo, setCertficateNo] = useState("");
  const handleInputChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setCertficateNo(value);
  };
  const verifyCertificate=()=>{
      console.log(certificateNo)
  }

  return (
    <section className="verifyCertificateContainer">
        <h1>Verify Certificate</h1>
    <div className="inputContainer">
      <Input
        placeholder="Enter Certificate Number"
        value={certificateNo}
        onChange={handleInputChange}
        name='certificateNo'
      />
      <FormButton onClick={verifyCertificate}>Verify</FormButton>
      </div>
    </section>
  );
};

export default VerifyCertificate;
