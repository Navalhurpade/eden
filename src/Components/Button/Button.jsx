const Button = ({ lable = '', onClick }) => {
  return (
    <button class="btn btn-primary button" onClick={onClick}>
      {lable}
    </button>
  );
};

export default Button;
