import React from "react";
import Btn from "../btn/Btn";
import useScreenSize from "../useScreenSize"; // Import the useScreenSize hook

const WhyChooseUs = () => {
  const { isMobile, isTablet, isDesktop } = useScreenSize(); // Get the screen size info

  return (
    <div
      className={`flex ${
        isMobile || isTablet ? "flex-col w-full" : "flex-row w-full"
      } justify-between items-start ${
        isMobile || isTablet ? "p-8" : "p-20"
      } dark:bg-[#111]`}
    >
      <div className="font-semibold w-full">
        <h3 className="text-red text-sm">WHY CHOOSE US</h3>
        <h2
          className={`dark:text-light ${
            isMobile || isTablet ? "text-2xl" : "text-4xl"
          }`}
        >
          Travel Is The Only Thing You <br /> Buy, Makes You Richer.
        </h2>
      </div>
      <div
        className={`flex flex-col gap-8 ${
          isMobile || isTablet ? "w-full mt-8" : "w-1/2"
        }`}
      >
        <p
          className={`text-grey ${
            isMobile || isTablet ? "text-sm" : "text-base"
          }`}
        >
          Our Services includes but not limited to flight ticket (local and
          <br />
          international), Hotel Resevations, Educational tours/excursion, Visa
          <br />
          consultancy, Corporate Travels/Tours, Honeymoon/Vacation, Study <br />
          abroad assistance etc.
        </p>
        <p
          className={`text-grey ${
            isMobile || isTablet ? "text-sm" : "text-base"
          }`}
        >
          We are connected to over 1500 Universities worldwide with our <br />
          Education Consult department.
        </p>
        <Btn path="/destination" text="Destinations" />
      </div>
    </div>
  );
};

export default WhyChooseUs;
