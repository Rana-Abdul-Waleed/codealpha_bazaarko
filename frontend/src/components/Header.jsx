import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
// import { useSelector } from "react-redux";

const Header = () => {
  const [activeTab, setActiveTab] = useState("home");
  // const currentUser = true;
  // const currentUser = { isadmin: true };

  return (
    <nav className="flex items-center justify-between px-24 py-2 z-50 border-b border-gray-300 shadow-md">
      {/* Website Logo/Name */}
      <Link
        to="/"
        className="text-[28px] font-bold text-pink-500 hover:text-pink-600"
        onClick={() => setActiveTab("home")}
      >
        BazaarKo
      </Link>

      {/* search bar and search icon */}
      <form className="flex items-center border border-gray-300 rounded-full px-3 py-1 bg-white focus-within:ring-2 focus-within:ring-pink-300">
        <input
          type="text"
          name="search"
          placeholder="Search..."
          className="outline-none border-none bg-transparent placeholder-gray-500 text-sm w-40 focus:ring-0"
        />
        <button type="submit">
          <FaSearch className="text-gray-500 ml-2 cursor-pointer" />
        </button>
      </form>

      {/* ul items */}
      <ul className="flex items-center gap-7 text-sm text-gray-700">
        <li
          className={`hover:text-pink-600 ${
            activeTab === "home" ? "text-pink-500" : "text-gray-700"
          }`}
          onClick={() => setActiveTab("home")}
        >
          <Link to="/">Home</Link>
        </li>
        <li
          className={`hover:text-pink-600 ${
            activeTab === "about" ? "text-pink-500" : "text-gray-700"
          }`}
          onClick={() => setActiveTab("about")}
        >
          <Link to="/about">About</Link>
        </li>
        <li
          className={`hover:text-pink-600 ${
            activeTab === "products" ? "text-pink-500" : "text-gray-700"
          }`}
          onClick={() => setActiveTab("products")}
        >
          <Link to="/products">Products</Link>
        </li>
        <li
          className={`hover:text-pink-600 ${
            activeTab === "contact" ? "text-pink-500" : "text-gray-700"
          }`}
          onClick={() => setActiveTab("contact")}
        >
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      {/* signin, cart icon */}
      {/* <div className="flex items-center gap-10">
        {currentUser && (
          <Link to="/cart">
            <FaShoppingCart className="text-[26px] text-pink-500 cursor-pointer hover:text-pink-600" />
          </Link>
        )}
        <div>
          {currentUser && currentUser.isadmin === true ? (
            <Link to="/dashboard?tab=profile">[AW]</Link>
          ) : (
            <p></p>
          )}
        </div>
        {currentUser !== true ? (
          <Link
            to="/signin"
            className="bg-pink-500 py-2 px-4 rounded-md hover:bg-pink-600 text-white"
            onClick={() => setActiveTab("")}
          >
            Sign In
          </Link>
        ) : (
          ""
        )}
      </div> */}
    </nav>
  );
};

export default Header;
