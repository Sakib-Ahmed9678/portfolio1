import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const ResumeCard = ({ title, company, period, description }) => (
  <div className="px-2">
    <div className="bg-gray-800 p-5 rounded-lg shadow-lg h-full">
      <h3 className="text-xl mb-2 text-white">{title}</h3>
      <span className="block text-sm mb-2 text-gray-400">{company}</span>
      <span className="inline-block bg-yellow-500 text-gray-900 px-2 py-1 rounded text-xs mb-2">
        {period}
      </span>
      <p className="text-sm text-gray-300">{description}</p>
    </div>
  </div>
);

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute -right-12 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors z-10"
    aria-label="Next slide"
  >
    <MdChevronRight className="w-6 h-6 text-white" />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute -left-12 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors z-10"
    aria-label="Previous slide"
  >
    <MdChevronLeft className="w-6 h-6 text-white" />
  </button>
);

const MyResume = () => {
  const [activeTab, setActiveTab] = useState(0);

  const experienceData = [
    {
      title: "Web Developer",
      company: "Adobe",
      period: "2018 - NOW",
      description:
        "Curabitur mollis bibendum luctus. Duis suscipit vitae dui metus sollicitudin sed suscipit.",
    },
    {
      title: "Designer",
      company: "Twitter",
      period: "2014 - 2018",
      description:
        "Curabitur mollis bibendum luctus. Duis suscipit vitae dui metus sollicitudin sed suscipit.",
    },
    {
      title: "Consultant",
      company: "Facebook",
      period: "2006 - 2014",
      description:
        "Curabitur mollis bibendum luctus. Duis suscipit vitae dui metus sollicitudin sed suscipit.",
    },
  ];

  const educationData = [
    {
      title: "Computer Science",
      company: "MIT",
      period: "2002 - 2006",
      description:
        "Curabitur mollis bibendum luctus. Duis suscipit vitae dui metus sollicitudin sed suscipit.",
    },
    {
      title: "Graphic Design",
      company: "Harvard",
      period: "1998 - 2002",
      description:
        "Curabitur mollis bibendum luctus. Duis suscipit vitae dui metus sollicitudin sed suscipit.",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div>
        <h2 className="text-5xl text-white text-center font-semibold mb-8">
          My Resume
        </h2>
      </div>

      <div className="container mx-auto px-16">
        <div className="flex justify-center mb-8">
          <button
            className={`mx-5 cursor-pointer text-lg ${
              activeTab === 0 ? "text-yellow-500 font-bold" : "text-gray-500"
            }`}
            onClick={() => setActiveTab(0)}
          >
            EXPERIENCE
          </button>
          <button
            className={`mx-5 cursor-pointer text-lg ${
              activeTab === 1 ? "text-yellow-500 font-bold" : "text-gray-500"
            }`}
            onClick={() => setActiveTab(1)}
          >
            EDUCATION
          </button>
        </div>

        <div className="relative">
          {activeTab === 0 ? (
            <Slider {...settings}>
              {experienceData.map((item, index) => (
                <ResumeCard key={index} {...item} />
              ))}
            </Slider>
          ) : (
            <Slider {...settings}>
              {educationData.map((item, index) => (
                <ResumeCard key={index} {...item} />
              ))}
            </Slider>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyResume;
