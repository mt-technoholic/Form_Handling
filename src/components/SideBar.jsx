import React from 'react';
import useStore from '../(store)/store';
import { useNavigate } from 'react-router-dom';
import * as Components from './index';

const SideBar = () => {
  const { setRole } = useStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('role');
    localStorage.removeItem('token');
    setRole("");
    navigate('/login');
  }

  return (
    <div className=" hidden md:flex flex-col p-5 bg-blue-500 justify-center gap-5">
        <Components.MenuItems />
        <button className='btn w-full btn-error' onClick={handleLogout}>
          Logout
        </button>
    </div>
  )
}

export default SideBar