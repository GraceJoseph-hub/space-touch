import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full px-20 py-10">
      <div className="flex justify-between pb-10">
        <div className="text-gray-800">
          <h2 className="text-lg font-bold mb-4">Company</h2>
          <ul>
            <li className="mb-2">
              <Link to="/" className="hover:text-amber">
                Home
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/about" className="hover:text-amber">
                About Us
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/services" className="hover:text-amber">
                Services
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/contact" className="hover:text-amber">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className=" text-gray-800">
          <h2 className="text-lg font-bold mb-4">Newsletter</h2>
          <form className=" flex flex-col gap-y-5 w-[33.2rem] mb-2 bg-white p-6 rounded-md shadow-md">
            <p>Get latest updates and offers.</p>
            <div className="flex gap-x-2">
              <input
                type="email"
                placeholder="Email Address"
                className="w-[22.4rem] p-2 bg-off-white border-gray-300 rounded-md focus:outline-none"
              />
              <button
                type="submit"
                className="px-7 py-2 text-light font-bold bg-red rounded-md hover:bg-red-600"
              >
                Go
              </button>
            </div>
            <p className="text-gray-500 text-sm">
              Sign up for our latest news & articles. We won't give you spam
              <br />
              mails.
            </p>
          </form>
        </div>
      </div>
      <hr />
      <div className="flex justify-between mt-7">
        <p>© 2022 Spacetouch Travels. All rights reserved.</p>
        <div className="flex gap-7">
          <Link to="https://web.facebook.com/spacetouchtours?_rdc=1&_rdr" className="p-2 hover:bg-red rounded-full text-center hover:text-light">
            <FaFacebook />
          </Link>
          <Link to="https://x.com/spacetouchTours" className="p-2 hover:bg-red rounded-full text-center hover:text-light">
            <FaTwitter />
          </Link>
          <Link to="https://www.instagram.com/spacetouchtours" className="p-2 hover:bg-red rounded-full text-center hover:text-light">
            <FaInstagram />
          </Link>
          <Link to="https://www.youtube.com/spacetouchtv" className="p-2 hover:bg-red rounded-full text-center hover:text-light">
            <FaYoutube />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;

