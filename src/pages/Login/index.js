import React from "react";
import { useNavigate } from "react-router-dom";
import * as Forms from "../../components/Forms";
import * as Layouts from "../../layouts";

const Login = () => {
  const navigate = useNavigate();

  return (
    <Layouts.AuthLayout
      title={"login"}
      btnTitle={"Register"}
      btnHandler={() => navigate("/sign-up")}
    >
      <Forms.LoginForm />
    </Layouts.AuthLayout>
  );
};

export default Login;
