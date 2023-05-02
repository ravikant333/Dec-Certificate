import { useState } from "react";
import "./RegisterTeacher.css";
import { REGISTER_TEACHER_TITLE } from "../../constants/variables";
import { initialTeacherState } from "../../constants/states";
import { createEthereumAccount } from "../../utils/createEthAccount";
import { getUserAccount } from "../../utils/createEthAccount";
import { useContext } from "react";
import { BlockchainContext } from "../../context/BlockchainConnecter";
import AccountDetail from "./AccountDetail";
import RegisterTeacherInput from "./RegisterTeacherInput";

const RegisterTeacher = () => {
  const [teacher, setTeacher] = useState(initialTeacherState);
  const [account, setAccount] = useState(null);
  const { contractInstance } = useContext(BlockchainContext);

  const registerTeacher = async () => {
    const userAccount = await getUserAccount();
    const account = createEthereumAccount();
    await contractInstance.methods
      .addTeacher(account.address)
      .send({ from: userAccount });
    //store teacher's data on backend with account address as primary key.
    setAccount(account);
    setTeacher(initialTeacherState);
  };

  
  return (
    <section className="registerTeacherContainer">
      <h1>{REGISTER_TEACHER_TITLE}</h1>
      {!account ? (
        <RegisterTeacherInput
          setTeacher={setTeacher}
          teacher={teacher}
          registerTeacher={registerTeacher}
        />
      ) : (
        <AccountDetail account={account} />
      )}
    </section>
  );
};

export default RegisterTeacher;
