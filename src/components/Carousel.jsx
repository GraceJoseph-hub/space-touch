import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import brandlogo from '../components/brand/brandlogo.jpg';
import sample from './sample.jpg'

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 1500,
    // cssEase: "linear"
  };
  return (
    <Slider {...settings}>
      <div>
        <img src={sample} alt="" className="h-96 w-full object-cover" />
      </div>
      <div>
        <img src={sample} alt="" className="h-96 w-full object-cover" />
      </div>
      <div>
        <img src={sample} alt="" className="h-96 w-full object-cover" />
      </div>
      <div>
        <img src={sample} alt="" className="h-96 w-full object-cover" />
      </div>
      <div>
        <img src={sample} alt="" className="h-96 w-full object-cover" />
      </div>
      <div>
        <img src={sample} alt="" className="h-96 w-full object-cover" />
      </div>
    </Slider>
  );
}