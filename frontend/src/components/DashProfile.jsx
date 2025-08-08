import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateStart,
  updateSuccess,
  updateFailure,
} from "../redux/user/userSlice.js";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import { toast } from "react-toastify";

const DashProfile = () => {
  const { currentUser, error, loading } = useSelector((state) => state.user);
  console.log(currentUser);

  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();

  console.log(formData);

  const userNameFirstLetter = currentUser?.user?.username[0]?.toUpperCase();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.username && !formData.password) {
      toast.error("No changes made.");
      return;
    }

    // const formDataToSend = new FormData();

    // if (formData.username) formDataToSend.append("username", formData.username);
    // if (formData.password) formDataToSend.append("password", formData.password);

    try {
      dispatch(updateStart());
      const res = await fetch(
        `/backend/user/updateUser/${currentUser.user._id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      const data = await res.json();
      if (!res.ok) {
        dispatch(updateFailure(data.message));
        toast.error(data.message || "Something went wrong!");
      } else {
        dispatch(updateSuccess(data));
        toast.success(data.message || "Account info updated successfully.");
      }
    } catch (error) {
      dispatch(updateFailure(error.message));
      toast.error(error.message || "Something went wrong!");
    }
  };

  return (
    <div className="flex flex-col items-center gap-6 mt-6 mb-10 py-2 px-2 w-[350px] sm:w-[400px] md:w-[450px] lg:w-[500px] mx-auto">
      <h1 className="text-gray-700 font-semibold text-3xl">Profile</h1>
      <div className="w-[100px] h-[100px] rounded-full bg-gray-600 text-white font-semibold text-6xl flex items-center justify-center ">
        {userNameFirstLetter}
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full pt-4">
        {/* Username */}
        <div className="relative">
          <FaUser className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500 text-sm" />
          <input
            type="text"
            id="username"
            className="w-full pl-10 rounded-md py-2 px-3 border-2 border-gray-200 outline-none text-gray-500"
            placeholder="Username"
            value={formData.username ?? currentUser.user.username}
            onChange={handleChange}
            disabled={loading}
          />
        </div>

        {/* Email */}
        <div className="relative">
          <FaEnvelope className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500 text-sm" />
          <input
            type="email"
            id="email"
            className="w-full pl-10 rounded-md py-2 px-3 border-2 border-gray-200 outline-none text-gray-500 bg-gray-200 cursor-not-allowed"
            placeholder="Email"
            value={currentUser.user.email}
            disabled
          />
        </div>

        {/* Password */}
        <div className="relative">
          <FaLock className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500 text-sm" />
          <input
            type="password"
            id="password"
            className="w-full pl-10 rounded-md py-2 px-3 border-2 border-gray-200 outline-none text-gray-500"
            placeholder="******"
            onChange={handleChange}
            disabled={loading}
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="bg-pink-500 py-2 text-white rounded-md hover:bg-pink-600 transition duration-200"
        >
          {loading ? "Loading..." : "Update account"}
        </button>
      </form>
    </div>
  );
};

export default DashProfile;
