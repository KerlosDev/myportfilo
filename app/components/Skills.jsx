'use client';
import React, { useState } from 'react';
import { SiNextdotjs, SiGraphql, SiExpress, SiNodedotjs } from 'react-icons/si';
import { RiReactjsFill, RiTailwindCssFill } from 'react-icons/ri';
import { FaJsSquare, FaHtml5, FaCss3, FaHeart } from 'react-icons/fa';

const Skills = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const skills = [
        { id: 0, name: "Next.js 15", icon: <SiNextdotjs />, paragrap: `Next.js is a React framework for building fast, scalable, and SEO-friendly web applications. It simplifies common tasks like server-side rendering (SSR), static site generation (SSG), and routing.` },
        { id: 1, name: "React", icon: <RiReactjsFill />, paragrap: `React is a JavaScript library for building user interfaces (UIs). It was developed by Facebook and is widely used for creating fast, interactive, and reusable UI components.` },
        { id: 2, name: "Node.js", icon: <SiNodedotjs />, paragrap: `Node.js is a powerful runtime environment that allows JavaScript to be run on the server side. It enables building scalable network applications with its event-driven, non-blocking I/O model, making it perfect for data-intensive real-time applications.` },
        { id: 3, name: "Express", icon: <SiExpress />, paragrap: `Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for building single, multi-page, and hybrid web applications. It's the de facto standard server framework for Node.js.` },
        { id: 4, name: "Tailwind", icon: <RiTailwindCssFill />, paragrap: `Tailwind CSS is a utility-first CSS framework for rapidly building modern and custom user interfaces. Instead of writing custom CSS, you use pre-defined utility classes directly in your HTML or JSX to style elements.` },
        { id: 5, name: "Java Sc", icon: <FaJsSquare />, paragrap: `JavaScript is a programming language used to create interactive and dynamic web content. It’s one of the core technologies of the web, alongside HTML and CSS, and runs in the browser to enhance user experiences.` },
        { id: 6, name: "HTML5", icon: <FaHtml5 />, paragrap: `HTML5 is the latest version of HTML (HyperText Markup Language), the standard language for creating web pages. It introduces new elements, attributes, and APIs to make web development easier, more powerful, and more interactive.` },
        { id: 7, name: "CSS", icon: <FaCss3 />, paragrap: `CSS (Cascading Style Sheets) is a language used to style and format the layout of web pages. It controls the visual appearance of HTML elements, including colors, fonts, spacing, and positioning.` },
        { id: 8, name: "Graph QL", icon: <SiGraphql />, paragrap: `GraphQL is a query language for APIs and a runtime for executing those queries against your data. It was developed by Facebook to improve the way data is fetched and interacted with in web applications. GraphQL provides a more flexible and efficient approach to data retrieval than traditional REST APIs.` },
    ];

    return (
        <div id="skills" className="min-h-screen py-20 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0">
                <div className="absolute w-[800px] h-[800px] bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-full blur-3xl -top-1/4 -left-1/4 animate-pulse"></div>
                <div className="absolute w-[600px] h-[600px] bg-gradient-to-br from-slate-500/10 to-gray-500/10 rounded-full blur-3xl -bottom-1/4 -right-1/4 animate-pulse delay-1000"></div>
                <div className="absolute inset-0 bg-black/5 backdrop-blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="relative inline-block">
                        <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 blur-3xl"></div>
                        <h2 className="relative text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-600 inline-flex items-center gap-4">
                            Skills <FaHeart className="text-green-500 animate-pulse text-4xl md:text-5xl" />
                        </h2>
                    </div>
                </div>

                {/* Main content */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Skills Grid */}
                    <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-4 relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 rounded-3xl blur-3xl -z-10"></div>
                        {skills.map((skill) => (
                            <div
                                key={skill.id}
                                onClick={() => setActiveIndex(skill.id)}
                                className={`
                                    group relative overflow-hidden rounded-2xl cursor-pointer
                                    backdrop-blur-xl transition-all duration-500
                                    border border-green-500/10
                                    ${activeIndex === skill.id
                                        ? 'bg-gradient-to-br from-green-500/20 to-emerald-500/20 scale-105 border-green-500/30'
                                        : 'bg-white/5 hover:bg-white/10'
                                    }
                                `}
                            >
                                {/* Glow Effect */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 blur-xl"></div>
                                </div>

                                <div className="p-6 relative z-10">
                                    <div className={`
                                        text-4xl mb-3 transition-all duration-500
                                        ${activeIndex === skill.id ? 'text-green-400 scale-110' : 'text-green-500/70'}
                                        group-hover:text-green-400 group-hover:scale-110
                                    `}>
                                        {skill.icon}
                                    </div>
                                    <h3 className="text-white text-lg font-semibold group-hover:text-green-300 transition-colors">
                                        {skill.name}
                                    </h3>
                                </div>

                                {/* Top Border Gradient */}
                                <div className={`
                                    absolute top-0 left-0 w-full h-1 
                                    bg-gradient-to-r from-green-500 to-emerald-500 
                                    opacity-0 transition-opacity duration-300
                                    ${activeIndex === skill.id ? 'opacity-50' : 'group-hover:opacity-30'}
                                `} />
                            </div>
                        ))}
                    </div>

                    {/* Skill Description */}
                    <div className="lg:col-span-5 relative">
                        <div className="sticky top-32">
                            {skills.map((skill) =>
                                skill.id === activeIndex && (
                                    <div
                                        key={skill.id}
                                        className="relative transform transition-all duration-500"
                                    >
                                        {/* Background Effects */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-2xl blur-xl"></div>

                                        <div className="relative  overflow-hidden backdrop-blur-xl border border-green-500/20">
                                            <div className="p-8">
                                                <div className="flex items-center gap-4 mb-6">
                                                    <div className="relative">
                                                        <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl blur-lg"></div>
                                                        <span className="relative text-4xl text-green-400 animate-float">{skill.icon}</span>
                                                    </div>
                                                    <h4 className="text-2xl font-bold">
                                                        <span className="bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
                                                            {skill.name}
                                                        </span>
                                                    </h4>
                                                </div>
                                                <p className="text-gray-300 leading-relaxed">
                                                    {skill.paragrap}
                                                </p>
                                            </div>

                                            {/* Top Border Gradient */}
                                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-emerald-500 opacity-50" />

                                            {/* Animated Corner Accents */}
                                            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-green-500/30"></div>
                                            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-green-500/30"></div>
                                            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-green-500/30"></div>
                                            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-green-500/30"></div>
                                        </div>
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
