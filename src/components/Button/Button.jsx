const Button = ({ onClick, className, value, type }) => {
  return (
    <button onClick={onClick} className={className} type={type}>
      {value}
    </button>
  );
};

export default Button;
