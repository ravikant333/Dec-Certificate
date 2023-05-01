import { useState } from "react";
import './IssueCertificate.css'
import { initialCertificateState } from "../../constants/states";
import { NFTStorage} from "nft.storage";
import IpfsStorage from "./IpfsStorage";
import Input from "../Input/Input";
import FormButton from "../SubmitButton/FormButton";

const NFT_STORAGE_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDk0N2YyNzRhNTU5OWI4MGM0QjNGMTFlMjI0NTZjNzVkMkE4ZjY3NjUiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY4MjgzNTg5MzY0MSwibmFtZSI6ImRlYy1jZXJ0aWZpY2F0ZSJ9.dD8rlQnIGpv1bcGBPx6bVheit_hFFuLni8__kIwgI_k";
const client = new NFTStorage({ token: NFT_STORAGE_TOKEN });

const IssueCertificate = () => {
  const [certificate, setCertificate] = useState(initialCertificateState);

  const issueCertificate = async() => {
    setCertificate({...certificate,issuedBy:'ravikant mishra'})
    certificate.name="Certificate"
    certificate.description="for the best"
    const metadata=await client.store(certificate)
    console.log("metaData",metadata)
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
        placeholder="Issued To"
        name="issuedTo"
        onChange={handleInputChange}
        value={certificate.issuedTo}
      />
      <Input
        placeholder="Category"
        name="category"
        onChange={handleInputChange}
        value={certificate.category}
      />
      <Input
        placeholder="Validity"
        name="validity"
        onChange={handleInputChange}
        value={certificate.validity}
      />
      <FormButton onClick={issueCertificate}>Submit</FormButton>
    </div>
    </section>
  );
};

export default IssueCertificate;
