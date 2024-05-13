import React from 'react'
import Navlinks from '../navlinks/Navlinks'
import Brandlink from '../brand/Brand'
import Btn from '../btn/Btn';

const Navbar = () => {
  return (
    <div className="flex items-center justify-between h-20 w-full px-20 bg-light fixed top-0 left-0 z-50">
      <div className='flex gap-2'>
        <Brandlink />
        <Navlinks />
      </div>
      <Btn text="Get in Touch" isMainColor />
    </div>
  );
}

export default Navbar