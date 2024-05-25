import React, { useState, useEffect } from "react";
import Brand from "../brand/Brand";
import Moon from "../icons/Moon";
import Btn from "../btn/Btn";
import { FaBars, FaSquareXmark, FaSun } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import logo from "../../../public/images/logo.jpg";
import styles from "./navbar.module.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState("light"); // Default to light mode

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const location = useLocation();
  const activeRoute = location.pathname;

  const links = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About" },
    { path: "/destination", name: "Destinations" },
    { path: "/contact", name: "Contact" },
  ];

  const toggleBtn = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="bg-light dark:bg-black w-full px-20 fixed top-0 left-0 right-0 z-50 h-[100px]">
        <div className="flex items-center justify-between h-20 w-full mx-auto">
          <Brand theme={theme} />
          <div className="hidden custom1:flex flex-1 items-center gap-5">
            <img
              src={logo}
              alt="brand logo"
              width="35"
              height="35"
              className="cursor-pointer dark:rounded-md smallBP:hidden semiBP:block custom:block custom1:block"
            />
            {links.map((link, index) => (
              <div
                key={`${link.name}-${index}`}
                className="group relative h-[30px]"
              >
                <Link
                  to={link.path}
                  className={`text-base hover:text-red ${
                    activeRoute === link.path
                      ? "text-red"
                      : "text-black dark:text-white"
                  }`}
                >
                  {link.name}
                </Link>
                <span className="absolute z-20 bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-red duration-200 ease-in-out group-hover:w-full"></span>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <Btn text="Get in Touch" isMainColor />
            <div onClick={toggleBtn} className="lg:hidden cursor-pointer">
              {isOpen ? (
                <FaSquareXmark
                  className={theme === "dark" ? "text-white" : ""}
                />
              ) : (
                <FaBars className={theme === "dark" ? "text-white" : ""} />
              )}
            </div>
            <div onClick={handleThemeSwitch} className="cursor-pointer">
              {theme === "light" ? (
                <Moon className="order-1 custom1:order-2" />
              ) : (
                <FaSun className="text-white" />
              )}
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          className={`top-[80px] z-50 w-full fixed ${styles.dropDownContainer}`}
        >
          <div className="flex flex-col items-center bg-light dark:bg-black">
            {links.map((link, index) => (
              <div
                key={`${link.name}-${index}`}
                className="group relative h-[30px]"
              >
                <Link
                  to={link.path}
                  className={`text-base hover:text-red ${
                    activeRoute === link.path
                      ? "text-red"
                      : "text-black dark:text-white"
                  }`}
                >
                  {link.name}
                </Link>
                <span className="absolute z-20 bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-red duration-200 ease-in-out group-hover:w-full"></span>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
