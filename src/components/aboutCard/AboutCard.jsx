import React from 'react'
import g1 from "../../../public/images/g1.jpg";
import g2 from "../../../public/images/g2.jpg";
import g3 from "../../../public/images/g3.jpg";

const AboutCard = () => {
  const cardDetails = [
    {
      pic: g1,
      info: "Info",
      title: "Staff Happiness",
      description: "A happy staff, gives the best output",
    },
    {
      pic: g2,
      info: "Info",
      title: "Partner With Care",
      description:
        "We have partners in every corners of the world so we are always with you anywhere in the World.",
    },
    {
      pic: g3,
      info: "Info",
      title: "Customer Care",
      description:
        "We have one of the best customer care representatives in the country, with swift response 24/7.",
    },
  ];
  return (
    <div className="grid grid-cols-3 gap-x-7 p-20 w-full bg-light">
      {cardDetails.map((cardDetail, index) => (
        <div key={index}>
          <img
            src={cardDetail.pic}
            alt={cardDetail.title}
            className="rounded-lg"
          />
          <h3 className="text-[0.8rem] font-bold text-red mt-4">
            {cardDetail.info}
          </h3>
          <h2 className="text-[1.4rem] font-semibold">{cardDetail.title}</h2>
          <p className="text-[0.9rem] text-grey font-semibold">{cardDetail.description}</p>
        </div>
      ))}
    </div>
  );
}

export default AboutCard