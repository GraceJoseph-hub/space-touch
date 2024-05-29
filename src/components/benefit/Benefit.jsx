import React from "react";
import useScreenSize from "../useScreenSize"; 

const Benefit = () => {
  const { isMobile, isTablet } = useScreenSize(); 

  
  const getTextSize = () => {
    if (isMobile) return "text-lg";
    if (isTablet) return "text-xl";
    return "text-2xl";
  };


  const getTextPosition = () => {
    if (isMobile)
      return "top-1/2 left-40 transform -translate-x-1/2 -translate-y-1/2";
    return "top-24 right-32";
  };

  return (
    <div className='h-72 w-full bg-[url("../../../public/images/banner2.jpg")] bg-cover bg-center'>
      <div className="h-full w-full bg-darkShade relative">
        <p
          className={`text-4xl text-light font-semibold absolute ${getTextPosition()} ${getTextSize()}`}
        >
          Traveling makes a man {isMobile && <br />} wiser, but less happy.
        </p>
      </div>
    </div>
  );
};

export default Benefit;
