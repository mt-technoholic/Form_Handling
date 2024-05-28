import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { Login, SignUp, Home, NotFound } from '../pages'

const index = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </div>
  )
}

export default index