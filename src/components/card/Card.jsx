import React from 'react'
import sample from '../carousel/sample.jpg'

const Card = () => {
  return (
    <div className="flex items-center gap-9 p-7 w-[36rem] h-72 bg-light border border-solid rounded-lg">
      <div className="h-56 w-52 border border-solid rounded-xl">
        <img
          src={sample}
          alt="beautiful places to visit"
          className="w-full h-full border border-solid rounded-xl"
        />
      </div>
      <div>test</div>
    </div>
  );
}

export default Card