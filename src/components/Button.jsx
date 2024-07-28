import React from "react";

const Button = ({disabled, handler, children}) => {
  return (
    <button 
      className={`btn btn-primary w-full rounded-full`}
      type="submit"
      onClick={handler}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
