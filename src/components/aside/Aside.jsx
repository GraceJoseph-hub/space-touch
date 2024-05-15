import React from 'react'
import { Link } from 'react-router-dom';
import sample from '../carousel/sample.jpg'

const Aside = () => {
  return (
    <div className="flex gap-6 mx-20 py-20">
      <Link to="/" className="border border-solid rounded-xl">
        <img
          src={sample}
          alt=""
          className="h-[39.5rem] w-full border border-solid rounded-xl"
        />
      </Link>
      <div className="grid grid-cols-2 gap-6 grid-rows-2 ">
        <Link to="/" className="">
          <img src={sample} alt="" className="h-[19rem]" />
        </Link>
        <Link to="/" className="">
          <img src={sample} alt="" className="h-[19rem]" />
        </Link>
        <Link to="/" className="">
          <img src={sample} alt="" className="h-[19rem]" />
        </Link>
        <Link to="/" className="">
          <img src={sample} alt="" className="h-[19rem]" />
        </Link>
      </div>
    </div>
  );
}

export default Aside