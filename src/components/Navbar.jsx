import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets"
import {
  HiHome,
  HiUser,
  HiAcademicCap,
  HiFolder,
  HiEnvelope,
} from 'react-icons/hi2';

import Socials from './Socials';

export const navData = [
  { name: 'home', path: '/', icon: <HiHome /> },
  { name: 'about', path: '/about', icon: <HiUser /> },
  { name: 'experience', path: '/work', icon: <HiAcademicCap /> },
  { name: 'projects', path: '/services', icon: <HiFolder /> },
  {
    name: 'contact',
    path: '/contact',
    icon: <HiEnvelope />,
  },
];

const Navbar = () => {
  const [active, setActive] = useState('');
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (index) => {
    setActiveItem(index);
  };

  return (
    <>
      <nav className="sm:px-15 px-6 w-full flex items-center py-5 fixed top-0 z-20">
        <div className='w-full flex-row flex justify-between items-center max-w-7xl mx-auto' >
          <Link to="/" className='flex items-center gap-2'
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}>
            <img src={logo} alt="mylogo" className='w-9 h-9 object-contain' />

            <p className="text-white text-[18px] font-bold cursor-pointer flex"> Vinay &nbsp;<span className='sm:block hidden'>| &nbsp;Full Stack Developer</span></p>
          </Link>

          {/* it is for the dropdown menu */}
          {/* <div className="flex flex-1 justify-end me-20 items-center">
          <img src={toggle ? close : menu} alt="menu"
            className='w-[24px] h-[20px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}
          />

          <div className={`${!toggle ? 'hidden' : 'flex'} p-4 bg-black-200 absolute top-14 right-20 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className='list-none flex flex-col justify-end items-start gap-4 '>

              {navLinks.map((link) => (
                <li key={link.id}
                  className={`${active === link.title ? "text-white" : "text-secondary"
                    } font-poppins text-[16px] font-medium cursor-pointer hover:ring-blue-300/80 hover:ring-2 hover:rounded-lg hover w-[100px] ps-2`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title)
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>

        </div> */}

          <div className='hidden xl:flex absolute top-[25vh] right-[3vh] justify-between xl:flex-col items-center xl:justify-center gap-y-10 bg-white/10 backdrop-blur-sm xl:text-xl xl:rounded-full p-4 py-6'>
            {navData.map((link, index) => {
              const isActive = activeItem === index;
              return <a href={`#${link.name}`} key={index}
                onClick={() => handleItemClick(index)}
                className={`group hover:text-[#F13024] transition-all duration-300 ${isActive ? '#F13024' : ''}`}
              >
                {/* tooltip */}

                <div className="absolute pr-16 right-0 hidden xl:group-hover:flex">
                  <div className="bg-white relative flex text-primary items-center p-[6px] rounded-[3px]">
                    <div className="text-[14px] leading-none font-semibold capitalise">{link.name}</div>

                    {/* triangle */}
                    <div className="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2"></div>
                  </div>
                </div>

                {link.icon}</a>
            })}
          </div>

          <div className='xl:hidden fixed bottom-0 left-0 w-full flex justify-between items-center gap-x-6 text-xl bg-white/10 backdrop-blur-md p-4'>
            {navData.map((link, index) => {
              const isActive = activeItem === index;
              return <a href={`#${link.name}`} key={index}
                onClick={() => handleItemClick(index)}
                className={`group hover:text-[#F13024] transition-all duration-300 ${isActive ? '#F13024' : ''}`}
              >

                {link.icon}</a>
            })}
          </div>

          <Socials />

        </div>
      </nav>

    </>

  )
}

export default Navbar