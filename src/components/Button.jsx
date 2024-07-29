import React from "react";

const Button = ({disabled, handler, type="submit", children}) => {
  return (
    <button 
      className={`btn btn-primary w-full rounded-full`}
      type={type}
      onClick={handler}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
