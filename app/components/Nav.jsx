'use client'
import React, { useState } from 'react'
import { FaFolder } from "react-icons/fa";
import { BsFillChatTextFill } from "react-icons/bs";
import { FaCode } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { TiThMenu } from "react-icons/ti";
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const router = useRouter();

    // Scroll to section if on home page, otherwise redirect to home page
    const scrollToSection = (id = 'prog') => {
        if (window.location.pathname === '/') {
            const section = document.getElementById(id);
            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        } else {
            router.push('/'); // Redirect to home page if not on home page
        }
        setIsMenuOpen(false); // Close mobile menu after click
    };

    return (
        <div className='fixed top-0 left-0 right-0 z-50'>
            {/* Animated Background Elements */}
            <div className='absolute inset-0'>
                <div className='absolute w-[400px] h-[200px] bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-full blur-3xl -top-24 -left-24 animate-pulse'></div>
                <div className='absolute w-[300px] h-[200px] bg-gradient-to-br from-slate-500/10 to-gray-500/10 rounded-full blur-3xl -top-24 -right-24 animate-pulse delay-1000'></div>
                <div className='absolute inset-0 backdrop-blur-xl bg-black/20'></div>
            </div>

            {/* Content */}
            <div className='relative z-10 max-w-7xl mx-auto px-4'>
                <div className='flex justify-between items-center py-4'>
                    {/* Logo */}
                    <Link href='/' onClick={() => window.scrollTo(0, 0)}>
                        <div className='group relative'>
                            <div className='absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity'></div>
                            <h3 className='relative cursor-pointer p-2 rounded-xl transition font-anton text-2xl sm:text-3xl text-gray-300 flex items-center gap-2 group-hover:text-green-400'>
                                Kerlos Dev
                                <FaCode className="text-green-500 group-hover:rotate-12 transition-all duration-300 group-hover:scale-110" />
                            </h3>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className='max-sm:hidden flex items-center gap-6'>
                        <button
                            onClick={() => scrollToSection('prog')}
                            className='group relative px-4 py-2 rounded-xl transition-all duration-300'
                        >
                            <div className='absolute inset-0 bg-gradient-to-r from-green-500/0 to-emerald-500/0 group-hover:from-green-500/10 group-hover:to-emerald-500/10 rounded-xl transition-all duration-300'></div>
                            <div className='absolute inset-0 backdrop-blur-md opacity-0 group-hover:opacity-100 rounded-xl transition-all duration-300'></div>
                            <div className='relative flex items-center gap-2 text-gray-400 group-hover:text-green-400 transition-colors'>
                                <FaFolder className="text-green-400 transform group-hover:scale-110 transition-transform" />
                                <span>Projects</span>
                            </div>
                        </button>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className='group relative px-4 py-2 rounded-xl transition-all duration-300'
                        >
                            <div className='absolute inset-0 bg-gradient-to-r from-green-500/0 to-emerald-500/0 group-hover:from-green-500/10 group-hover:to-emerald-500/10 rounded-xl transition-all duration-300'></div>
                            <div className='absolute inset-0 backdrop-blur-md opacity-0 group-hover:opacity-100 rounded-xl transition-all duration-300'></div>
                            <div className='relative flex items-center gap-2 text-gray-400 group-hover:text-green-400 transition-colors'>
                                <BsFillChatTextFill className="text-green-400 transform group-hover:scale-110 transition-transform" />
                                <span>Contact</span>
                            </div>
                        </button>
                        <button
                            onClick={() => scrollToSection('skills')}
                            className='group relative px-4 py-2 rounded-xl transition-all duration-300'
                        >
                            <div className='absolute inset-0 bg-gradient-to-r from-green-500/0 to-emerald-500/0 group-hover:from-green-500/10 group-hover:to-emerald-500/10 rounded-xl transition-all duration-300'></div>
                            <div className='absolute inset-0 backdrop-blur-md opacity-0 group-hover:opacity-100 rounded-xl transition-all duration-300'></div>
                            <div className='relative flex items-center gap-2 text-gray-400 group-hover:text-green-400 transition-colors'>
                                <IoPersonSharp className="text-green-400 transform group-hover:scale-110 transition-transform" />
                                <span>Skills</span>
                            </div>
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="sm:hidden group relative p-3 rounded-xl transition-all duration-300"
                    >
                        <div className='absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300'></div>
                        <div className='absolute inset-0 backdrop-blur-xl opacity-0 group-hover:opacity-100 rounded-xl'></div>
                        <TiThMenu className="relative text-2xl text-green-400 transform group-hover:scale-110 transition-transform" />
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`fixed inset-0 z-50 transition-all duration-500 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
            >
                {/* Backdrop */}
                <div
                    className="absolute inset-0 bg-black/60 backdrop-blur-xl"
                    onClick={() => setIsMenuOpen(false)}
                />

                {/* Menu Content */}
                <div className={`absolute right-0 top-0 h-full w-72 transform transition-transform duration-500 ease-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    {/* Background Effects */}
                    <div className='absolute inset-0'>
                        <div className='absolute w-full h-full bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-2xl'></div>
                        <div className='absolute w-[400px] h-[400px] bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-full blur-3xl -top-32 -right-32 animate-pulse'></div>
                    </div>

                    {/* Menu Items */}
                    <div className="relative h-full p-6 space-y-6">
                        <button
                            onClick={() => {
                                scrollToSection('prog');
                                setIsMenuOpen(false);
                            }}
                            className='group w-full relative px-4 py-3 rounded-xl transition-all duration-300'
                        >
                            <div className='absolute inset-0 bg-gradient-to-r from-green-500/5 to-emerald-500/5 group-hover:from-green-500/10 group-hover:to-emerald-500/10 rounded-xl transition-all duration-300'></div>
                            <div className='absolute inset-0 backdrop-blur-md opacity-0 group-hover:opacity-100 rounded-xl transition-all duration-300'></div>
                            <div className='relative flex items-center gap-3 text-gray-400 group-hover:text-green-400'>
                                <FaFolder className="text-xl text-green-400" />
                                <span className="text-lg">Projects</span>
                            </div>
                        </button>

                        <button
                            onClick={() => {
                                scrollToSection('contact');
                                setIsMenuOpen(false);
                            }}
                            className='group w-full relative px-4 py-3 rounded-xl transition-all duration-300'
                        >
                            <div className='absolute inset-0 bg-gradient-to-r from-green-500/5 to-emerald-500/5 group-hover:from-green-500/10 group-hover:to-emerald-500/10 rounded-xl transition-all duration-300'></div>
                            <div className='absolute inset-0 backdrop-blur-md opacity-0 group-hover:opacity-100 rounded-xl transition-all duration-300'></div>
                            <div className='relative flex items-center gap-3 text-gray-400 group-hover:text-green-400'>
                                <BsFillChatTextFill className="text-xl text-green-400" />
                                <span className="text-lg">Contact</span>
                            </div>
                        </button>

                        <button
                            onClick={() => {
                                scrollToSection('skills');
                                setIsMenuOpen(false);
                            }}
                            className='group w-full relative px-4 py-3 rounded-xl transition-all duration-300'
                        >
                            <div className='absolute inset-0 bg-gradient-to-r from-green-500/5 to-emerald-500/5 group-hover:from-green-500/10 group_hover:to-emerald-500/10 rounded-xl transition-all duration-300'></div>
                            <div className='absolute inset-0 backdrop-blur-md opacity-0 group-hover:opacity-100 rounded-xl transition-all duration-300'></div>
                            <div className='relative flex items-center gap-3 text-gray-400 group-hover:text-green-400'>
                                <IoPersonSharp className="text-xl text-green-400" />
                                <span className="text-lg">Skills</span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav;
