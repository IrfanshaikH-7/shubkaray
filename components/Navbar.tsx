"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Separator } from './ui/separator'

const Navbar = () => {
    const [serviceToggle, setServiceToggle] = useState(false);
    console.log(serviceToggle)
    return (
        <div className='h-9 w-2/5 flex gap-4 shadow-md rounded-2xl items-center justify-center p-4 bg-white fixed left-1/2 right-1/2 transform -translate-x-1/2 top-2 z-[999]'>

            <Link
                href='/'
                className='text-xs p-1 text-[#8A817C] hover:text-black/70 uppercase'
            >
                Home
            </Link>

            <Link
                href='/works'
                className='text-xs p-1 text-[#8A817C] hover:text-black/70 uppercase'
            >
                Works
            </Link>


            <Link
                href='/'
                className='text-xs p-1 text-[#8A817C] hover:text-black/70 uppercase'
            >
                About
            </Link>

            <Link
                href='/contact'
                className='text-xs p-1 text-[#8A817C] hover:text-black/70 uppercase'
            >
                Contact
            </Link>
            <DropdownMenu onOpenChange={() => setServiceToggle((prev) => !prev)}>
                <DropdownMenuTrigger
                    className='text-xs p-1 text-[#8A817C] hover:text-black/70 flex justify-center items-center gap-px focus:ring-0 focus:ring-offset-0 ring-0 ring-offset-0 ouline-0 focus:outline-0 outline-offset-0 focus:outline-offset-0 focus-visible:ring-0 focus-visible:outline-0 uppercase z-50'
                >

                    Services


                    <ChevronDown className={cn("h-4 w-4",
                        serviceToggle ? 'rotate-180 transition duration-500' : ''
                    )} />
                </DropdownMenuTrigger>
                <DropdownMenuContent sideOffset={10}>
                    <div className='px-6 py-6 flex flex-col justify-center items-center'>
                        <h3 className='font-semibold'>Services </h3>
                        <Separator />
                        <div className='grid grid-cols-3 grid-rows-3 mt-2 px-2'>
                            <DropdownMenuItem className='text-xs uppercase text-[#8A817C] justify-self-center'>
                                <Link
                                    href='/venues'>
                                    Venue
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem className='text-xs uppercase text-[#8A817C] justify-self-center'>
                                <Link
                                    href='/decor'>
                                    Decorations
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem className='text-xs uppercase text-[#8A817C] justify-self-center'>
                                <Link
                                    href='/video-photography'>
                                    Photography
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem className='text-xs uppercase text-[#8A817C] justify-self-center'>
                                <Link
                                    href='/catering'>
                                    Catering
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem className='text-xs uppercase text-[#8A817C] justify-self-center'>
                                <Link
                                    href='/tent-furnitures'>
                                    Tent & Furnitures
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem className='text-xs uppercase text-[#8A817C] justify-self-center'>
                                <Link
                                    href='/video-photography'>
                                    Videography
                                </Link>
                            </DropdownMenuItem>

                            <DropdownMenuItem className='text-xs uppercase text-[#8A817C] justify-self-center'>
                                <Link
                                    href='/entertainment'>
                                    Live Music
                                </Link>
                            </DropdownMenuItem>

                            <DropdownMenuItem className='text-xs uppercase text-[#8A817C] justify-self-center'>
                                <Link
                                    href='/makeup-artists'>
                                    MakeUp Artists
                                </Link>
                            </DropdownMenuItem>

                            <DropdownMenuItem className='text-xs uppercase text-[#8A817C] justify-self-center'>
                                <Link
                                    href='/invitations'>
                                    Invitations
                                </Link>
                            </DropdownMenuItem>

                        </div>
                    </div>

                </DropdownMenuContent>
            </DropdownMenu>


        </div>


    )
}

export default Navbar
