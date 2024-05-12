import React from 'react'
import { Link } from 'react-router-dom'

const Btn = ({path, text, isMainColor, className}) => {
  return (
    <div>
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
    </div>
  );
}

export default Btn