import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";

const Contract = () => {
  return (
    <div className="bg-[#292929] p-8 md:p-28">
      <div className="flex justify-center">
        <p className="text-white text-4xl md:text-6xl font-semibold">
          Get <span className="text-[#ff5722]">In Touch</span>
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center mt-10 md:mt-20 p-4 md:p-12 space-y-4 md:space-y-0">
        <div className="flex flex-col items-center bg-[#383838] h-28 w-full md:w-80">
          <div className="text-white text-3xl h-16 w-16 bg-[#ff5722] p-4 rounded-full mt-[-30px]">
            <IoCall />
          </div>
          <p className="text-white text-xl font-semibold mt-4">
            +880 16 24 31 66 80
          </p>
        </div>
        <div className="flex flex-col items-center bg-[#383838] h-28 w-full md:w-80">
          <div className="text-white text-3xl h-16 w-16 bg-[#ff5722] p-4 rounded-full mt-[-30px]">
            <IoMdMail />
          </div>
          <p className="text-white text-xl font-semibold mt-4">
            sheikhsakib014@gmail.com
          </p>
        </div>
        <div className="flex flex-col items-center bg-[#383838] h-28 w-full md:w-80">
          <div className="text-white text-3xl h-16 w-16 bg-[#ff5722] p-4 rounded-full mt-[-30px]">
            <FaLocationDot />
          </div>
          <p className="text-white text-xl font-semibold mt-4">
            Dhaka, Bangladesh
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 md:mt-20">
        <div className="text-white">
          <p className="text-2xl md:text-3xl">Send Me An Email</p>
          <p className="text-lg md:text-xl mt-4">
            Feel free to get in touch with me. I am always open to discussing
            new projects or creative ideas.
          </p>
          <p>follow me</p>
          <div className="flex mt-4">
            <FaFacebookF className="bg-[#383838] h-10 w-10 p-2 rounded-full" />
            <FaTwitter className="ml-4 bg-[#383838] h-10 w-10 p-2 rounded-full" />
            <FaLinkedinIn className="ml-4 bg-[#383838] h-10 w-10 p-2 rounded-full" />
            <FaInstagram className="ml-4 bg-[#383838] h-10 w-10 p-2 rounded-full" />
          </div>
        </div>
        <div>
          <div>
            <input
              type="text"
              placeholder="YOUR NAME"
              className="h-10 w-full md:w-40 bg-[#383838] mt-2 md:mt-0"
            />
            <input
              type="text"
              placeholder="SUBJECT"
              className="h-10 w-full md:w-40 md:ml-4 bg-[#383838] mt-2 md:mt-0"
            />
            <input
              type="email"
              placeholder="YOUR EMAIL"
              className="h-10 w-full md:w-40 md:ml-4 bg-[#383838] mt-2 md:mt-0"
            />
          </div>
          <textarea
            placeholder="YOUR MESSAGE"
            className="h-48 w-full md:w-[515px] mt-4 bg-[#383838]"
          />
          <button
            type="submit"
            className="mt-4 text-white font-semibold bg-[#ff5722] h-12 w-full md:w-40"
          >
            SEND MESSAGE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contract;
