'use client'
import Image from 'next/image'
import wedPaper from '@/public/assets/images/weddingHero1.jpg'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { ZCOOL_KuaiLe } from 'next/font/google'


const MainSlider = () => {
    const [active, setActive] = useState(true)
    console.log(active)
  return (
    <section className= {cn('h-full w-full  transition-all duration-500 bg-[#fEB6C1] relative z-50',
    active ? ' shadow-xl' : 'translate-x-[calc(100%-40px)] bg-white'
    )}
    
    >

        <div className='absolute flex flex-col top-1/2  -translate-y-[50%] rounded-r-md overflow-hidden'>
          <ChevronRight onClick={() => setActive(prev => !prev)} className={cn(' border text-white border-[#F4F3EE] rounded-tr-md  h-10 w-10',
          active ? ' bg-white/30' : 'bg-[#FEB6C1]'
          )} />
          <ChevronLeft onClick={() => setActive(prev => !prev)} className={cn(' border text-white border-[#F4F3EE] rounded-br-md  h-10 w-10',
          active ? ' bg-white/30' : 'bg-[#FEB6C1]'
          )} />
        </div>

        <div className='h-[500px] w-[700px] bg-white rounded-xl absolute -right-36 -top-12 -rotate-[40deg] shadow-md'>
          <div className='relative h-full w-full '>
            <div className='h-60 w-60 bg-transparent border-8 rounded-xl border-white -rotate-5 absolute z-10 -left-16 -top-16'>

            </div>
            <div className='relative h-full w-ful rounded-xl bg-blue-300 overflow-hidden'>

              <Image
                src={wedPaper}
                className='object-contain h-full scale-150  rotate-[18deg] aspect-square '
                alt='img'
              />
            </div>
          </div>

        </div>
        <div className='h-96 w-96 bg-white rounded-xl absolute -right-60 -bottom-16 -rotate-[40deg] shadow-md'>

        </div>
      </section>
  )
}

export default MainSlider
