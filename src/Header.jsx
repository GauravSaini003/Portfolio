import React, { useState } from 'react'; // Import React and useState
import { Link as ScrollLink } from 'react-scroll';
import { MdDarkMode, MdOutlineLightMode } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';
import { scroll } from 'react-scroll';

const Header = () => {
    const scrollToTop = () => {
      scroll.scrollToTop();
    };
  
    const [isToggle, setIsToggle] = useState(false);
    const [dark, setDark] = useState(false);
  
    const isClick = () => {
      setIsToggle(!isToggle);
    };
  
    const darkModeHandler = () => {
      setDark(!dark);
      document.body.classList.toggle("dark");
    };
  
    const handleMenuItemClick = () => {
      setIsToggle(false); // Collapse the menu on item click
    };
  
    return (
      <div className="dark:bg-gray-900 flex justify-between p-3 border border-b-1 drop-shadow-md bg-gray-50 sticky inset-y-0 inset-x-0 w-full top-0 left-0 z-10 cursor-pointer">
        <h1 className="p-5 md:text-3xl text-xl font-bold text-gray-900" onClick={scrollToTop}>
          Gaurav.dev
        </h1>
  
        <div className='md:mt-8 mt-6 md:text-2xl text-2xl'>
          <button onClick={darkModeHandler}>
            {dark ? <MdDarkMode /> : <MdOutlineLightMode />}
          </button>
        </div>
  
        <ul className={`flex flex-col md:flex md:flex-row ${isToggle ? 'visible' : 'hidden'} md:visible justify-center items-center text-gray-800 md:pe-12`}>
          <li className="md:mr-5 mt-5 mb-5 md:pt-0 pt-20 text-xl font-bold hover:text-sky-600 cursor-pointer" onClick={handleMenuItemClick}>
            <ScrollLink to="home" smooth={true} duration={500}>
              Home
            </ScrollLink>
          </li>
          <li className="md:mr-5 mt-5 mb-5 text-xl font-bold hover:text-sky-600 cursor-pointer" onClick={handleMenuItemClick}>
            <ScrollLink to="about" smooth={true} duration={500}>
              About
            </ScrollLink>
          </li>
          <li className="md:mr-5 mt-5 mb-5 text-xl font-bold hover:text-sky-600 cursor-pointer" onClick={handleMenuItemClick}>
            <ScrollLink to="projects" smooth={true} duration={500}>
              Projects
            </ScrollLink>
          </li>
          <li className="mt-5 mb-5 text-xl font-bold hover:text-sky-600 cursor-pointer" onClick={handleMenuItemClick}>
            <ScrollLink to="contact" smooth={true} duration={500}>
              Contact
            </ScrollLink>
          </li>
          <li className="md:mr-5 mt-5 mb-5 md:pt-0 text-xl font-bold hover:text-sky-600 cursor-pointer md:ms-6" onClick={handleMenuItemClick}>
            <a href="https://drive.google.com/file/d/1cbvzFtjFX4kXcH6WSaPzIkDLZzYyaWNq/view?usp=sharing">Resume</a>
          </li>
        </ul>
  
        <div className="md:hidden mt-3">
          {/* Hamburger Menu Icon */}
          {isToggle ? (
            <button onClick={isClick}>
              <span className='text-2xl mt-4'>✖</span> {/* Cross icon */}
            </button>
          ) : (
            <GiHamburgerMenu className='text-2xl mt-4' onClick={isClick} />
          )}
        </div>
      </div>
    );
  };
  
  export default Header;
