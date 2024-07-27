import React from "react";
import { Formik, Form } from "formik";
import * as validation from "../../utils/validation";
import * as Component from "../../components";

const SignUpForm = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      console.log(JSON.stringify(values, null, 2));
      setSubmitting(false);
      alert("Registration successful!");
    }, 10000);
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

          <Component.Button disabled={isSubmitting}>Register</Component.Button>
        </Form>
      )}
    </Formik>
  );
};

export default SignUpForm;
