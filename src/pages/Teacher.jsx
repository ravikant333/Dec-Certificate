import { useContext, useEffect, useState } from "react";
import './Teacher.css'
import { BlockchainContext } from "../context/BlockchainConnecter";
import { getUserAccount } from "../utils/createEthAccount";
import { Link } from "react-router-dom";

const Teacher = () => {
    const { contractInstance } = useContext(BlockchainContext);
    const [TeacherAccount, setTeacherAccount] = useState(null)
    const [certificates,setCertficates]=useState([])

    const getTeacherAccount = async () => {
        const userAccount = await getUserAccount();
        setTeacherAccount(userAccount);
    };

    const getAllCertificateOfTeacher = async () => {
       const data=await contractInstance.methods.getAllTeacherCertificates(TeacherAccount).call()
       const certificates=data?.map((str)=>{
        return str?.substring(7);
       })
       setCertficates(certificates)
    }

    useEffect(() => {
        getTeacherAccount()
        if(TeacherAccount)
        getAllCertificateOfTeacher()
    }, [TeacherAccount])


    return (
        <div className="TeacherPageContainer">
            <h3>Welcome {TeacherAccount}</h3>
            <Link to="issueCertificate">Issue Certificate</Link>
            <div className="TeacherCertificates">
                <h4>Issued Certificates</h4>
                {
                    certificates?.map((cid, index) => {
                        return <div key={index+1} className="link" >
                            <span>{index+1} : </span>
                            <a href={`https://ipfs.io/ipfs/${cid}`} target="_blank">Ipfs link</a>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Teacher