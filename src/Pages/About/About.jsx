import React from "react";
import { FaBirthdayCake, FaFlag, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoSettings } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const About = () => {
  return (
    <div className="p-24 ">
      <div className="flex justify-center ">
        <h2 className="text-6xl text-white font-semibold">
          About <span className="text-[#ffc107]">Me</span>
        </h2>
      </div>
      <div className="mt-12 flex justify-between items-center">
        <div className="">
          <img
            className="border-4 border-[#444444] h-[480px] w-[1300px]"
            src="https://slimhamdi.net/sliim/demos/images/man.jpg"
            alt=""
          />
        </div>
        <div className="text-white text-2xl ml-5">
          <p className="leading-10">
            I'm Daniel Martin, british based web designer and front‑end
            developer living in London focused on crafting clean, creative and
            user‑friendly experiences, I build beautiful and powerful websites
            and android applications.
          </p>
          <div className="flex  items-center mt-10 leading-10">
            <ul>
              <li className="flex items-center">
                <FaBirthdayCake className="mr-2" />
                Birthdate : <span className="font-bold">June 1990</span>
              </li>
              <li className="flex items-center">
                <FaFlag className="mr-2" />
                Nationality : <span className="font-bold">British</span>
              </li>
              <li className="flex items-center">
                <IoSettings className="mr-2" />
                Experience : <span className="font-bold">8 years</span>
              </li>
            </ul>
            <ul className="ml-12">
              <li className="flex items-center">
                <FaPhoneAlt className="mr-2" />
                Phone : <span className="font-bold">+34 18 40 10</span>
              </li>
              <li className="flex items-center">
                <FaLocationDot className="mr-2" />
                Address : <span className="font-bold"> London, UK</span>
              </li>
              <li className="flex items-center">
                <MdEmail className="mr-2" /> Email :{" "}
                <span className="font-bold"> daniel@mail.com</span>
              </li>
            </ul>
          </div>
          <button className="mt-10 bg-[#ffc107] h-14 w-60 rounded-md text-xl font-semibold">
            <a href="">DOWNLOAD MY CV</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
