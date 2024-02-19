import React from 'react'
import { AiTwotoneHome } from "react-icons/ai";
import { GoDatabase } from "react-icons/go";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineStock } from "react-icons/ai";

const MobileNav = () => {
  return (
    <div className='supershop-container'>
      <div className='flex justify-between items-center shadow-md bg-[#fef9f2] px-3 py-2 rounded-md border-2 border-[#ffe0b4] '>
        <div className='text-base md:text-xl flex flex-col cursor-pointer'>
            <AiTwotoneHome className=' text-2xl md:text-3xl mx-auto ' />
            <h3>Home</h3>
        </div>
        <div className='text-base md:text-xl flex flex-col cursor-pointer'>
            <GoDatabase className='text-2xl md:text-3xl mx-auto  ' />
            <h3>Data</h3>
        </div>
        <div className='text-base md:text-xl flex flex-col cursor-pointer '>
            <AiOutlineStock className='text-2xl md:text-3xl mx-auto ' />
            <h3>Details Stock</h3>
        </div>
        <div className='text-base md:text-xl flex flex-col cursor-pointer '>
            <FaRegUser className='text-2xl md:text-3xl mx-auto' />
            <h3>Me</h3>
        </div>
      </div>
    </div>
  )
}

export default MobileNav
