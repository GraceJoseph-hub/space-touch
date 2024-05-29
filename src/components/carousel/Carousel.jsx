import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import banner1 from "../../../public/images/banner1.jpg";
import banner2 from "../../../public/images/banner2.jpg";
import banner3 from "../../../public/images/banner3.jpg";
import banner4 from "../../../public/images/banner4.jpg";
import useScreenSize from "../useScreenSize";

export default function SimpleSlider() {
  const { isMobile, isTablet, isDesktop } = useScreenSize();

  const slidesData = [
    {
      image: banner1,
    },
    {
      image: banner2,
    },
    {
      image: banner3,
    },
    {
      image: banner4,
    },
  ];

  var settings = {
    dots: true,
    infinite: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 1500,
  };

  const getTextSize = () => {
    if (isMobile) return "text-2xl"; 
    if (isTablet) return "text-4xl"; 
    return "text-6xl"; 
  };

  const getHeaderSize = () => {
    if (isMobile) return "text-sm";
    if (isTablet) return "text-base"; 
    return "text-lg"; 
  };

  const getLeftMargin = () => {
    if (isMobile || isTablet) return "30px";
    return "87px";
  };

  return (
    <div className="dark:bg-[#111] relative">
      <Slider {...settings}>
        {slidesData.map((slide, index) => (
          <div key={index} className="relative">
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-96 object-cover bg-center"
            />
            <div className="absolute inset-0 text-white bg-black bg-opacity-50 flex items-start justify-start">
              <div
                className="absolute"
                style={{ top: "70px", left: getLeftMargin() }}
              >
                <h3 className={`font-semibold mb-2 ${getTextSize()}`}>
                  You don't need to go far to <br /> find what matters.
                </h3>
                <p className={getHeaderSize()}>Discover your next adventure</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

