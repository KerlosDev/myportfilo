'use client'
import Image from 'next/image'
import React from 'react'
import { BsFillPatchCheckFill } from "react-icons/bs";
import Soical from './Soical';



const Hero = () => {
    return (
        <>
           
             {/* Background Circles */}
            <div className="absolute bg-slate-700/80 w-60 h-60 sm:w-80 sm:h-80 top-0 rounded-full -z-20 blur-3xl"></div>
            <div className="absolute bg-slate-700/80 w-60 h-60 sm:w-80 sm:h-80 right-0 rounded-full -z-20 blur-3xl"></div>

            {/* Main Content */}
            <div className="flex max-sm:-mt-36 flex-col-reverse lg:flex-row items-center lg:items-start mx-4 sm:mx-10 lg:mx-40 p-4 lg:-mt-9 justify-between rounded-xl space-y-8 lg:space-y-0">
                {/* Left Section */}
                <div id="header" className="cursor-default select-none text-center lg:text-left">
                    <div className="mb-6 lg:mb-10 relative">
                        {/* Profile Image */}
                        <div className="hover:scale-110 transition duration-300 w-fit mx-auto lg:mx-0 relative">
                            <Image
                                className="rounded-full p-2 outline-dashed outline-2 outline-slate-400"
                                src="/prof.jpg"
                                alt="profile picture"
                                width={250}
                                height={250}
                            />
                            <BsFillPatchCheckFill className="absolute right-5 bottom-0 text-blue-500 text-2xl" />
                        </div>
                    </div>

                    {/* Text Content */}
                    <h4 className="font-anton  mb-2 leading-snug text-slate-400 text-4xl sm:text-5xl lg:text-6xl">
                        Hi, I’m{' '}
                        <span className="  bg-gradient-to-tr from-slate-300 to-slate-100 text-white bg-clip-text text-transparent">
                            Kerlos Hany
                        </span>
                        ,
                    </h4>
                    <h4 className="font-anton leading-snug text-slate-400 text-2xl sm:text-3xl lg:text-4xl">
                        in faculty of computer science .. Front End Developer.
                    </h4>

                    {/* Social Links */}
                    <div className="mt-4 max-sm:items-center  max-sm:flex max-sm:mx-auto max-sm:justify-center">
                        <Soical />
                    </div>
                </div>

                {/* Right Section */}
                <div className="flex justify-center lg:justify-end">
                    <img
                        width={500}
                        src="pal.svg"
                        className="w-64  sm:w-80 lg:w-[500px] -z-10 mt-20"
                    />
                </div>
            </div>
        </>

    )
}

export default Hero