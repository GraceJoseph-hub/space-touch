import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={`w-full px-20 py-10 bg-off-white dark:bg-[#111]`}>
      <div className="flex justify-between pb-10">
        <div className="text-gray-800">
          <h2 className="text-lg font-semibold mb-4 dark:text-light">
            Company
          </h2>
          <ul className="">
            <li className="mb-2 ">
              <Link
                to="/"
                className={`hover:text-amber text-grey dark:text-dark text-sm `}
              >
                Home
              </Link>
            </li>
            <li className="mb-2">
              <Link
                to="/about"
                className={`hover:text-amber text-grey dark:text-dark text-sm`}
              >
                About Us
              </Link>
            </li>
            <li className="mb-2">
              <Link
                to="/services"
                className={`hover:text-amber text-grey dark:text-dark text-sm`}
              >
                Services
              </Link>
            </li>
            <li className="mb-2">
              <Link
                to="/contact"
                className={`hover:text-amber text-grey dark:text-dark text-sm`}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="text-gray-800 ">
          <h2 className="text-lg font-semibold mb-4 dark:text-light">
            Newsletter
          </h2>
          <form className="flex flex-col gap-y-5 w-[33.2rem] mb-2 bg-white dark:bg-black p-6 rounded-md shadow-md">
            <p className="dark:text-light">Get latest updates and offers.</p>
            <div className="flex gap-x-2">
              <input
                type="email"
                placeholder="Email Address"
                className="w-[22.4rem] px-4 bg-off-white text-grey text-sm border-gray-300 rounded-md focus:outline-none dark:bg-[#111]"
              />
              <button
                type="submit"
                className="px-7 py-2 font-bold bg-red rounded-md hover:bg-red-600 dark:text-light"
              >
                Go
              </button>
            </div>
            <p className="text-grey text-sm">
              Sign up for our latest news & articles. We won't give you spam
              <br />
              mails.
            </p>
          </form>
        </div>
      </div>
      <hr />
      <div className="flex justify-between mt-7">
        <p className="text-grey text-sm dark:text-dark">
          © 2022 Spacetouch Travels. All rights reserved.
        </p>
        <div className="flex gap-7">
          <Link
            to="https://web.facebook.com/spacetouchtours?_rdc=1&_rdr"
            className="p-2 hover:bg-red rounded-full text-center hover:text-light"
          >
            <FaFacebook className="text-dark dark:text-light" />
          </Link>
          <Link
            to="https://x.com/spacetouchTours"
            className="p-2 hover:bg-red rounded-full text-center hover:text-light"
          >
            <FaTwitter className="text-dark dark:text-light" />
          </Link>
          <Link
            to="https://www.instagram.com/spacetouchtours"
            className="p-2 hover:bg-red rounded-full text-center hover:text-light"
          >
            <FaInstagram className="text-dark dark:text-light" />
          </Link>
          <Link
            to="https://www.youtube.com/spacetouchtv"
            className="p-2 hover:bg-red rounded-full text-center hover:text-light"
          >
            <FaYoutube className="text-dark dark:text-light" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
