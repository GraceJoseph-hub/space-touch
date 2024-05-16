import React from "react";
// import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "../aside/Aside.module.css";
import g6 from "../../../public/images/g6.jpg";
import g7 from "../../../public/images/g7.jpg";
import g8 from "../../../public/images/g8.jpg";
import g9 from "../../../public/images/g9.jpg";
import g10 from "../../../public/images/g10.jpg";

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
    <div className="flex flex-row gap-6 px-20 py-20 w-full">
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className=" rounded-xl"
      >
        <img src={g10} alt="" className="border border-solid rounded-xl" />
        <div className="-mt-20 text-light">
          <h6>3 Days, 4 Nights</h6>
          <p className={isHovered ? styles.show : styles.hide}>$1520</p>
        </div>
      </div>
      <div className={`grid grid-cols-2 gap-6 grid-rows-2 ${styles.cardBox}`}>
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
            <div className="-mt-20 text-light">
              <h6>{details.title}</h6>
              <p className={hoveredIndex === index ? styles.show : styles.hide}>
                {details.amount}
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* <div className={`grid grid-cols-2 gap-6 grid-rows-2 ${styles.cardBox}`}>
        {description.map((details, index) => (
          <div key={index} className="flex flex-col">
            <div className="h-[300px] w-[300px]">
              <img src={details.path} alt="" />
            </div>
            <div className="-mt-20 text-light">
              <h6 className="">{details.title}</h6>
              <p className="">{details.amount}</p>
            </div>
          </div>
        ))}
      </div> */}

      {/* <div
        to="/"
        className="h-[39.5rem] border border-solid rounded-xl bg-[url('../../../public/images/g10.jpg')]"
        onMouseEnter={() => setLeftState(true)}
        onMouseLeave={() => setLeftState(false)}
      >
        <div className="h-full text-light font-medium bg-darkShade border border-solid rounded-xl relative">
          <p className="absolute left-8 bottom-10">3 days, 4 Nights</p>
          {leftState && <p className="absolute left-8 bottom-4">$1720</p>}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6 grid-rows-2">
        {description.map((description, index) => (
          <Link
            to="/"
            key={index}
            style={{ backgroundImage: description.path }}
            className="h-[19rem] border border-solid rounded-xl relative"
            onMouseEnter={() => setIsHovered(index)}
            onMouseLeave={() => setIsHovered(null)}
          >
            <div>
              <img src={description.path} alt="" />
            </div>
            <div className="h-full w-full text-light font-medium bg-darkShade border border-solid rounded-xl relative">
              <p className="absolute left-8 bottom-10">{description.title}</p>
              <p
                className={`absolute left-8 bottom-4 ${
                  isHovered === index &&
                  "transition-transform duration-500 transform -translate-y-2"
                } `}
              >
                {description.amount}
              </p>
            </div>
          </Link>
        ))}
      </div> */}
    </div>
  );
};

export default Aside;
