import Image from 'next/image'
import React from 'react'
import { BsFillPatchCheckFill } from "react-icons/bs";

const Hero = () => {
    return (
        <>
            <div className=' absolute bg-slate-700/80 w-80 h-80 top-0   rounded-full -z-20   blur-3xl'></div>
            <div className=' absolute bg-slate-700/80 w-80 h-80 right-0   rounded-full -z-20   blur-3xl'></div>
            <div className=' flex mx-40 p-4  rounded-xl'>
                <div>
                    <h4 className=' font-anton text-slate-400 text-6xl'>Hi, I’m Kerlos Hany,  in faculty of computer science</h4>

                </div>
                <div className=' relative'>


                    <Image className=' rounded-full p-2 outline-dashed outline-2 outline-slate-400' src='/prof.jpg' alt='profile picture' width={400} height={400}></Image>

                    <BsFillPatchCheckFill className='absolute bottom-4 text-blue-500 text-3xl' />

                </div>
            </div>
        </>

    )
}

export default Hero