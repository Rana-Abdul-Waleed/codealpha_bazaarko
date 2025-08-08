import React, { useState } from "react";
import { motion } from "framer-motion";
import { dummy_products_data, top_categories_2 } from "../assets.js";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const Products = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [likedProductIds, setLikedProductIds] = useState([]);
  const [animateId, setAnimateId] = useState(null);

  const handleLike = (id) => {
    if (likedProductIds.includes(id)) {
      setLikedProductIds(likedProductIds.filter((pid) => pid !== id));
    } else {
      setLikedProductIds([...likedProductIds, id]);
      setAnimateId(id);
      toast.success("Added to Liked Products");
      setTimeout(() => setAnimateId(null), 500); // Reset animation after 500ms
    }
  };

  return (
    <div className="flex flex-col gap-10 mb-6 md:mb-10">
      {/* top categories */}
      <div className="flex flex-col px-6 sm:px-8 md:px-16 lg:px-24 mt-2 md:mt-8">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.2,
          }}
          className="flex flex-row items-center justify-between mb-10"
        >
          <div className="flex items-center justify-between gap-2">
            <span className="text-pink-500 font-extrabold text-lg">—</span>
            <h1 className="text-xl md:text-3xl font-bold text-gray-800">
              Top Categories
            </h1>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.4,
          }}
          className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-4"
        >
          {top_categories_2.map((item) => (
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
        </motion.div>
      </div>

      {/* all products */}
      <div className="flex flex-col px-6 sm:px-8 md:px-16 lg:px-24 mt-16">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.2,
          }}
          className="flex flex-row items-center justify-between mb-10"
        >
          <div className="flex items-center justify-between gap-2">
            <span className="text-pink-500 font-extrabold text-lg">—</span>
            <h1 className="text-xl md:text-3xl font-bold text-gray-800">
              Featured Products
            </h1>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.4,
          }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
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
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
