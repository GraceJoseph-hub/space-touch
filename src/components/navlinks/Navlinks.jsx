import React from 'react'
import { NavLink } from 'react-router-dom';

const Navlinks = () => {
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
    <div className='flex items-center gap-5'>
      {links.map((link, index) => (
        <NavLink to={link.path} key={`${link.name}-${index}`} className='text-base '>
          {link.name}
        </NavLink>
      ))}
    </div>
  );
}

export default Navlinks