import React from 'react'

const LandingPage = () => {
    return (
        <div className='h-screen w-full relative'>
            <div className={`h-full w-full bg-slate-100 bg-[url('../public/assets/images/flower-white.jpg')] bg-no-repeat bg-cover bg-center bg-fixed
            py-24 px-4 flex justify-between
            `}>
                <div className='h-full w-auto flex items-center justify-center bg-slate-400 '>
                    <h3 className='-rotate-12 text-5xl bg-blue-200'>
                        Are You Getting
                        <br />
                        <span className='text-7xl text-center'>Married !</span>
                    </h3>
                </div>
                <div className='h-full w-2/3 bg-slate-500 flex justify-center py-12'>
                    <section className=' flex justify-center flex-col border-neutral-500 w-9/12 aspect-video max-w-fit bg-white rounded-lg p-2 overflow-clip'>
                        <div className='flex h-full w-full -rotate-6 transform -translate-x-8'>
                            <div className="h-48 aspect-square bg-blue-400 border gap-2"></div>
                            <div className="h-48 aspect-square bg-blue-400 border gap-2"></div>
                            <div className="h-48 aspect-video bg-blue-400 border gap-2"></div>
                            <div className="h-48 aspect-square bg-blue-400 border gap-2"></div>
                            <div className="h-48 aspect-square bg-blue-400 border gap-2"></div>
                            <div className="h-48 aspect-square bg-blue-400 border gap-2"></div>
                        </div>
                        <div className='flex g-full w-full rotate -rotate-6 -translate-x-8'>
                            <div className="h-48 aspect-video bg-blue-400 border gap-2"></div>
                            <div className="h-48 aspect-square bg-blue-400 border gap-2"></div>
                            <div className="h-48 aspect-square bg-blue-400 border gap-2"></div>
                            <div className="h-48 aspect-square bg-blue-400 border gap-2"></div>
                            <div className="h-48 aspect-square bg-blue-400 border gap-2"></div>
                            <div className="h-48 aspect-square bg-blue-400 border gap-2"></div>
                        </div>
                    </section>
                </div>
            </div>
        </div>

    )
}

export default LandingPage
