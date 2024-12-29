'use client'
import React from 'react'
import { FaFolder } from "react-icons/fa";
import { BsFillChatTextFill } from "react-icons/bs";
import { FaInfo } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import Link from 'next/link';

const Nav = () => {

    const scrollToContact = () => {
        const contactSection = document.getElementById('contact');
        contactSection.scrollIntoView({
            behavior: 'smooth', // For smooth scrolling
            block: 'start', // Align the section to the top of the viewport
        })
    }
    const scrollToContact2 = () => {
        const contactSection = document.getElementById('prog');
        contactSection.scrollIntoView({
            behavior: 'smooth', // For smooth scrolling
            block: 'start', // Align the section to the top of the viewport
        })
    }
    const scrollToContact3 = () => {
        const contactSection = document.getElementById('skills');
        contactSection.scrollIntoView({
            behavior: 'smooth', // For smooth scrolling
            block: 'start', // Align the section to the top of the viewport
        })
    }


    return (
        <div className=' z-20 py-8'>

            <div className='  flex justify-center gap-3 p-2 '>
                <div className=' place-items-center flex'>


                
                        <Link href='/' onClick={() => window.scrollTo(0, 0)} > {/* Scroll to the top of the page */}
                            <h3 className='place-items-center  cursor-pointer p-2 rounded-xl transition font-anton text-3xl text-slate-400 flex gap-2'>
                                Kerlos Dev <FaCode />
                            </h3>
                        </Link>
                    




                </div>
                <div className=' flex gap-4 w-fit  rounded-xl ' >

                    <h3 onClick={scrollToContact2} className='  cursor-pointer  hover:shadow-slate-900 shadow-2xl hover:scale-125 p-2 rounded-xl hover:text-white  place-items-center transition font-anton text-3xl text-slate-400  flex gap-2'>Projects <FaFolder /> </h3>
                    <h3 onClick={scrollToContact} className='  cursor-pointer  hover:shadow-slate-900 shadow-2xl hover:scale-125 p-2 rounded-xl hover:text-white  place-items-center  transition font-anton text-3xl text-slate-400  flex gap-2  '>Contact <BsFillChatTextFill /></h3>

                    <h3 onClick={scrollToContact3} className='  cursor-pointer  hover:shadow-slate-900 shadow-2xl hover:scale-125 p-2 rounded-xl hover:text-white  place-items-center transition font-anton text-3xl text-slate-400  flex gap-2'>About <IoPersonSharp></IoPersonSharp></h3>
                </div>
            </div>

        </div>
    )
}

export default Nav