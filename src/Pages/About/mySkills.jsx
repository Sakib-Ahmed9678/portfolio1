import React from "react";

const MySkills = () => {
  return (
    <div className="p-24">
      <p className="text-white text-4xl font-semibold">My Skills</p>
      <div className="leading-10">
        <div className="flex justify-between mt-5">
          <div className="w-[550px]">
            <span className="text-white">HTML</span>
            <div className="bg-[#444444]  rounded-md mt-5 ">
              <div className="bg-[#ff5722] w-[80%] rounded-md">
                <span className="text-white text-sm flex flex-row-reverse px-2">
                  80%
                </span>
              </div>
            </div>
          </div>
          <div className="w-[550px]">
            <span className="text-white">JAVASCRIPT</span>
            <div className="bg-[#444444] rounded-md mt-5">
              <div className="bg-[#ff5722] w-[70%] rounded-md">
                <span className="text-white text-sm flex flex-row-reverse px-2">
                  70%
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-5">
          <div className="w-[550px]">
            <span className="text-white">CSS</span>
            <div className="bg-[#444444]  rounded-md mt-5">
              <div className="bg-[#ff5722] w-[60%] rounded-md">
                <span className="text-white text-sm flex flex-row-reverse px-2">
                  60%
                </span>
              </div>
            </div>
          </div>
          <div className="w-[550px]">
            <span className="text-white">PHP</span>
            <div className="bg-[#444444] rounded-md mt-5">
              <div className="bg-[#ff5722] w-[57%] rounded-md">
                <span className="text-white text-sm flex flex-row-reverse px-2">
                  57%
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-5">
          <div className="w-[550px]">
            <span className="text-white">WORDPRESS</span>
            <div className="bg-[#444444]  rounded-md mt-5">
              <div className="bg-[#ff5722] w-[90%] rounded-md">
                <span className="text-white text-sm flex flex-row-reverse px-2">
                  90%
                </span>
              </div>
            </div>
          </div>
          <div className="w-[550px]">
            <span className="text-white">DRUPAL</span>
            <div className="bg-[#444444] rounded-md mt-5">
              <div className="bg-[#ff5722] w-[80%] rounded-md">
                <span className="text-white text-sm flex flex-row-reverse px-2">
                  80%
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-5">
          <div className="w-[550px]">
            <span className="text-white">JQUERY</span>
            <div className="bg-[#444444]  rounded-md mt-5">
              <div className="bg-[#ff5722] w-[70%] rounded-md">
                <span className="text-white text-sm flex flex-row-reverse px-2">
                  70%
                </span>
              </div>
            </div>
          </div>
          <div className="w-[550px]">
            <span className="text-white">REACT</span>
            <div className="bg-[#444444] rounded-md mt-5">
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
