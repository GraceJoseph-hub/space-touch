import React from 'react'
import { Link } from 'react-router-dom';
import sample from '../carousel/sample.jpg'
import Description from '../description/Description';

const Card = ({ title, dayNight, startTitle, startAmount, condition }) => {
  return (
    <Link to='/'
      className="flex items-center gap-9 p-5 w-[31.8rem] h-auto bg-light border border-solid rounded-lg shadow-md"
    >
      <div className="h-52 w-48 border border-solid rounded-xl">
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
    </Link>
  );
};

export default Card