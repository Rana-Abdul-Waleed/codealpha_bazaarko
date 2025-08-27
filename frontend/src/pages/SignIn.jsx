import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux/user/userSlice.js";
import { useSelector, useDispatch } from "react-redux";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { toast } from "react-toastify";
import axios from "axios"; // Import axios package

const SignIn = () => {
  const [formData, setFormData] = useState({});
  const [submitForm, setSubmitForm] = useState(false);
  const { loading, error: errorMessage } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      toast.error("Please fill out all the fields!");
      return dispatch(signInFailure("Please fill out all the fields!"));
    }

    try {
      dispatch(signInStart());

      // Replace fetch with axios
      const res = await axios.post("/backend/auth/signin", formData, {
        headers: { "Content-Type": "application/json" },
      });

      const data = res.data; // Axios stores response data in .data property

      if (data.success === false) {
        toast.error(data.message || "Sign in failed!");
        dispatch(signInFailure(data.message));
        return;
      }

      if (res.status === 200) {
        dispatch(signInSuccess(data));
        toast.success("Logged in successfully!");
        navigate("/");
      }

      setSubmitForm(true);
    } catch (error) {
      // Axios error handling - check if error has response data
      let errorMsg = error.message || "Something went wrong!";

      if (error.response && error.response.data) {
        errorMsg = error.response.data.message || errorMsg;
      }

      toast.error(errorMsg);
      dispatch(signInFailure(errorMsg));
    }
  };

  return (
    <div className="px-3 pb-12">
      <div className="flex flex-col items-center justify-center gap-6 mt-24 py-4 max-w-lg mx-auto bg-gray-200 rounded-md shadow-lg">
        <h1 className="text-3xl text-gray-800 font-bold mt-1">Login</h1>
        <p className="px-2 sm:px-8 text-center text-gray-500 text-[14px]">
          Welcome back to MegBazaar! Log in to continue your seamless shopping
          experience.
        </p>
        <form
          className="flex flex-col gap-4 w-full pt-2 px-2 sm:px-8"
          onSubmit={handleSubmit}
        >
          {/* Email */}
          <div className="relative">
            <FaEnvelope className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400 text-sm" />
            <input
              type="email"
              placeholder="Email"
              className="w-full pl-10 rounded-md py-2 px-3 border-2 border-gray-200 outline-none text-gray-500"
              id="email"
              name="email"
              required
              onChange={handleChange}
              disabled={loading}
            />
          </div>

          {/* Password */}
          <div className="relative">
            <FaLock className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400 text-sm" />
            <input
              type="password"
              placeholder="Password"
              className="w-full pl-10 rounded-md py-2 px-3 border-2 border-gray-200 outline-none text-gray-500"
              id="password"
              name="password"
              required
              onChange={handleChange}
              disabled={loading}
            />
          </div>

          <div className="flex flex-col">
            <button
              className="bg-pink-500 py-2 text-white rounded-md hover:bg-pink-600 transition duration-200"
              disabled={loading}
            >
              {loading ? "Loading..." : "Login to account"}
            </button>
          </div>
        </form>
        <div className="text-gray-500 text-[15px]">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-pink-500 hover:text-pink-600 cursor-pointer hover:underline transition duration-200"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
