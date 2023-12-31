"use client"
import { cn } from '@/lib/utils'
import { AnimatePresence } from 'framer-motion'
import React, { useState } from 'react'
import Nav from './Nav'

const MobileNav = () => {
    const [isActive, setIsActive] = useState(false)
  return (
    <>
    <div onClick={()=> {setIsActive(!isActive)}} className='fixed lg:hidden right-0 m-5 z-[2] w-8 h-8 rounded-full cursor-pointer md:flex justify-center items-center bg-[#455CE9]'>
        <div className={cn('burger', isActive ? "burgerActive": '')}>
            
        </div>
    </div>

    <AnimatePresence mode="wait">

           {isActive && <Nav />}

       </AnimatePresence>
    </>
    
  )
}

export default MobileNav
