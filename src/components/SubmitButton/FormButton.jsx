import './FormButton.css'
const FormButton = ({ onClick, children }) => {
  return (
    <button className="formButton" onClick={onClick}>
      {children}
    </button>
  );
};

export default FormButton;
