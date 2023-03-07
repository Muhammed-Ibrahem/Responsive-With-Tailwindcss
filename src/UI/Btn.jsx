const Btn = ({ children, bgColor, txtColor, extra }) => {
  return (
    <button className={`${bgColor} ${txtColor} rounded p-3 shadow-xl ${extra}`}>
      {children}
    </button>
  );
};

export default Btn;
