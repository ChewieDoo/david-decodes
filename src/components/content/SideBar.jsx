import React, { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "../../context/Context";
import { FaInstagram, FaGithub, FaYoutube } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { SlMenu } from "react-icons/sl";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [showIcon, setShowIcon] = useState(true);
  const sidebarRef = useRef(null); // Creating reference for sidebar
  const lastScrollY = useRef(0); // Keep track of the last scroll position
  const { caseStudies } = useGlobalContext();

  // Function to toggle on and off the navbar
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  // Function to handle clicks outside of the side-bar
  //const handleClickOutside = (event) => {
  // Checks to see if 1. sidebar is mounted, 2. if the clicked element is nt art of the sidebar
  //if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
  // 'current' is a property of the mutable reference object
  //setIsNavOpen(false);
  //}
  //};

  const handleScroll = () => {
    if (window.scrollY > lastScrollY.current) {
      setShowIcon(false);
      setIsNavOpen(false);
    } else {
      setShowIcon(true);
      setIsNavOpen(false);
    }
    lastScrollY.current = window.scrollY;
  };

  //Listener callsforhandleClickOutside whenever the user clicks anywhere outside the document
  useEffect(() => {
    //document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);
    return () => {
      //document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className='relative z-10'>
      <div
        className={`fixed ${
          window.innerWidth < 768 ? "bottom-6" : "top-6"
        } left-4 z-10 transition-transform duration-300 ${
          showIcon
            ? window.innerWidth < 768
              ? "translate-x-0"
              : "translate-y-0"
            : window.innerWidth < 768
            ? "-translate-x-[200%]"
            : "-translate-y-[200%]"
        } `}>
        <div className='relative flex items-center justify-center w-12 h-12 bg-white rounded-xl shadow-md md:bg-transparent md:shadow-none'>
          <SlMenu
            onClick={toggleNav}
            size={30}
            className={`cursor-pointer`}></SlMenu>
        </div>
      </div>

      <div
        ref={sidebarRef} // Attach ref to sidebar
        className={`fixed top-0 left-0 w-full md:w-1/5 h-screen bg-white shadow-lg transition-transform duration-300 ${
          isNavOpen ? "translate-x-0" : "-translate-x-full"
        }`}>
        <div className='ml-2 p-6 mt-16'>
          <ul>
            <li className='mb-9'>
              <NavLink to='/' className='nav-item-active'>
                Work
              </NavLink>
              <ul className='mt-2 pl-9'>
                <li className='mb-2'>
                  <NavLink
                    to={caseStudies[0].link}
                    className={({ isActive }) =>
                      isActive ? "sidebar-item-active" : "sidebar-item"
                    }>
                    Depop - Rent a Depoop
                  </NavLink>
                </li>

                <li className='mb-2'>
                  <NavLink
                    to={caseStudies[2].link}
                    className={({ isActive }) =>
                      isActive ? "sidebar-item-active" : "sidebar-item"
                    }>
                    Potion - Note taking app
                  </NavLink>
                </li>

                <li className='mb-2'>
                  <NavLink
                    to='/frictionless'
                    className={({ isActive }) =>
                      isActive ? "sidebar-item-active" : "sidebar-item"
                    }>
                    Frictionless Fashion
                  </NavLink>
                </li>

                <li className='mb-2'>
                  <NavLink
                    to={caseStudies[3].link}
                    className={({ isActive }) =>
                      isActive ? "sidebar-item-active" : "sidebar-item"
                    }>
                    KPop - Web Development
                  </NavLink>
                </li>
              </ul>
            </li>

            <li className='mb-9'>
              <NavLink
                to='/resume'
                className={({ isActive }) =>
                  isActive ? "nav-item-active" : "nav-item "
                }>
                Resume
              </NavLink>
            </li>
            <li className='mb-9'>
              <NavLink
                to='/gallery'
                className={({ isActive }) =>
                  isActive ? "nav-item-active" : "nav-item "
                }>
                Gallery
              </NavLink>
            </li>
          </ul>
        </div>
        <Socials />
      </div>
    </div>
  );
};

export default SideBar;

const Socials = () => {
  const handleEmailClick = () => {
    window.location.href = `mailto:${"xdu018@gmail.com"}`;
  };

  const NavIcon = ({ icon, href }) => {
    if (href) {
      return (
        <a
          href={href}
          target='_blank'
          rel='noopener noreferrer'
          className='socials-icon group'>
          {icon}
        </a>
      );
    }
    return <div className='socials-icon group'>{icon}</div>;
  };

  return (
    <footer className='mt-40 md:mt-56 ml-6'>
      <div className='flex flex-row gap-4'>
        <NavIcon
          icon={<FaInstagram size='22' />}
          href='https://www.instagram.com/jungkook_bighitentertainment/'
          target='_blank'></NavIcon>
        <NavIcon
          icon={<FaGithub size='22' />}
          href='https://github.com/ChewieDoo'
          target='_blank'></NavIcon>
        <NavIcon
          icon={<FaYoutube size='22' />}
          href='https://www.youtube.com/@Zinggzouu'
          target='_blank'></NavIcon>
        <NavIcon
          icon={
            <MdEmail size='22' onClick={handleEmailClick} target='_blank' />
          }></NavIcon>
      </div>
    </footer>
  );
};
