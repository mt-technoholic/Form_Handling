import React from "react";
import { useNavigate } from "react-router-dom";
import * as Forms from "../../components/Forms";
import * as Layouts from '../../layouts';

const SignUp = () => {

  const navigate = useNavigate();

  return (
    <Layouts.AuthLayout 
      title={"Sign Up"}
      btnTitle={"Login"}
      btnHandler={() => navigate('/login')}
    >
      <Forms.SignUpForm />
    </Layouts.AuthLayout>
  );
};

export default SignUp;
