import React, {useEffect, useRef} from 'react'
import { Link } from "react-router-dom";
import { gsap } from "gsap";


const Brand = () => {
 
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        gsap.to(".navbar", { color: "#ff1654" });
      } else {
        gsap.to(".navbar", { color: "black" });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  const navBar = useRef(null);
  return (
    <div className="flex items-center">
      <Link
        to="/"
        ref={navBar}
        className=" font-semibold navbar smallBP:text-base custom:text-2xl custom1:text-3xl"
      >
        Spacetouch
      </Link>
    </div>
  );
}

export default Brand