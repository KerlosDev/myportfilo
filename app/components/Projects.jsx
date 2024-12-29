'use client'
import Image from 'next/image'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { FaLink } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Globapi from '../api/Globapi';
''
const Projects = () => {

    const [projectdata, setprojectdate] = useState([])
    useEffect(() => {
        projects()
    }, [])

    const projects = () => {
        Globapi.getProject().then(req => {
            console.log(req)
            setprojectdate(req.projects)
        }


        )
    }
    return (
        <div className=' cursor-default my-9  mx-40 p-4'>


            <h5 className=' text-white text-6xl font-abril'>Projects</h5>

            <div className=' grid gap-20 grid-cols-3'>

                {projectdata.map((item, index) => {
                    return (
                        <div key={index} className=' bg-white  drop-shadow-[0_50px_50px_rgba(100,116,139,0.3)]   mt-10 w-fit rounded-2xl'>

                            <Image className=' hover:scale-110 transition    scale-105   border-white drop-shadow-2xl rounded-xl' src='/course.png' width={400} height={400} alt='course'></Image>

                            <Link href={`/project/${item.slugforproject}`}>
                                <h4 className=' hover:scale-110 hover:text-blue-600 transition  font-arabicUI3 text-center mt-3  pt-4  text-3xl text-slate-900'>{item.name}</h4>
                            </Link>
                            <p className=' font-arabicUI3  border-t-2 p-4 border-dashed border-black  text-center m-3 text-wrap w-fit text-lg text-slate-900/80'>{item.description}</p>



                        </div>
                    )
                })}


            </div>

        </div>
    )
}

export default Projects