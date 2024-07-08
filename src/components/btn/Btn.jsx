import React from "react";
import { Link } from "react-router-dom";
import useScreenSize from "../useScreenSize"; 

const Btn = ({ path, text, isMainColor, className }) => {
  const { isMobile, isTablet, isDesktop } = useScreenSize();

  return (
    <div className={`flex items-center gap-5 ${className}`}>
      <Link
        to={path}
        className={`${
          isMainColor
            ? `bg-red text-light rounded-md transform hover:scale-105 hover:bg-red transition delay-50 duration-300 ease-in-out 
              ${
                isMobile
                  ? "px-4 py-2 text-sm"
                  : isTablet
                  ? "px-6 py-3 text-base"
                  : "px-9 py-3"
              }`
            : `bg-black text-light rounded-md hover:bg-red hover:transition hover:border-4 hover:border-pink-300 hover:shadow-md 
              ${
                isMobile
                  ? "px-4 py-2 text-sm"
                  : isTablet
                  ? "px-6 py-3 text-base"
                  : "px-9 py-3"
              }`
        }`}
      >
        {text}
      </Link>
    </div>
  );
};

export default Btn;
