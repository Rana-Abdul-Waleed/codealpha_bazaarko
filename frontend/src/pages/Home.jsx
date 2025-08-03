import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  dummy_product_offer,
  dummy_products_data,
  hero_assests,
  top_categories,
} from "../assets.js";
import {
  FaRegHeart,
  FaHeart,
  FaGreaterThan,
  FaHeadset,
  FaUndoAlt,
  FaLock,
  FaTruck,
} from "react-icons/fa";

const Home = () => {
  const heroImages = Object.values(hero_assests);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [likedProductIds, setLikedProductIds] = useState([]);
  const [animateId, setAnimateId] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);

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
            Explore thousands of premium products across fashion, electronics,
            home essentials, beauty, and more — all curated to elevate your
            everyday life. Shop smart, shop fast, and enjoy doorstep delivery,
            secure payments, and unbeatable deals — only at BazaarKo.
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

      {/* top categories */}
      <div className="flex flex-col px-6 sm:px-8 md:px-16 lg:px-24 my-2">
        <div className="flex flex-row items-center justify-between mb-10">
          <div className="flex items-center justify-between gap-2">
            <span className="text-pink-500 font-extrabold text-lg">—</span>
            <h1 className="text-xl md:text-3xl font-bold text-gray-800">
              Top Categories
            </h1>
          </div>
          <Link
            to="/products"
            className="flex items-center justify-between gap-2 text-blue-400 hover:text-blue-600 transition duration-200 hover:underline"
          >
            <p className="text-sm md:text-lg">View All</p>
            <FaGreaterThan className="text-xs md:text-sm" />
          </Link>
        </div>

        <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-4">
          {top_categories.map((item) => (
            <div
              key={item.c_id}
              className="flex flex-col items-center justify-center gap-6 group cursor-pointer"
              onClick={() => setActiveCategory(item.c_id)}
            >
              <div
                className={`w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-24 lg:h-24 xl:w-28 xl:h-28 rounded-full flex items-center justify-center shadow-md transition duration-300 relative p-3 bg-gray-100
                ${
                  activeCategory === item.c_id
                    ? "border-4 border-pink-300 scale-105"
                    : "border-4 border-gray-300"
                } hover:scale-105 hover:border-pink-300`}
              >
                <img
                  src={item.c_image}
                  alt={item.c_name}
                  className="w-full object-cover"
                />
              </div>
              <p className="text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] font-medium text-gray-800 text-center">
                {item.c_name}
              </p>
            </div>
          ))}
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
            className="flex items-center justify-between gap-2 text-blue-400 hover:text-blue-600 transition duration-200 hover:underline"
          >
            <p className="text-sm md:text-lg">View All</p>
            <FaGreaterThan className="text-xs md:text-sm" />
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
            className="flex items-center justify-between gap-2 text-blue-400 hover:text-blue-600 transition duration-200 hover:underline"
          >
            <p className="text-sm md:text-lg">View All</p>
            <FaGreaterThan className="text-xs md:text-sm" />
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
      <div className="flex flex-col gap-4 px-6 sm:px-8 md:px-16 lg:px-24 my-2">
        <div className="flex items-center justify-start gap-2">
          <span className="text-pink-500 font-extrabold text-lg">—</span>
          <h1 className="text-xl md:text-3xl font-bold text-gray-800">
            What <span className="text-pink-500">BazaarKo</span> Offers!
          </h1>
        </div>

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
            className="flex items-center justify-between gap-2 text-blue-400 hover:text-blue-600 transition duration-200 hover:underline"
          >
            <p className="text-sm md:text-lg">View All</p>
            <FaGreaterThan className="text-xs md:text-sm" />
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

      {/* product offer banner */}
      <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-center justify-around text-gray-100 py-4 md:py-6 px-4 sm:px-6 md:px-20 lg:px-24 mx-6 sm:mx-8 md:mx-16 lg:mx-44 rounded-md bg-gray-800 shadow-lg">
        {/* left */}
        <div className="flex flex-col items-center md:items-start gap-2 md:gap-3 lg:gap-4 min-w-96">
          <h2 className="text-xs md:text-sm lg:text-xl">
            Best Deal Online on Smart Watches
          </h2>
          <h1 className="text-gray-200 text-xl md:text-2xl lg:text-5xl">
            SMART WEARABLE
          </h1>
          <h2 className="text-xs md:text-sm lg:text-[18px]">Upto 80% OFF</h2>
          <Link
            to="/products"
            className="mt-2 bg-pink-500 hover:bg-pink-600 max-w-28 w-full  text-center px-4 py-2 text-gray-100 text-[13px] transition duration-200 rounded-md items-center"
          >
            Shop Now
          </Link>
        </div>

        {/* right */}
        <div className="flex items-center justify-center text-center">
          <img src={dummy_product_offer.po_1} alt="Best Smartwatch" />
        </div>
      </div>

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
            className="flex items-center justify-between gap-2 text-blue-400 hover:text-blue-600 transition duration-200 hover:underline"
          >
            <p className="text-sm md:text-lg">View All</p>
            <FaGreaterThan className="text-xs md:text-sm" />
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
