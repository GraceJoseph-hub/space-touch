import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const DestinationBanner = () => {
  return (
    <div className='h-[15.3rem] w-full bg-[url("../../../public/images/banner2.jpg")] bg-cover bg-center'>
      <div className="h-full w-full bg-darkShade relative">
        <div className="text-4xl text-light font-semibold absolute top-[30%] left-16">
          <p>Destinations</p>
          <div className="flex items-center gap-4 mt-3">
            <Link to="/" className="block text-lg text-red font-normal">
              Home
            </Link>
            <FaArrowRight className="text-[0.7rem]" />
            <Link to="/about" className="block text-lg text-light font-normal">
              Destinations
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationBanner;
