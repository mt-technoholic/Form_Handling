import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import { toast } from "react-toastify";
import * as validation from "../../utils/validation";
import * as Component from "../../components";

const LoginForm = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const navigate = useNavigate();

  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      localStorage.setItem('role', "landlord");
      localStorage.setItem('token', "12345");
      setSubmitting(false);
      toast.success("Login Successfully");
      navigate('/')
    }, 2000);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validation.ValidateLoginForm}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="flex flex-col">

          <Component.InputField
            name="email"
            label="Email Address"
            type="email"
            placeholder="Email Address"
          />

          <Component.InputField
            name="password"
            label="Password"
            type="password"
            placeholder="Password"
          />

          <div className="mt-3">
            <Component.Button disabled={isSubmitting}>
              Login
            </Component.Button>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default LoginForm