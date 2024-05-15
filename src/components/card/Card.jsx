import React from 'react'
import sample from '../carousel/sample.jpg'
// import Destination from '../../pages/Destination';
import Description from '../description/Description';

const Card = ({ title, dayNight, startTitle, startAmount, condition, className }) => {
  return (
    <div
      className={`flex items-center gap-9 p-7 w-[31.8rem] h-72 bg-light border border-solid rounded-lg shadow-md ${className}`}
    >
      <div className="h-56 w-52 border border-solid rounded-xl">
        <img
          src={sample}
          alt="beautiful places to visit"
          className="w-full h-full border border-solid rounded-xl"
        />
      </div>
      <Description
        title={title}
        dayNight={dayNight}
        startTitle={startTitle}
        startAmount={startAmount}
        condition={condition}
      />
    </div>
  );
};

export default Card