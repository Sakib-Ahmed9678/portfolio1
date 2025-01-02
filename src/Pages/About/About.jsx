import React from "react";
import { FaBirthdayCake, FaFlag, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoSettings } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const About = () => {
  return (
    <div className="container mx-auto py-4 md:py-24">
      <div className="flex justify-center">
        <h2 className="text-4xl md:text-6xl text-white font-semibold text-center">
          About <span className="text-[#ffc107]">Me</span>
        </h2>
      </div>
      <div className="mt-12 flex flex-col lg:flex-row justify-between items-center">
        <div className="w-full lg:w-1/2">
          <img
            className="border-4 border-[#444444] w-full h-auto object-cover"
            src="https://scontent.fdac41-1.fna.fbcdn.net/v/t39.30808-6/318308122_3220291044886270_6799375604342179258_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeEt5svhn_WuLcs5WFXKw4Fw75CAh-Ql2TvvkICH5CXZOxKJParRgT70P_24IhId8b-yspWq-BW3Yk_9MaHRL5q6&_nc_ohc=dDauDy-HMBEQ7kNvgEugR-Z&_nc_oc=AdgJb2SgyNrAAi3veldFNpFa-ZJs2L1QHO6SpNt4dWe_csu2kMUYrrnek0hyeDPbDOk&_nc_zt=23&_nc_ht=scontent.fdac41-1.fna&_nc_gid=AOpjI1RqwZz-Llu54RKX0kG&oh=00_AYC9y3xKxV2QloZVu_aunKMLAEcyGXTvCMVLeXfqkRqtOA&oe=677C1975"
            alt=""
          />
        </div>
        <div className="text-white text-lg md:text-2xl mt-8 lg:mt-0 lg:ml-5 w-full lg:w-1/2">
          <p className="leading-8 md:leading-10">
            I'm Sakib Sheikh, british based web designer and front‑end developer
            living in Dhaka focused on crafting clean, creative and
            user‑friendly experiences, I build beautiful and powerful websites
            and android applications.
          </p>
          <div className="flex flex-col md:flex-row items-start md:items-center mt-10 leading-8 md:leading-10 text-base md:text-xl">
            <ul className="w-full md:w-1/2">
              <li className="flex items-center">
                <FaBirthdayCake className="mr-2" />
                Birthdate : <span className="font-bold">December 1999</span>
              </li>
              <li className="flex items-center">
                <FaFlag className="mr-2" />
                Nationality : <span className="font-bold">Bangladesh</span>
              </li>
              <li className="flex items-center">
                <IoSettings className="mr-2" />
                Experience : <span className="font-bold">8 years</span>
              </li>
            </ul>
            <ul className="w-full md:w-1/2 mt-4 md:mt-0 md:ml-12">
              <li className="flex items-center">
                <FaPhoneAlt className="mr-2" />
                Phone : <span className="font-bold">+880 16 24 31 66 80</span>
              </li>
              <li className="flex items-center">
                <FaLocationDot className="mr-2" />
                Address : <span className="font-bold"> Dhaka, BD</span>
              </li>
              <li className="flex items-center break-all">
                <MdEmail className="mr-2 flex-shrink-0" /> Email :{" "}
                <span className="font-bold"> sheikhsakib014@mail.com</span>
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
