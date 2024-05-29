import React from "react";
import Btn from "../btn/Btn";
import banner3 from "../../../public/images/banner3.jpg";
import useScreenSize from "../useScreenSize"; 

const AboutCompany = () => {
  const { isMobile, isTablet, isDesktop } = useScreenSize(); 

  return (
    <section
      className={`flex flex-col items-center gap-8 ${
        isMobile || isTablet
          ? "text-left px-8 py-12"
          : "text-center px-24 py-24"
      } bg-light dark:bg-black dark:text-light`}
    >
      <div>
        <h5 className="text-red text-sm font-semibold">ABOUT US</h5>
        <h2 className="text-4xl font-semibold">
          Travel To Make {isDesktop && <br />} Memories All Around The World.
        </h2>
      </div>
      <p className={`text-center ${isMobile ? "text-sm" : ""}`}>
        Spacetouch Travels strives to provide her customers with the very best
        service in the travel and tours industry. Spacetouch Travels gives you
        the best curated tour, vacation, or even schooling {isMobile && <br />}
        experience in countries of your choice.
      </p>
      <Btn path="/destination" text="Destination" />
      <img
        src={banner3}
        alt="banner 3"
        className={`w-full ${
          isMobile ? "rounded-md" : "w-[50.4rem] rounded-md"
        }`}
      />
    </section>
  );
};

export default AboutCompany;

