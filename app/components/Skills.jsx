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
    const [activeIndex, setActiveIndex] = useState(0);
    const skills = [
        { id: 0, name: "Next.js 15", icon: <SiNextdotjs />, paragrap: `Next.js is a React framework for building fast, scalable, and SEO-friendly web applications. It simplifies common tasks like server-side rendering (SSR), static site generation (SSG), and routing.` },
        { id: 1, name: "React", icon: <RiReactjsFill />, paragrap: `React is a JavaScript library for building user interfaces (UIs). It was developed by Facebook and is widely used for creating fast, interactive, and reusable UI components.` },
        { id: 2, name: "Tailwind", icon: <RiTailwindCssFill />, paragrap: `Tailwind CSS is a utility-first CSS framework for rapidly building modern and custom user interfaces. Instead of writing custom CSS, you use pre-defined utility classes directly in your HTML or JSX to style elements.` },
        { id: 3, name: "Java Sc", icon: <FaJsSquare />, paragrap: `JavaScript is a programming language used to create interactive and dynamic web content. It’s one of the core technologies of the web, alongside HTML and CSS, and runs in the browser to enhance user experiences.` },
        { id: 4, name: "HTML5", icon: <FaHtml5 />, paragrap: `HTML5 is the latest version of HTML (HyperText Markup Language), the standard language for creating web pages. It introduces new elements, attributes, and APIs to make web development easier, more powerful, and more interactive.` },
        { id: 5, name: "CSS", icon: <FaCss3 />, paragrap: `CSS (Cascading Style Sheets) is a language used to style and format the layout of web pages. It controls the visual appearance of HTML elements, including colors, fonts, spacing, and positioning.` },
    ];



    return (
        <div className=' my-20 cursor-default relative mx-40 '>

            <h3 className=' text-white m-4 font-abril text-6xl place-items-center flex gap-3 '>Skills <FaHeart className=' text-5xl' /></h3>
            <div className=' w-80 h-80 bg-slate-800 -z-30 blur-3xl left-52 rounded-full  absolute'></div>


            <div className='  grid grid-cols-4 '>

                <div className=' grid grid-cols-2  col-span-2'>
                    {skills.map((skill) => (
                        <div key={skill.id} onClick={() => { setActiveIndex(skill.id); console.log(skill.id) }}
                            className={`m-4 transition backdrop-blur-2xl  text-white ${activeIndex === skill.id ? " bg-green-500 scale-110 shadow-xl shadow-green-500/30 " : "bg-white/15"
                                }   p-4 font-arabicUI3 text-4xl rounded-xl`}>
                            <h3 className="flex gap-2 items-center">
                                {skill.icon} {skill.name}
                            </h3>
                        </div>
                    ))}
                </div>


                <div className='  col-span-1'>
                    {skills.map((skill) => (
                        <div
                            key={skill.id}


                        >
                            {skill.id === activeIndex && 

                                <p className=' m-4 absolute rounded-xl bg-green-500 p-5 font-arabicUI3 text-2xl shadow-xl shadow-green-500/30 text-white'>{skill.paragrap}
                                </p>
                            }

                        </div>
                    ))}
                </div>


            </div>



        </div>
    )
}

export default Skills