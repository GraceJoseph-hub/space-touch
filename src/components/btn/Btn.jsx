import React from 'react'
import { Link } from 'react-router-dom'


const Btn = ({path, text, isMainColor, className}) => {
  return (
    <div className="hidden custom1:flex items-center gap-5 ">
      <Link
        to={path}
        className={`${
          isMainColor
            ? "bg-red text-light custom1:px-2 custom1:py-1 custom1:text-sm custom2:py-3 custom2:px-9 rounded-md hover:transition hover:border-4 hover:border-pink-300 hover:shadow-md"
            : "bg-black text-light py-3 px-9 rounded-md hover:bg-red hover:transition hover:border-4 hover:border-pink-300 hover:shadow-md"
        } ${className}`}
      >
        {text}
      </Link>
    </div>
  );
}

export default Btn