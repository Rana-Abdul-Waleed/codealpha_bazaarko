import React from "react";
import contact_image_1 from "../assets/contact_us/contact_image_1.jpg";

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
      console.log("Success", res);
    }
  };

  return (
    <div className="flex flex-col gap-8 px-6 sm:px-8 md:px-16 lg:px-24 py-2 sm:py-3 md:py-8">
      {/* first section */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-2 lg:gap-6 items-center justify-between">
        {/* information about us - left/top */}
        <div className="flex flex-col items-center md:items-start justify-start gap-3 md:gap-4 lg:gap-5 xl:gap-6 w-full md:w-60 lg:w-96 xl:w-[500px]">
          <h1 className="text-gray-800 font-bold text-[20px] md:text-[22px] lg:text-[24px] xl:text-[28px] text-center md:text-left md:mb-2">
            Information About us
          </h1>
          <p className="text-gray-600 text-justify text-[14px] lg:text-[16px]">
            At MegBazaar, we started with a bold vision — to bring convenience,
            variety, and value to your fingertips. From a small digital idea to
            a growing nationwide platform, our journey is built on trust,
            innovation, and a deep understanding of what shoppers need.
          </p>
          <div className="flex gap-4 items-center text-center md:text-left">
            <span className="bg-blue-800 p-3 rounded-full"></span>
            <span className="bg-pink-500 p-3 rounded-full"></span>
            <span className="bg-sky-500 p-3 rounded-full"></span>
          </div>
        </div>

        {/* contact way - right/bottom */}
        <div className="flex flex-col justify-start gap-10">
          <h1 className="text-gray-800 font-bold text-[20px] md:text-[22px] lg:text-[24px] xl:text-[28px] text-center md:text-left md:mb-2">
            Contact Way
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="flex items-center gap-4">
              <span className="bg-blue-800 p-4 md:p-5 xl:p-6 rounded-full"></span>
              <div className="flex flex-col text-gray-700 text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px]">
                <p>Mobile: +923013933835</p>
                <p>E-Mail: alwaleedfsd@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="bg-pink-500 p-4 md:p-5 xl:p-6 rounded-full"></span>
              <div className="flex flex-col text-gray-700 text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px]">
                <p>Support Forum</p>
                <p>For over 24hr</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="bg-orange-500 p-4 md:p-5 xl:p-6 rounded-full"></span>
              <div className="flex flex-col text-gray-700 text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px]">
                <p>Shahbaz Town, FSD</p>
                <p>Faisalabad, Punjab, Pakistan</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="bg-green-500 p-4 md:p-5 xl:p-6 rounded-full"></span>
              <div className="flex flex-col text-gray-700 text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px]">
                <p>Free Standard Shipping</p>
                <p>All Over Pakistan</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="border-t-2 rounded-lg border-gray-400 mt-2" />

      {/* second section */}
      <div className="flex flex-col lg:flex-row lg:gap-2 xl:gap-4 items-center justify-between my-6 lg:my-2">
        {/* form - left/top */}
        <div className="flex flex-col gap-3 lg:gap-4 items-center lg:items-start w-full sm:w-[520px] md:w-[540px] lg:w-[460px] xl:w-[580px]">
          <h1 className="text-gray-800 font-bold text-[28px]">Get In Touch</h1>
          <p className="text-gray-600 text-[14px] text-justify">
            Got a question or want to say hello? Whether it's order updates,
            feedback, or just a chat — we'd love to hear from you. Drop us an
            email or ping us on WhatsApp. We're here to make your MegBazaar
            journey better!
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
            <div className="flex gap-4 items-center justify-between">
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
            </div>

            <input
              type="text"
              placeholder="Subject"
              className="rounded-md py-2 px-3 border-2 border-gray-300 outline-none text-gray-500 w-full focus:outline-none focus:ring-2 focus:ring-pink-500"
              id="subject"
              name="subject"
              required
            />

            <textarea
              placeholder="Type Your Message..."
              className="rounded-md py-2 px-3 border-2 border-gray-300 outline-none text-gray-500 w-full focus:outline-none focus:ring-2 focus:ring-pink-500 h-40"
              id="message"
              name="message"
              required
            ></textarea>

            <div className="flex flex-col items-center lg:items-start">
              <button
                type="submit"
                className="bg-pink-500 hover:bg-pink-600 max-w-28 w-full text-center px-4 py-2 text-white text-[13px] transition duration-200 rounded-md"
              >
                Send Mail
              </button>
            </div>
          </form>
        </div>

        {/* image - right/bottom */}
        <div>
          <img
            src={contact_image_1}
            alt="Contact us"
            className="lg:w-[420px] lg:h-[520px] xl:w-[520px] xl:h-[520px] hidden lg:block"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
