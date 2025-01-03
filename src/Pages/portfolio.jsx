import React from "react";

const Portfolio = () => {
  return (
    <div className="bg-gray-800 p-8 md:p-16">
      <div className="flex justify-center items-center">
        <p className="text-white text-4xl md:text-6xl font-semibold">
          My <span>Portfolio</span>
        </p>
      </div>

      <div className="m-8 md:m-16 relative h-auto md:h-screen">
        {/* Top row */}
        <div className="relative h-48 w-full md:absolute md:top-0 md:left-0 md:h-48 md:w-80">
          <img
            key="portfolio-item-1"
            src="https://slimhamdi.net/sliim/demos/images/projects/4.jpg"
            alt="Portfolio item 1"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative h-48 w-full md:absolute md:top-0 md:left-96 md:h-48 md:w-80 mt-4 md:mt-0">
          <img
            key="portfolio-item-2"
            src="https://slimhamdi.net/sliim/demos/images/projects/1.jpg"
            alt="Portfolio item 2"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative h-48 w-full md:absolute md:top-0 md:left-192 md:h-48 md:w-80 mt-4 md:mt-0">
          <img
            key="portfolio-item-3"
            src="https://slimhamdi.net/sliim/demos/images/projects/3.jpg"
            alt="Portfolio item 3"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative h-48 w-full md:absolute md:top-48 md:left-0 md:h-48 md:w-80 mt-4 md:mt-0">
          <img
            key="portfolio-item-4"
            src="https://slimhamdi.net/sliim/demos/images/projects/8.jpg"
            alt="Portfolio item 4"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative h-48 w-full md:absolute md:top-48 md:left-96 md:h-48 md:w-80 mt-4 md:mt-0">
          <img
            key="portfolio-item-5"
            src="https://slimhamdi.net/sliim/demos/images/projects/5.jpg"
            alt="Portfolio item 5"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative h-48 w-full md:absolute md:top-48 md:left-192 md:h-48 md:w-80 mt-4 md:mt-0">
          <img
            key="portfolio-item-6"
            src="https://slimhamdi.net/sliim/demos/images/projects/2.jpg"
            alt="Portfolio item 6"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative h-48 w-full md:absolute md:top-96 md:left-0 md:h-48 md:w-80 mt-4 md:mt-0">
          <img
            key="portfolio-item-7"
            src="https://slimhamdi.net/sliim/demos/images/projects/6.jpg"
            alt="Portfolio item 7"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative h-48 w-full md:absolute md:bottom-0 md:left-0 md:h-48 md:w-80 mt-4 md:mt-0">
          <img
            key="portfolio-item-8"
            src="https://slimhamdi.net/sliim/demos/images/projects/7.jpg"
            alt="Portfolio item 8"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative h-96 w-full md:absolute md:bottom-0 md:left-96 md:h-96 md:w-72 mt-4 md:mt-0">
          <img
            src="https://slimhamdi.net/sliim/demos/images/projects/7.jpg"
            alt="Portfolio item 8"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
