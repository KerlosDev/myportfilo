import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { BsWhatsapp } from "react-icons/bs";

const Soical = () => {
    return (
        <div>
            <div className=' text-slate-400 flex  mx-auto text-4xl gap-5 py-6'>

                
                <h4><FaFacebook></FaFacebook></h4>
                <h4><SiInstagram></SiInstagram></h4>
                <h4><BsWhatsapp></BsWhatsapp></h4>
            </div>
        </div>
    )
}

export default Soical