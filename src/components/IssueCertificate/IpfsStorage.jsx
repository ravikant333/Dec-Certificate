import { Buffer } from 'buffer';
import './IssueCertificate.css'
import { File} from 'nft.storage'
window.Buffer = Buffer;

const IpfsStorage = ({ certificate, setCertficate }) => {
  const retrieveFile = (e) => {
    e.preventDefault();
    const data = e.target.files[0];
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(data);
    reader.onloadend = () => {
      setCertficate({...certificate,image: new File([reader.result],'nft.png',{ type: 'image/png' })});
    };
  };

  return (
    <div>
      <input type="file" name="data" onChange={retrieveFile} />
    </div>
  );
};

export default IpfsStorage;
