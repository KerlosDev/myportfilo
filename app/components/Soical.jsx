import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { BsWhatsapp } from "react-icons/bs";

const Soical = () => {
    return (
        <div>
            <div className="flex gap-4">
                <a
                    className="group p-3 rounded-xl bg-white/5 backdrop-blur-md border border-green-500/20 transition-all duration-300 hover:bg-white/10 hover:scale-105"
                    target="_blank"
                    href="https://www.facebook.com/kerlosdev"
                    rel="noopener noreferrer"
                >
                    <FaFacebook className="text-2xl text-green-400 transition-transform group-hover:scale-110" />
                </a>

                <a
                    className="group p-3 rounded-xl bg-white/5 backdrop-blur-md border border-green-500/20 transition-all duration-300 hover:bg-white/10 hover:scale-105"
                    target="_blank"
                    href="https://www.instagram.com/kerlos_hany360"
                    rel="noopener noreferrer"
                >
                    <SiInstagram className="text-2xl text-green-400 transition-transform group-hover:scale-110" />
                </a>

                <a
                    className="group p-3 rounded-xl bg-white/5 backdrop-blur-md border border-green-500/20 transition-all duration-300 hover:bg-white/10 hover:scale-105"
                    target="_blank"
                    href="https://api.whatsapp.com/send/?phone=201080506463"
                    rel="noopener noreferrer"
                >
                    <BsWhatsapp className="text-2xl text-green-400 transition-transform group-hover:scale-110" />
                </a>
            </div>
        </div>
    )
}

export default Soical