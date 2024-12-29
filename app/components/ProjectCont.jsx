'use client'
import Globapi from '@/app/api/Globapi';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { FaLink } from "react-icons/fa";

const ProjectCont = ({ id }) => {
    const [project, setProject] = useState([])

    const [activeIndex, setActiveIndex] = useState(0)

    useEffect(() => {
        if (id) {
            getProject(id);
        }
    }, [id]);

    const getProject = async (projectId) => {
        try {
            const response = await Globapi.getspecifec(projectId);
            console.log(response);
            setProject(response.projects[0])
        } catch (error) {
            console.error('Error fetching project:', error);
        }
    };

    return (
        <div className=' mb-8 mx-40'>
            <div className=' h-[500] grid grid-cols-5'>



                <div className=' col-span-3 '>
                    {project?.imageforcourse?.length > 0 && (
                        <img
                            height={550}
                            width={550}
                            alt="Project Image"
                            src={project.imageforcourse[activeIndex].url}
                            className=" mx-auto bg-red-500 rounded-lg shadow-lg"
                        />
                    )}
                </div>
                <div className=' col-span-2 relative'>
                    <h4 className=' bg-white/10 p-4 rounded-xl  text-5xl text-right my-10 font-arabicUI3 text-white'>{project.name}</h4>
                    <p className=' text-3xl text-right leading-snug  font-arabicUI3 text-white/80'>{project.description}</p>

                    <a target='blank' href={project.link}>
                        <h4 className='  bg-blue-500 absolute right-0 p-4 rounded-xl  text-5xl text-right my-10 w-fit font-arabicUI3 text-white flex gap-2'> <FaLink></FaLink> رابط المشروع</h4>

                    </a>

                </div>


            </div>

            <div className=' grid grid-cols-7 gap-7 mt-10'>

                {project?.imageforcourse?.map((image, index) => (



                    index !== 0 && (
                        <div key={image.id} className="p-2">
                            <img
                                onClick={() => { setActiveIndex(index) }}
                                src={image.url}
                                alt={`Image for ${project.name}`}
                                className={`  rounded-lg shadow-lg  ${activeIndex == index && " flex  scale-125 border-white border-4 transition "} `}
                            />
                        </div>

                    )


                )) || <p>No images available</p>}

            </div>

        </div>
    )
}

export default ProjectCont


/* 


                
*/