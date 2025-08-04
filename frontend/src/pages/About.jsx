import React from "react";
import { FaHeadset, FaLock, FaTruck, FaUndoAlt } from "react-icons/fa";
import about_image_1 from "../assets/about_us/about_image_1.jpg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="flex flex-col gap-8 px-6 sm:px-8 md:px-16 lg:px-24 py-2 sm:py-3 md:py-8">
      {/* Know about our business */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-4 lg:gap-2 items-center justify-around">
        {/* left/top */}
        <div className="flex flex-col justify-between gap-3 xl:gap-5 items-center md:items-start lg:w-[500px] xl:w-[600px]">
          <h1 className="text-gray-800 font-bold text-[18px] md:text-[20px] lg:text-[22px] xl:text-[26px] text-center md:text-left">
            From Vision to Reality: The MegBazaar Evolution
          </h1>
          <p className="text-justify text-gray-600 text-[12px] md:text-[13px] lg:text-[14px] xl:text-[16px]">
            At MegBazaar, we started with a bold vision — to bring convenience,
            variety, and value to your fingertips. From a small digital idea to
            a growing nationwide platform, our journey is built on trust,
            innovation, and a deep understanding of what shoppers need. Every
            product, every deal, and every delivery reflects our commitment to
            making your shopping experience seamless, secure, and satisfying.
          </p>
          <Link
            to="/contact-us"
            className="mt-2 lg:mt-0 bg-pink-500 hover:bg-pink-600 max-w-28 w-full  text-center px-4 py-2 text-white text-[13px] transition duration-200 rounded-md items-center"
          >
            Contact us
          </Link>
        </div>

        {/* right/bottom */}
        <img
          src={about_image_1}
          alt="Know about us"
          className="w-[250px] h-[250px] sm:w-[275px] sm:h-[275px] lg:w-[300px] lg:h-[300px] xl:w-[450px] xl:h-[300px] rounded-md shadow-lg"
        />
      </div>

      {/* our features */}
      <div className="flex flex-col gap-4 my-2">
        <h1 className="text-xl md:text-3xl font-bold text-gray-800 text-center">
          Our Features
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
          {/* 24/7 Customer Support */}
          <div className="flex flex-col items-center justify-around gap-4 text-center bg-gray-100 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105 px-2 py-4 rounded-md shadow-md hover:shadow-lg">
            <FaHeadset className="text-pink-600 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16" />
            <h2 className="text-gray-800 font-bold text-sm md:text-lg lg:text-xl">
              24/7 Customer Support
            </h2>
            <p className="text-gray-600 text-xs md:text-sm">
              Get assistance anytime. Our dedicated support team is available
              24/7 to help you with your orders, returns, or questions.
            </p>
          </div>

          {/* Easy Returns & Refunds */}
          <div className="flex flex-col items-center justify-around gap-4 text-center bg-gray-100 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105 px-2 py-4 rounded-md shadow-md hover:shadow-lg">
            <FaUndoAlt className="text-pink-600 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16" />
            <h2 className="text-gray-800 font-bold text-sm md:text-lg lg:text-xl">
              Easy Returns & Refunds
            </h2>
            <p className="text-gray-600 text-xs md:text-sm">
              Not satisfied with your purchase? Enjoy hassle-free returns and
              quick refunds to make your shopping experience stress-free.
            </p>
          </div>

          {/* Secure Online Payments */}
          <div className="flex flex-col items-center justify-around gap-4 text-center bg-gray-100 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105 px-2 py-4 rounded-md shadow-md hover:shadow-lg">
            <FaLock className="text-pink-600 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16" />
            <h2 className="text-gray-800 font-bold text-sm md:text-lg lg:text-xl">
              Secure Online Payments
            </h2>
            <p className="text-gray-600 text-xs md:text-sm">
              Shop with confidence. We ensure your transactions are encrypted
              and protected with top-tier security standards.
            </p>
          </div>

          {/* Nationwide Delivery */}
          <div className="flex flex-col items-center justify-around gap-4 text-center bg-gray-100 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105 px-2 py-4 rounded-md shadow-md hover:shadow-lg">
            <FaTruck className="text-pink-600 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16" />
            <h2 className="text-gray-800 font-bold text-sm md:text-lg lg:text-xl">
              Nationwide Delivery
            </h2>
            <p className="text-gray-600 text-xs md:text-sm">
              We deliver across Pakistan—fast, reliable, and affordable shipping
              right to your doorstep, no matter where you live.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
