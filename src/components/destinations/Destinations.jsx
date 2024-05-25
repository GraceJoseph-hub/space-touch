import React from 'react'
import cardDetails from './DestinationsData';


const Destinations = () => {
  return (
    <div className="p-20 w-full bg-light dark:bg-black">
      <h2 className='text-4xl font-semibold dark:text-light'>Destinations</h2>
      <div className="grid grid-cols-3 gap-7 mt-8">
        {cardDetails.map((details, index) => (
          <div key={index}>
            <img src={details.pic} alt={details.title} className="rounded-lg" />
            <h3 className="text-[1.5rem] font-semibold">{details.country}</h3>
            <div className="text-[1rem]">
              <h2 className=" text-grey -mt-1">{details.info}</h2>
              <p className="font-semibold -mt-1 dark:text-light">{details.start}</p>
              <p className="text-grey">{details.amount}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Destinations


  