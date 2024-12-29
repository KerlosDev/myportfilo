'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaLink } from 'react-icons/fa';
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
        <div id="prog" className="cursor-default my-9 mx-4 lg:mx-40 p-4">
            <h5 className="text-white text-4xl lg:text-6xl font-abril mb-8">Projects</h5>

            <div className="grid gap-10 sm:gap-16 lg:gap-20 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {projectdata.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white drop-shadow-[0_50px_50px_rgba(100,116,139,0.3)] mt-6 sm:mt-10 rounded-2xl"
                    >
                        <Image
                            className="hover:scale-110 transition transform scale-105 border-white drop-shadow-2xl rounded-xl"
                            src={item.imageforcourse[0].url}
                            width={400}
                            height={400}
                            alt={item.name}
                            priority
                        />

                        <Link href={`/project/${item.slugforproject}`}>
                            <h4 className="hover:scale-110 hover:text-blue-600 transition font-arabicUI3 text-center mt-3 pt-4 text-xl sm:text-2xl lg:text-3xl text-slate-900">
                                {item.name}
                            </h4>
                        </Link>

                        <p className="font-arabicUI3 border-t-2 p-4 border-dashed border-black text-center m-3 text-wrap w-full text-sm sm:text-base lg:text-lg text-slate-900/80">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
