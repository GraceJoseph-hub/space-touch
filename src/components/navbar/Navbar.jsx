import React from 'react'
import Navlinks from '../navlinks/Navlinks'
import Brand from '../brand/Brand'
import Moon from "../icons/Moon";
import Btn from '../btn/Btn';
import { FaHamburger } from 'react-icons/fa';


const Navbar = () => {
  return (
    <div className=" bg-light w-full px-20 sticky top-0 left-0 right-0 z-50 overflow-hidden">
      <div className="flex items-center justify-between h-20 w-full mx-auto">
        <Brand />
        <Navlinks />
        <div className="flex items-center gap-4">
          <Btn text="Get in Touch" isMainColor />
          <FaHamburger className="custom1:hidden order-2 custom1:order-1" />
          <Moon className="order-1 custom1:order-2" />
        </div>
      </div>
    </div>
  );
}

export default Navbar