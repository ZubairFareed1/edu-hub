import React from "react";
import { FaCheckCircle } from "react-icons/fa";

export default function InstructorSection() {
  return (
    <div className="px-4 md:px-12 lg:px-16 xl:px-24 2xl:px-32">
      <div className="flex flex-col lg:flex-row w-full mt-8 gap-4 md:gap-0">
        <div className="  lg:w-1/2 pt-4  ">
          <h3 className="text-2xl md:text-3xl xl:text-4xl font-semibold sm:text-center lg:text-left leading-9">
            If You Are A Certified Teacher <br className="lg:block hidden" />
            Then
            <span className="text-primary-bg-color"> Become An Instructor</span>
          </h3>
          <p className="text-md md:text-lg mt-2 text-gray-700 sm:text-center lg:text-left">
            Unlock the opportunity to inspire and educate by joining our team of
            instructors. If you’re a certified teacher, elevate your impact and
            share your expertise with learners worldwide.
          </p>

          <h3 className="text-2xl md:text-2xl font-semibold mt-8 sm:text-center lg:text-left">
            Enjoy Many Perks
          </h3>
          <div className="flex flex-col md:flex-row md:gap-8 mt-2 sm:justify-center lg:justify-start">
            <div className="pb-2">
              <ul className="flex flex-col gap-2 text-gray-600">
                <li className="flex gap-2 items-center font-medium">
                  <FaCheckCircle className="text-primary-bg-color" /> Global
                  Impact
                </li>
                <li className="flex gap-2 items-center font-medium">
                  <FaCheckCircle className="text-primary-bg-color" /> Flexible
                  Schedule
                </li>
                <li className="flex gap-2 items-center font-medium">
                  <FaCheckCircle className="text-primary-bg-color" /> Innovative
                  Teaching Tools
                </li>
                <li className="flex gap-2 items-center font-medium">
                  <FaCheckCircle className="text-primary-bg-color" />{" "}
                  Recognition And Reputation
                </li>
              </ul>
            </div>
            <div>
              <ul className="flex flex-col gap-2 text-gray-600">
                <li className="flex gap-2 items-center font-medium">
                  <FaCheckCircle className="text-primary-bg-color" /> Creative
                  Freedom
                </li>
                <li className="flex gap-2 items-center font-medium">
                  <FaCheckCircle className="text-primary-bg-color" /> Monetize
                  Your Expertise
                </li>
                <li className="flex gap-2 items-center font-medium">
                  <FaCheckCircle className="text-primary-bg-color" />
                  Professional Development
                </li>
                <li className="flex gap-2 items-center font-medium">
                  <FaCheckCircle className="text-primary-bg-color" /> Networking
                  Opportunities
                </li>
              </ul>
            </div>
          </div>
          <div className="sm:flex sm:justify-center lg:block">
            <button className="my-4 px-4 md:px-8 py-2 rounded font-semibold bg-gradient-to-r from-secondary-bg-color to-primary-bg-color text-white drop-shadow-md">
              Became an Instructor
            </button>
          </div>
        </div>
        <div className="lg:w-1/2  flex justify-center items-center">
          <img
            className="size-full md:size-5/6 xl:size-10/12"
            src="instructor-section-image1.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
