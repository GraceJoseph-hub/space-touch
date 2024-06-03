import React from "react";
import useScreenSize from "../useScreenSize";
import backgroundImage from '../../../public/images/banner2.jpg'

const Benefit = () => {
  const { isMobile, isTablet, isDesktop } = useScreenSize();

  const getTextSize = () => {
    if (isMobile) return "text-lg";
    if (isTablet) return "text-xl";
    return "text-4xl"; 
  };

  const getTextPosition = () => {
    if (isMobile || isDesktop)
      return "top-[40%] left-[40%]";
    if (isTablet) return "top-24 left-10"; 
    return "top-24 left-20"; 
  };

  return (
    <div
      className="h-72 w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="h-full w-full bg-darkShade relative">
        <p
          className={`text-light font-semibold absolute ${getTextPosition()} ${getTextSize()}`}
        >
          Traveling makes a man wiser, {isDesktop && <br />} but less happy.
        </p>
      </div>
    </div>
  );
};

export default Benefit;

