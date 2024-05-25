import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";

const Brand = ({ theme }) => {
  const navBar = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        gsap.to(navBar.current, { color: "#ff1654" });
      } else {
        const isDarkMode = document.documentElement.classList.contains("dark");
        gsap.to(navBar.current, { color: isDarkMode ? "#ffffff" : "black" });
      }
    };

    const isDarkMode = theme === "dark";
    gsap.to(navBar.current, { color: isDarkMode ? "#ffffff" : "black" });

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [theme]);

  return (
    <div className="flex items-center">
      <Link
        to="/"
        ref={navBar}
        className="font-semibold navbar smallBP:text-base custom:text-2xl custom1:text-3xl pr-16"
      >
        Spacetouch
      </Link>
    </div>
  );
};

export default Brand;
