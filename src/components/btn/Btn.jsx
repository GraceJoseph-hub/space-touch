import React from 'react'
import { Link } from 'react-router-dom'
import Moon from '../icons/Moon';

const Btn = ({path, text, isMainColor, className}) => {
  return (
    <div className='flex items-center gap-5'>
      <Link
        to={path}
        className={`${
          isMainColor
            ? "bg-red text-light py-3 px-9 rounded-md"
            : "bg-black text-light py-3 px-9 rounded-md"
        } ${className}`}
      >
        {text}
      </Link>
      <Moon />
    </div>
  );
}

export default Btn