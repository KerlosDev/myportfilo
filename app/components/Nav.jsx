import React from 'react'
import { FaFolder } from "react-icons/fa";
import { BsFillChatTextFill } from "react-icons/bs";
import { FaInfo } from "react-icons/fa";
import { FaCode } from "react-icons/fa";

const Nav = () => {
    return (
        <div >
            <div className='  m-8 flex justify-center gap-3 p-2 '>
                <div className=' flex'>
                    <h3 className='  cursor-pointer  p-2 rounded-xl   transition font-anton text-5xl text-slate-400 flex gap-2a '>Kerlos Dev <FaCode />
                    </h3>

                </div>
                <div className=' flex gap-4  bg-slate-700 w-fit  rounded-xl ' >

                    <h3 className='  cursor-pointer hover:bg-slate-400 hover:shadow-slate-900 shadow-2xl hover:scale-125 p-2 rounded-xl hover:text-slate-800  transition font-anton text-5xl text-slate-400  flex gap-2'>Projects <FaFolder /> </h3>
                    <h3 className='  cursor-pointer hover:bg-slate-400 hover:shadow-slate-900 shadow-2xl hover:scale-125 p-2 rounded-xl hover:text-slate-800  transition font-anton text-5xl text-slate-400  flex gap-2  '>Contact <BsFillChatTextFill /></h3>
                    <h3 className='  cursor-pointer hover:bg-slate-400 hover:shadow-slate-900 shadow-2xl hover:scale-125 p-2 rounded-xl hover:text-slate-800  transition font-anton text-5xl text-slate-400  flex gap-2'>About <FaInfo></FaInfo></h3>
                </div>
            </div>

        </div>
    )
}

export default Nav