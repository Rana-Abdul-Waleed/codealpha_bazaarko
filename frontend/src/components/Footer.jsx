import React from "react";
import {
  FaCcMastercard,
  FaCcPaypal,
  FaCcStripe,
  FaCcVisa,
  FaCreditCard,
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gray-100 flex flex-col px-6 sm:px-8 md:px-16 lg:px-24 py-6">
      {/* first div */}
      <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-8">
        {/* left/top div */}
        <div className="flex flex-col w-full md:max-w-60 lg:max-w-72 xl:max-w-96 gap-4 md:gap-5 lg:gap-7">
          {/* Website Logo/Name */}
          <Link
            to="/"
            className="flex flex-col text-[20px] sm:text-[24px] md:text-[26px] font-extrabold text-gray-800 hover:text-pink-600 transition duration-300"
          >
            <span className="tracking-tight drop-shadow-sm">BazaarKo</span>
            <span className="text-[7px] sm:text-[8px] md:text-[9px] tracking-widest text-pink-500 font-medium animate-pulse">
              APNA DIGITAL BAZAAR
            </span>
          </Link>

          {/* Website description */}
          <p className="text-justify text-gray-700 text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px]">
            Shop top-quality fashion, electronics, home essentials, and more —
            all in one place. Enjoy secure payments, fast delivery, and
            unbeatable deals with BazaarKo.
          </p>

          {/* social media links */}
          <div className="flex gap-4 justify-start">
            <a
              href="https://www.facebook.com"
              target="_blank"
              className="bg-gray-300 rounded-full p-2 hover:bg-pink-500 hover:text-white hover:scale-105 transition duration-200 ease-in-out"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              className="bg-gray-300 rounded-full p-2 hover:bg-pink-500 hover:text-white hover:scale-105 transition duration-200 ease-in-out"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              className="bg-gray-300 rounded-full p-2 hover:bg-pink-500 hover:text-white hover:scale-105 transition duration-200 ease-in-out"
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              className="bg-gray-300 rounded-full p-2 hover:bg-pink-500 hover:text-white hover:scale-105 transition duration-200 ease-in-out"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.github.com"
              target="_blank"
              className="bg-gray-300 rounded-full p-2 hover:bg-pink-500 hover:text-white hover:scale-105 transition duration-200 ease-in-out"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        {/* right/bottom div */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 xl:gap-10">
          {/* 1st section */}
          <div className="flex flex-col justify-between text-center gap-1">
            <h1 className="mb-2 text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] font-bold text-gray-800">
              Company
            </h1>
            <Link className="text-[14px] md:text-[15px] lg:text-[16px] text-gray-700 hover:text-pink-700 hover:underline">
              About
            </Link>
            <Link className="text-[14px] md:text-[15px] lg:text-[16px] text-gray-700 hover:text-pink-700 hover:underline">
              Features
            </Link>
            <Link className="text-[14px] md:text-[15px] lg:text-[16px] text-gray-700 hover:text-pink-700 hover:underline">
              Work
            </Link>
            <Link className="text-[14px] md:text-[15px] lg:text-[16px] text-gray-700 hover:text-pink-700 hover:underline">
              Career
            </Link>
          </div>

          {/* 2nd section */}
          <div className="flex flex-col justify-between text-center gap-1">
            <h1 className="mb-2 text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] font-bold text-gray-800">
              Help
            </h1>
            <Link className="text-[14px] md:text-[15px] lg:text-[16px] text-gray-700 hover:text-pink-700 hover:underline">
              Customer Support
            </Link>
            <Link className="text-[14px] md:text-[15px] lg:text-[16px] text-gray-700 hover:text-pink-700 hover:underline">
              Delivery Details
            </Link>
            <Link className="text-[14px] md:text-[15px] lg:text-[16px] text-gray-700 hover:text-pink-700 hover:underline">
              Terms & Conditions
            </Link>
            <Link className="text-[14px] md:text-[15px] lg:text-[16px] text-gray-700 hover:text-pink-700 hover:underline">
              Privacy Policy
            </Link>
          </div>

          {/* 3rd section */}
          <div className="flex flex-col justify-between text-center gap-1">
            <h1 className="mb-2 text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] font-bold text-gray-800">
              FAQ
            </h1>
            <Link className="text-[14px] md:text-[15px] lg:text-[16px] text-gray-700 hover:text-pink-700 hover:underline">
              Account
            </Link>
            <Link className="text-[14px] md:text-[15px] lg:text-[16px] text-gray-700 hover:text-pink-700 hover:underline">
              Manage Deliveries
            </Link>
            <Link className="text-[14px] md:text-[15px] lg:text-[16px] text-gray-700 hover:text-pink-700 hover:underline">
              Orders
            </Link>
            <Link className="text-[14px] md:text-[15px] lg:text-[16px] text-gray-700 hover:text-pink-700 hover:underline">
              Payments
            </Link>
          </div>

          {/* 4th section */}
          <div className="flex flex-col justify-between text-center gap-1">
            <h1 className="mb-2 text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] font-bold text-gray-800">
              Resources
            </h1>
            <Link className="text-[14px] md:text-[15px] lg:text-[16px] text-gray-700 hover:text-pink-700 hover:underline">
              Free eBooks
            </Link>
            <Link className="text-[14px] md:text-[15px] lg:text-[16px] text-gray-700 hover:text-pink-700 hover:underline">
              Development Tutorial
            </Link>
            <Link className="text-[14px] md:text-[15px] lg:text-[16px] text-gray-700 hover:text-pink-700 hover:underline">
              How to - Blog
            </Link>
            <Link className="text-[14px] md:text-[15px] lg:text-[16px] text-gray-700 hover:text-pink-700 hover:underline">
              Youtube Playlist
            </Link>
          </div>
        </div>
      </div>

      <hr className="border-t-2 rounded-lg border-pink-400 mt-10 mb-4" />

      {/* second div */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        {/* rights information */}
        <p className="text-gray-700 text-sm">
          BazaarKo.com &copy; {new Date().getFullYear()}. All rights reserved.
        </p>

        {/* developer information */}
        <div className="flex items-center justify-between gap-2 text-sm text-gray-700">
          <p className="flex items-center justify-between gap-1">
            <FaEnvelope className="text-blue-700" /> alwaleedfsd@gmail.com
          </p>
          <span>|</span>
          <p className="flex items-center justify-between gap-1">
            <FaWhatsapp className="text-green-700" /> +923013933835
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
