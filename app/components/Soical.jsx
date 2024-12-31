import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { BsWhatsapp } from "react-icons/bs";

const Soical = () => {
    return (
        <div>
            <div className=' text-slate-400 flex  mx-auto text-4xl gap-5 py-6'>


                <a className=' hover:scale-125 transition hover:text-blue-500 duration-300' target='_blank' href="https://www.facebook.com/kerlosdev">
                    <h4><FaFacebook></FaFacebook></h4>
                </a>
                <a className=' hover:scale-125 transition hover:text-red-500 duration-300'  target='_blank' href="https://www.instagram.com/kerlos_hany360">
                    <h4><SiInstagram></SiInstagram></h4>
                </a>



                <a className=' hover:scale-125 transition hover:text-green-500 duration-300'  target='_blank' href="https://api.whatsapp.com/send/?phone=201277866394">
                    <h4><BsWhatsapp></BsWhatsapp></h4>
                </a>
            </div>
        </div>
    )
}

export default Soical