import React from 'react'
import { FaFolder } from "react-icons/fa";
import { BsFillChatTextFill } from "react-icons/bs";
import { FaInfo } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";

const Nav = () => {
    return (
        <div>

            <div className='  m-8 flex justify-center gap-3 p-2 '>
                <div className=' place-items-center flex'>
                    <h3 className='   place-items-center  gap-2 cursor-pointer  p-2 rounded-xl   transition font-anton text-3xl text-slate-400 flex gap-2a '>Kerlos Dev <FaCode />
                    </h3>

                </div>
                <div className=' flex gap-4 w-fit  rounded-xl ' >

                    <h3 className='  cursor-pointer  hover:shadow-slate-900 shadow-2xl hover:scale-125 p-2 rounded-xl hover:text-white  place-items-center transition font-anton text-3xl text-slate-400  flex gap-2'>Projects <FaFolder /> </h3>
                    <h3 className='  cursor-pointer  hover:shadow-slate-900 shadow-2xl hover:scale-125 p-2 rounded-xl hover:text-white  place-items-center  transition font-anton text-3xl text-slate-400  flex gap-2  '>Contact <BsFillChatTextFill /></h3>
                    <h3 className='  cursor-pointer  hover:shadow-slate-900 shadow-2xl hover:scale-125 p-2 rounded-xl hover:text-white  place-items-center transition font-anton text-3xl text-slate-400  flex gap-2'>About <IoPersonSharp></IoPersonSharp></h3>
                </div>
            </div>

        </div>
    )
}

export default Nav