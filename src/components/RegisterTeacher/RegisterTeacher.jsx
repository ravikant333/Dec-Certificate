import { useState } from "react";
import "./RegisterTeacher.css";
import { REGISTER_TEACHER_TITLE } from "../../constants/variables";
import { initialTeacherState } from "../../constants/states";
import { createEthereumAccount } from "../../utils/createEthAccount";
import AccountDetail from "./AccountDetail";
import RegisterTeacherInput from "./RegisterTeacherInput";

const RegisterTeacher = () => {
  const [teacher, setTeacher] = useState(initialTeacherState);
  const [account, setAccount] = useState(null);

  const registerTeacher = async () => {
    const account = createEthereumAccount();
    //store teacher's data on backend with account address as primary key.
    //show public key and private key of the user being generated.
    console.log(teacher)
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
