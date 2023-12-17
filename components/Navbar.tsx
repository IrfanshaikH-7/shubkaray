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

const Navbar = () => {
    const [serviceToggle, setServiceToggle] = useState(false);
    console.log(serviceToggle)
    return (
        <div className='h-9 w-1/4 flex gap-4 shadow-md rounded-2xl items-center justify-center p-4 bg-white absolute left-1/2 right-1/2 transform -translate-x-1/2 top-2 z-50'>
                
                <Link
                    href='/'
                    className='text-xs p-1 text-black hover:text-black/70 uppercase'
                >
                    Home
                </Link>
                
                <Link
                    href='/'
                    className='text-xs p-1 text-black hover:text-black/70 uppercase'
                >
                    About
                </Link>
                <DropdownMenu onOpenChange={() => setServiceToggle((prev) => !prev)}>
                    <DropdownMenuTrigger
                    className='text-xs p-1 text-black hover:text-black/70 flex justify-center items-center gap-px focus:ring-0 focus:ring-offset-0 ring-0 ring-offset-0 ouline-0 focus:outline-0 outline-offset-0 focus:outline-offset-0 focus-visible:ring-0 focus-visible:outline-0 uppercase z-50'
                    >
                        Services
                        <ChevronDown className={cn("h-4 w-4",
                        serviceToggle ? 'rotate-180 transition duration-500' : ''
                        )}/>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem className='text-xs uppercase text-neutral-700'>Profile</DropdownMenuItem>
                        <DropdownMenuItem className='text-xs uppercase text-neutral-700'>Billing</DropdownMenuItem>
                        <DropdownMenuItem className='text-xs uppercase text-neutral-700'>Team</DropdownMenuItem>
                        <DropdownMenuItem className='text-xs uppercase text-neutral-700'>Subscription</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

            </div>


    )
}

export default Navbar
