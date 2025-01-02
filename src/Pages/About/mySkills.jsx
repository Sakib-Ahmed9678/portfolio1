import React from "react";

const MySkills = () => {
  return (
    <div className="p-6 md:p-24">
      <p className="text-white text-2xl md:text-4xl font-semibold">My Skills</p>
      <div className="leading-10">
        <div className="flex flex-col md:flex-row justify-between mt-5">
          <div className="w-full md:w-[550px] mb-5 md:mb-0">
            <span className="text-white">HTML</span>
            <div className="bg-[#444444] rounded-md mt-2 md:mt-5">
              <div className="bg-[#ff5722] w-[80%] rounded-md">
                <span className="text-white text-sm flex flex-row-reverse px-2">
                  80%
                </span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[550px]">
            <span className="text-white">JAVASCRIPT</span>
            <div className="bg-[#444444] rounded-md mt-2 md:mt-5">
              <div className="bg-[#ff5722] w-[70%] rounded-md">
                <span className="text-white text-sm flex flex-row-reverse px-2">
                  70%
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between mt-5">
          <div className="w-full md:w-[550px] mb-5 md:mb-0">
            <span className="text-white">CSS</span>
            <div className="bg-[#444444] rounded-md mt-2 md:mt-5">
              <div className="bg-[#ff5722] w-[60%] rounded-md">
                <span className="text-white text-sm flex flex-row-reverse px-2">
                  60%
                </span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[550px]">
            <span className="text-white">PHP</span>
            <div className="bg-[#444444] rounded-md mt-2 md:mt-5">
              <div className="bg-[#ff5722] w-[57%] rounded-md">
                <span className="text-white text-sm flex flex-row-reverse px-2">
                  57%
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between mt-5">
          <div className="w-full md:w-[550px] mb-5 md:mb-0">
            <span className="text-white">WORDPRESS</span>
            <div className="bg-[#444444] rounded-md mt-2 md:mt-5">
              <div className="bg-[#ff5722] w-[90%] rounded-md">
                <span className="text-white text-sm flex flex-row-reverse px-2">
                  90%
                </span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[550px]">
            <span className="text-white">DRUPAL</span>
            <div className="bg-[#444444] rounded-md mt-2 md:mt-5">
              <div className="bg-[#ff5722] w-[80%] rounded-md">
                <span className="text-white text-sm flex flex-row-reverse px-2">
                  80%
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between mt-5">
          <div className="w-full md:w-[550px] mb-5 md:mb-0">
            <span className="text-white">JQUERY</span>
            <div className="bg-[#444444] rounded-md mt-2 md:mt-5">
              <div className="bg-[#ff5722] w-[70%] rounded-md">
                <span className="text-white text-sm flex flex-row-reverse px-2">
                  70%
                </span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[550px]">
            <span className="text-white">REACT</span>
            <div className="bg-[#444444] rounded-md mt-2 md:mt-5">
              <div className="bg-[#ff5722] w-[50%] rounded-md">
                <span className="text-white text-sm flex flex-row-reverse px-2">
                  50%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySkills;
