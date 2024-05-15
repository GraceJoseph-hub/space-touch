import React from 'react'

const Description = ({title, dayNight, startTitle, startAmount, condition}) => {
  
  return (
    <div className="flex flex-col gap-4">
      <div>
        <h4 className="text-2xl text-bold font-medium">{title}</h4>
        <p className="text-lg text-grey -mt-1">{dayNight}</p>
      </div>
      <div className="flex gap-40 border-t border-b pt-1 pb-1 border-lightGrey text-sm text-bold">
        <p className="text-sm text-bold capitalize">{startTitle}</p>
        <p className="text-red">{startAmount}</p>
      </div>
      <p className="text-grey text-base">{condition}</p>
    </div>
  );
}

export default Description


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