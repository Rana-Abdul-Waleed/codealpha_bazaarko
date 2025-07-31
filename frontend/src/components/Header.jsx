import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaSearch,
  FaShoppingCart,
  FaUser,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { useSelector } from "react-redux";

const Header = () => {
  const [activeTab, setActiveTab] = useState("home");
  const { currentUser } = useSelector((state) => state.user);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const dropdownRef = useRef(null);
  const cartCount = 2;

  const userNameFirstLetter = currentUser?.user?.username[0]?.toUpperCase();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowProfileDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <nav className="sticky top-0 bg-white/80 backdrop-blur-sm flex items-center justify-between px-4 sm:px-6 md:px-10 lg:px-20 py-1 z-50 border-b border-gray-200 shadow-md transition-all duration-300">
        {/* Website Logo/Name */}
        <Link
          to="/"
          className="flex flex-col items-center text-[20px] sm:text-[24px] md:text-[26px] font-extrabold text-gray-800 hover:text-pink-600 transition duration-300"
          onClick={() => setActiveTab("home")}
        >
          <span className="tracking-tight drop-shadow-sm">BazaarKo</span>
          <span className="text-[7px] sm:text-[8px] md:text-[9px] tracking-widest text-pink-500 font-medium animate-pulse">
            APNA DIGITAL BAZAAR
          </span>
        </Link>

        {/* Search Bar - Large + Medium */}
        <form className="hidden md:flex items-center border border-gray-300 rounded-full w-full md:w-60 lg:w-80 px-4 py-2 bg-white shadow-sm focus-within:ring-2 focus-within:ring-pink-400 transition duration-200">
          <input
            type="text"
            name="search"
            placeholder="Search for products..."
            className="flex-1 outline-none border-none bg-transparent placeholder-gray-500 text-sm text-gray-800"
            aria-label="Search"
          />
          <button
            type="submit"
            className="pl-3 ml-3 border-l border-gray-300 text-gray-500 hover:text-pink-600 transition"
            aria-label="Search button"
          >
            <FaSearch className="text-base" />
          </button>
        </form>

        {/* Search Icon for Small Screens */}
        <div className="md:hidden">
          <FaSearch
            className="text-gray-600 text-xl cursor-pointer"
            onClick={() => setShowMobileSearch(!showMobileSearch)}
          />
        </div>

        {/* Nav Tabs - disappear for md and below screen sizes */}
        <ul className="hidden lg:flex items-center gap-7 text-sm text-gray-700">
          {["home", "about", "products", "contact"].map((tab) => (
            <li
              key={tab}
              className={`hover:text-pink-600 transition-colors duration-200 ${
                activeTab === tab ? "text-pink-500" : "text-gray-700"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              <Link to={`/${tab === "home" ? "" : tab}`}>
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </Link>
            </li>
          ))}
        </ul>

        {/* Cart, Login, Hamburger/Profile */}
        <div className="flex items-center gap-4 sm:gap-6">
          {currentUser && (
            <Link to="/cart" className="relative">
              <FaShoppingCart className="text-[20px] sm:text-[22px] md:text-[24px] text-gray-500 cursor-pointer hover:text-gray-600 transition duration-200" />
              <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-[8px] md:text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                {cartCount}
              </span>
            </Link>
          )}

          {currentUser ? (
            <div className="relative" ref={dropdownRef}>
              <button
                className="w-7 h-7 md:w-9 md:h-9 rounded-full bg-gray-600 text-white font-semibold flex items-center justify-center hover:bg-pink-600 transition"
                onClick={() => setShowProfileDropdown(!showProfileDropdown)}
              >
                {userNameFirstLetter}
              </button>
              {showProfileDropdown && (
                <div className="absolute -right-10 md:-right-12 mt-3 md:mt-4 w-36 md:w-48 bg-gray-100 border border-gray-200 rounded-md shadow-lg text-sm z-50 overflow-hidden transition-all duration-500">
                  {currentUser.user.isAdmin && (
                    <>
                      <div className="px-4 py-2 text-gray-600 font-semibold">
                        Admin
                      </div>
                      <hr />
                    </>
                  )}
                  <div className="px-4 py-2 text-gray-700">
                    {currentUser.user.username}
                  </div>
                  <hr />
                  {currentUser.user.isAdmin && (
                    <>
                      <Link
                        to="/dashboard?tab=profile"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                      >
                        Dashboard
                      </Link>
                      <hr />
                    </>
                  )}
                  <>
                    <Link
                      to="/orders"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                    >
                      Orders
                    </Link>
                    <hr />
                  </>
                  <button className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-200">
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              to="/signin"
              className="flex items-center gap-1 md:gap-2 text-[11px] md:text-[14px] px-3 md:px-4 py-1.5 rounded-full border-2 border-gray-500 text-gray-500 font-semibold hover:bg-pink-500 hover:border-pink-500 hover:text-white transition duration-300 shadow-sm"
              onClick={() => setActiveTab("login")}
            >
              {" "}
              <FaUser /> Login{" "}
            </Link>
          )}

          {/* Hamburger Icon */}
          <button
            className="lg:hidden"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? (
              <FaTimes className="text-[24px] md:text-[28px] text-gray-600 hover:text-pink-600" />
            ) : (
              <FaBars className="text-[24px] md:text-[28px] text-gray-600 hover:text-pink-600" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Search Bar Slide Down */}
      <form
        className={`md:hidden px-8 py-2 flex items-center bg-white border-t border-b transition-[max-height,opacity,transform] duration-500 ease-in-out overflow-hidden
      ${
        showMobileSearch
          ? "max-h-24 opacity-100 translate-y-0"
          : "max-h-0 opacity-0 -translate-y-2 pointer-events-none"
      }`}
      >
        <input
          type="text"
          placeholder="Search for products..."
          className="flex-1 outline-none px-2 py-1 border border-gray-300 rounded-l-md text-sm"
        />
        <button
          type="submit"
          className="px-2 bg-pink-500 py-1.5 rounded-r-md text-white transition"
          aria-label="Search button"
        >
          <FaSearch className="text-[17px]" />
        </button>
      </form>

      {/* Slide-In Sidebar */}
      <div
        className={`fixed top-[51px] md:top-[61px] right-0 h-full w-[50%] md:w-[30%] bg-gray-200 z-50 shadow-lg transform transition-transform duration-500 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col gap-4 p-6 text-gray-800 font-medium text-lg">
          {["home", "about", "products", "contact"].map((tab) => (
            <li
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setSidebarOpen(false);
              }}
            >
              <Link to={`/${tab === "home" ? "" : tab}`}>
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Header;
