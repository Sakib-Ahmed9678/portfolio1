import React from "react";

const Portfolio = () => {
  return (
    <div className="bg-gray-800 p-16">
      <div className="flex justify-center items-center">
        <p className="text-white text-6xl font-semibold">
          My <span>Portfolio</span>
        </p>
      </div>

      <div className="m-16 relative h-screen">
        {/* Top row */}
        <div className="absolute top-0 left-0 h-48 w-80">
          <img
            src="https://slimhamdi.net/sliim/demos/images/projects/4.jpg"
            alt="Portfolio item 1"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute top-0 left-96 h-96 w-72">
          <img
            src="https://slimhamdi.net/sliim/demos/images/projects/1.jpg"
            alt="Portfolio item 2"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute top-0 right-0 h-96 w-72">
          <img
            src="https://slimhamdi.net/sliim/demos/images/projects/3.jpg"
            alt="Portfolio item 3"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Middle row */}
        <div className="absolute top-64 left-0 h-96 w-72">
          <img
            src="https://slimhamdi.net/sliim/demos/images/projects/8.jpg"
            alt="Portfolio item 4"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute top-96 left-96 h-48 w-72">
          <img
            src="https://slimhamdi.net/sliim/demos/images/projects/5.jpg"
            alt="Portfolio item 5"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute top-96 right-0 h-96 w-72">
          <img
            src="https://slimhamdi.net/sliim/demos/images/projects/2.jpg"
            alt="Portfolio item 6"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Bottom row */}
        <div className="absolute bottom-0 left-0 h-48 w-80">
          <img
            src="https://slimhamdi.net/sliim/demos/images/projects/6.jpg"
            alt="Portfolio item 7"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute bottom-0 left-96 h-96 w-72">
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
