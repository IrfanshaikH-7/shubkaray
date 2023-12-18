import Image from 'next/image'
import React from 'react'
import image1 from '@/public/assets/setImages/image1.jpg'

const LandingPageHero = () => {
    return (
        <div className='h-screen w-full relative'>
            <div className={`h-full w-full bg-slate-100 bg-[url('../public/assets/images/flower-white.jpg')] bg-no-repeat bg-cover bg-center bg-fixed
            py-24 px-4 flex justify-between
            `}>
                <div className='h-full w-auto flex items-center justify-center'>
                    <h3 className='-rotate-12 text-5xl font-alex pl-12 '>
                        Are You Getting
                        <br />
                        <span className='text-7xl text-center'>Married !</span>
                    </h3>
                </div>
                <div className='h-full w-2/3 flex justify-center py-12'>
                    <section className=' flex justify-center flex-col border border-neutral-500 w-9/12 aspect-video  bg-white rounded-lg p-2 overflow-clip relative'>
                        <Image src={image1}
                        alt='image'
                         fill
                         className='h-72 w-96'/>
                        {/* <div className='flex h-full w-full -rotate-6 transform -translate-x-8'>
                            <Image 
                            src=''
                            alt='image'
                            className="h-48 aspect-square bg-blue-400 border gap-2" />
                            <Image 
                            src=''
                            alt='image'
                            className="h-48 aspect-square bg-blue-400 border gap-2" />
                            <Image 
                            src=''
                            alt='image'
                            className="h-48 aspect-video  bg-blue-400 border gap-2" />
                            <Image 
                            src=''
                            alt='image'
                            className="h-48 aspect-square bg-blue-400 border gap-2" />
                            <Image 
                            src=''
                            alt='image'
                            className="h-48 aspect-square bg-blue-400 border gap-2" />
                            <Image 
                            src=''
                            alt='image'
                            className="h-48 aspect-square bg-blue-400 border gap-2" />
                        </div>
                        <div className='flex g-full w-full rotate -rotate-6 -translate-x-8'>
                            <div className="h-48 aspect-video  bg-blue-400 border gap-2"></div>
                            <div className="h-48 aspect-square bg-blue-400 border gap-2"></div>
                            <div className="h-48 aspect-square bg-blue-400 border gap-2"></div>
                            <div className="h-48 aspect-square bg-blue-400 border gap-2"></div>
                            <div className="h-48 aspect-square bg-blue-400 border gap-2"></div>
                            <div className="h-48 aspect-square bg-blue-400 border gap-2"></div>
                        </div> */}
                    </section>
                </div>
            </div>
        </div>

    )
}

export default LandingPageHero
