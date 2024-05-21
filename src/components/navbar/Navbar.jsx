import React from 'react'
import Navlinks from '../navlinks/Navlinks'
import Brandlink from '../brand/Brand'
import Moon from "../icons/Moon";
import Btn from '../btn/Btn';


const Navbar = () => {
  return (
    <div className="flex items-center justify-between h-20 w-full px-20 bg-light fixed top-0 left-0 z-50">
      <div className="flex gap-2">
        <Brandlink />
        <Navlinks />
      </div>
      <div className='flex items-center gap-4'>
        <Btn text="Get in Touch" isMainColor />
        <Moon />
      </div>
    </div>
  );
}

export default Navbar