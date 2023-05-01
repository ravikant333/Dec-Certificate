import "./Input.css";
const Input = ({ placeholder, onChange, name,value }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      name={name}
      onChange={onChange}
      className="input"
      value={value}
      required
    />
  );
};

export default Input;
