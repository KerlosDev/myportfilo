'use client'
import React, { useState } from 'react'
import { SiNextdotjs } from "react-icons/si";
import { RiReactjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaJsSquare } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const Skills = () => {
    const [activeIndex, setActiveIndex] = useState(2);
    const skills = [
        { id: 0, name: "Next.js 15", icon: <SiNextdotjs /> },
        { id: 1, name: "React", icon: <RiReactjsFill /> },
        { id: 2, name: "Tailwind", icon: <RiTailwindCssFill /> },
        { id: 3, name: "JavaScript", icon: <FaJsSquare /> },
        { id: 4, name: "HTML5", icon: <FaHtml5 /> },
        { id: 5, name: "CSS", icon: <FaCss3 /> },
    ];
    


    return (
        <div className=' mt-20 cursor-default relative mx-40 '>

            <h3 className=' text-white m-4 font-abril text-6xl place-items-center flex gap-3 '>Skills <FaHeart className=' text-5xl' /></h3>
            <div className=' w-80 h-80 bg-slate-800 -z-30 blur-3xl left-52 rounded-full  absolute'></div>


            {skills.map((skill) => (
                <div
                    key={skill.id}
                    onClick={() => { setActiveIndex(skill.id); console.log(skill.id)}}
                    className={`m-4 transition backdrop-blur-2xl  text-white ${activeIndex === skill.id ? " bg-green-500 scale-105 " : "bg-white/15"
                        } w-1/3 p-4 font-arabicUI3 text-4xl rounded-xl`}
                >
                    <h3 className="flex gap-2 items-center">
                        {skill.icon} {skill.name}
                    </h3>
                </div>
            ))}

        </div>
    )
}

export default Skills