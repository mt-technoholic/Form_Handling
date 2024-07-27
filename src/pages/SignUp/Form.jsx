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
            label="First Name" 
            placeholder="First Name" 
          />

          <InputField
            name="lastName"
            label="Last Name"
            placeholder="Last Name"
          />

          <InputField
            name="email"
            label="Email Address"
            type='email'
            placeholder="Email Address"
          />

          <InputField
            name="password"
            label="Password"
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