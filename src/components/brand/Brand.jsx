import React, {useEffect, useRef} from 'react'
import { Link } from "react-router-dom";
import brandlogo from './brandlogo.jpg'
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
    <div className='flex items-center gap-12'>
      <Link to='/' ref={navBar} className='text-3xl font-semibold navbar'>
        Spacetouch
      </Link>
      <img src={brandlogo} alt="brand logo" width='35' height='35' className='cursor-pointer'/>
    </div>
  )
}

export default Brand