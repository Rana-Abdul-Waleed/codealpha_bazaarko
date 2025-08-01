import React from "react";
import { Link } from "react-router-dom";
import { hero_assests } from "../assets.js";

const Home = () => {
  return (
    <div className="flex flex-col gap-10 mb-6 md:mb-10">
      {/* hero section */}
      <div className="flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-8 items-center justify-around bg-gray-100 min-h-screen md:py-8 px-4 sm:px-6 md:px-12 lg:px-20 md:-mt-10">
        {/* left */}
        <div className="max-w-[540px] flex flex-col gap-3 items-center sm:items-start">
          <p className="text-pink-600 text-[12px] sm:text-[13px] md:text-[14px]">
            Best Furniture For Your Castle
          </p>
          <h1 className="text-[28px] sm:text-[30px] md:text-[32px] lg:text-[44px] font-bold text-gray-800 text-center sm:text-start">
            New Furniture Collection Trends in 2025
          </h1>
          <p className="text-[12px] sm:text-[13px] md:text-[14px] text-gray-500 text-center sm:text-justify">
            Discover the latest in furniture design with our 2025 collection,
            blending modern aesthetics with smart functionality.
          </p>
          <Link
            to="/products"
            className="mt-2 bg-pink-500 hover:bg-pink-600 max-w-28 w-full  text-center px-4 py-2 text-white text-[13px] transition duration-200 rounded-sm items-center"
          >
            Shop Now
          </Link>
        </div>

        {/* right */}
        <div className="flex flex-col items-center">
          <img
            src={hero_assests.hero1}
            alt="Comfortable sofa"
            className="w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] drop-shadow-[0_30px_20px_rgba(0,0,0,0.25)]"
          />
        </div>
      </div>

      {/* featured products */}
      <div>featured products</div>

      {/* latest products */}
      <div>latest products</div>

      {/* trending products */}
      <div>trending products</div>

      {/* What bazaarko offers */}
      <div>What bazaarko offers</div>

      {/* best selling product */}
      <div>best selling product</div>

      {/* discounted items */}
      <div>discounted items</div>
    </div>
  );
};

export default Home;
