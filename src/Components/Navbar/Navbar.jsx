import React, { useEffect, useRef, useState } from 'react'
import './Navbar.css'
import header_bg_color from '../../assets/header-bg-color.png'
import menu_open from '../../assets/menu-black.png'
import close from '../../assets/menu_close.svg'
import { ArrowUpRight } from 'lucide-react'

const Navbar = () => {

  const [isScrolled, setIsScrolled] = useState(false);


  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };

  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };



  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
  }, []);

  return (
    <>
      {/* <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
        <img src={header_bg_color} alt='' className='w-full'/>
      </div> */}
      <nav className={` w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScrolled ? "bg-#908f96 bg-opacity-50 shadow-sm backdrop-blur-lg " : ""
        } `}>

        <a href="#top" className="no-underline w-28 cursor-pointer mr-14 text-black text-3xl">
          Sakar
        </a>
        <ul className={` hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3  ${isScrolled ? " " : "bg-white shadow-md opacity-50"
          }`}>
          <li className='relative duration-300 hover:scale-105'><a href='#top' className="relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-gray-500 after:transition-all after:duration-500 hover:after:w-full"
          >Home</a></li>
          <li className='relative duration-300 hover:scale-105'><a href='#about' className="relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-gray-500 after:transition-all after:duration-500 hover:after:w-full"
          >About Me</a></li>
          <li className='relative duration-300 hover:scale-105'><a href='#services' className="relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-gray-500 after:transition-all after:duration-500 hover:after:w-full"
          >Services</a></li>
          <li className='relative duration-300 hover:scale-105'><a href='#work' className="relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-gray-500 after:transition-all after:duration-500 hover:after:w-full"
          >My Work</a></li>
          <li className='relative duration-300 hover:scale-105'><a href='#contact' className="relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-gray-500 after:transition-all after:duration-500 hover:after:w-full"
          >Contact Me</a></li>

        </ul>
        <div>
          <a href="#contact" className="hidden lg:flex items-center gap-2 px-10 py-2 border border-gray-500 rounded-full ml-4 no-underline transition-transform duration-500 hover:scale-105 ">

            Contact <ArrowUpRight size={20} />
          </a>

          <button className='block md:hidden ml-3 cursor-pointer' onClick={openMenu}>
            <img src={menu_open} alt='Menu Icon' className='w-6' />
          </button>
        </div>

        {/* --------- mobile menu --------- */}

        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-gray-300 transition duration-500"
        >
          <div className=" absolute right-6 top-6" onClick={closeMenu}>
            <img
              alt=""
              src={close}
              className="w-5 cursor-pointer"
            />
          </div>

          <li className='relative duration-300 hover:scale-105'>
            <a href="#top" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li className='relative duration-300 hover:scale-105'>
            <a href="#about" onClick={closeMenu}>
              About me
            </a>
          </li>
          <li className='relative duration-300 hover:scale-105'>
            <a href="#services" onClick={closeMenu}>
              Services
            </a>
          </li>
          <li className='relative duration-300 hover:scale-105'>
            <a href="#work" onClick={closeMenu}>
              My Work
            </a>
          </li>
          <li className='relative duration-300 hover:scale-105'>
            <a href="#contact" onClick={closeMenu}>
              Contact Me
            </a>
          </li>
        </ul>


      </nav>
    </>

  )
}

export default Navbar