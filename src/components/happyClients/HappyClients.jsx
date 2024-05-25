import React from "react";
import g1 from "../../../public/images/g1.jpg";
import g2 from "../../../public/images/g2.jpg";
import g3 from "../../../public/images/g3.jpg";
import g4 from "../../../public/images/g4.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaQuoteLeft } from "react-icons/fa";

const HappyClients = () => {
  const testimonials = [
    {
      text: "Spacetouch Travels answered me swiftly and made my journey a stressless one even when it was an emergency trip.",
      name: "Lucia Valerie",
      image: g1,
    },
    {
      text: "Spacetouch Travels answered me swiftly and made my journey a stressless one even when it was an emergency trip.",
      name: "Elizabeth",
      image: g2,
    },
    {
      text: "Spacetouch Travels answered me swiftly and made my journey a stressless one even when it was an emergency trip.",
      name: "Abayomi",
      image: g3,
    },
    {
      text: "Spacetouch Travels answered me swiftly and made my journey a stressless one even when it was an emergency trip.",
      name: "Ayoola",
      image: g4,
    },
  ];
  var settings = {
    dots: true,
    infinite: true,
    speed: 1500,
  };
  return (
    <section className="text-center bg-light dark:bg-black py-24">
      <h5 className="text-red text-sm font-semibold">
        HERE'S WHAT THEY HAVE TO SAY
      </h5>
      <h2 className="text-4xl mb-8 font-semibold text-black dark:text-white">
        Our Clients Do The Talking
      </h2>
      <Slider {...settings} className="max-w-xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="flex flex-col items-center mb-4">
            <div className="flex flex-col items-center mb-4">
              <FaQuoteLeft className="text-red text-4xl mb-4" />
              <p className="text-center text-black dark:text-white">
                {testimonial.text}
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="rounded-full w-20 h-20 mb-4 border border-solid border-gray-300 dark:border-white"
              />
              <p className="text-black dark:text-white">{testimonial.name}</p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default HappyClients;
