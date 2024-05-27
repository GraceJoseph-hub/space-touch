import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import banner1 from "../../../public/images/banner1.jpg";
import banner2 from "../../../public/images/banner2.jpg";
import banner3 from "../../../public/images/banner3.jpg";
import banner4 from "../../../public/images/banner4.jpg";
import useScreenSize from "../useScreenSize"; // Import the useScreenSize hook

export default function SimpleSlider() {
  const { isMobile, isTablet } = useScreenSize(); // Get the screen size info

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

  // Define text sizes based on screen size
  const getTextSize = () => {
    if (isMobile) return "text-lg"; // Adjust according to your preference
    if (isTablet) return "text-xl"; // Adjust according to your preference
    return "text-2xl"; // Adjust according to your preference
  };

  const getHeaderSize = () => {
    if (isMobile) return "text-base"; // Adjust according to your preference
    if (isTablet) return "text-lg"; // Adjust according to your preference
    return "text-xl"; // Adjust according to your preference
  };

  const getTextMargin = () => {
    return "top-30%"; // Position 30% away from the top
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
            <div
              className={`absolute inset-0 text-white bg-black bg-opacity-50 ${getTextMargin()}`}
            >
              <h3 className={`font-semibold mb-2 ${getTextSize()}`}>
                You don't need to go far to <br /> find what matters.
              </h3>
              <p className={getHeaderSize()}>Discover your next adventure</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

// import React from 'react'
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// import banner1 from "../../../public/images/banner1.jpg";
// import banner2 from "../../../public/images/banner2.jpg";
// import banner3 from "../../../public/images/banner3.jpg";
// import banner4 from "../../../public/images/banner4.jpg";

// export default function SimpleSlider() {
//   const slidesData = [
//     {
//       image: banner1
//     },
//     {
//       image: banner2
//     },
//     {
//       image: banner3
//     },
//     {
//       image: banner4,
//     },

//   ];
//   var settings = {
//     dots: true,
//     infinite: true,
//     fade: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     speed: 1500,
//     autoplaySpeed: 1500,
//   };
//   return (
//     <div className="dark:bg-[#111]">
//       <Slider {...settings}>
//         {slidesData.map((slide, index) => (
//           <div key={index} className="relative">
//             <img
//               src={slide.image}
//               alt={`Slide ${index + 1}`}
//               className="w-full h-96 object-cover bg-center"
//             />
//             <div className="absolute pt-16 pl-20 inset-0 text-white bg-black bg-opacity-50">
//               <h3 className="font-semibold mb-5 smallBP:text-xs semiBP:text-sm custom:text-3xl custom1:text-5xl">
//                 You don't need to go far to <br /> find what matters.
//               </h3>
//               <p>Discover your next adventure</p>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// }
