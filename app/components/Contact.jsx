'use client';
import React, { useState } from 'react';
import { FaMarker } from 'react-icons/fa6';
import { ImCheckmark } from 'react-icons/im';
import Globapi from '../api/Globapi';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [massege, setMessagee] = useState('');
    const [sucsses, setSucses] = useState('Send Message');
    const [dialog, setDialog] = useState(false);

    const messageUi = async () => {
        setLoading(true);
        try {
            const res = await Globapi.sendmasseges(name, email, massege);
            console.log(res);
            setSucses('Message sent successfully!');
            setDialog(true);
        } catch (error) {
            console.error(error);
            setSucses('Email has an error');
        } finally {
            setLoading(false);
        }
    };

    const handleSend = () => {
        if (!name || !email || !massege) return; // Prevent sending if fields are empty
        messageUi();
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault(); // Prevent default form submission
            handleSend(); // Trigger the button click
        }
    };

    return (
        <div className="relative select-none p-4">
            {/* Background Blur Elements */}
            <div className="absolute rounded-full blur-3xl w-64 h-64 bg-slate-800 bottom-0 left-4 -z-10"></div>
            <div className="absolute rounded-full blur-3xl w-64 h-64 bg-slate-800 right-4 -z-10"></div>

            {/* Contact Section */}
            <div className="relative mb-28 mx-4 sm:mx-10 lg:mx-40">
                <div id="contact">
                    <h3 className="text-white mb-8 font-abril text-4xl md:text-6xl flex gap-3 items-center">
                        Contact <FaMarker className="text-3xl md:text-4xl" />
                    </h3>

                    {/* Flexbox Layout */}
                    <div className="flex flex-col lg:flex-row gap-10">
                        {/* Form Section */}
                        <form
                            className="transition bg-black/20 border col-span-1 rounded-xl w-full lg:w-1/2 p-5 text-slate-800 font-anton"
                            onKeyDown={handleKeyDown} // Capture key press events here
                        >
                            {!dialog ? (
                                <>
                                    <input
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="Name"
                                        className="w-full my-3 placeholder:text-slate-700 px-4 py-2 bg-slate-400 rounded-xl text-lg sm:text-xl"
                                        type="text"
                                        required
                                    />
                                    <input
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Email"
                                        className="w-full my-3 placeholder:text-slate-700 px-4 py-2 bg-slate-400 rounded-xl text-lg sm:text-xl"
                                        type="email"
                                        required
                                    />
                                    <textarea
                                        value={massege}
                                        onChange={(e) => setMessagee(e.target.value)}
                                        placeholder="Your Message"
                                        className="my-3 w-full placeholder:text-slate-700 px-4 py-2 bg-slate-400 rounded-xl text-lg sm:text-xl"
                                        rows="5"
                                        required
                                    ></textarea>
                                    <div>
                                        <button
                                            type="button" // Prevent default form submission
                                            disabled={!name || !email || !massege || loading}
                                            className="bg-green-500 flex items-center justify-center gap-3 transition duration-300 text-lg sm:text-xl text-white py-2 px-5 rounded-xl disabled:bg-red-500"
                                            onClick={handleSend}
                                        >
                                            {sucsses} <ImCheckmark />
                                        </button>
                                    </div>
                                </>
                            ) : (
                                <div className="transition">
                                    <h3 className="bg-gradient-to-tr from-blue-700 to-blue-500 font-abril text-white text-xl sm:text-2xl p-4 text-center rounded-xl">
                                        Message sent successfully!
                                    </h3>
                                </div>
                            )}
                        </form>

                        {/* Quote Section */}
                        <div className="flex-1 flex justify-center items-center">
                            <div className="p-6 sm:p-8 text-white backdrop-blur-3xl bg-black/30 hover:scale-105 transition cursor-default rounded-xl shadow-lg">
                                <p className="text-lg sm:text-2xl lg:text-4xl font-abril text-center">
                                    "I hope to make something great together."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
