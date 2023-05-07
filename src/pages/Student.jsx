import { useContext, useEffect, useState } from "react";
import './Student.css'
import { BlockchainContext } from "../context/BlockchainConnecter";
import { getUserAccount } from "../utils/createEthAccount";

const Student = () => {
    const { contractInstance } = useContext(BlockchainContext);
    const [studentAccount, setStudentAccount] = useState(null)
    const [certificates, setCertficates] = useState([])

    const getStudentAccount = async () => {
        const userAccount = await getUserAccount();
        setStudentAccount(userAccount);
    };

    const getAllCertificateOfStudent = async () => {
        const data = await contractInstance.methods.getAllStudentCertificates(studentAccount).call()
        const certificates = data?.map((str) => {
            return str?.substring(7);
        })
        setCertficates(certificates)
    }

    useEffect(() => {
        getStudentAccount()
        if (studentAccount)
            getAllCertificateOfStudent()
    }, [studentAccount])

    return (
        <div className="studentPageContainer">
            <h3>Welcome {studentAccount}</h3>
            <div className="studentCertificates">
                {
                    certificates?.map((cid, index) => {
                        return <div key={index+1} >
                            <span>{index+1} : </span>
                            <a href={`https://ipfs.io/ipfs/${cid}`} target="_blank">Ipfs link</a>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Student