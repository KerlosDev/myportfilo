'use client';
import Globapi from '@/app/api/Globapi';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaLink } from "react-icons/fa";

const ProjectCont = ({ id }) => {
    const [project, setProject] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        if (id) {
            getProject(id);
        }
    }, [id]);

    const getProject = async (projectId) => {
        try {
            const response = await Globapi.getspecifec(projectId);
            console.log(response);
            setProject(response.projects[0]);
        } catch (error) {
            console.error('Error fetching project:', error);
        }
    };

    return (
        <div className='mb-8 mx-4 md:mx-10 lg:mx-40'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 mb-32 gap-4'>
                {/* Project Image */}
                <div className='col-span-1 lg:col-span-3'>
                    {project?.imageforcourse?.length > 0 && (
                        <img
                            height={550}
                            width={550}
                            alt="Project Image"
                            src={project.imageforcourse[activeIndex].url}
                            className="mx-auto bg-red-500 rounded-lg shadow-lg"
                        />
                    )}
                </div>

                {/* Project Description */}
                <div className='col-span-1 lg:col-span-2 relative'>
                    <h4 className='bg-white/10 p-4 rounded-xl text-3xl sm:text-4xl md:text-5xl text-right my-4 font-arabicUI3 text-white'>
                        {project.name}
                    </h4>
                    <p className='text-xl sm:text-2xl md:text-3xl text-right leading-snug font-arabicUI3 text-white/80'>
                        {project.description}
                    </p>

                    {/* Project Link */}
                    <a target='_blank' href={project.link}>
                        <h4 className='bg-blue-500 place-items-center active:ring-4 ring-blue-400 absolute right-0 p-4 rounded-xl text-2xl sm:text-3xl md:text-5xl text-right my-4 w-fit font-arabicUI3 text-white flex gap-2'>
                            <FaLink />
                            رابط المشروع
                        </h4>
                    </a>
                </div>

                
            </div>

            {/* Image Gallery */}
            <div className='grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 gap-4 mt-10'>
                {project?.imageforcourse?.map((image, index) => (
                    index !== 0 && (
                        <div key={image.id} className="p-2">
                            <img
                                onClick={() => { setActiveIndex(index); }}
                                src={image.url}
                                alt={`Image for ${project.name}`}
                                className={`rounded-lg shadow-lg transition-all transform ${activeIndex === index ? 'scale-125 border-4 border-white' : ''}`}
                            />
                        </div>
                    )
                )) || <p>No images available</p>}
            </div>
        </div>
    );
};

export default ProjectCont;
