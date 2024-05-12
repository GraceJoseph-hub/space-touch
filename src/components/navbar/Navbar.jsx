import React from 'react'
import Navlinks from '../navlinks/Navlinks'
import Brandlink from '../brandlink/Brandlink'
import Btn from '../btn/Btn';

const Navbar = () => {
  return (
    <div className="flex items-center h-20 bg-light container mx-auto fixed top-0 left-0 right-0 z-50">
      <Brandlink />
      <Navlinks />
      <Btn text='Get in Touch' isMainColor/>
    </div>
  );
}

export default Navbar