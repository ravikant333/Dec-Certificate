import { useState } from "react";
import './RegisterStudent.css'
import RegisterStudentInput from "./RegisterStudentInput";
import AccountDetail from "../RegisterTeacher/AccountDetail";
import { initialStudentState } from "../../constants/states";
import { REGISTER_STUDENT_TITLE } from "../../constants/variables";
import { createEthereumAccount, getUserAccount } from "../../utils/createEthAccount";
import { BlockchainContext } from "../../context/BlockchainConnecter";

const RegisterStudent = () => {
  const [student, setStudent] = useState(initialStudentState);
  const [account, setAccount] = useState(null);
  const contractInstance=BlockchainContext;
  

  const registerStudent = async () => {
    const userAccount=await getUserAccount();
    console.log(userAccount)
    console.log(contractInstance)

    // const account = createEthereumAccount();
    //store student's data on backend with account address as primary key.
    //show public key and private key of the student being generated.
    console.log(student);
    setAccount(account);
    setStudent(initialStudentState);
  };

  return (
    <section className="registerStudentContainer">
      <h1>{REGISTER_STUDENT_TITLE}</h1>
      {!account ? (
        <RegisterStudentInput
          setStudent={setStudent}
          student={student}
          registerStudent={registerStudent}
        />
      ) : (
        <AccountDetail account={account} />
      )}
    </section>
  );
};

export default RegisterStudent;
