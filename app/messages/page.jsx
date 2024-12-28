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
        <div>
            <div className=' absolute  rounded-full blur-3xl w-96 h-96 bg-slate-800 -z-10'></div>

            {messages.map((item, index) => {
                return (
                    < div className=' m-10 p-5 rounded-xl bg-white' key={index} >
                       
                        <h3 className='  font-anton text-5xl text-slate-900 '>{index + 1} - {item.email}</h3>
                        <h3 className=' text-black text-6xl  '>{item.message}</h3>
                    </div>

                )


            })
            }
        </div >
    )
}

export default page