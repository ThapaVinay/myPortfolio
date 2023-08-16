import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets"

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="sm:px-15 px-6 w-full flex items-center py-5 fixed top-0 z-20 ">
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto' >
        <Link to="/" className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}>
          <img src={logo} alt="mylogo" className='w-9 h-9 object-contain' />

          <p className="text-white text-[18px] font-bold cursor-pointer flex"> Vinay &nbsp;<span className='sm:block hidden'>| &nbsp;Full Stack Developer</span></p>
        </Link>


        <div className="flex flex-1 justify-end me-20 items-center">
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

        </div>


      </div>
    </nav>

  )
}

export default Navbar