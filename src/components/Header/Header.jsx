import React,{useState} from 'react'
import { BsList } from "react-icons/bs";
import { FaTimes } from "react-icons/fa"; // Icon for closing the sidebar



export default function Header() { 
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    if (!isSidebarOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  };
  return (
    <>
    <div className='flex flex-row py-4 justify-between bg-white px-4 md:px-12 lg:px-16 xl:px-24 2xl:px-32 fixed top-0 left-0 w-screen z-30 shadow-md' >
        <div className='flex justify-center items-center'>
            <a className='text-3xl font-bold' href="#"><span className='text-primary-bg-color'>E</span>duhub<span className='text-primary-bg-color'>.</span></a>
        </div>
        <ul className='flex-row items-center gap-1 hidden lg:flex '>
            <li className='py-2 px-2  lg:px-4 hover:cursor-pointer'><a className='font-semibold h-full w-full hover:text-primary-bg-color' href="">Home</a></li>
            <li className='py-2 px-2  lg:px-4 hover:cursor-pointer'><a className='font-semibold h-full w-full hover:text-primary-bg-color' href="">Courses</a></li>
            <li className='py-2 px-2  lg:px-4 hover:cursor-pointer'><a className='font-semibold h-full w-full hover:text-primary-bg-color' href="">Teachers</a></li>
            <li className='py-2 px-2  lg:px-4 hover:cursor-pointer'><a className='font-semibold h-full w-full hover:text-primary-bg-color' href="">Offers</a></li>
            <li className='py-2 px-2  lg:px-4 hover:cursor-pointer'><a className='font-semibold h-full w-full hover:text-primary-bg-color' href="">Contact</a></li>
            
        </ul>
        <div className='flex items-center gap-4'>

        <div className='hidden flex-row items-center md:gap-2 md:flex '>
            <button className='shadow-md drop-shadow-md px-4 lg:px-8 py-2 rounded font-medium border-2 border-green-600'>Sign in</button>
            <button className='shadow-md drop-shadow-md px-4 lg:px-8 py-2 rounded font-semibold bg-gradient-to-r from-secondary-bg-color to-primary-bg-color text-white'>Free Trial</button>
        </div>
        <button className='block lg:hidden'>

          <BsList className='text-3xl md:6text-xl' onClick={toggleSidebar} />

        </button>
        </div>

      
    </div>
  {/* mobile sidebar */}
  <div className={`fixed top-0 right-0 h-full w-3/4 bg-white z-40 shadow-lg transform ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
        <div className='flex justify-between items-center p-4'>
          <h2 className='text-2xl font-bold'>Menu</h2>
          <button onClick={toggleSidebar}>
            <FaTimes className='text-2xl'/>
          </button>
        </div>
        <ul className='flex flex-col p-4 gap-2 '>
          <li className='py-2 md:py-4 px-1 hover:cursor-pointer'><a className='font-semibold h-full w-full hover:text-primary-bg-color' href="">Home</a></li>
          <li className='py-2 md:py-4 px-1 hover:cursor-pointer'><a className='font-semibold h-full w-full hover:text-primary-bg-color' href="">Courses</a></li>
          <li className='py-2 md:py-4 px-1 hover:cursor-pointer'><a className='font-semibold h-full w-full hover:text-primary-bg-color' href="">Teachers</a></li>
          <li className='py-2 md:py-4 px-1 hover:cursor-pointer'><a className='font-semibold h-full w-full hover:text-primary-bg-color' href="">Offers</a></li>
          <li className='py-2 md:py-4 px-1 hover:cursor-pointer'><a className='font-semibold h-full w-full hover:text-primary-bg-color' href="">Contact</a></li>
        </ul>
        <div className='p-4  md:hidden md:mt-4'>
          <button className='shadow-md drop-shadow-md w-full mb-4 px-4 py-2 rounded font-medium border-2 border-green-600'>Sign in</button>
          <button className='shadow-md drop-shadow-md w-full px-4 py-2 rounded font-semibold bg-gradient-to-r from-secondary-bg-color to-primary-bg-color text-white'>Free Trial</button>
        </div>
      </div>
      {/* Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black opacity-50 z-30" 
          onClick={toggleSidebar}
        />
      )}



    </>
  )
}
