import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import Tomsnoob from "../../../public/images/Tomsnoob.jpg";
import Chinza from "../../../public/images/Chinza.jpg";
import Matty from "../../../public/images/Matty.jpg";
import Chioma from "../../../public/images/Chioma.jpg";
import useScreenSize from "../useScreenSize";
import "./Team.module.css";
import styles from "../aside/Aside.module.css";

const Team = () => {
  const { isMobile, isTablet, isDesktop } = useScreenSize();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const description = [
    {
      name: "Tomiwa",
      position: "Manager",
      path: Tomsnoob,
      insta: "https://www.instagram.com/tomsnoob",
      twitter: "https://x.com/tomsnoob",
    },
    {
      name: "Perpee",
      position: "C.O.O",
      path: Chinza,
      insta: "/",
      twitter: "/",
    },
    {
      name: "Matty",
      position: "H.O.O",
      path: Matty,
      insta: "/",
      twitter: "/",
    },
    {
      name: "Chioma",
      position: "Secretary",
      path: Chioma,
      insta: "/",
      twitter: "/",
    },
  ];

  const getGridCols = () => {
    if (isMobile) return "grid-cols-1";
    if (isTablet) return "grid-cols-2";
    if (isDesktop) return "grid-cols-4";
    return "grid-cols-1"; // Default
  };

  return (
    <div className="text-center bg-light dark:bg-black px-4 md:px-20 pt-20 pb-44 w-full">
      <h5 className="text-sm text-red font-semibold">OUR MANAGEMENT TEAM</h5>
      <h2 className="text-2xl md:text-4xl font-semibold dark:text-light">
        Meet The People Behind The Scenes
      </h2>
      <div className={`grid gap-6 w-full mt-10 ${getGridCols()}`}>
        {description.map((details, index) => (
          <div
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="relative"
          >
            <img src={details.path} alt="" className="rounded-xl w-full" />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center text-light">
              <h6 className="text-xl md:text-2xl font-semibold">
                {details.name}
              </h6>
              <p className="text-sm md:text-[0.9rem]">{details.position}</p>
            </div>
            <div
              className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4 md:gap-8 text-center text-light text-lg ${
                styles.hide
              } ${hoveredIndex === index ? styles.show : ""}`}
            >
              <Link to={details.insta}>
                <FaInstagram />
              </Link>
              <Link to={details.twitter}>
                <FaTwitter />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;

// import React, {useState} from "react";
// import "./Team.module.css";
// import styles from "../aside/Aside.module.css";
// import { FaInstagram, FaTwitter } from "react-icons/fa";
// import Tomsnoob from "../../../public/images/Tomsnoob.jpg";
// import Chinza from "../../../public/images/Chinza.jpg";
// import Matty from "../../../public/images/Matty.jpg";
// import Chioma from "../../../public/images/Chioma.jpg";
// import { Link } from "react-router-dom";

// const Team = () => {
//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   const description = [
//     {
//       name: "Tomiwa",
//       position: "Manager",
//       path: Tomsnoob,
//       insta: "https://www.instagram.com/tomsnoob",
//       twitter: "https://x.com/tomsnoob",
//     },

//     {
//       name: "Perpee",
//       position: "C.O.O",
//       path: Chinza,
//       insta: "/",
//       twitter: "/",
//     },
//     {
//       name: "Matty",
//       position: "H.O.O",
//       path: Matty,
//       insta: "/",
//       twitter: "/",
//     },
//     {
//       name: "Chioma",
//       position: "Secretary",
//       path: Chioma,
//       insta: "/",
//       twitter: "/",
//     },
//   ];
//   return (
//     <div className="text-center bg-light dark:bg-black px-20 pt-20 pb-44 w-full">
//       <h5 className="text-sm text-red font-semibold">OUR MANAGEMENT TEAM</h5>
//       <h2 className="text-4xl font-semibold dark:text-light">
//         Meet The People Behind The Scenes
//       </h2>
//       <div className="grid grid-cols-4 gap-6 w-full mt-10">
//         {description.map((details, index) => (
//           <div
//             key={index}
//             onMouseEnter={() => setHoveredIndex(index)}
//             onMouseLeave={() => setHoveredIndex(null)}
//           >
//             <img src={details.path} alt="" className="rounded-xl" />
//             <div className="-mt-20 text-center text-light">
//               <h6 className="text-2xl font-semibold">{details.name}</h6>
//               <p className="text-[0.9rem]">{details.position}</p>
//             </div>
//             <div
//               className={`flex gap-8 -mt-20 ml-24 text-center text-light text-lg ${
//                 styles.hide
//               } ${hoveredIndex === index ? styles.show : ""}`}
//             >
//               <Link to={details.insta}>
//                 <FaInstagram />
//               </Link>
//               <Link to={details.twitter}>
//                 <FaTwitter />
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Team;
