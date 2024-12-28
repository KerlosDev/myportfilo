'use client'
import React, { useState } from 'react'
import { FaMarker } from "react-icons/fa6";
import { ImCheckmark } from "react-icons/im";
import Globapi from '../api/Globapi';

const Contact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false);
    const [massege, setMessagee] = useState('')
    const [sucsses, setSucses] = useState('Send Message')
    const [dialog, setDialog] = useState(false)

    const messageUi = async () => {
        setLoading(true);
        try {
            const res = await Globapi.sendmasseges(name, email, massege);
            console.log(res);
            setSucses('Message sent successfully!');
            setDialog(true)
        } catch (error) {
            console.error(error);
            setSucses('Email has an error');
        } finally {
            setLoading(false);
        }
    }

    const handleSend = (name, email, massege) => {
        messageUi(name, email, massege)
    }

    return (
        <div className='relative select-none'>
            <div className='absolute rounded-full blur-3xl w-96 h-96 bg-slate-800 bottom-0 -z-10'></div>
            <div className='absolute rounded-full blur-3xl w-96 h-96 bg-slate-800 right-0 -z-10'></div>
            <div className='absolute rounded-full blur-3xl w-96 h-96 bg-slate-800 right-64 top-96 -z-10'></div>

            <div className='relative mb-28 mx-40'>
                <div id='contact' className=''>
                    <div className='absolute left-80 rounded-full blur-3xl w-96 h-96 bg-slate-800 -z-10'></div>
                    <h3 className='text-white m-4 font-abril text-6xl place-items-center flex gap-3'>
                        Contact <FaMarker className='text-4xl'></FaMarker>
                    </h3>

                    {/* Using Flexbox to align the contact form and quote side by side */}
                    <div className='flex gap-10'>
                        <div className='transition bg-black/20 border col-span-1 rounded-xl w-fit p-3 text-slate-800 font-anton gap-7 m-5 flex-1'>
                            {!dialog ? (
                                <>
                                    <input
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="name"
                                        className="w-fit my-3 placeholder:text-slate-700 px-2 bg-slate-400 rounded-xl text-5xl"
                                        type="text"
                                        required
                                    />
                                    <input
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="email"
                                        className="w-fit my-3 placeholder:text-slate-700 px-2 bg-slate-400 rounded-xl text-5xl"
                                        type="email"
                                        required
                                    />
                                    <textarea
                                        value={massege}
                                        onChange={(e) => setMessagee(e.target.value)}
                                        placeholder="your message"
                                        className="my-3 w-full  placeholder:text-slate-700 p-2 bg-slate-400 rounded-xl text-5xl"
                                        name=""
                                        id=""
                                        required
                                    ></textarea>
                                    <div>
                                        <button
                                            disabled={!name || !email || !massege}
                                            className="bg-green-500 flex gap-3 transition duration-300 text-4xl text-white p-3 rounded-xl disabled:bg-red-500"
                                            onClick={handleSend}
                                        >
                                            {sucsses} <ImCheckmark></ImCheckmark>
                                        </button>
                                    </div>
                                </>
                            ) : (
                                <div className='transition'>
                                    <h3 className='bg-gradient-to-tr from-blue-700 to-blue-500 font-abril text-white text-4xl p-4 text-center rounded-xl'>
                                        Message sent successfully!
                                    </h3>
                                </div>
                            )}
                        </div>

                        {/* Quote Section */}
                        <div className='flex-1 flex justify-center items-center'>
                            <div className='  p-8 text-white backdrop-blur-3xl bg-black/30 hover:scale-125 transition cursor-default   rounded-xl shadow-lg'>
                                <p className='text-5xl  font-abril'>
                                    " i hope to make great something together "
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;
