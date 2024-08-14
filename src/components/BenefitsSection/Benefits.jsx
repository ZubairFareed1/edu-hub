import React from "react";
import { IoSchool } from "react-icons/io5";
import { FaBookOpen } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";

export default function Benefits() {
  return (
    <div className="px-4 md:px-12 lg:px-16 w-full">
      <div className="pt-12">
        <h3 className="text-2xl sm:text-3xl  font-semibold text-center ">
          Search Courses
        </h3>

        <div className="flex gap-4 justify-center mt-6 flex-col sm:flex-row ">
          <div className="rounded bg-white border-2 border-gray-200 md:w-1/2 flex gap-2 items-center px-2 sm:px-4 py-2 drop-shadow-sm">
            <i className="bx bx-search text-slate-500 text-2xl font-medium"></i>
            <input
              type="text"
              placeholder="Search for over 100k+ courses"
              className="w-full focus:outline-none h-full sm:text-lg text-gray-500 font-medium"
            />
          </div>
          <button className="px-4 md:px-8 py-2 rounded font-semibold bg-gradient-to-r from-secondary-bg-color to-primary-bg-color text-white drop-shadow-md ">
            Search
          </button>
        </div>
        <div className="w-full gap-4 my-12 h-auto flex lg:flex-row flex-col-reverse s">
          <div className=" lg:w-1/2  flex justify-center items-center">
            <img src="Benefits-image.svg" alt="Benefits-img" className="lg:size-11/12 md:size-3/4  " />
          </div>
          <div className="h-full  lg:w-1/2">
            <h3 className="text-2xl md:text-3xl font-semibold text-center sm:text-left ">
              <span className="text-primary-bg-color">Benefits</span> From Our
              Online Learning
            </h3>

            <div className="mt-4 flex flex-col gap-6">
              {/* One */}
              <div className="flex gap-4">
                <div className="flex items-center justify-center">
                  <div className="size-10 bg-gradient-to-br from-secondary-bg-color to-primary-bg-color shadow-2xl drop-shadow-md rounded-full flex items-center justify-center">
                    <IoSchool className="text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Online Degree</h3>
                  <p className="text-gray-500">
                    Earn accredited degrees from the comfort of home, opening
                    doors to a world of possibilities.
                  </p>
                </div>
              </div>
              {/* Two */}
              <div className="flex gap-4">
                <div className="flex items-center justify-center">
                  <div className="size-10 bg-gradient-to-br from-secondary-bg-color to-primary-bg-color shadow-2xl drop-shadow-md rounded-full flex items-center justify-center">
                    <FaBookOpen className="text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Short Courses</h3>
                  <p className="text-gray-500">
                    Enhance your skills with our concise and focused short
                    courses, designed for quick and effective learning.
                  </p>
                </div>
              </div>
              {/* Three */}
              <div className="flex gap-4">
                <div className="flex items-center justify-center">
                  <div className="size-10 bg-gradient-to-br from-secondary-bg-color to-primary-bg-color shadow-2xl drop-shadow-md rounded-full flex items-center justify-center">
                    <FaUserAlt className="text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">
                    Training From Experts
                  </h3>
                  <p className="text-gray-500">
                    Immerse yourself in knowledge with industry experts guiding
                    you through hands-on experience.
                  </p>
                </div>
              </div>
              {/* Four */}
              <div className="flex gap-4">
                <div className="flex items-center justify-center">
                  <div className="size-10 bg-gradient-to-br from-secondary-bg-color to-primary-bg-color shadow-2xl drop-shadow-md rounded-full flex items-center justify-center">
                    <FaPlay className="text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">5k+ Video Courses </h3>
                  <p className="text-gray-500">
                    Dive into a vast library of over 5k+ video courses covering
                    many subjects, offering a visual learning experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
