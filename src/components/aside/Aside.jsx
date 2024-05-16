import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";


const Aside = () => {
  const [isHovered, setIsHovered] = useState(null);
  const [leftState, setLeftState] = useState(false);

  const description = [
    {
      title: '3 Days, 4 Nights',
      amount: '$3750'
    },
    {
      title: '3 Days, 4 Nights',
      amount: '$1620'
    },
    {
      title: '3 Days, 4 Nights',
      amount: '$1820'
    },
    {
      title: '3 Days, 4 Nights',
      amount: '$1520'
    },
  ]
  return (
    <div className="flex gap-6 mx-20 py-20">
      <Link
        to="/"
        className="h-[39.5rem] w-1/2 border border-solid rounded-xl bg-[url('../../../public/images/sample.jpg')]"
        onMouseEnter={() => setLeftState(true)}
        onMouseLeave={() => setLeftState(false)}
      >
        <div className="h-full w-full text-light font-medium bg-darkShade border border-solid rounded-xl relative">
          <p className="absolute left-8 bottom-10">3 days, 4 Nights</p>
          {leftState && <p className="absolute left-8 bottom-4">$1720</p>}
        </div>
      </Link>
      <div className="grid grid-cols-2 gap-6 grid-rows-2 w-1/2">
        {description.map((description, index) => (
          <Link
            to="/"
            key={index}
            className="bg-[url('../../../public/images/sample.jpg')] h-[19rem] border border-solid rounded-xl relative"
            onMouseEnter={() => setIsHovered(index)}
            onMouseLeave={() => setIsHovered(null)}
          >
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
      </div>
    </div>
  );
};

export default Aside;


