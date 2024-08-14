import React from "react";

// bg-[url(Hero-bg.svg)] bg-no-repeat bg-contain bg-right
export default function Hero() {
  return (
    <>
      <div className=" px-4 md:px-12 lg:px-16 mt-24">
        <div className="flex h-full flex-col lg:flex-row">
          <div className="w-full  lg:w-1/2 pb-8 ">
            <h1 className="md:text-5xl lg:text-5xl text-4xl font-bold w-full lg:text-left text-center">
              Explore unique <br /> methods to develop <br />
              your talents.
            </h1>

            <p className="w-full pt-8 text-gray-600 lg:text-left text-center text-sm md:text-2xl">
              Unleash your talents through unconventional methods. Explore
              innovative ways to cultivate your abilities and unlock your hidden
              potential.
            </p>

            <div className="mt-6 flex gap-1 md:gap-6 justify-center lg:justify-start items-center grow-0">
              <button className="bg-gradient-to-r from-secondary-bg-color to-primary-bg-color md:py-3 md:px-8 px-4 py-2 text-white font-semibold rounded drop-shadow-lg inline-block max-w-max self-auto">
                Enroll Now
              </button>

              <div className="flex gap-1 items-center max-w-max self-auto">
                <img className="w-10 h-10" src="play.png" alt="" />
                <a
                  className="text-md md:text-lg font-medium underline"
                  href="#"
                >
                  What's Eduhub?
                </a>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 grow-0 flex items-end justify-center  ">
            <img
              className="sm:w-3/4 lg:w-full w-full "
              src="Hero-bg.svg"
              alt="Hero-img"
            />
          </div>
        </div>
      </div>
      <div className="w-full h-20 bg-gradient-to-br from-secondary-bg-color to-primary-bg-color px-4 md:px-12 lg:px-16">
        <div className="w-full h-full bg-gradient-to-br from-secondary-bg-color to-primary-bg-color  overflow-hidden">
          <div className="flex items-center h-full justify-between ">
            <img
              className="w-1/6 aspect-[5/2] object-contain"
              src="ciscoO.png"
              alt="Cisco"
            />
            <img
              className="w-1/6 aspect-[3/2] object-contain"
              src="coursera.png"
              alt="Coursera"
            />
            <img
              className="w-1/6 aspect-[5/2] object-contain"
              src="microsoft-logo.png"
              alt="Microsoft"
            />
            <img
              className="w-1/6 aspect-[5/2] object-contain"
              src="google.png"
              alt="Google"
            />
            <img
              className="w-1/6 aspect-[5/3] object-contain"
              src="user-testing.png"
              alt="User Testing"
            />
          </div>
        </div>
      </div>
    </>
  );
}
