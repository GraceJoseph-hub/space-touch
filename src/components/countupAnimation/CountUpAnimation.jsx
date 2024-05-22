import React from 'react'
import CountUp from "react-countup";

const CountUpAnimation = () => {
  return (
    <div className="flex items-center gap-44 text-5xl text-red font-semibold w-full h-64 bg-light px-20">
      <div className="">
        <CountUp start={0} end={10} duration={200} />
        <p className='text-lg mt-3 text-grey font-thin'>Branches</p>
      </div>
      <div>
        <CountUp start={0} end={350} duration={200} />
        <p className='text-lg mt-3 text-grey font-thin'>Travel Guides</p>
      </div>
      <div>
        <CountUp start={0} end={3812} duration={200} />
        <p className='text-lg mt-3 text-grey font-thin'>Happy Customers</p>
      </div>
      <div>
        <CountUp start={0} end={93} duration={200} />
        <p className='text-lg mt-3 text-grey font-thin'>Staff</p>
      </div>
    </div>
  );
}

export default CountUpAnimation


