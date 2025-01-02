import React from "react";
import { AiFillLike } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";
import { IoBagCheck } from "react-icons/io5";

const Overview = () => {
  return (
    <div className="bg-[#383838] p-24 flex justify-between items-center mt-24">
      <div className=" flex flex-col items-center text-white">
        <IoBagCheck className="  bg-[#ff5722] h-14 w-14 p-3 rounded-full" />
        <p className="text-6xl mt-4">13</p>
        <p className="text-3xl mt-4">Years Experience</p>
      </div>
      <div className=" flex flex-col items-center text-white">
        <AiFillLike className="  bg-[#ff5722] h-14 w-14 p-3 rounded-full" />
        <p className="text-6xl mt-4">56</p>
        <p className="text-3xl mt-4">Done Projects</p>
      </div>
      <div className=" flex flex-col items-center text-white">
        <FaHeart className="  bg-[#ff5722] h-14 w-14 p-3 rounded-full" />
        <p className="text-6xl mt-4">89</p>
        <p className="text-3xl mt-4">Happy Customers</p>
      </div>
    </div>
  );
};

export default Overview;
