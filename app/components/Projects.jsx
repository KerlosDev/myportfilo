'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaLink, FaHeart } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';
import Globapi from '../api/Globapi';

const Projects = () => {
    const [projectdata, setprojectdata] = useState([]);

    useEffect(() => {
        projects();
    }, []);

    const projects = () => {
        Globapi.getProject().then((req) => {
            console.log(req);
            setprojectdata(req.projects);
        });
    };

    return (
        <div id="prog" className="min-h-screen py-20 relative">
            {/* Animated background */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute w-[500px] h-[500px] bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full blur-3xl -top-52 -right-52 animate-pulse"></div>
                <div className="absolute w-[500px] h-[500px] bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full blur-3xl -bottom-52 -left-52 animate-pulse"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-600 inline-flex items-center gap-4">
                        Projects <FaHeart className="text-green-500 animate-pulse text-4xl md:text-5xl" />
                    </h2>
                </div>

                <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {projectdata.map((item, index) => (
                        <div
                            dir='rtl'
                            key={index}
                            className="group relative overflow-hidden rounded-2xl backdrop-blur-md bg-gradient-to-br from-green-500/5 to-emerald-500/10 border border-green-500/20 transition-all duration-300 hover:scale-105"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 to-emerald-500/0 group-hover:from-green-500/20 group-hover:to-emerald-500/20 transition-all duration-300" />

                            {/* Image */}
                            <div className="relative aspect-video overflow-hidden">
                                <Image
                                    className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-110"
                                    src={item.imageforcourse[0].url}
                                    width={400}
                                    height={400}
                                    alt={item.name}
                                    priority
                                />
                            </div>                            {/* Content */}
                            <div className="p-6">
                                <Link href={`/project/${item.slugforproject}`}>
                                    <h3 className="text-xl font-arabicUI3 text-white mb-3 transition-colors group-hover:text-green-400">
                                        {item.name}
                                    </h3>
                                </Link>

                                <p dir='rtl' className="text-gray-300 font-arabicUI2  text-sm line-clamp-3 mb-4">
                                    {item.description}
                                </p>                                {/* Action Button */}
                                <div className="mt-auto flex justify-end">
                                    <Link
                                        href={`/project/${item.slugforproject}`}
                                        className="inline-flex font-arabicUI3 items-center gap-3 px-6 py-3 rounded-xl bg-white/5 backdrop-blur-md border border-green-500/20 text-green-400 hover:bg-white/10 transition-all duration-300 group/btn"
                                    >
                                        <FaArrowRight className="transition-transform duration-300 group-hover/btn:translate-x-1" />
                                        <span>View Project</span>
                                    </Link>
                                </div>

                            </div>

                            {/* Top border gradient */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-emerald-500 opacity-50" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
