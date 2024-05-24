import React from 'react'
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import logo from "../../../public/images/logo.jpg";
// useLocation is a react router hook that has an object that contains the current/active route/page

const Navlinks = ({className}) => {
  const location = useLocation();
  console.log(location)
  const activeRoute = location.pathname

  const links = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/about",
      name: "About",
    },
    {
      path: "/destination",
      name: "Destinations",
    },
    {
      path: "/contact",
      name: "Contact",
    },
  ];
  return (
    <div className={`hidden custom1:flex items-center gap-5 ${className}`}>
      <img
        src={logo}
        alt="brand logo"
        width="35"
        height="35"
        className="cursor-pointer smallBP:hidden semiBP:block custom:block custom1:block"
      />
      {links.map((link, index) => (
        <div className="group relative h-[30px]" key={`${link.name}-${index}`}>
          <Link
            to={link.path}
            className={`text-base transition duration-300 hover:text-red active:text-red ${
              activeRoute === link.path ? "text-red" : "text-black"
            }`}
          >
            {link.name}
          </Link>
          <span className="absolute z-20 bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-red duration-200 ease-in-out group-hover:w-full"></span>
        </div>
      ))}
    </div>
  );
}

export default Navlinks

