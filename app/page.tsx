import logoWhite from '../public/assets/images/LogoWhite.png'
import WhatsupIcon from '../public/assets/social/whatsupIcon.png'
import FacebookIcon from '../public/assets/social/fackbookIcon.png'
import InstagramIcon from '../public/assets/social/instagramIcon.png'
import CurveArrow from '../public/assets/shapes/curveArrow.png'
import wedPaper from '@/public/assets/images/weddingHero1.jpg'

import Image from 'next/image'
import MainSlider from '@/components/Landing/MainSlider'
import Link from 'next/link'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Armchair, AudioLines, Brush, MailOpen, MoveUpRight, PartyPopper, Soup, TentTree, Video } from 'lucide-react'


export default function Home() {
  return (
    <>
      <main className="min-h-screen w-full flex relative overflow-hidden ">
        <div className='hidden md:flex flex-col gap-4 absolute left-4 bottom-10'>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Link
                  href={'/'}>
                  <Image
                    src={WhatsupIcon}
                    className='object-contain w-8 bg-[#FEB6C1] rounded-xl p-2 aspect-square '
                    alt='whatsup-icon'
                  />
                </Link>
              </TooltipTrigger>
              <TooltipContent side='right' className='text-[#8A817C]'>
                <p>Contact us on whatsup</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger>
                <Link
                  href={'/'}>
                  <Image
                    src={FacebookIcon}
                    className='object-contain w-8  bg-[#FEB6C1] rounded-xl p-2 aspect-square '
                    alt='logo'
                  />
                </Link>
              </TooltipTrigger>
              <TooltipContent side='right' className='text-[#8A817C]'>
                <p>Browse facebook</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger>
                <Link
                  href={'/'}>
                  <Image
                    src={InstagramIcon}
                    className='object-contain w-8 bg-[#FEB6C1] rounded-xl p-1.5 aspect-square '
                    alt='logo'
                  />
                </Link>
              </TooltipTrigger>
              <TooltipContent side='right' className='text-[#8A817C]'>
                <p>Check out our instagram page</p>
              </TooltipContent >
            </Tooltip>
          </TooltipProvider>
        </div>


        <div className=' flex items-center w-auto p-8'>
          <Image
            src={logoWhite}
            className='object-contain w-96 aspect-square '
            alt='logo'
          />
        </div>
        <section className='h-screen w-full max-w-4xl ml-auto relative'>
          <div className='h-[500px] rounded-xl aspect-square border-8 absolute z-20 bg-transparent border-[#FEB6C1] top-1/2 -translate-y-[50%] left-1/2 -translate-x-[60%] rotate-45 pointer-events-none'>

          </div>
          <div className='text-5xl  flex-col leading-relaxed w-full text-center font-serif px-12 ml-8 font-semibold absolute flex bottom-1/2  translate-y-[65%] left-1/2 -translate-x-[50%] z-20 pointer-events-none'>
            <p className='bg-gradient-to-r from-white to-pink-500 bg-clip-text text-transparent'>Your One-stop solution for all </p>
            <p className='bg-gradient-to-r from-white to-pink-500 bg-clip-text text-transparent'>Wedding needs.</p> 
          </div>
          <div className='h-full w-full absolute  flex flex-col  justify-center items-center'>
            <div className='flex gap-16'>
              <Image
                src={wedPaper}
                className='object-cover hover:scale-105 h-52 w-80  mt-32 rounded-xl'
                alt='img'
              />
              <Image
                src={wedPaper}
                className='object-cover h-52 w-72 mr-12  mt-12 z-[31] rounded-xl'
                alt='img'
              />
            </div>

            <Image
              src={wedPaper}
              className='object-cover h-52 w-52 mt-16 ml-28 z-[31] rounded-xl '
              alt='img'
            />
          </div>
          <div className='h-full w-full absolute '>
            <MainSlider />
          </div>

        </section>
      </main>
      <section className=' h-full w-full px-4  py-32'>
        <div className='relative flex mx-auto w-fit'>
        <h1 className='text-4xl font-semibold text-neutral-800 uppercase p-4'>Range of services we offer</h1>
        <Image
              src={CurveArrow}
              className='object-cover h-12 w-12  mt-14 ml-28 z-[31] rounded-xl absolute -left-32 -rotate-[225deg]'
              alt='img'
            />
        </div>
        <div className='h-full w-[95%] bg-[#FEB6C1] px-6 rounded-3xl mt-16 mx-auto shadow-md overflow-hidden'>
          <div className='grid grid-cols-4   gap-12'>
            <div className='h-[480px] py-2 px-4 w-72 gap-2 bg-white pt-36 rounded-b-3xl justify-self-center shadow-md flex items-center flex-col'>
              <TentTree className='h-10 w-10' />
              <h1 className='text-xl font-semibold'>Venues</h1>
              <p className='text-center break-words text-[#8A817C]'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quisquam nostrum, architecto nam earum, ipsam blanditiis porro dolore laudantium illo explicabo possimus illum maxime corporis provident assumenda obcaecati fuga labore.
              </p>
              <MoveUpRight className='bg-[#FEB6C1] text-white p-1 h-10 w-10 rounded-full mt-2' />
            </div>
            <div className='h-[570px] py-2 px-4 w-72 gap-2 bg-white pt-32 justify-self-center rounded-b-3xl shadow-md flex items-center flex-col'>
              <PartyPopper className='h-10 w-10' />
              <h1 className='text-xl font-semibold'>Decorations</h1>
              <p className='text-center break-words text-[#8A817C]'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quisquam nostrum, architecto nam earum, ipsam blanditiis porro dolore laudantium illo explicabo possimus illum maxime corporis provident assumenda obcaecati fuga labore.
              </p>
              <MoveUpRight className='bg-[#FEB6C1] text-white p-1 h-10 w-10 rounded-full mt-2' />
            </div>
            <div className='h-[460px] py-2 px-4 w-72 gap-2 bg-white pt-32 justify-self-center rounded-b-3xl shadow-md flex items-center flex-col'>
              <Video className='h-10 w-10' />
              <h1 className='text-xl font-semibold'>Video/Photography</h1>
              <p className='text-center break-words text-[#8A817C]'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, uayen laudantium illo explicabo possimus illum maxime corporis provident assumenda obcaecati fuga labore.
              </p>
              <MoveUpRight className='bg-[#FEB6C1] text-white p-1 h-10 w-10 rounded-full mt-2' />
            </div>
            <div className='h-[500px] py-2 px-4 w-72 gap-2 bg-white pt-32 justify-self-center rounded-b-3xl shadow-md flex items-center flex-col'>
              <Soup className='h-10 w-10' />
              <h1 className='text-xl font-semibold'>Catering</h1>
              <p className='text-center break-words text-[#8A817C]'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quisquam nostrum, architecto nam earum, ipsam blanditiis porro dolore laudantium illo explicabo possimus illum maxime corporis provident assumenda obcaecati fuga labore.
              </p>
              <MoveUpRight className='bg-[#FEB6C1] text-white p-1 h-10 w-10 rounded-full mt-2' />
            </div>
            <div className='h-[570px] py-2 px-4 -mt- gap-2 w-72 bg-white pt-48 justify-self-center rounded-3xl shadow-md flex items-center flex-col'>
              <Armchair className='h-10 w-10' />
              <h1 className='text-xl font-semibold'>Tent & Furnitures</h1>
              <p className='text-center break-words text-[#8A817C]'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quisquam nostrum, architecto nam earum, ipsam blanditiis porro dolore laudantium illo explicabo possimus illum maxime corporis provident assumenda obcaecati fuga labore.
              </p>
              <MoveUpRight className='bg-[#FEB6C1] text-white p-1 h-10 w-10 rounded-full mt-2' />
            </div>
            <div className='h-[570px] py-2 px-4 w-72 gap-2 mt-[70px] bg-white pt-28 justify-self-center rounded-t-3xl shadow-md flex items-center flex-col'>
              <AudioLines className='h-10 w-10' />
              <h1 className='text-xl font-semibold'>Entertainment</h1>
              <p className='text-center break-words text-[#8A817C]'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quisquam nostrum, architecto nam earum, ipsam blanditiis porro dolore laudantium illo explicabo possimus illum maxime corporis provident assumenda obcaecati fuga labore.
              </p>
              <MoveUpRight className='bg-[#FEB6C1] text-white p-1 h-10 w-10 rounded-full mt-2' />
            </div>
            <div className='h-[570px] py-2 px-4 w-72 gap-2 -mt-10 bg-white pt-56 justify-self-center rounded-3xl shadow-md flex items-center flex-col'>
              <Brush className='h-10 w-10' />
              <h1 className='text-xl font-semibold'>Make Ups</h1>
              <p className='text-center break-words text-[#8A817C]'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quisquam nostrum, architecto nam earum, ipsam blanditiis porro dolore laudantium illo explicabo possimus illum maxime corporis provident assumenda obcaecati fuga labore.
              </p>
              <MoveUpRight className='bg-[#FEB6C1] text-white p-1 h-10 w-10 rounded-full mt-2' />
            </div>
            <div className='h-[570px] py-2 px-4 w-72 gap-2 bg-white pt-44 justify-self-center rounded-3xl shadow-md flex items-center flex-col'>
              <MailOpen className='h-10 w-10' />
              <h1 className='text-xl font-semibold'>Invitations</h1>
              <p className='text-center break-words text-[#8A817C]'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quisquam nostrum, architecto nam earum, ipsam blanditiis porro dolore laudantium illo explicabo possimus illum maxime corporis provident assumenda obcaecati fuga labore.
              </p>
              <MoveUpRight className='bg-[#FEB6C1] text-white p-1 h-10 w-10 rounded-full mt-2' />
            </div>

          </div>

        </div>

      </section>
    </>
  )
}
