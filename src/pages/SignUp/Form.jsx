import React from "react";
import { Formik, Form } from "formik";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as validation from "../../utils/validation";
import * as Component from "../../components";

const SignUpForm = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  const navigate = useNavigate();

  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      setSubmitting(false);
      navigate("/login");
      toast.success("Account created successfully! Please login to continue.");
    }, 2000);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validation.ValidateRegistrationForm}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="flex flex-col">
          <Component.InputField
            name="firstName"
            label="First Name"
            placeholder="First Name"
          />

          <Component.InputField
            name="lastName"
            label="Last Name"
            placeholder="Last Name"
          />

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
              Register
            </Component.Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SignUpForm;
