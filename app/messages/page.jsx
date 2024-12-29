'use client'
import React, { useEffect, useState } from 'react'
import Globapi from '../api/Globapi'

const page = () => {

    const [messages, setMasseges] = useState([])

    useEffect(() => {
        getMesseage_s()
    }, [])

    const getMesseage_s = () => {
        Globapi.getMessages().then(req => {
            console.log(req.messages)
            setMasseges(req.messages)
        })
    }

    return (
        <div className='relative'>
            <div className=' absolute w-screen h-full  opacity-5 bg-noise z-50'></div>
            <div className="relative min-h-screen py-16 px-4">
                {/* Background decoration */}
                <div className='absolute rounded-full blur-3xl w-96 h-96 bg-slate-800 top-10 -z-10'></div>
                <div className='absolute rounded-full blur-3xl w-96 h-96 bg-slate-800 bottom-10 -z-10'></div>

                {/* Messages container */}
                <div className="max-w-6xl grid grid-cols-3  mx-auto gap-4">
                    <h2 className="text-8xl pr-2 font-bold text-center text-slate-800">Messages</h2>

                    {messages.map((item, index) => {
                        return (
                            <div key={index} className="bg-white/20 backdrop-blur-xl shadow-xl rounded-xl p-6 transition duration-300 hover:scale-105 transform hover:shadow-2xl">
                                <div className="flex items-center space-x-5">
                                    <div className="w-16 h-16 rounded-full bg-blue-500 text-white flex justify-center items-center text-xl font-semibold">
                                        {index + 1}
                                    </div>
                                    <h3 className=" font-anton text-2xl text-slate-400">{item.email}</h3>
                                </div>

                                <p className="mt-4 font-anton text-xl text-gray-400">{item.message}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>

    )
}

export default page
