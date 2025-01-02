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
    <div className="relative">
      {/* Background Image Container */}
      <div className="bg-[url('https://slimhamdi.net/sliim/demos/images/bg.jpg')] min-h-screen p-10 absolute inset-0 bg-cover bg-center"></div>

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative p-10">
        <div className="flex flex-col justify-center items-center pt-32">
          <h1 className="text-[white] text-9xl">
            Hi ! I'm <span className="text-[#ffc107]">Sakib</span>
          </h1>
          <p className="text-white pt-5 text-xl">
            I'm a Freelance Web Design & Developer based in Dhaka, Bangladesh.
          </p>
          <button className="bg-[#ffc107] text-white h-12 w-40 rounded-sm mt-5">
            <a href="#">MORE ANOUT ME</a>
          </button>
        </div>
        <div className="mt-24 flex justify-between items-center">
          <div className="text-white">
            <p>Let's work together</p>
            <p className="text-[#ffc107] hover:border-b-2 border-[#ffc107] w-36">
              <a href="">contact@daniel.net</a>
            </p>
            <p>+880 16 24 31 66 80</p>
          </div>
          <div className="flex text-white">
            <a
              className="hover:text-[#ffc107]"
              href="https://www.facebook.com/sha12kib13"
            >
              <FaFacebookF />
            </a>
            <a
              className="hover:text-[#ffc107] ml-5"
              href="https://x.com/Sakib81391147"
            >
              <FaTwitter />
            </a>
            <a
              className="hover:text-[#ffc107] ml-5"
              href="https://www.linkedin.com/in/md-sakib-hossain-sheikh-0abb771a9/"
            >
              <FaLinkedinIn />
            </a>
            <a className="hover:text-[#ffc107] ml-5" href="#">
              <FaDribbble />
            </a>
            <a
              className="hover:text-[#ffc107] ml-5"
              href="https://www.instagram.com/sha12kib13/?hl=en"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
