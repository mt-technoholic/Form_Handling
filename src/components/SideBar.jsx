import React from 'react'
import * as Components from './index'

const SideBar = () => {
  return (
    <div className=" hidden md:flex p-5 bg-blue-500 justify-center">
        <Components.MenuItems />
    </div>
  )
}

export default SideBar