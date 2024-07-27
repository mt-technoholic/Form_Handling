import React from "react";
import Form from "./Form";
import * as Component from "../../components";

const SignUp = () => {
  return (
    <div className="flex flex-col justify-start gap-14 items-center min-h-screen ">
      <Component.Navbar />
      <div className="px-3 w-full sm:w-[500px]">
        <h1 className="text-2xl text-center font-bold mb-4">Sign Up</h1>
        <Form />
      </div>
    </div>
  );
};

export default SignUp;
