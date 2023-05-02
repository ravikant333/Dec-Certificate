import { useState } from "react";
import "./RegisterStudent.css";
import RegisterStudentInput from "./RegisterStudentInput";
import AccountDetail from "../RegisterTeacher/AccountDetail";
import { initialStudentState } from "../../constants/states";
import { REGISTER_STUDENT_TITLE } from "../../constants/variables";
import {
  createEthereumAccount,
  getUserAccount,
} from "../../utils/createEthAccount";
import { BlockchainContext } from "../../context/BlockchainConnecter";
import { useContext } from "react";

const RegisterStudent = () => {
  const [student, setStudent] = useState(initialStudentState);
  const [account, setAccount] = useState(null);
  const { contractInstance } = useContext(BlockchainContext);

  const registerStudent = async () => {
    const userAccount = await getUserAccount();
    const account = createEthereumAccount();
    await contractInstance.methods
      .addStudent(account.address)
      .send({ from: userAccount });
    //store student's data on backend with account address as primary key.
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
