'use client'
import React from 'react'
import Lottie from "lottie-react";
import lap from '../../public/lap.json'

const Anmito = () => {
    return (
       
            <Lottie loop={false} className=' absolute right-20 w-[600] -mr-20' animationData={lap} />
       
    )
}

export default Anmito