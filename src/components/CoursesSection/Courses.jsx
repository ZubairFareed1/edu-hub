import React,{useState} from "react";
import { FaStar, FaBookOpen, FaUser } from "react-icons/fa";

/**
 * @descrition Home page course section component 
 * @returns {React.JSX.Element}
 * ```js
 * <Course/>
 * 
 * ```
 */
export default function Courses() {
  const [card, setCard] = useState([
    {
      id: 1,
      title: "Web Design & Development",
      category: "Design",
      imgUrl: "courses1.jpg",
      rating: 5.0,
      reviews: 11000,
      videos: 25,
      students: 1000,
      price: 99,
      instructor: "John Doe",
      instructorImg: "instructor1.jpg",
    },
    {
      id: 2,
      title: "E-Commerce",
      category: "Business",
      imgUrl: "courses2.jpg",
      rating: 4.5,
      reviews: 8000,
      videos: 18,
      students: 1200,
      price: 79,
      instructor: "Jane Smith",
      instructorImg: "instructor2.jpg",
    },
    {
      id: 3,
      title: "User Experience Design",
      category: "UI/UX Design",
      imgUrl: "courses3.jpg",
      rating: 4.0,
      reviews: 9500,
      videos: 22,
      students: 1500,
      price: 89,
      instructor: "Havena",
      instructorImg: "instructor3.jpg",
    }
  ]) 
  function formatReviewCount(reviewCount) {
    if (reviewCount >= 1000000) {
      return (reviewCount / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    } else if (reviewCount >= 1000) {
      return (reviewCount / 1000).toFixed(1).replace(/\.0$/, '') + 'k';
    } else {
      return reviewCount.toString();
    }
  }
  return (
    <div className="w-full h-auto py-12 bg-gradient-to-br from-secondary-bg-color to-primary-bg-color px-4 md:px-12 lg:px-16 xl:px-24 2xl:px-32">
      <div className="w-full">
        <h3 className="text-center text-white text-3xl font-semibold">
          Our Popular Courses
        </h3>
        <p className="pt-2 text-gray-100 md:w-1/2 text-center mx-auto">
          Discover our most sought-after courses, carefully curated to meet the
          demands of today’s learners. Dive into engaging content crafted for
          success in every step of your educational journey.
        </p>
        <div className="pt-8 justify-between gap-2 md:gap-2 p-4 flex md:flex-row flex-col">
          {/* Cards */}
          {card.map((item) => (
            <div key={item.id} className="flex-1  bg-slate-50 p-2 rounded shadow-md drop-shadow-md">
             
              <div className="relative w-full h-40 bg-no-repeat bg-cover rounded" style={{ backgroundImage: `url(${item.imgUrl})` }}>
                <div className="absolute top-0 right-0 bg-emerald-200 flex items-center h-6 rounded-sm px-2 gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-700"></div>
                  <span className="font-medium text-gray-800 text-sm">{item.category}</span>
                </div>
              </div>
              <div className="mt-2 mx-2">
                <h4 className="font-semibold text-lg">
                  {item.title}
                </h4>
                <div className="flex items-center justify-between mt-2">
                  <div className="flex gap-1 items-center">
                    <div className="w-16 h-6 bg-emerald-200 flex items-center px-2 justify-between rounded-sm">
                      <FaStar className="text-amber-400" />
                      <span className="font-medium text-gray-800 text-sm">{item.rating.toFixed(1)}</span>
                    </div>
                    <span className="text-xs">({formatReviewCount(item.reviews)} Reviews)</span>
                  </div> 
                </div>
                <div className="flex items-center gap-4 mt-8">
                  <div className="flex gap-1 items-center">
                    <FaBookOpen className="text-primary-bg-color" />
                    <span className="text-xs md:text-sm">{item.videos} Videos</span>
                  </div>
                  <div className="flex gap-1 items-center">
                    <FaUser className="text-primary-bg-color" />
                    <span className="text-xs md:text-sm">{item.students} Students</span>
                  </div>
                </div>
                <hr className="mt-4 border-2 border-gray-200" />
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-end gap-2">
                    <div className="relative inline-block">
                      <img className="w-8 h-8 rounded-full" src={item.instructorImg} alt="Avatar" />
                      <span className="absolute bottom-0 right-0 block w-3 h-3 bg-green-600 rounded-full"></span>
                    </div>
                    <h3 className="font-semibold text-gray-800">John Doe</h3>
                  </div>
                  <div>
                    <span className="text-gray-800 font-semibold text-lg">${item.price}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
















          {/* card 1 */}
          {/* <div className="flex-1  bg-slate-50 p-2 rounded shadow-md drop-shadow-md">
            <div className="relative w-full bg-[url(courses1.jpg)] h-1/2 bg-no-repeat bg-cover rounded">
              <div className="absolute top-0 right-0 bg-emerald-200 flex items-center h-6 rounded-sm px-2 gap-2">
                <div className="w-2 h-2 rounded-full bg-green-700"></div>
                <span className="font-medium text-gray-800 text-sm">Web Design</span>
              </div>
            </div>
            <div className="mt-2 mx-2">
              <h4 className="font-semibold text-lg">
                Web Design & Development
              </h4>
              <div className="flex items-center justify-between mt-2">
                <div className="flex gap-1 items-center">
                  <div className="w-16 h-6 bg-emerald-200 flex items-center px-2 justify-between rounded-sm">
                    <FaStar className="text-amber-400" />
                    <span className="font-medium text-gray-800 text-sm">5.0</span>
                  </div>
                  <span className="text-xs">(11k+ Reviews)</span>
                </div>
              </div>
              <div className="flex items-center gap-4 mt-8">
                <div className="flex gap-1 items-center">
                  <FaBookOpen className="text-primary-bg-color" />
                  <span className="text-sm">25 Videos</span>
                </div>
                <div className="flex gap-1 items-center">
                  <FaUser className="text-primary-bg-color" />
                  <span className="text-sm">1200 Students</span>
                </div>
              </div>
              <hr className="mt-4 border-2 border-gray-200" />
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-end gap-2">
                  <div className="relative inline-block">
                    <img
                      className="w-8 h-8 rounded-full"
                      src="avator5.jpg"
                      alt="Avatar"
                    />
                    <span className="absolute bottom-0 right-0 block w-3 h-3 bg-green-600 rounded-full"></span>
                  </div>
                  <h3 className="font-semibold text-lg">John Doe</h3>
                </div>
                <div>
                  <span className="text-2xl font-semibold">$ 200</span>
                </div>
              </div>
            </div>
          </div> */}

          {/* card 2 */}
          {/* <div className="flex-1 min-w-48 max-w-xs h-96 bg-slate-50 p-2 rounded shadow-md drop-shadow-md">
            <div className="relative w-full bg-[url(courses2.jpg)] h-1/2 bg-no-repeat bg-cover rounded">
              <div className="absolute top-0 right-0 bg-emerald-200 flex items-center h-6 rounded-sm px-2 gap-2">
                <div className="w-2 h-2 rounded-full bg-green-700"></div>
                <span className="font-medium text-gray-800 text-sm">Business</span>
              </div>
            </div>
            <div className="mt-2 mx-2">
              <h4 className="font-semibold text-lg">E-Commerce</h4>
              <div className="flex items-center justify-between mt-2">
                <div className="flex gap-1 items-center">
                  <div className="w-16 h-6 bg-emerald-200 flex items-center px-2 justify-between rounded-sm">
                    <FaStar className="text-amber-400" />
                    <span className="font-medium text-gray-800 text-sm">4.9</span>
                  </div>
                  <span className="text-xs">(9k+ Reviews)</span>
                </div>
              </div>
              <div className="flex items-center gap-4 mt-8">
                <div className="flex gap-1 items-center">
                  <FaBookOpen className="text-primary-bg-color" />
                  <span className="text-sm">55 Videos</span>
                </div>
                <div className="flex gap-1 items-center">
                  <FaUser className="text-primary-bg-color" />
                  <span className="text-sm">1950 Students</span>
                </div>
              </div>
              <hr className="mt-4 border-2 border-gray-200" />
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-end gap-2">
                  <div className="relative inline-block">
                    <img
                      className="w-8 h-8 rounded-full"
                      src="courseInstructor.jpg"
                      alt="Avatar"
                    />
                    <span className="absolute bottom-0 right-0 block w-3 h-3 bg-green-600 rounded-full"></span>
                  </div>
                  <h3 className="font-semibold text-lg">Mark Tom</h3>
                </div>
                <div>
                  <span className="text-2xl font-semibold">$ 215</span>
                </div>
              </div>
            </div>
          </div>
 */}
          {/* card 3 */}
          {/* <div className="flex-1 min-w-48 max-w-xs h-96 bg-slate-50 p-2 rounded shadow-md drop-shadow-md">
            <div className="relative w-full bg-[url(courses3.jpg)] h-1/2 bg-no-repeat bg-cover rounded">
              <div className="absolute top-0 right-0 bg-emerald-200 flex items-center h-6 rounded-sm px-2 gap-2">
                <div className="w-2 h-2 rounded-full bg-green-700"></div>
                <span className="font-medium text-gray-800 text-sm">UI/UX Design</span>
              </div>
            </div>
            <div className="mt-2 mx-2">
              <h4 className="font-semibold text-lg">Wireframing and Prototyping</h4>
              <div className="flex items-center justify-between mt-2">
                <div className="flex gap-1 items-center">
                  <div className="w-16 h-6 bg-emerald-200 flex items-center px-2 justify-between rounded-sm">
                    <FaStar className="text-amber-400" />
                    <span className="font-medium text-gray-800 text-sm">5.0</span>
                  </div>
                  <span className="text-xs">(11k+ Reviews)</span>
                </div>
              </div>
              <div className="flex items-center gap-4 mt-8">
                <div className="flex gap-1 items-center">
                  <FaBookOpen className="text-primary-bg-color" />
                  <span className="text-sm">41 Videos</span>
                </div>
                <div className="flex gap-1 items-center">
                  <FaUser className="text-primary-bg-color" />
                  <span className="text-sm">850 Students</span>
                </div>
              </div>
              <hr className="mt-4 border-2 border-gray-200" />
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-end gap-2">
                  <div className="relative inline-block">
                    <img
                      className="w-8 h-8 rounded-full"
                      src="CourseInstructor3.jpg"
                      alt="Avatar"
                    />
                    <span className="absolute bottom-0 right-0 block w-3 h-3 bg-green-600 rounded-full"></span>
                  </div>
                  <h3 className="font-semibold text-lg">Havena</h3>
                </div>
                <div>
                  <span className="text-2xl font-semibold">$ 190</span>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
