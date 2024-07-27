import React from "react";
import { useNavigate } from "react-router-dom";
import Form from "./Form";
import * as Layouts from '../../layouts';

const SignUp = () => {

  const navigate = useNavigate();

  return (
    <Layouts.AuthLayout 
      title={"Sign Up"}
      btnTitle={"Login"}
      btnHandler={() => navigate('/login')}
    >
      <Form />
    </Layouts.AuthLayout>
  );
};

export default SignUp;
