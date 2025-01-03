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
    <div className="relative bg-[url('https://slimhamdi.net/sliim/demos/images/bg.jpg')] min-h-screen p-10 inset-0 bg-cover bg-center">
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="container mx-auto relative p-10">
        <div className="flex flex-col justify-center items-center pt-32 text-center">
          <h1 className="text-[white] text-5xl md:text-9xl">
            Hi ! I'm <span className="text-[#ffc107]">Sakib</span>
          </h1>
          <p className="text-white pt-5 text-lg md:text-xl">
            I'm a Freelance Web Design & Developer based in Dhaka, Bangladesh.
          </p>
          <button className="bg-[#ffc107] text-white h-12 w-32 md:w-40 rounded-sm mt-5">
            <a href="#">MORE ABOUT ME</a>
          </button>
        </div>
        <div className="mt-24 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="text-white mb-5 md:mb-0">
            <p>Let's work together</p>
            <p className="text-[#ffc107] hover:border-b-2 border-[#ffc107] w-36 mx-auto md:mx-0">
              <a href="">contact@daniel.net</a>
            </p>
            <p>+880 16 24 31 66 80</p>
          </div>
          <div className="flex justify-center md:justify-start text-white">
            <a
              className="hover:text-[#ffc107] mx-2"
              target="_blank"
              href="https://www.facebook.com/sha12kib13"
            >
              <FaFacebookF />
            </a>
            <a
              className="hover:text-[#ffc107] mx-2"
              target="_blank"
              href="https://x.com/Sakib81391147"
            >
              <FaTwitter />
            </a>
            <a
              className="hover:text-[#ffc107] mx-2"
              target="_blank"
              href="https://www.linkedin.com/in/md-sakib-hossain-sheikh-0abb771a9/"
            >
              <FaLinkedinIn />
            </a>
            <a className="hover:text-[#ffc107] mx-2" href="#">
              <FaDribbble />
            </a>
            <a
              className="hover:text-[#ffc107] mx-2 "
              target="_blank"
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
