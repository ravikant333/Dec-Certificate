import FormButton from "../SubmitButton/FormButton";
import './RegisterStudent.css'
import Input from "../Input/Input";

const RegisterStudentInput = ({ student, setStudent, registerStudent }) => {
  const handleInputChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setStudent({
      ...student,
      [name]: value,
    });
  };

  return (
    <div className="inputContainer">
      <Input
        placeholder="Enter Roll Number"
        name="rollNumber"
        value={student.rollNumber}
        onChange={handleInputChange}
      />
      <Input
        placeholder="Enter student Name"
        name="name"
        value={student.name}
        onChange={handleInputChange}
      />
      <Input
        placeholder="Enter Course"
        name="course"
        value={student.course}
        onChange={handleInputChange}
      />
      <Input
        placeholder="Enter Branch"
        name="branch"
        value={student.branch}
        onChange={handleInputChange}
      />
      <Input
        placeholder="Enter Batch"
        name="batch"
        value={student.batch}
        onChange={handleInputChange}
      />
      <FormButton onClick={registerStudent}>Submit</FormButton>
    </div>
  );
};

export default RegisterStudentInput;
