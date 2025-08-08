import React, { useEffect, useState } from "react";
import {
  FaBoxOpen,
  FaClipboardList,
  FaHeart,
  FaShoppingBag,
  FaSignOutAlt,
  FaUser,
  FaUsersCog,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { signOutSuccess } from "../redux/user/userSlice.js";

const DashSidebar = () => {
  const location = useLocation();
  const [tab, setTab] = useState("");
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  console.log(currentUser);

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);

  const handleSignOut = async () => {
    try {
      const res = await fetch("/backend/auth/signout", {
        method: "POST",
        credentials: "include", // important to send cookies
      });

      const data = await res.json();

      if (res.ok) {
        dispatch(signOutSuccess());
        toast.success(data.message || "Logged out successfully.");
      } else {
        toast.error(data.message || "Failed to log out.");
      }
    } catch (error) {
      toast.error(error.message || "Something went wrong!");
    }
  };

  return (
    <div className="min-w-56 min-h-28 md:min-h-screen md:border-r-2 border-b-2 border-gray-300 text-gray-700 py-4 px-3 flex flex-col gap-4">
      {/* Profile */}
      <Link
        to={"/dashboard?tab=profile"}
        className={`flex items-center justify-between ${
          tab === "profile" ? "bg-gray-200" : ""
        } px-2 py-2 cursor-pointer rounded-md hover:bg-gray-200`}
      >
        <div className="flex items-center gap-3">
          <FaUser />
          <span className="text-lg">Profile</span>
        </div>
        <span className="text-[11px] bg-gray-600 px-3 py-1 text-white rounded-md">
          {currentUser.user.isAdmin ? "Admin" : "User"}
        </span>
      </Link>

      {/* My Orders */}
      <Link
        to={"/dashboard?tab=myorders"}
        className={`flex items-center justify-between ${
          tab === "myorders" ? "bg-gray-200" : ""
        } px-2 py-2 cursor-pointer rounded-md hover:bg-gray-200`}
      >
        <div className="flex items-center gap-3">
          <FaShoppingBag />
          <span className="text-lg">My Orders</span>
        </div>
      </Link>

      {/* Liked Products */}
      <Link
        to={"/dashboard?tab=likedproducts"}
        className={`flex items-center justify-between ${
          tab === "likedproducts" ? "bg-gray-200" : ""
        } px-2 py-2 cursor-pointer rounded-md hover:bg-gray-200`}
      >
        <div className="flex items-center gap-3">
          <FaHeart />
          <span className="text-lg">Liked Products</span>
        </div>
      </Link>

      {/* manage users */}
      {currentUser.user.isAdmin && (
        <Link
          to={"/dashboard?tab=users"}
          className={`flex items-center justify-between ${
            tab === "users" ? "bg-gray-200" : ""
          } px-2 py-2 cursor-pointer rounded-md hover:bg-gray-200`}
        >
          <div className="flex items-center gap-3">
            <FaUsersCog />
            <span className="text-lg">Manage Users</span>
          </div>
        </Link>
      )}

      {/* manage products */}
      {currentUser.user.isAdmin && (
        <Link
          to={"/dashboard?tab=products"}
          className={`flex items-center justify-between ${
            tab === "products" ? "bg-gray-200" : ""
          } px-2 py-2 cursor-pointer rounded-md hover:bg-gray-200`}
        >
          <div className="flex items-center gap-3">
            <FaBoxOpen />
            <span className="text-lg">Manage Products</span>
          </div>
        </Link>
      )}

      {/* manage products */}
      {currentUser.user.isAdmin && (
        <Link
          to={"/dashboard?tab=orders"}
          className={`flex items-center justify-between ${
            tab === "orders" ? "bg-gray-200" : ""
          } px-2 py-2 cursor-pointer rounded-md hover:bg-gray-200`}
        >
          <div className="flex items-center gap-3">
            <FaClipboardList />
            <span className="text-lg">Manage Orders</span>
          </div>
        </Link>
      )}

      {/* Log out */}
      <button
        onClick={handleSignOut}
        className="flex items-center gap-3 px-2 py-2 cursor-pointer hover:bg-gray-200 hover:rounded-md"
      >
        <FaSignOutAlt />
        <span>Log Out</span>
      </button>
    </div>
  );
};

export default DashSidebar;
