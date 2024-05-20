import React from 'react'
import g1 from "../../../public/images/g1.jpg";
import g2 from "../../../public/images/g2.jpg";
import g3 from "../../../public/images/g3.jpg";
import g4 from "../../../public/images/g4.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {FaQuoteLeft} from 'react-icons/fa';

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
    <section className="text-center bg-light py-24">
      <h5 className="text-red text-sm font-semibold">HERE'S WHAT THEY HAVE TO SAY</h5>
      <h2 className="text-4xl mb-8 font-semibold">Our Clients Do The Talking</h2>
      <Slider {...settings} className="max-w-xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="flex flex-col items-center mb-4">
            <div className="flex flex-col items-center mb-4">
              <FaQuoteLeft className="text-red text-4xl mb-4" />
              <p className="text-center">{testimonial.text}</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="rounded-full w-20 h-20 mb-4"
              />
              <p className="">{testimonial.name}</p>
            </div>
          </div>
        ))}
      </Slider>
      {/* <div className="">
        {testimonials.map((testimonial, index) => (
          <div>
            
            <p>{testimonial.text}</p>
          </div>
        ))}
        <Slider {...settings}>
          <div className="">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
              magni?
            </p>
            <img
              src={sample}
              alt=""
              className="h-32 w-32 rounded-full object-cover"
            />
            <p>Lucia Valerie</p>
          </div>
          <div>
            <img
              src={sample}
              alt=""
              className="h-32 w-32 rounded-full object-cover"
            />
            <p>Elizabeth</p>
          </div>
          <div>
            <img
              src={sample}
              alt=""
              className="h-32 w-32 rounded-full object-cover"
            />
            <p>Abayomi</p>
          </div>
          <div>
            <img
              src={sample}
              alt=""
              className="h-32 w-32 rounded-full object-cover"
            />
            <p>Ayoola</p>
          </div>
        </Slider>
      </div> */}
    </section>
  );
}

export default HappyClients