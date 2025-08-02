import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { dummy_products_data, hero_assests } from "../assets.js";
import { FaRegHeart, FaHeart } from "react-icons/fa";

const Home = () => {
  const heroImages = Object.values(hero_assests);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [likedProductIds, setLikedProductIds] = useState([]);
  const [animateId, setAnimateId] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000); // Change image every 3 seconds
    return () => clearInterval(interval); // Cleanup
  }, []);

  const handleLike = (id) => {
    if (likedProductIds.includes(id)) {
      setLikedProductIds(likedProductIds.filter((pid) => pid !== id));
    } else {
      setLikedProductIds([...likedProductIds, id]);
      setAnimateId(id);
      setTimeout(() => setAnimateId(null), 500); // Reset animation after 500ms
    }
  };

  return (
    <div className="flex flex-col gap-10 mb-6 md:mb-10">
      {/* hero section */}
      <div className="flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-8 items-center justify-around bg-gray-200 min-h-72 py-8 px-4 sm:px-6 md:px-12 lg:px-20 mx-4 md:mx-6 lg:mx-8 mt-0 md:mt-6 lg:mt-8 rounded-md">
        {/* left */}
        <div className="max-w-[350px] sm:max-w-[400px] md:max-w-[350px] lg:max-w-[540px] flex flex-col gap-3 items-center sm:items-start">
          <p className="text-pink-600 text-[12px] sm:text-[13px] md:text-[14px] italic">
            Everything You Need, All in One Place
          </p>
          <h1 className="text-[28px] sm:text-[30px] md:text-[32px] lg:text-[44px] font-bold text-gray-800 text-center sm:text-start">
            BazaarKo - Har Cheez, Ek Jagah!
          </h1>
          <p className="text-[12px] sm:text-[13px] md:text-[14px] text-gray-500 text-center sm:text-justify">
            Discover top-quality products in fashion, electronics, home décor,
            and more — handpicked to match your lifestyle and delivered to your
            door.
          </p>
          <Link
            to="/products"
            className="mt-2 bg-pink-500 hover:bg-pink-600 max-w-28 w-full  text-center px-4 py-2 text-white text-[13px] transition duration-200 rounded-md items-center"
          >
            Shop Now
          </Link>
        </div>

        {/* right */}
        {/* right (slider) */}
        <div className="flex flex-col items-center">
          <img
            src={heroImages[currentImageIndex]}
            alt="Comfortable sofa"
            className="w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] drop-shadow-[0_30px_20px_rgba(0,0,0,0.25)] transition duration-800 ease-in-out"
          />
        </div>
      </div>

      {/* featured products */}
      <div className="flex flex-col px-6 sm:px-8 md:px-16 lg:px-24 my-2">
        <div className="flex flex-row items-center justify-between mb-10">
          <div className="flex items-center justify-between gap-2">
            <span className="text-pink-500 font-extrabold text-lg">—</span>
            <h1 className="text-xl md:text-3xl font-bold text-gray-800">
              Featured Products
            </h1>
          </div>
          <Link
            to="/products"
            className="text-sm md:text-lg text-blue-400 underline hover:text-blue-600 transition duration-300"
          >
            View All
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {dummy_products_data.map((item) => (
            <div
              key={item.p_id}
              className="bg-gray-100 rounded-md shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              {/* Product Image */}
              <img
                src={item.p_image}
                alt={item.p_name}
                className="w-full h-[220px] object-cover cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
              />

              {/* Product Info */}
              <div className="p-4 flex flex-col gap-2">
                <div className="flex justify-between items-center font-semibold text-gray-800 gap-3">
                  <h2 className="truncate max-w-[150px] sm:max-w-[180px]">
                    {item.p_name}
                  </h2>
                  <div className="flex flex-col items-center">
                    <p className="text-gray-500 text-[13px] line-through">
                      {item.p_price}
                    </p>
                    <p className="text-black text-[15px]">
                      {item.p_disc_price}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 truncate">{item.p_desc}</p>

                {/* Rating */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center text-yellow-500 text-sm gap-1 mt-1">
                    <span>⭐</span>
                    <span>⭐</span>
                    <span>⭐</span>
                    <span>⭐</span>
                    <span>⭐</span>
                    <span className="text-gray-500 ml-1">(12)</span>
                  </div>

                  {/* Heart Button */}
                  <button
                    onClick={() => handleLike(item.p_id)}
                    className={`transition duration-200 relative ${
                      animateId === item.p_id ? "animate-ping" : ""
                    }`}
                  >
                    {likedProductIds.includes(item.p_id) ? (
                      <FaHeart className="text-pink-500 text-[18px]" />
                    ) : (
                      <FaRegHeart className="hover:text-pink-500 text-[18px] transition-colors" />
                    )}
                  </button>
                </div>

                {/* View Details Button */}
                <Link
                  to="/product-details"
                  className="mt-3 w-full text-center border border-pink-500 hover:border-pink-600 bg-pink-500 hover:bg-pink-600 text-sm text-white py-1.5 rounded-md transition duration-300"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* What bazaarko offers */}
      <div>What bazaarko offers</div>

      {/* latest products */}
      <div className="flex flex-col px-6 sm:px-8 md:px-16 lg:px-24 my-2">
        <div className="flex flex-row items-center justify-between mb-10">
          <div className="flex items-center justify-between gap-2">
            <span className="text-pink-500 font-extrabold text-lg">—</span>
            <h1 className="text-xl md:text-3xl font-bold text-gray-800">
              Latest Products
            </h1>
          </div>
          <Link
            to="/products"
            className="text-sm md:text-lg text-blue-400 underline hover:text-blue-600 transition duration-300"
          >
            View All
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {dummy_products_data.map((item) => (
            <div
              key={item.p_id}
              className="bg-gray-100 rounded-md shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              {/* Product Image */}
              <img
                src={item.p_image}
                alt={item.p_name}
                className="w-full h-[220px] object-cover cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
              />

              {/* Product Info */}
              <div className="p-4 flex flex-col gap-2">
                <div className="flex justify-between items-center font-semibold text-gray-800 gap-3">
                  <h2 className="truncate max-w-[150px] sm:max-w-[180px]">
                    {item.p_name}
                  </h2>
                  <div className="flex flex-col items-center">
                    <p className="text-gray-500 text-[13px] line-through">
                      {item.p_price}
                    </p>
                    <p className="text-black text-[15px]">
                      {item.p_disc_price}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 truncate">{item.p_desc}</p>

                {/* Rating */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center text-yellow-500 text-sm gap-1 mt-1">
                    <span>⭐</span>
                    <span>⭐</span>
                    <span>⭐</span>
                    <span>⭐</span>
                    <span>⭐</span>
                    <span className="text-gray-500 ml-1">(12)</span>
                  </div>

                  {/* Heart Button */}
                  <button
                    onClick={() => handleLike(item.p_id)}
                    className={`transition duration-200 relative ${
                      animateId === item.p_id ? "animate-ping" : ""
                    }`}
                  >
                    {likedProductIds.includes(item.p_id) ? (
                      <FaHeart className="text-pink-500 text-[18px]" />
                    ) : (
                      <FaRegHeart className="hover:text-pink-500 text-[18px] transition-colors" />
                    )}
                  </button>
                </div>

                {/* View Details Button */}
                <Link
                  to="/product-details"
                  className="mt-3 w-full text-center border border-pink-500 hover:border-pink-600 bg-pink-500 hover:bg-pink-600 text-sm text-white py-1.5 rounded-md transition duration-300"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* trending products */}
      <div className="flex flex-col px-6 sm:px-8 md:px-16 lg:px-24 my-2">
        <div className="flex flex-row items-center justify-between mb-10">
          <div className="flex items-center justify-between gap-2">
            <span className="text-pink-500 font-extrabold text-lg">—</span>
            <h1 className="text-xl md:text-3xl font-bold text-gray-800">
              Trending Products
            </h1>
          </div>
          <Link
            to="/products"
            className="text-sm md:text-lg text-blue-400 underline hover:text-blue-600 transition duration-300"
          >
            View All
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {dummy_products_data.map((item) => (
            <div
              key={item.p_id}
              className="bg-gray-100 rounded-md shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              {/* Product Image */}
              <img
                src={item.p_image}
                alt={item.p_name}
                className="w-full h-[220px] object-cover cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
              />

              {/* Product Info */}
              <div className="p-4 flex flex-col gap-2">
                <div className="flex justify-between items-center font-semibold text-gray-800 gap-3">
                  <h2 className="truncate max-w-[150px] sm:max-w-[180px]">
                    {item.p_name}
                  </h2>
                  <div className="flex flex-col items-center">
                    <p className="text-gray-500 text-[13px] line-through">
                      {item.p_price}
                    </p>
                    <p className="text-black text-[15px]">
                      {item.p_disc_price}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 truncate">{item.p_desc}</p>

                {/* Rating */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center text-yellow-500 text-sm gap-1 mt-1">
                    <span>⭐</span>
                    <span>⭐</span>
                    <span>⭐</span>
                    <span>⭐</span>
                    <span>⭐</span>
                    <span className="text-gray-500 ml-1">(12)</span>
                  </div>

                  {/* Heart Button */}
                  <button
                    onClick={() => handleLike(item.p_id)}
                    className={`transition duration-200 relative ${
                      animateId === item.p_id ? "animate-ping" : ""
                    }`}
                  >
                    {likedProductIds.includes(item.p_id) ? (
                      <FaHeart className="text-pink-500 text-[18px]" />
                    ) : (
                      <FaRegHeart className="hover:text-pink-500 text-[18px] transition-colors" />
                    )}
                  </button>
                </div>

                {/* View Details Button */}
                <Link
                  to="/product-details"
                  className="mt-3 w-full text-center border border-pink-500 hover:border-pink-600 bg-pink-500 hover:bg-pink-600 text-sm text-white py-1.5 rounded-md transition duration-300"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* product banner */}
      <div>banner</div>

      {/* most selling products */}
      <div className="flex flex-col px-6 sm:px-8 md:px-16 lg:px-24 my-2">
        <div className="flex flex-row items-center justify-between mb-10">
          <div className="flex items-center justify-between gap-2">
            <span className="text-pink-500 font-extrabold text-lg">—</span>
            <h1 className="text-xl md:text-3xl font-bold text-gray-800">
              Most Selling Products
            </h1>
          </div>
          <Link
            to="/products"
            className="text-sm md:text-lg text-blue-400 underline hover:text-blue-600 transition duration-300"
          >
            View All
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {dummy_products_data.map((item) => (
            <div
              key={item.p_id}
              className="bg-gray-100 rounded-md shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              {/* Product Image */}
              <img
                src={item.p_image}
                alt={item.p_name}
                className="w-full h-[220px] object-cover cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
              />

              {/* Product Info */}
              <div className="p-4 flex flex-col gap-2">
                <div className="flex justify-between items-center font-semibold text-gray-800 gap-3">
                  <h2 className="truncate max-w-[150px] sm:max-w-[180px]">
                    {item.p_name}
                  </h2>
                  <div className="flex flex-col items-center">
                    <p className="text-gray-500 text-[13px] line-through">
                      {item.p_price}
                    </p>
                    <p className="text-black text-[15px]">
                      {item.p_disc_price}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 truncate">{item.p_desc}</p>

                {/* Rating */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center text-yellow-500 text-sm gap-1 mt-1">
                    <span>⭐</span>
                    <span>⭐</span>
                    <span>⭐</span>
                    <span>⭐</span>
                    <span>⭐</span>
                    <span className="text-gray-500 ml-1">(12)</span>
                  </div>

                  {/* Heart Button */}
                  <button
                    onClick={() => handleLike(item.p_id)}
                    className={`transition duration-200 relative ${
                      animateId === item.p_id ? "animate-ping" : ""
                    }`}
                  >
                    {likedProductIds.includes(item.p_id) ? (
                      <FaHeart className="text-pink-500 text-[18px]" />
                    ) : (
                      <FaRegHeart className="hover:text-pink-500 text-[18px] transition-colors" />
                    )}
                  </button>
                </div>

                {/* View Details Button */}
                <Link
                  to="/product-details"
                  className="mt-3 w-full text-center border border-pink-500 hover:border-pink-600 bg-pink-500 hover:bg-pink-600 text-sm text-white py-1.5 rounded-md transition duration-300"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
