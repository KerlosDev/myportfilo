'use client';
import React, { useState } from 'react';
import { IoRocketSharp } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";
import Globapi from '../api/Globapi';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name || !email || !message) return;

        setLoading(true);
        try {
            await Globapi.sendmasseges(name, email, message);
            setSuccess(true);
            // Reset form
            setName('');
            setEmail('');
            setMessage('');
        } catch (error) {
            console.error('Error sending message:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="relative min-h-screen overflow-hidden flex items-center justify-center px-4 py-20">
            {/* Animated Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute w-[800px] h-[800px] bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-full blur-3xl -top-1/4 -left-1/4 animate-pulse"></div>
                <div className="absolute w-[600px] h-[600px] bg-gradient-to-br from-slate-500/10 to-gray-500/10 rounded-full blur-3xl -bottom-1/4 -right-1/4 animate-pulse delay-1000"></div>
                <div className="absolute inset-0 bg-black/5 backdrop-blur-3xl"></div>
            </div>

            {/* Main Content Container */}
            <div className="container mx-auto max-w-5xl relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold inline-flex items-center gap-4">
                        <span className="bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
                            Let's Connect
                        </span>
                        <IoRocketSharp className="text-green-400 animate-pulse" />
                    </h2>
                    <p className="text-gray-400 mt-4 text-lg">Have a project in mind? Let's work together!</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Contact Form */}
                    <div className="relative">
                        <div className="relative backdrop-blur-xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 p-8 rounded-2xl border border-green-500/20">
                            {!success ? (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                            <FaUser className="text-green-400" />
                                        </div>
                                        <input
                                            type="text"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            placeholder="Your Name"
                                            className="w-full pl-12 pr-4 py-3 bg-white/5 backdrop-blur-md border border-green-500/20 rounded-xl text-gray-300 placeholder-gray-500 focus:outline-none focus:border-green-500 transition-all duration-300"
                                            required
                                        />
                                    </div>

                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                            <IoMailOutline className="text-green-400" />
                                        </div>
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Your Email"
                                            className="w-full pl-12 pr-4 py-3 bg-white/5 backdrop-blur-md border border-green-500/20 rounded-xl text-gray-300 placeholder-gray-500 focus:outline-none focus:border-green-500 transition-all duration-300"
                                            required
                                        />
                                    </div>

                                    <div className="relative">
                                        <div className="absolute top-3 left-0 pl-4 flex items-start pointer-events-none">
                                            <MdOutlineMessage className="text-green-400" />
                                        </div>
                                        <textarea
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                            placeholder="Your Message"
                                            rows="5"
                                            className="w-full pl-12 pr-4 py-3 bg-white/5 backdrop-blur-md border border-green-500/20 rounded-xl text-gray-300 placeholder-gray-500 focus:outline-none focus:border-green-500 transition-all duration-300"
                                            required
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="w-full py-3 px-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-semibold transform transition-all duration-300 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {loading ? 'Sending...' : 'Send Message'}
                                    </button>
                                </form>
                            ) : (
                                <div className="text-center py-8">
                                    <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-green-500/20 backdrop-blur-md">
                                        <IoRocketSharp className="text-3xl text-green-400 animate-bounce" />
                                    </div>
                                    <h3 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent mb-4">
                                        Message Sent Successfully!
                                    </h3>
                                    <p className="text-gray-400">
                                        Thank you for reaching out. I'll get back to you soon!
                                    </p>
                                    <button
                                        onClick={() => setSuccess(false)}
                                        className="mt-6 py-2 px-4 bg-white/5 backdrop-blur-md border border-green-500/20 rounded-xl text-green-400 hover:bg-white/10 transition-all duration-300"
                                    >
                                        Send Another Message
                                    </button>
                                </div>
                            )}

                            {/*                             <div className="absolute top-0 -inset-11 -z-40 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-emerald-500 opacity-50" />
 */}                        </div>
                    </div>

                    {/* Info Section */}
                    <div className="space-y-6">
                        <div className="relative backdrop-blur-xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 p-8 rounded-2xl border border-green-500/20">
                            <h3 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent mb-4">
                                Let's Create Something Amazing
                            </h3>
                            <p className="text-gray-400 leading-relaxed">
                                Whether you have a project in mind or just want to chat about technology,
                                I'm always excited to connect with fellow developers and potential collaborators.
                            </p>

                            {/* WhatsApp Button */}
                            <a
                                href="https://wa.me/201080506463"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-6 inline-flex items-center gap-2 py-3 px-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-semibold transform transition-all duration-300 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                    <path d="M12 2C6.48 2 2 6.48 2 12c0 2.17.7 4.19 1.89 5.83L2.29 22l4.17-1.59c1.64 1.19 3.66 1.89 5.83 1.89 5.52 0 10-4.48 10-10S17.52 2 12 2zm.89 14.41c-.19.13-.48.15-.71.15-1.5 0-2.84-.76-3.62-1.92-.78-1.16-1.05-2.62-.77-4.03.29-1.42 1.27-2.62 2.62-3.22.31-.14.63-.21.95-.21 1.19 0 2.24.65 2.8 1.71.56 1.06.6 2.31.11 3.4-.49 1.09-1.5 1.86-2.67 2.07-.24.04-.47.05-.71.05z" />
                                </svg>
                                Message on WhatsApp
                            </a>
                        </div>

                        {/* Floating Cards */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="group p-6 rounded-xl bg-white/5 backdrop-blur-md border border-green-500/20 transition-all duration-300 hover:bg-white/10 hover:scale-105">
                                <IoMailOutline className="text-2xl text-green-400 mb-2 transition-transform group-hover:scale-110" />
                                <h4 className="text-gray-300 font-semibold">Quick Response</h4>
                                <p className="text-gray-400 text-sm">Usually within 24 hours</p>
                            </div>
                            <div className="group p-6 rounded-xl bg-white/5 backdrop-blur-md border border-green-500/20 transition-all duration-300 hover:bg-white/10 hover:scale-105">
                                <IoRocketSharp className="text-2xl text-green-400 mb-2 transition-transform group-hover:scale-110" />
                                <h4 className="text-gray-300 font-semibold">Project Ready</h4>
                                <p className="text-gray-400 text-sm">Available for new projects</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
