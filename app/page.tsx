import logoWhite from '../public/assets/images/LogoWhite.png'
import WhatsupIcon from '../public/assets/social/whatsupIcon.png'
import FacebookIcon from '../public/assets/social/fackbookIcon.png'
import InstagramIcon from '../public/assets/social/instagramIcon.png'
import Image from 'next/image'
import MainSlider from '@/components/Landing/MainSlider'
import Link from 'next/link'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"


export default function Home() {
  return (
    <>
    <main className="min-h-screen w-full flex relative ">
      <div className='hidden md:flex flex-col gap-4 absolute left-4 bottom-10'>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Link
                href={'/'}>
                <Image
                  src={WhatsupIcon}
                  className='object-contain w-8 bg-[#FEB6C1] rounded-xl p-2 aspect-square '
                  alt='logo'
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
      <section className='h-screen w-full max-w-4xl ml-auto'>
        <MainSlider />
      </section>
    </main>
    <section className=' h-full w-full px-4  py-32'>
      <div className='h-full w-[95%] bg-[#FEB6C1] px-6 rounded-3xl mx-auto shadow-md overflow-hidden'>
        <div className='grid grid-cols-4   gap-12'>
            <div className='h-[480px] w-72 bg-white rounded-b-3xl justify-self-center shadow-md'>

            </div>
            <div className='h-[570px] w-72 bg-white justify-self-center rounded-b-3xl shadow-md'>

            </div>
            <div className='h-[460px] w-72 bg-white justify-self-center rounded-b-3xl shadow-md '>

            </div>
            <div className='h-[500px] w-72 bg-white justify-self-center rounded-b-3xl shadow-md'>

            </div>
            <div className='h-[570px] -mt-5 w-72 bg-white justify-self-center rounded-3xl shadow-md'>

            </div>
            <div className='h-[570px] w-72 mt-[70px] bg-white justify-self-center rounded-t-3xl shadow-md'>

            </div>
            <div className='h-[570px] w-72 -mt-10 bg-white justify-self-center rounded-3xl shadow-md'>

            </div>
            <div className='h-[570px] w-72 bg-white justify-self-center rounded-3xl shadow-md'>

            </div>
           
        </div>

      </div>

    </section>
    </>
  )
}
