import React from "react";
import cardData from "./CardData";

const Card = () => {
  return (
    <div className="grid grid-cols-1 custom1:grid-cols-2 gap-8">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="flex flex-col semiBP:flex-row items-center gap-5 p-[27px] bg-light dark:bg-black border border-solid border-gray-300 dark:border-gray-800 rounded-lg shadow-md"
        >
          {/* image here  */}
          <div className="flex w-full  semiBP:w-56 semiBP:h-[340px] border border-solid border-gray-300 dark:border-none flex-shrink-0 rounded-xl custom1:w-44 custom1:h-[280px]">
            <img
              src={card.path}
              alt="beautiful places to visit"
              className="w-full h-full border border-solid border-gray-300 dark:border-none rounded-xl object-cover"
            />
          </div>

          {/* text here */}
          <div className="flex flex-col gap-4 w-full">
            <div>
              <h4 className="text-2xl font-bold text-black dark:text-white">
                {card.title}
              </h4>
              <p className="text-lg text-gray-500 dark:text-gray-400 -mt-1">
                {card.dayNight}
              </p>
            </div>
            <div className="flex justify-between border-t border-b pt-1 pb-1 border-lightGrey dark:border-gray-600 text-sm font-bold">
              <p className="text-sm font-bold capitalize text-black dark:text-white">
                Start from
              </p>
              <p className="text-red">{card.amount}</p>
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-base">
              {card.condition}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
