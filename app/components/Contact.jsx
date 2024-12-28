'use client'
import React, { useEffect, useState } from 'react'
import { FaMarker } from "react-icons/fa6";
import { ImCheckmark } from "react-icons/im";

import sendmasseges from '../api/Globapi';
import Globapi from '../api/Globapi';
const Contact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false); // Add loading state
    const [massege, setMessagee] = useState('')
    const [sucsses, setSucses] = useState('Send Message')
    const [dialog, setDialog] = useState(false)



    const messageUi = async () => {
        setLoading(true); // Set loading to true when sending the message
        try {
            // Call the API to send the message
            const res = await Globapi.sendmasseges(name, email, massege);
            console.log(res);
            setSucses('Message sent successfully!');
            setDialog(true)

        } catch (error) {
            console.error(error);
            setSucses('Email has an error'); // Set error message when an error occurs
        } finally {
            setLoading(false); // Set loading to false after the message is sent
        }
    }

    const handleSend = (name, email, massege) => {
        messageUi(name, email, massege)
    }
    return (
        <div className=' mb-28 mx-40'>
            <div className=' '>
                <h3 className=' text-white m-4 font-abril text-6xl place-items-center flex gap-3 '>Contact <FaMarker className=' text-4xl'></FaMarker>   </h3>

                <div className=' grid grid-cols-3'>
                    {!dialog ? (
                        <div id='contact' className=' transition border-2 col-span-1 rounded-xl w-fit p-3 text-slate-800  font-anton gap-7  m-5'>
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
                                className="my-3 w-full placeholder:text-slate-700 p-2 bg-slate-400 rounded-xl text-5xl"
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
                                    {sucsses}<ImCheckmark></ImCheckmark>
                                </button>
                            </div>

                        </div>
                    ) : (
                        <div className='transition'>
                            <h3 className=' bg-gradient-to-tr from-blue-700 to-blue-500 font-abril text-white text-4xl p-4 text-center rounded-xl '>Message sent successfully!</h3>
                        </div>
                    )}
                </div>


            </div>
        </div>
    )
}

export default Contact