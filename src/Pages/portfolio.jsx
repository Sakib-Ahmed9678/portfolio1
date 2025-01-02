import React from "react";

const Portfolio = () => {
  return (
    <div className="bg-[#292929] p-16">
      <div className=" flex justify-center items-center ">
        <p className="text-white text-6xl font-semibold ">
          My <span>Portfolio</span>
        </p>
      </div>

      <div className="m-16  relative  ">
        <div className="h-[200px] w-[350px] absolute top-0 left-0  ">
          <img
            src="https://slimhamdi.net/sliim/demos/images/projects/4.jpg"
            alt=""
          />
        </div>

        <div className="h-[400px] w-[300px] absolute top-0 left-[400px]">
          <img
            src="https://slimhamdi.net/sliim/demos/images/projects/1.jpg"
            alt=""
          />
        </div>
        <div className="h-[400px] w-[300px] absolute top-0 left-[760px]">
          <img
            src="https://slimhamdi.net/sliim/demos/images/projects/3.jpg"
            alt=""
          />
        </div>
        <div className="h-[450px] w-[300px] absolute top-[270px]">
          <img
            src="https://slimhamdi.net/sliim/demos/images/projects/8.jpg"
            alt=""
          />
        </div>
        <div className="h-[200px] w-[300px] absolute top-[440px] left-[400px]">
          <img
            src="https://slimhamdi.net/sliim/demos/images/projects/5.jpg"
            alt=""
          />
        </div>
        <div className="h-[400px] w-[300px] absolute top-[490px] left-[760px]">
          <img
            src="https://slimhamdi.net/sliim/demos/images/projects/2.jpg"
            alt=""
          />
        </div>
        <div className="h-[200px] w-[350px] absolute top-[760px]">
          <img
            src="https://slimhamdi.net/sliim/demos/images/projects/6.jpg"
            alt=""
          />
        </div>
        <div className="h-[400px] w-[300px] absolute top-[680px] left-[400px]">
          <img
            src="https://slimhamdi.net/sliim/demos/images/projects/7.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
