import React from 'react'
import { Link } from "react-router-dom";
import brandlogo from './brandlogo.jpg'

const Brand = () => {
  return (
    <div className='flex items-center gap-12'>
      <Link to='/' className='text-3xl font-semibold'>
        Spacetouch
      </Link>
      <img src={brandlogo} alt="brand logo" width='35' height='35'/>
    </div>
  )
}

export default Brand