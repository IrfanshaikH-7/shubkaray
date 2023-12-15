import styles from './style.module.scss';

import { motion } from 'framer-motion';

import { usePathname } from 'next/navigation';

import { menuSlide } from '@/lib/anim';

import Link from './Link';
import { useState } from 'react';
import CurveSvg from './CurveSvg';

const navItems = [

    {

        title: "Home",

        href: "/",

    },

    {

        title: "Work",

        href: "/work",

    },

    {

        title: "About",

        href: "/about",

    },

    {

        title: "Contact",

        href: "/contact",

    },

]

const Nav = () => {
    const pathname = usePathname();

    const [selectedIndicator, setSelectedIndicator] = useState(pathname);
    return (
        <motion.div 

        variants={menuSlide} 
  
        initial="initial" 
  
        animate="enter" 
  
        exit="exit" 
  
        className="h-screen w-80 bg-[#414141] fixed top-0 right-0 text-white"
  
        >
  
         <div className="bodyN h-full flex flex-col justify-between pt-24 pb-12 px-16">
  
              <div onMouseLeave={() => {setSelectedIndicator(pathname)}} 
              className='flex flex-col text-sm gap-3 '
              >
  
                      <div className='text-white  border-b-[1px] border-white uppercase text-[11px] mb-10'>
  
                          <p>Navigation</p>
  
                      </div>
  
                      {
  
                        navItems.map( (data, index) => {
  
                          return <Link 
  
                          key={index} 
  
                          data={{...data, index}} 
  
                          isActive={selectedIndicator == data.href} 
  
                          setSelectedIndicator={setSelectedIndicator}>
  
                          </Link>
  
                        })
  
                      }
  
              </div>
              <div className="flex flex-col w-full justify-between text-[12px] gap-2 ">
  
                  <p className=''>Awwwards</p>
  
                  <p className=''>Instagram</p>
  
                  <p className=''>Dribble</p>
  
                  <p className=''>LinkedIn</p>
  
              </div>
          </div>
          
<CurveSvg />          
  
      </motion.div>
    )
}

export default Nav
