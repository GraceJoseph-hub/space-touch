import React from "react";
import cardData from "./CardData";


const Card = () => {

  return (
    <div className="grid grid-cols:1 custom1:grid-cols-2 gap-8">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="h-[262.17px] flex items-center gap-5 p-[27px] bg-light border border-solid rounded-lg shadow-md custom1:h-[333.5px]"
        >
          {/* image here  */}
          <div className="flex w-[40%] h-full border border-solid bg-blue-500 flex-shrink-0 rounded-xl">
            <img
              src={card.path}
              alt="beautiful places to visit"
              className="w-full h-full border border-solid rounded-xl object-cover"
            />
          </div>

          {/* text here */}
          <div className="flex flex-col gap-4 w-full">
            <div>
              <h4 className="text-2xl text-bold font-medium">{card.title}</h4>
              <p className="text-lg text-grey -mt-1">{card.dayNight}</p>
            </div>
            <div className="flex justify-between border-t border-b pt-1 pb-1 border-lightGrey text-sm text-bold">
              <p className="text-sm text-bold capitalize">Start from</p>
              <p className="text-red">{card.amount}</p>
            </div>
            <p className="text-grey text-base">{card.condition}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
