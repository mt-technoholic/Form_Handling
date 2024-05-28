import React from "react";

const Button = ({disabled, children}) => {
  return (
    <button 
      className={`${disabled ? 'cursor-not-allowed bg-slate-300' : 'bg-blue-500 hover:bg-blue-700'}   text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
      type="submit" 
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
