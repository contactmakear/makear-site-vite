import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles.js';
// import index from '../index.css'
import { navLinks } from '../constans';
import { logo,makearlogo, menu, close } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  

  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollBottom = () => {
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
  };

  window.addEventListener('scroll', checkScrollTop);
  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link to='/' className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={makearlogo} alt="logo" className='makeArlogo object-contain' />
          {/* <img className="whatsap flex items-end" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/767px-WhatsApp.svg.png"/> */}

          {/* <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Eugene &nbsp; <span className="sm:block hidden">| Web Developer</span>
          </p> */}
        </Link>
        {/* <button className={`scrollTop ${showScroll ? 'show' : ''}`} onClick={scrollTop}>
        Scroll to Top
      </button> */}
      {/* <button className="scrollBottom" onClick={scrollBottom}>
        Scroll to Bottom
      </button> */}
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li key={link.id}
              className={`${active === link.title
                ? "text-white" : "text-blue"} 
                hover:text-white  text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img src={toggle ? close : menu} alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient 
            absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-col gap-4 '>
              {navLinks.map((link) => (
                <li key={link.id}
                  className={`${active === link.title
                    ? "text-white" : "text-secondary"} 
                    hovering  font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id }`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;