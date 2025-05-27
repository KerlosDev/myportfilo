'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { IoRocketSharp } from "react-icons/io5";
import Globapi from '@/app/api/Globapi';

const ProjectCont = ({ id }) => {
    const [project, setProject] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [isImageExpanded, setIsImageExpanded] = useState(false);
    const [websiteUrl, setWebsiteUrl] = useState(''); // Default URL

    useEffect(() => {
        if (id) {
            getProject(id);
        }
    }, [id]);

    const getProject = async (projectId) => {
        try {
            setIsLoading(true);
            const response = await Globapi.getspecifec(projectId);
            console.log(response)
            setProject(response.projects[0]);
            setWebsiteUrl(response.projects[0].link || 'https://kerlos.site'); // Set website URL or default
        } catch (error) {
            console.error('Error fetching project:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const nextSlide = () => {
        if (project?.imageforcourse) {
            setActiveIndex((prev) => (prev + 1) % project.imageforcourse.length);
        }
    };

    const prevSlide = () => {
        if (project?.imageforcourse) {
            setActiveIndex((prev) => (prev - 1 + project.imageforcourse.length) % project.imageforcourse.length);
        }
    };

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-green-500"></div>
            </div>
        );
    }

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-gray-400 text-xl">Project not found</div>
            </div>
        );
    }

    return (
        <div  className="relative font-arabicUI3 min-h-screen overflow-hidden flex items-center justify-center px-4 py-20">
            {/* Animated Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute w-[800px] h-[800px] bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-full blur-3xl -top-1/4 -left-1/4 animate-pulse"></div>
                <div className="absolute w-[600px] h-[600px] bg-gradient-to-br from-slate-500/10 to-gray-500/10 rounded-full blur-3xl -bottom-1/4 -right-1/4 animate-pulse delay-1000"></div>
                <div className="absolute inset-0 bg-black/5 backdrop-blur-3xl"></div>
            </div>

            {/* Main Content Container */}
            <div className="container mx-auto max-w-7xl relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Left Column - Image Carousel */}
                    <div className="order-2 lg:order-1">
                        <div className="relative group">
                            <div className="relative backdrop-blur-xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 p-4 rounded-2xl border border-green-500/20">
                                {/* Image Container */}
                                <div className="relative aspect-video overflow-hidden rounded-xl">
                                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl blur-2xl transition-all duration-500 group-hover:blur-3xl"></div>
                                    <Image
                                        src={project.imageforcourse[activeIndex].url}
                                        alt={project.name}
                                        width={1920}
                                        height={1080}
                                        className="object-cover w-full h-full rounded-xl transition-transform duration-500 group-hover:scale-105"
                                        onClick={() => setIsImageExpanded(true)}
                                    />
                                </div>

                                {/* Navigation Arrows */}
                                <div className="absolute inset-y-0 left-0 flex items-center">
                                    <button
                                        onClick={prevSlide}
                                        className="p-2 rounded-full bg-white/10 backdrop-blur-xl border border-green-500/20 text-green-400 hover:bg-white/20 transition-all duration-300 -ml-4"
                                    >
                                        <FaChevronLeft className="text-xl" />
                                    </button>
                                </div>
                                <div className="absolute inset-y-0 right-0 flex items-center">
                                    <button
                                        onClick={nextSlide}
                                        className="p-2 rounded-full bg-white/10 backdrop-blur-xl border border-green-500/20 text-green-400 hover:bg-white/20 transition-all duration-300 -mr-4"
                                    >
                                        <FaChevronRight className="text-xl" />
                                    </button>
                                </div>

                                {/* Image Counter */}
                                <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
                                    <div className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-xl border border-green-500/20 text-green-400 text-sm">
                                        {activeIndex + 1} / {project.imageforcourse.length}
                                    </div>
                                </div>

                                {/* Thumbnail Navigation */}
                                <div className="mt-4 grid grid-cols-5 gap-2">
                                    {project.imageforcourse.slice(0, 5).map((image, index) => (
                                        <button
                                            key={image.id}
                                            onClick={() => setActiveIndex(index)}
                                            className={`relative aspect-video rounded-lg overflow-hidden border-2 transition-all duration-300 ${activeIndex === index
                                                ? 'border-green-500 scale-105'
                                                : 'border-transparent opacity-50 hover:opacity-75'
                                                }`}
                                        >
                                            <Image
                                              
                                                src={image.url}
                                                alt={`Thumbnail ${index + 1}`}
                                                fill
                                                className="object-cover"
                                            />
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Project Details */}
                    <div dir='rtl' className="space-y-6 order-1 lg:order-2">
                        <div className="relative backdrop-blur-xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 p-8 rounded-2xl border border-green-500/20">
                            <h1 className="text-4xl font-bold mb-4 flex items-center gap-3">
                                <span className="bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
                                    {project.name}
                                </span>
                                <IoRocketSharp className="text-green-400 animate-pulse" />
                            </h1>

                            <div className="text-gray-300 text-lg leading-relaxed mb-6 text-right font-arabicUI3">
                                {project.description}
                            </div>

                            {/* Visit Website Button */}
                            <div className="mb-6">
                                <a
                                    href={websiteUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group w-full bg-gradient-to-r from-green-400 to-emerald-600 p-[1px] rounded-xl overflow-hidden relative inline-flex"
                                >
                                    <div className="flex items-center justify-center gap-2 w-full px-6 py-3 rounded-xl bg-black/40 backdrop-blur-md transition-all duration-300 group-hover:bg-black/30">
                                        <span className="text-white font-semibold">Visit Website</span>
                                        <svg
                                            className="w-5 h-5 text-white transition-transform duration-300 group-hover:translate-x-1"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                            />
                                        </svg>
                                    </div>
                                </a>
                            </div>

                            {/* Project Stats */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 rounded-xl bg-white/5 backdrop-blur-md border border-green-500/20 transition-all duration-300 hover:bg-white/10">
                                    <h3 className="text-green-400 font-semibold mb-1">Project ID</h3>
                                    <p className="text-gray-400 text-sm">{project.id}</p>
                                </div>
                                <div className="p-4 rounded-xl bg-white/5 backdrop-blur-md border border-green-500/20 transition-all duration-300 hover:bg-white/10">
                                    <h3 className="text-green-400 font-semibold mb-1">Slug</h3>
                                    <p className="text-gray-400 text-sm">{project.slugforproject}</p>
                                </div>
                            </div>

                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-emerald-500 opacity-50" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Fullscreen Image Modal */}
            {isImageExpanded && (
                <div
                    className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center cursor-pointer backdrop-blur-xl"
                    onClick={() => setIsImageExpanded(false)}
                >
                    <Image
                        src={project.imageforcourse[activeIndex].url}
                        alt={project.name}
                        width={1920}
                        height={1080}
                        className="max-w-[90vw] max-h-[90vh] object-contain"
                    />
                    <button
                        className="absolute top-4 right-4 text-white/70 hover:text-white text-2xl"
                        onClick={() => setIsImageExpanded(false)}
                    >
                        ✕
                    </button>
                </div>
            )}
        </div>
    );
};

export default ProjectCont;