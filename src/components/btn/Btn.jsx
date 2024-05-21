import React from 'react'
import { Link } from 'react-router-dom'


const Btn = ({path, text, isMainColor, className}) => {
  return (
    <div className="flex items-center gap-5">
      <Link
        to={path}
        className={`${
          isMainColor
            ? "bg-red text-light py-3 px-9 rounded-md hover:transition hover:border-4 hover:border-pink-300 hover:shadow-md"
            : "bg-black text-light py-3 px-9 rounded-md hover:bg-red hover:transition hover:border-4 hover:border-pink-300 hover:shadow-md"
        } ${className}`}
      >
        {text}
      </Link>
    </div>
  );
}

export default Btn