import React from "react";

const Button = ({disabled, children}) => {
  return (
    <button 
      className={`btn btn-primary w-full rounded-full`}
      type="submit" 
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
