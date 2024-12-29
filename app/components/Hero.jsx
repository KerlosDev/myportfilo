'use client'
import Image from 'next/image'
import React from 'react'
import { BsFillPatchCheckFill } from "react-icons/bs";
import Soical from './Soical';



const Hero = () => {
    return (
        <>
            <div className=' absolute  bg-slate-700/80 w-80 h-80 top-0   rounded-full -z-20   blur-3xl'></div>
            <div className=' absolute bg-slate-700/80 w-80 h-80 right-0   rounded-full -z-20   blur-3xl'></div>
            <div className=' flex mx-40 p-4 -mt-9 justify-between rounded-xl'>
                <div id='header' className=' cursor-default select-none'>
                    <div className=' mb-10 relative'>


                        <div className=' hover:scale-110 transition duration-300 w-fit relative'>
                            <Image className='  rounded-full p-2 outline-dashed outline-2 outline-slate-400' src='/prof.jpg' alt='profile picture' width={250} height={250}></Image>

                            <BsFillPatchCheckFill className='absolute right-5 bottom-0 text-blue-500 text-2xl' />

                        </div>

                    </div>
                    <h4 className=' font-anton leading-snug text-slate-400 text-6xl'>
                        Hi,  I’m <span className=' bg-gradient-to-tr from-slate-300 to-slate-100 text-white   bg-clip-text text-transparent'> Kerlos Hany </span> ,
                    </h4>
                    <h4 className=' font-anton leading-snug text-slate-400 text-4xl'>
                        in faculty of computer science .. Front End Developer .
                    </h4>

                    <Soical></Soical>



                    
                </div>

                <img src="pal.svg" className='  -mt-20'   width={500} alt="" />

            </div>
        </>

    )
}

export default Hero