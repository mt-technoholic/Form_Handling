import React from 'react'
import { Formik, Form } from 'formik';
import { ValidateRegistrationForm } from '../../utils/validation';
import { InputField, Button } from '../../components'

const SignUpForm = () => {
  
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  };
  
  const handleSubmit = (values, { setSubmitting }) => {
    // Simulate an API call
    setTimeout(() => {
      console.log(JSON.stringify(values, null, 2));
      setSubmitting(false);
      alert('Registration successful!');
    }, 10000);
  };


  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ValidateRegistrationForm}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className='flex flex-col gap-5'>

          <InputField 
            name="firstName"
            Label="First Name" 
            placeholder="First Name" 
          />

          <InputField
            name="lastName"
            Label="Last Name"
            placeholder="Last Name"
          />

          <InputField
            name="email"
            Label="Email Address"
            type='email'
            placeholder="Email Address"
          />

          <InputField
            name="password"
            Label="Password"
            type='password'
            placeholder="Password"
          />

          <Button disabled={isSubmitting}>Register</Button>
        </Form>
      )}
    </Formik>
  )
}

export default SignUpForm