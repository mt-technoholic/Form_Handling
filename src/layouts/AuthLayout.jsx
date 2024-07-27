import React from "react";

const AuthLayout = ({ title, btnTitle, btnHandler, children }) => {
  return (
    <div className="flex flex-col mt-5 gap-14 items-center min-h-screen">
      <div className="flex justify-end w-full px-24">
        <button className="btn" onClick={btnHandler}>
          {btnTitle}
        </button>
      </div>
      <div className="px-3 w-full sm:w-[500px]">
        <h1 className="text-2xl text-center font-bold mb-4">{title}</h1>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
