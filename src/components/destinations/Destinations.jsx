import React from 'react'
import cardDetails from './DestinationsData';


const Destinations = () => {
  return (
    <div className="p-20 w-full bg-light">
      <h2 className='text-4xl font-semibold'>Destinations</h2>
      <div className="grid grid-cols-3 gap-7 mt-8">
        {cardDetails.map((details, index) => (
          <div key={index}>
            <img src={details.pic} alt={details.title} className="rounded-lg" />
            <h3 className="text-[1.5rem] font-semibold">{details.country}</h3>
            <div className="text-[1rem]">
              <h2 className=" text-grey -mt-2">{details.info}</h2>
              <p className="font-semibold -mt-2">{details.start}</p>
              <p className="text-grey -mt-2">{details.amount}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Destinations


  // const details = {
  //   title: "Paris",
  //   dayNight: "6 Days 5 Nights",
  //   startFrom: {
  //     startTitle: "Start from",
  //     amount: "$3750",
  //   },
  //   condition: 'Per person on twin sharing',
  // };


{
  /* <p>{details.title}</p>
      <p>{details.dayNight}</p>
      <div>
        <span>{details.startFrom.startTitle}</span>
        <span>{details.startFrom.amount}</span>
      </div>
      <p>{details.condition}</p> */
}

{
  /* {cardData.map((dataItem) => (
        <div>
          {dataItem.title}
          {dataItem.dayNight}
          <div>
            {dataItem.startFrom.startTitle}
            {dataItem.startFrom.amount}
          </div>
        </div>
      ))} */
}