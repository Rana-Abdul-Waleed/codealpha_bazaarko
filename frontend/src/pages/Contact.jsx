import React from "react";
import contact_image_1 from "../assets/contact_us/contact_image_1.jpg";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const Contact = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "3e91b877-3ff1-45dc-ab2b-39d0a30c98f7");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      toast.success("Mail sent successfully!");
    }
  };

  return (
    <div className="flex flex-col gap-8 px-6 sm:px-8 md:px-16 lg:px-24 py-2 sm:py-3 md:py-8">
      {/* first section */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-2 lg:gap-6 items-center justify-between">
        {/* information about us - left/top */}
        <div className="flex flex-col items-center md:items-start justify-start gap-3 md:gap-4 lg:gap-5 xl:gap-6 w-full md:w-60 lg:w-96 xl:w-[500px]">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.2,
            }}
            className="text-gray-800 font-bold text-[20px] md:text-[22px] lg:text-[24px] xl:text-[28px] text-center md:text-left md:mb-2"
          >
            Information About us
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.3,
            }}
            className="text-gray-600 text-justify text-[14px] lg:text-[16px]"
          >
            At MegBazaar, we started with a bold vision — to bring convenience,
            variety, and value to your fingertips. From a small digital idea to
            a growing nationwide platform, our journey is built on trust,
            innovation, and a deep understanding of what shoppers need.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.4,
            }}
            className="flex gap-4 items-center text-center md:text-left"
          >
            <span className="bg-blue-800 p-3 rounded-full"></span>
            <span className="bg-pink-500 p-3 rounded-full"></span>
            <span className="bg-sky-500 p-3 rounded-full"></span>
          </motion.div>
        </div>

        {/* contact way - right/bottom */}
        <div className="flex flex-col justify-start gap-10">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.2,
            }}
            className="text-gray-800 font-bold text-[20px] md:text-[22px] lg:text-[24px] xl:text-[28px] text-center md:text-left md:mb-2"
          >
            Contact Way
          </motion.h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.3,
              }}
              className="flex items-center gap-4"
            >
              <span className="bg-blue-800 p-4 md:p-5 xl:p-6 rounded-full"></span>
              <div className="flex flex-col text-gray-700 text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px]">
                <p>Mobile: +923013933835</p>
                <p>E-Mail: alwaleedfsd@gmail.com</p>
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
              className="flex items-center gap-4"
            >
              <span className="bg-pink-500 p-4 md:p-5 xl:p-6 rounded-full"></span>
              <div className="flex flex-col text-gray-700 text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px]">
                <p>Support Forum</p>
                <p>For over 24hr</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.5,
              }}
              className="flex items-center gap-4"
            >
              <span className="bg-orange-500 p-4 md:p-5 xl:p-6 rounded-full"></span>
              <div className="flex flex-col text-gray-700 text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px]">
                <p>Shahbaz Town, FSD</p>
                <p>Faisalabad, Punjab, Pakistan</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.6,
              }}
              className="flex items-center gap-4"
            >
              <span className="bg-green-500 p-4 md:p-5 xl:p-6 rounded-full"></span>
              <div className="flex flex-col text-gray-700 text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px]">
                <p>Free Standard Shipping</p>
                <p>All Over Pakistan</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <hr className="border-t-2 rounded-lg border-gray-400 mt-12" />

      {/* second section */}
      <div className="flex flex-col lg:flex-row lg:gap-2 xl:gap-4 items-center justify-between my-6 lg:my-2">
        {/* form - left/top */}
        <div className="flex flex-col gap-3 lg:gap-4 items-center lg:items-start w-full sm:w-[520px] md:w-[540px] lg:w-[460px] xl:w-[580px]">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.2,
            }}
            className="text-gray-800 font-bold text-[28px]"
          >
            Get In Touch
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.3,
            }}
            className="text-gray-600 text-[14px] text-justify"
          >
            Got a question or want to say hello? Whether it's order updates,
            feedback, or just a chat — we'd love to hear from you. Drop us an
            email or ping us on WhatsApp. We're here to make your MegBazaar
            journey better!
          </motion.p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.4,
              }}
              className="flex gap-4 items-center justify-between"
            >
              <input
                type="text"
                placeholder="Your Name"
                className="rounded-md py-2 px-3 border-2 border-gray-300 outline-none text-gray-500 w-full focus:outline-none focus:ring-2 focus:ring-pink-500"
                id="name"
                name="name"
                required
              />
              <input
                type="email"
                placeholder="Your E-mail"
                className="rounded-md py-2 px-3 border-2 border-gray-300 outline-none text-gray-500 w-full focus:outline-none focus:ring-2 focus:ring-pink-500"
                id="email"
                name="email"
                required
              />
            </motion.div>

            <motion.input
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.5,
              }}
              type="text"
              placeholder="Subject"
              className="rounded-md py-2 px-3 border-2 border-gray-300 outline-none text-gray-500 w-full focus:outline-none focus:ring-2 focus:ring-pink-500"
              id="subject"
              name="subject"
              required
            />

            <motion.textarea
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.6,
              }}
              placeholder="Type Your Message..."
              className="rounded-md py-2 px-3 border-2 border-gray-300 outline-none text-gray-500 w-full focus:outline-none focus:ring-2 focus:ring-pink-500 h-40"
              id="message"
              name="message"
              required
            ></motion.textarea>

            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.7,
              }}
              className="flex flex-col items-center lg:items-start"
            >
              <button
                type="submit"
                className="bg-pink-500 hover:bg-pink-600 max-w-28 w-full text-center px-4 py-2 text-white text-[13px] transition duration-200 rounded-md"
              >
                Send Mail
              </button>
            </motion.div>
          </form>
        </div>

        {/* image - right/bottom */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 1,
          }}
        >
          <img
            src={contact_image_1}
            alt="Contact us"
            className="lg:w-[420px] lg:h-[520px] xl:w-[580px] xl:h-[580px] hidden lg:block"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
