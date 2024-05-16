import React from "react";
import { Link } from "react-router-dom";
import cardData from "./CardData";
// import sample from '../carousel/sample.jpg'
// import Description from "../description/Description";

const Card = () => {
  return (
    <div className="grid grid-cols-2 gap-8">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="flex flex-row items-center gap-9 p-5 w-[31.8rem] h-auto bg-light border border-solid rounded-lg shadow-md"
        >
          <div className="h-52 w-48 border border-solid rounded-xl">
            <img
              src={card.path}
              alt="beautiful places to visit"
              className="w-full h-full border border-solid rounded-xl"
            />
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <h4 className="text-2xl text-bold font-medium">{card.title}</h4>
              <p className="text-lg text-grey -mt-1">{card.dayNight}</p>
            </div>
            <div className="flex gap-40 border-t border-b pt-1 pb-1 border-lightGrey text-sm text-bold">
              <p className="text-sm text-bold capitalize">title</p>
              <p className="text-red">{card.startAmount}</p>
            </div>
            <p className="text-grey text-base">{card.condition}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
