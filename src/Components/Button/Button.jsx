const Button = ({ lable = '', onClick }) => {
  return (
    <button className="btn btn-primary button" onClick={onClick}>
      {lable}
    </button>
  );
};

export default Button;
