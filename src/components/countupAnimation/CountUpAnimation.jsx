import React from "react";
import CountUp from "react-countup";
import useScreenSize from "../useScreenSize";

const CountUpAnimation = () => {
  const { isMobile, isTablet, isDesktop } = useScreenSize();

  return (
    <div
      className={`grid ${
        isMobile ? "grid-cols-1" : "grid-cols-2"
      } gap-5 md:gap-10 items-center justify-center ${
        isMobile ? "text-2xl" : isTablet ? "text-3xl" : "text-5xl"
      } text-red font-semibold w-full ${
        isMobile ? "h-auto" : "h-64"
      } bg-light dark:bg-black px-5 md:px-20 py-10`}
    >
      <div className="flex flex-col items-center">
        <CountUp start={0} end={10} duration={2} />
        <p className="text-lg mt-3 text-gray-500 dark:text-white font-thin">
          Branches
        </p>
      </div>
      <div className="flex flex-col items-center">
        <CountUp start={0} end={350} duration={2} />
        <p className="text-lg mt-3 text-gray-500 dark:text-white font-thin">
          Travel Guides
        </p>
      </div>
      <div className="flex flex-col items-center">
        <CountUp start={0} end={3812} duration={2} />
        <p className="text-lg mt-3 text-gray-500 dark:text-white font-thin">
          Happy Customers
        </p>
      </div>
      <div className="flex flex-col items-center">
        <CountUp start={0} end={93} duration={2} />
        <p className="text-lg mt-3 text-gray-500 dark:text-white font-thin">
          Staff
        </p>
      </div>
    </div>
  );
};

export default CountUpAnimation;
