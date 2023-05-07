import { useState, useEffect } from "react";
import "./IssueCertificate.css";
import { initialCertificateState } from "../../constants/states";
import { NFTStorage } from "nft.storage";
import IpfsStorage from "./IpfsStorage";
import Input from "../Input/Input";
import FormButton from "../SubmitButton/FormButton";
import { getUserAccount } from "../../utils/createEthAccount";
import { BlockchainContext } from "../../context/BlockchainConnecter";
import { useContext } from "react";

const NFT_STORAGE_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDk0N2YyNzRhNTU5OWI4MGM0QjNGMTFlMjI0NTZjNzVkMkE4ZjY3NjUiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY4MjgzNTg5MzY0MSwibmFtZSI6ImRlYy1jZXJ0aWZpY2F0ZSJ9.dD8rlQnIGpv1bcGBPx6bVheit_hFFuLni8__kIwgI_k";
const client = new NFTStorage({ token: NFT_STORAGE_TOKEN });

const IssueCertificate = () => {
  const [certificate, setCertificate] = useState(initialCertificateState);
  const [userAccount, setUserAccount] = useState(null)
  const { contractInstance } = useContext(BlockchainContext);


  const getAccount = async () => {
    const userAccount = await getUserAccount();
    setUserAccount(userAccount);
  }

  useEffect(() => {
    getAccount()
  })

  const issueCertificate = async () => {
    console.log('uj', userAccount)
    certificate.issuedBy = userAccount
    certificate.name = "Certificate";

    const metadata = await client.store(certificate);
    console.log("metaData", metadata);
    await contractInstance.methods
      .issueCertificate(
        certificate.issuedTo,
        metadata.url,
        certificate.certificateNo
      )
      .send({ from: userAccount });

    alert("Certificate Issued")
  };

  const handleInputChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setCertificate({
      ...certificate,
      [name]: value,
    });
  };

  return (
    <section className="issueCertificateContainer">
      <h1>Issue Certificate</h1>
      <div className="inputContainer">
        <IpfsStorage certificate={certificate} setCertficate={setCertificate} />
        <Input
          placeholder="Certificate Number"
          name="certificateNo"
          onChange={handleInputChange}
          value={certificate.certificateNo}
        />
        <Input
          placeholder="Issued To"
          name="issuedTo"
          onChange={handleInputChange}
          value={certificate.issuedTo}
        />
        <Input
          placeholder="Issue Date"
          name="issueDate"
          onChange={handleInputChange}
          value={certificate.issueDate}
        />
        <Input
          placeholder="Validity"
          name="validity"
          onChange={handleInputChange}
          value={certificate.validity}
        />
        <Input
          placeholder="Discription"
          name="description"
          onChange={handleInputChange}
          value={certificate.description}
        />
        <FormButton onClick={issueCertificate}>Submit</FormButton>
      </div>
    </section>
  );
};

export default IssueCertificate;
