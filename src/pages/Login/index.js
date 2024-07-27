import React from "react";
import { useNavigate } from "react-router-dom";
import Form from "./Form";
import * as Layouts from "../../layouts";

const Login = () => {
  const navigate = useNavigate();

  return (
    <Layouts.AuthLayout
      title={"login"}
      btnTitle={"Register"}
      btnHandler={() => navigate("/sign-up")}
    >
      <Form />
    </Layouts.AuthLayout>
  );
};

export default Login;
