import React from 'react';
import Form from './Form';

const SignUp = () => {
  return (
    <div className='flex flex-col justify-center items-center min-h-screen'>
        <div className='w-96'>
          <h1 className='text-2xl text-center font-bold mb-4'>Sign Up</h1>
          <Form />
        </div>
    </div>
  )
}

export default SignUp
