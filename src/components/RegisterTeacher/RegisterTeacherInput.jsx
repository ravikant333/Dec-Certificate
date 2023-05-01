import Input from "../Input/Input";
import FormButton from "../SubmitButton/FormButton";

const RegisterTeacherInput = ({ teacher, setTeacher, registerTeacher }) => {
    
  const handleInputChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setTeacher({
      ...teacher,
      [name]: value,
    });
  };

  return (
    <div className="inputContainer">
      <Input
        placeholder="Enter Employee ID"
        name="employeeId"
        value={teacher.employeeId}
        onChange={handleInputChange}
      />
      <Input
        placeholder="Enter Teacher Name"
        name="name"
        value={teacher.name}
        onChange={handleInputChange}
      />
      <Input
        placeholder="Enter Department"
        name="department"
        value={teacher.department}
        onChange={handleInputChange}
      />
      <Input
        placeholder="Enter Role"
        name="role"
        value={teacher.role}
        onChange={handleInputChange}
      />
      <FormButton onClick={registerTeacher}>Submit</FormButton>
    </div>
  );
};

export default RegisterTeacherInput;
