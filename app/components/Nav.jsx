'use client'
import React, { useState } from 'react'
import { FaFolder } from "react-icons/fa";
import { BsFillChatTextFill } from "react-icons/bs";
import { FaInfo } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import Link from 'next/link';
import { TiThMenu } from "react-icons/ti";

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollToSection = (id = 'prog') => {
        const section = document.getElementById(id);
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
        setIsMenuOpen(false); // Close mobile menu after click
    };


    return (
        <div className='   z-20 py-8'>

            <div className='  flex justify-center gap-3 p-2 '>
                <div className=' max-sm:gap-40  place-items-center flex'>



                    <Link href='/' onClick={() => window.scrollTo(0, 0)} > {/* Scroll to the top of the page */}
                        <h3 className='place-items-center  cursor-pointer p-2 rounded-xl transition font-anton max-sm:text-xl text-3xl text-slate-400 flex gap-2'>
                            Kerlos Dev <FaCode />
                        </h3>
                    </Link>


                    {/* Hamburger Menu for Mobile */}
                    <div className="sm:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-slate-400 text-2xl"
                        >
                            <TiThMenu />
                        </button>

                        <dialog
                            className={`fixed inset-0 z-50 flex items-center justify-center bg-transparent ${isMenuOpen ? '' : 'hidden'
                                }`}
                            open={isMenuOpen}
                        >
                            {/* Backdrop */}
                            <div
                                className="fixed inset-0 bg-black/50 backdrop-blur-md z-40"
                                onClick={() => setIsMenuOpen(false)} // Close the dialog when the backdrop is clicked
                            ></div>

                            {/* Dialog Content */}
                            <div className="relative z-50 bg-gray-800 border border-gray-700 rounded-xl p-4">
                                {/* Navigation Links */}
                                <div
                                    className={`flex flex-col items-center sm:flex-row sm:static sm:w-auto sm:bg-transparent`}
                                >
                                    <h3
                                        onClick={() => {
                                            scrollToSection('prog');
                                            setIsMenuOpen(false);

                                        }}
                                        className="cursor-pointer hover:scale-110 p-2 sm:p-4 rounded-xl hover:text-white transition font-anton text-3xl sm:text-2xl text-slate-400 flex items-center gap-2"
                                    >
                                        Projects <FaFolder />
                                    </h3>
                                    <h3
                                        onClick={() => {
                                            scrollToSection('contact');
                                            setIsMenuOpen(false);
                                        }}
                                        className="cursor-pointer hover:scale-110 p-2 sm:p-4 rounded-xl hover:text-white transition font-anton text-3xl sm:text-2xl text-slate-400 flex items-center gap-2"
                                    >
                                        Contact <BsFillChatTextFill />
                                    </h3>
                                    <h3
                                        onClick={() => {
                                            scrollToSection('skills');
                                            setIsMenuOpen(false);
                                        }}
                                        className="cursor-pointer hover:scale-110 p-2 sm:p-4 rounded-xl hover:text-white transition font-anton text-3xl sm:text-2xl text-slate-400 flex items-center gap-2"
                                    >
                                        Skills <IoPersonSharp />
                                    </h3>
                                </div>
                            </div>
                        </dialog>


                    </div>




                </div>

                <div className=' max-sm:hidden flex gap-4 w-fit  rounded-xl ' >

                    <h3 onClick={() => { scrollToSection('prog') } } className='  cursor-pointer  max-sm:text-xl hover:shadow-slate-900 shadow-2xl hover:scale-125 p-2 rounded-xl hover:text-white  place-items-center transition font-anton text-3xl text-slate-400  flex gap-2'>Projects <FaFolder /> </h3>
                    <h3 onClick={() => { scrollToSection('contact') }} className='  cursor-pointer  max-sm:text-xl hover:shadow-slate-900 shadow-2xl hover:scale-125 p-2 rounded-xl hover:text-white  place-items-center  transition font-anton text-3xl text-slate-400  flex gap-2  '>Contact <BsFillChatTextFill /></h3>
                    <h3 onClick={() => { scrollToSection('skills') }} className='  cursor-pointer max-sm:text-xl  hover:shadow-slate-900 shadow-2xl hover:scale-125 p-2 rounded-xl hover:text-white  place-items-center transition font-anton text-3xl text-slate-400  flex gap-2'>Skills <IoPersonSharp></IoPersonSharp></h3>
                </div>
            </div>

        </div>
    )
}

export default Nav