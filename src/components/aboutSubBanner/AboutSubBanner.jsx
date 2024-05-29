import React from "react";
import CountUp from "react-countup";
import { FaFaceGrinBeam, FaPeopleGroup } from "react-icons/fa6";
import { FaDatabase } from "react-icons/fa";
import useScreenSize from "../useScreenSize";
import backgroundImage from '../../../public/images/banner3.jpg'

const AboutSubBanner = () => {
  const { isMobile, isTablet } = useScreenSize();

  const counter = [
    {
      icon: <FaFaceGrinBeam />,
      counts: <CountUp start={0} end={3812} duration={2} />,
      title: "Happy Customers",
    },
    {
      icon: <FaPeopleGroup />,
      counts: <CountUp start={0} end={100} duration={2} />,
      title: "Custom Products",
    },
    {
      icon: <FaDatabase />,
      counts: <CountUp start={0} end={10} duration={2.5} />,
      title: "Branches",
    },
  ];

  return (
    <div
      className='h-[20.3rem] w-full  bg-cover bg-center'
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div
        className={`${
          isMobile || isTablet
            ? "grid grid-cols-2 gap-4 p-4"
            : "flex justify-between items-center px-16"
        } h-full w-full bg-darkShade relative`}
      >
        {counter.map((count, index) => (
          <div
            key={index}
            className={`${
              isMobile || isTablet ? "text-xl" : "text-2xl"
            } text-light font-semibold`}
          >
            <p className={`${isMobile || isTablet ? "text-2xl" : "text-4xl"}`}>
              {count.icon}
            </p>
            <p className={`${isMobile || isTablet ? "text-xl" : "text-3xl"}`}>
              {count.counts}
            </p>
            <p>{count.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutSubBanner;

// import React from "react";
// import CountUp from "react-countup";
// import { FaFaceGrinBeam, FaPeopleGroup } from "react-icons/fa6";
// import { FaDatabase } from "react-icons/fa";

// const AboutSubBanner = () => {
//   const counter = [
//     {
//       icon: <FaFaceGrinBeam />,
//       counts: <CountUp start={0} end={3812} duration={200} />,
//       title: "Happy Customers",
//     },
//     {
//       icon: <FaPeopleGroup />,
//       counts: <CountUp start={0} end={100} duration={200} />,
//       title: "Custom Products",
//     },
//     {
//       icon: <FaDatabase />,
//       counts: <CountUp start={0} end={10} duration={250} />,
//       title: "Branches",
//     },
//   ];

//   return (
//     <div className='h-[20.3rem] w-full bg-[url("../../../public/images/banner3.jpg")] bg-cover bg-center'>
//       <div className="flex justify-between items-center px-16 h-full w-full bg-darkShade relative">
//         {counter.map((count, index) => (
//           <div key={index} className="text-2xl text-light font-semibold">
//             <p className="text-4xl">{count.icon}</p>
//             <p className="text-3xl">{count.counts}</p>
//             <p>{count.title}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AboutSubBanner;
