import React from "react";
import {
  FaDribbble,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Home = () => {
  return (
    <div className="bg-[url('https://slimhamdi.net/sliim/demos/images/bg.jpg')]  min-h-screen p-10 ">
      <div className="flex flex-col justify-center items-center pt-32">
        <h1 className="text-[white] text-9xl ">
          Hi ! I'm <span className="text-[#ffc107]">Daniel</span>
        </h1>
        <p className="text-white pt-5 text-xl">
          I'm a Freelance UI/UX Designer and Developer based in London, England.
        </p>
        <button className="bg-[#ffc107] text-white h-12 w-40 rounded-sm mt-5">
          <a href="#">MORE ANOUT ME</a>
        </button>
      </div>
      <div className="mt-24 flex  justify-between items-center">
        <div className="text-white">
          <p>Let's work together</p>
          <p className="text-[#ffc107] hover:border-b-2 border-[#ffc107] w-36">
            <a href="">contact@daniel.net</a>
          </p>
          <p>+216 21 184 010 32</p>
        </div>
        <div className="flex text-white ">
          <a className="hover:text-[#ffc107]" href="">
            <FaFacebookF />
          </a>
          <a className="hover:text-[#ffc107] ml-5" href="">
            <FaTwitter />
          </a>
          <a className="hover:text-[#ffc107] ml-5" href="">
            <FaLinkedinIn />
          </a>
          <a className="hover:text-[#ffc107] ml-5" href="">
            <FaDribbble />
          </a>
          <a className="hover:text-[#ffc107] ml-5" href="">
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
