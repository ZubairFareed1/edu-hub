import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState, useEffect } from "react";

import { FaEnvelope } from "react-icons/fa";
import { getStars } from "../../utils/getStars.jsx";
import { IoMdStar } from "react-icons/io";

import Footer from "./FooterSection/Footer.jsx";

export default function TestimonalSection() {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 3,

    arrows: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          settings: "unslick",
          swipe: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };
  const [testimonials, setTestimonials] = useState([
    {
      id: 1,
      name: "Louis Mark",
      imgUrl: "https://randomuser.me/api/portraits/men/11.jpg",
      rating: 5.0,
      category: "UI/UX Designer",
      testimony:
        "Enrolling in courses at this E-Learning platform was a game-changer for me. Absolutely transformative experience!",
    },
    {
      id: 2,
      name: "Emily Davis",
      imgUrl: "https://randomuser.me/api/portraits/women/22.jpg",
      rating: 4.0,
      category: "Web Developer",
      testimony:
        "I love how the courses are structured. They make learning complex topics so easy and engaging",
    },
    {
      id: 3,
      name: "John Smith",
      imgUrl: "https://randomuser.me/api/portraits/men/33.jpg",
      rating: 4.5,
      category: "Data Scientist",
      testimony:
        "The courses on this platform are top-notch. Highly recommended for anyone looking to upgrade their skills.",
    },
    {
      id: 4,
      name: "Sarah Johnson",
      imgUrl: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5.0,
      category: "Software Engineer",
      testimony:
        "This platform has been a valuable resource for my professional growth. The courses are well worth the investment.",
    },
    {
      id: 5,
      name: "Tom Davis",
      imgUrl: "https://randomuser.me/api/portraits/men/55.jpg",
      rating: 4.0,
      category: "Software Engineer",
      testimony:
        "The courses on this platform are top-notch. Highly recommended for anyone looking to upgrade their skills.",
    },
    {
      id: 6,
      name: "Ava Taylor",
      imgUrl: "https://randomuser.me/api/portraits/women/66.jpg",
      rating: 4.5,
      category: "Project Manager",
      testimony:
        "The learning experience here is unparalleled. I've gained so much knowledge and practical skills.",
    },
    {
      id: 7,
      name: "Michael Brown",
      imgUrl: "https://randomuser.me/api/portraits/men/77.jpg",
      rating: 4.9,
      category: "DevOps Engineer",
      testimony:
        "This platform's courses have helped me advance my career significantly. Can't recommend it enough!",
    },
    {
      id: 8,
      name: "Sophia Wilson",
      imgUrl: "https://randomuser.me/api/portraits/women/88.jpg",
      rating: 4.0,
      category: "Graphic Designer",
      testimony:
        "I love how the courses are structured. They make learning complex topics so easy and engaging.",
    },
    {
      id: 9,
      name: "James Martinez",
      imgUrl: "https://randomuser.me/api/portraits/men/99.jpg",
      rating: 5.0,
      category: "Mobile Developer",
      testimony:
        "The variety of courses offered is amazing. I've been able to learn so much and apply it directly to my work.",
    },
    {
      id: 10,
      name: "Olivia Anderson",
      imgUrl: "https://randomuser.me/api/portraits/women/52.jpg",
      rating: 4.5,
      category: "Marketing Specialist",
      testimony:
        "This platform has been a valuable resource for my professional growth. The courses are well worth the investment.",
    },
    {
      id: 11,
      name: "Liam Thompson",
      imgUrl: "https://randomuser.me/api/portraits/men/52.jpg",
      rating: 4.0,
      category: "Network Engineer",
      testimony:
        "A fantastic platform with comprehensive courses that cover every aspect of my field. Highly recommend!",
    },
    {
      id: 12,
      name: "Isabella Lee",
      imgUrl: "https://randomuser.me/api/portraits/women/53.jpg",
      rating: 4.5,
      category: "Data Analyst",
      testimony:
        "The content here is incredible. It's helped me refine my skills and excel in my role.",
    },
    {
      id: 13,
      name: "Ethan Clark",
      imgUrl: "https://randomuser.me/api/portraits/men/53.jpg",
      rating: 5.0,
      category: "Cybersecurity Specialist",
      testimony:
        "This platform offers the best learning experience. The courses are well-structured and up-to-date.",
    },
    {
      id: 14,
      name: "Mia Hernandez",
      imgUrl: "https://randomuser.me/api/portraits/women/54.jpg",
      rating: 4.0,
      category: "AI Engineer",
      testimony:
        "I've learned so much from this platform. The courses are practical and easy to follow.",
    },
    {
      id: 15,
      name: "Noah Jackson",
      imgUrl: "https://randomuser.me/api/portraits/men/54.jpg",
      rating: 5.0,
      category: "Cloud Architect",
      testimony:
        "The quality of the courses is exceptional. It's been a major factor in my career growth.",
    },
  ]);

  return (
    <div className=" py-6 md:py-8 lg:py-12 2xl:py-16 bg-gradient-to-r from-secondary-bg-color to-primary-bg-color">
      <div className="px-4 md:px-12 lg:16 2xl:px-24">
        <h3 className="text-white text-2xl md:text-4xl font-semibold text-center">
          Student’s Testimonials
        </h3>
        <p className="text-white text-base md:text-lg text-center md:px-20 lg:px-32">
          Here’s what our students have to say about their transformative
          learning experience Real stories, real growth. Discover firsthand the
          impact our courses have had on their lives.
        </p>
        <div className="px-4 mt-6 ">
          <Slider {...settings}>
            {testimonials.map((testimonial) => (
              <div className="px-2 flex flex-col items-center" key={testimonial.id}>
                <div className="bg-white h-40 md:h-44 shadow-lg px-4 py-2 lg:px-8 lg:py-4 rounded-lg flex flex-col">
                  {/* Testimonial Card */}
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-12 h-12 flex items-center rounded-full overflow-hidden shrink-0">
                      <img
                        src={testimonial.imgUrl}
                        alt={testimonial.name}
                        className=""
                      />
                    </div>
                    <div className="flex flex-col">
                      <h3 className="text-lg font-normal">
                        {testimonial.name}
                      </h3>
                      <span className="text-sm text-gray-500">
                        {testimonial.category}
                      </span>
                      <div className="flex">
                        {getStars(testimonial.rating).map((star, index) => (
                          <span key={index}>{star}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex-grow">
                    <p className="text-sm md:text-base line-clamp-3">
                      {testimonial.testimony}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      {/* Get In Touch Section */}
      <div className=" p-8 lg:py-8   bg-gray-100 mt-8 rounded-br-[40px] rounded-tl-[40px]  lg:rounded-br-[70px] lg:rounded-tl-[70px] flex justify-center items-center">
        <div className=" lg:w-1/2 p-4 md:p-8 bg-gradient-to-r from-secondary-bg-color to-primary-bg-color rounded-lg ">
          <h3 className="text-white text-2xl font-semibold text-center">
            Get In Touch!
          </h3>
          <p className="text-white text-base text-center mt-2">
            Subscribe Us to get in touch and to enjoy discounts, promos and much
            more!
          </p>
          <div className="flex gap-4 justify-center mt-6 flex-col sm:flex-row ">
            <div className="rounded bg-white border-2 border-gray-200 md:w-1/2 flex gap-2 items-center px-2 sm:px-4 py-2 drop-shadow-sm">
              <FaEnvelope className="text-gray-400 text-xl font-medium" />
              <input
                type="email"
                placeholder="Enter Email..."
                className="w-full focus:outline-none h-full sm:text-lg text-gray-500 font-medium"
              />
            </div>
            <button className="px-4 md:px-8 py-2 rounded font-semibold text-primary-bg-color bg-white drop-shadow-md ">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
