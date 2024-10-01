const HamBuger = () => {
    const [isToggle, setIsToggle] = useState(false);
  
    const isClick = () => {
      setIsToggle(!isToggle);
    };
  
    const handleLinkClick = () => {
      setIsToggle(false); // Close the menu when a link is clicked
    };
  
    return (
      <div className="relative">
        <div className="cursor-pointer" onClick={isClick}>
          <GiHamburgerMenu className='text-2xl' />
        </div>
  
        <ul
          className={`flex flex-col ${isToggle ? 'visible' : 'invisible'} md:invisible text-gray-800 items-end border-2 border-indigo-600 absolute right-0 top-0 mt-14 mr-4 bg-white`}
        >
          <li className="p-3 text-xl font-bold hover:text-sky-600 cursor-pointer" onClick={handleLinkClick}>
            <ScrollLink to="home" smooth={true} duration={1000}>
              Home
            </ScrollLink>
          </li>
          <li className="p-3 text-xl font-bold hover:text-sky-600 cursor-pointer" onClick={handleLinkClick}>
            <ScrollLink to="about" smooth={true} duration={500}>
              About
            </ScrollLink>
          </li>
          <li className="p-3 text-xl font-bold hover:text-sky-600 cursor-pointer" onClick={handleLinkClick}>
            <ScrollLink to="projects" smooth={true} duration={500}>
              Projects
            </ScrollLink>
          </li>
          <li className="p-3 text-xl font-bold hover:text-sky-600 cursor-pointer" onClick={handleLinkClick}>
            <ScrollLink to="contact" smooth={true} duration={500}>
              Contact
            </ScrollLink>
          </li>
        </ul>
      </div>
    );
  };
  
  export default HamBuger;