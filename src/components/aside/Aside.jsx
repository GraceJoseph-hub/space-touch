import React from "react";
// import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "../aside/Aside.module.css";
import g6 from "../../../public/images/g6.jpg";
import g7 from "../../../public/images/g7.jpg";
import g8 from "../../../public/images/g8.jpg";
import g9 from "../../../public/images/g9.jpg";


const Aside = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

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
    <div className="flex flex-row gap-6 p-20 w-full">
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="h-[667px] w-1/2 bg-[url('../../../public/images/g10.jpg')] border border-solid rounded-xl relative"
      >
        <div className="h-full w-full bg-darkShade border border-solid rounded-xl">
          <div className="text-light absolute bottom-10 left-10">
            <h6>3 Days, 4 Nights</h6>
            <p className={isHovered ? styles.show : styles.hide}>$1520</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 grid-rows-2 h-[667px] w-1/2">
        {description.map((details, index) => (
          <div
            key={index}
            className="flex flex-col"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="h-[320px] w-[255px] border border-solid rounded-xl">
              <img
                src={details.path}
                alt=""
                className="h-full w-full border border-solid rounded-xl"
              />
            </div>
            <div className="-mt-20 ml-6 text-light">
              <h6>{details.title}</h6>
              <p
                className={`${styles.hide} ${
                  hoveredIndex === index ? styles.show : ""
                }`}
              >
                {details.amount}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Aside;
