import React, { useState } from "react";
import styles from "../aside/Aside.module.css";
import g6 from "../../../public/images/g6.jpg";
import g7 from "../../../public/images/g7.jpg";
import g8 from "../../../public/images/g8.jpg";
import g9 from "../../../public/images/g9.jpg";
import g10 from "../../../public/images/g10.jpg"; // Importing the image for background
import useScreenSize from "../useScreenSize";

const Aside = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const { isMobile, isTablet } = useScreenSize();

  const description = [
    {
      title: "3 Days, 4 Nights",
      amount: "$3750",
      path: g9,
    },
    {
      title: "3 Days, 4 Nights",
      amount: "$1620",
      path: g8,
    },
    {
      title: "3 Days, 4 Nights",
      amount: "$1820",
      path: g7,
    },
    {
      title: "3 Days, 4 Nights",
      amount: "$1520",
      path: g6,
    },
  ];

  return (
    <div
      className={`flex flex-col ${
        isTablet ? "gap-4 p-4" : "md:flex-row gap-6 p-6 md:p-20"
      } w-full bg-light dark:bg-""`}
    >
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`h-[300px] ${
          isTablet ? "w-full h-[400px]" : "md:h-[667px] w-full md:w-1/2"
        } bg-no-repeat bg-cover border border-solid border-gray-300 dark:border-white rounded-xl relative`}
        style={{ backgroundImage: `url(${g10})` }} 
      >
        <div className="h-full w-full bg-darkShade bg-opacity-50 border border-solid border-gray-300 dark:border-white rounded-xl">
          <div className="text-black dark:text-white absolute bottom-10 left-10">
            <h6>3 Days, 4 Nights</h6>
            <p className={isHovered ? styles.show : styles.hide}>$1520</p>
          </div>
        </div>
      </div>

      <div
        className={`grid grid-cols-2 gap-6 grid-rows-2 ${
          isTablet ? "h-auto" : "md:h-[667px]"
        } w-full ${isTablet ? "" : "md:w-1/2"}`}
      >
        {description.map((details, index) => (
          <div
            key={index}
            className="relative flex flex-col"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div
              className={`h-[160px] ${
                isTablet
                  ? "w-full h-[300px]"
                  : "md:h-[320px] w-full md:w-[255px]"
              } border border-solid border-gray-300 dark:border-white rounded-xl overflow-hidden`}
            >
              <img
                src={details.path}
                alt=""
                className="h-full w-full border border-solid border-gray-300 dark:border-white rounded-xl object-cover"
              />
              <div className="absolute bottom-2 left-2 text-white bg-black bg-opacity-50 px-2 py-1 rounded">
                <h6 className="m-0">{details.title}</h6>
                <p
                  className={`m-0 ${styles.hide} ${
                    hoveredIndex === index ? styles.show : ""
                  }`}
                >
                  {details.amount}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Aside;

// import React, { useState } from "react";
// import styles from "../aside/Aside.module.css";
// import g6 from "../../../public/images/g6.jpg";
// import g7 from "../../../public/images/g7.jpg";
// import g8 from "../../../public/images/g8.jpg";
// import g9 from "../../../public/images/g9.jpg";
// import useScreenSize from "../useScreenSize";

// const Aside = () => {
//   const [hoveredIndex, setHoveredIndex] = useState(null);
//   const [isHovered, setIsHovered] = useState(false);
//   const { isMobile, isTablet } = useScreenSize();

//   const description = [
//     {
//       title: "3 Days, 4 Nights",
//       amount: "$3750",
//       path: g9,
//     },
//     {
//       title: "3 Days, 4 Nights",
//       amount: "$1620",
//       path: g8,
//     },
//     {
//       title: "3 Days, 4 Nights",
//       amount: "$1820",
//       path: g7,
//     },
//     {
//       title: "3 Days, 4 Nights",
//       amount: "$1520",
//       path: g6,
//     },
//   ];

//   return (
//     <div
//       className={`flex flex-col ${
//         isTablet ? "gap-4 p-4" : "md:flex-row gap-6 p-6 md:p-20"
//       } w-full bg-light dark:bg-[#111]`}
//     >
//       <div
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//         className={`h-[300px] ${
//           isTablet ? "w-full h-[400px]" : "md:h-[667px] w-full md:w-1/2"
//         } bg-[url('../../../public/images/g10.jpg')] bg-no-repeat bg-cover border border-solid border-gray-300 dark:border-white rounded-xl relative`}
//       >
//         <div className="h-full w-full bg-darkShade border border-solid border-gray-300 dark:border-white rounded-xl">
//           <div className="text-black dark:text-white absolute bottom-10 left-10">
//             <h6>3 Days, 4 Nights</h6>
//             <p className={isHovered ? styles.show : styles.hide}>$1520</p>
//           </div>
//         </div>
//       </div>

//       <div
//         className={`grid grid-cols-2 gap-6 grid-rows-2 ${
//           isTablet ? "h-auto" : "md:h-[667px]"
//         } w-full ${isTablet ? "" : "md:w-1/2"}`}
//       >
//         {description.map((details, index) => (
//           <div
//             key={index}
//             className="relative flex flex-col"
//             onMouseEnter={() => setHoveredIndex(index)}
//             onMouseLeave={() => setHoveredIndex(null)}
//           >
//             <div
//               className={`h-[160px] ${
//                 isTablet
//                   ? "w-full h-[300px]"
//                   : "md:h-[320px] w-full md:w-[255px]"
//               } border border-solid border-gray-300 dark:border-white rounded-xl overflow-hidden`}
//             >
//               <img
//                 src={details.path}
//                 alt=""
//                 className="h-full w-full border border-solid border-gray-300 dark:border-white rounded-xl object-cover"
//               />
//               <div className="absolute bottom-2 left-2 text-white bg-black bg-opacity-50 px-2 py-1 rounded">
//                 <h6 className="m-0">{details.title}</h6>
//                 <p
//                   className={`m-0 ${styles.hide} ${
//                     hoveredIndex === index ? styles.show : ""
//                   }`}
//                 >
//                   {details.amount}
//                 </p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Aside;
