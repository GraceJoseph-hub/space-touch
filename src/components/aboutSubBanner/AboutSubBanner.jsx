import React from "react";
import CountUp from "react-countup";
// import { Link } from "react-router-dom";
import { FaFaceGrinBeam, FaPeopleGroup } from "react-icons/fa6";
import { FaDatabase } from "react-icons/fa";

const AboutSubBanner = () => {
  const counter = [
    {
      icon: <FaFaceGrinBeam />,
      counts: <CountUp start={0} end={3812} duration={200} />,
      title: "Happy Customers",
    },
    {
      icon: <FaPeopleGroup />,
      counts: <CountUp start={0} end={100} duration={200} />,
      title: "Custom Products",
    },
    {
      icon: <FaDatabase />,
      counts: <CountUp start={0} end={10} duration={250} />,
      title: "Branches",
    },
  ];

  return (
    <div className='h-[20.3rem] w-full bg-[url("../../../public/images/banner3.jpg")] bg-cover bg-center'>
      <div className="flex justify-between items-center px-16 h-full w-full bg-darkShade relative">
        {counter.map((count, index) => (
          <div key={index} className="text-2xl text-light font-semibold">
            <p className="text-4xl">{count.icon}</p>
            <p className="text-3xl">{count.counts}</p>
            <p>{count.title}</p>
          </div>
        ))}
        {/* <div className="">
          <FaFaceGrinBeam />
          <CountUp start={0} end={10} duration={200} />
          <p className="text-lg mt-3 text-grey font-thin"></p>
        </div> */}
        {/* <div className="text-4xl text-light font-semibold absolute top-[30%] left-16">
          <p>About Us</p>
          <div className="flex items-center gap-4 mt-3">
            <Link to="/" className="block text-lg text-red font-normal">
              Home
            </Link>
            <FaArrowRight className="text-[0.7rem]" />
            <Link to="/about" className="block text-lg text-light font-normal">
              About
            </Link>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default AboutSubBanner;
