import React, { useState, useEffect } from "react";
import Brand from "../brand/Brand";
import Moon from "../icons/Moon";
import Btn from "../btn/Btn";
import { FaBars, FaSquareXmark } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import logo from "../../../public/images/logo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
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
    <div>
      <div className="bg-light dark:bg-darkBg w-full px-20 sticky top-0 left-0 right-0 z-50 overflow-hidden">
        <div className="flex items-center justify-between h-20 w-full mx-auto">
          <Brand />
          <div className="hidden custom1:flex items-center gap-5">
            <img
              src={logo}
              alt="brand logo"
              width="35"
              height="35"
              className="cursor-pointer smallBP:hidden semiBP:block custom:block custom1:block"
            />

            {links.map((link, index) => (
              <div
                className="group relative h-[30px]"
                key={`${link.name}-${index}`}
              >
                <Link
                  to={link.path}
                  className={`text-base transition duration-300 hover:text-red active:text-red ${
                    activeRoute === link.path ? "text-red" : "text-black"
                  } dark:text-darkText`}
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
              {isOpen ? <FaSquareXmark /> : <FaBars className="" />}
            </div>
            <Moon
              className="order-1 custom1:order-2 cursor-pointer"
              onClick={handleThemeSwitch}
            />
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="flex flex-col items-center basis-full bg-light dark:bg-darkBg space-y-4 pb-4">
          {links.map((link, index) => (
            <div
              className="group relative h-[30px]"
              key={`${link.name}-${index}`}
            >
              <Link
                to={link.path}
                className={`text-base transition duration-300 hover:text-red active:text-red ${
                  activeRoute === link.path ? "text-red" : "text-black"
                } dark:text-darkText`}
              >
                {link.name}
              </Link>
              <span className="absolute z-20 bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-red duration-200 ease-in-out group-hover:w-full"></span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;

// import React, { useState, useEffect } from "react";
// import Brand from '../brand/Brand'
// import Moon from "../icons/Moon";
// import Btn from '../btn/Btn';
// import { FaBars, FaSquareXmark } from "react-icons/fa6";
// import { Link } from 'react-router-dom';
// import { useLocation } from "react-router-dom";
// import logo from "../../../public/images/logo.jpg";
// useLocation is a react router hook that has an object that contains the current/active route/page

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false)
//   const [theme, setTheme] = useState("light");

//   useEffect(() => {
//     if (theme === "dark") {
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }
//   }, [theme]);

//   const handleThemeSwitch = () => {
//     setTheme(theme === "dark" ? "light" : "dark");
//   };

//   const location = useLocation();
//   console.log(location);
//   const activeRoute = location.pathname;

//   const links = [
//     {
//       path: "/",
//       name: "Home",
//     },
//     {
//       path: "/about",
//       name: "About",
//     },
//     {
//       path: "/destination",
//       name: "Destinations",
//     },
//     {
//       path: "/contact",
//       name: "Contact",
//     },
//   ];
//   const toggleBtn = () => {
//     setIsOpen(!isOpen)
//   }

//   return (
//     <div>
//       <div className=" bg-light w-full px-20 sticky top-0 left-0 right-0 z-50 overflow-hidden">
//         <div className="flex items-center justify-between h-20 w-full mx-auto">
//           <Brand />
//           <div className="hidden custom1:flex items-center gap-5">
//             <img
//               src={logo}
//               alt="brand logo"
//               width="35"
//               height="35"
//               className="cursor-pointer smallBP:hidden semiBP:block custom:block custom1:block"
//             />

//             {links.map((link, index) => (
//               <div
//                 className="group relative h-[30px]"
//                 key={`${link.name}-${index}`}
//               >
//                 <Link
//                   to={link.path}
//                   className={`text-base transition duration-300 hover:text-red active:text-red ${
//                     activeRoute === link.path ? "text-red" : "text-black"
//                   }`}
//                 >
//                   {link.name}
//                 </Link>
//                 <span className="absolute z-20 bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-red duration-200 ease-in-out group-hover:w-full"></span>
//               </div>
//             ))}
//           </div>
//           <div className="flex items-center gap-4">
//             <Btn text="Get in Touch" isMainColor />
//             <div onClick={toggleBtn} className="lg:hidden cursor-pointer">
//               {isOpen ? <FaSquareXmark /> : <FaBars className="" />}
//             </div>

//             <Moon
//               className="order-1 custom1:order-2 cursor-pointer"
//               onClick={handleThemeSwitch}
//             />
//           </div>
//         </div>
//       </div>

//       {isOpen && (
//         <div className="flex flex-col items-center basis-full bg-light space-y-4 pb-4">

//           {links.map((link, index) => (
//             <div
//               className="group relative h-[30px]"
//               key={`${link.name}-${index}`}
//             >
//               <Link
//                 to={link.path}
//                 className={`text-base transition duration-300 hover:text-red active:text-red ${
//                   activeRoute === link.path ? "text-red" : "text-black"
//                 }`}
//               >
//                 {link.name}
//               </Link>
//               <span className="absolute z-20 bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-red duration-200 ease-in-out group-hover:w-full"></span>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Navbar
