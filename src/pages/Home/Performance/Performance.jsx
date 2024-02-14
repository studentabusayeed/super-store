import React from 'react'
import { FaChevronRight } from "react-icons/fa";

const Performance = () => {
    return (
        <div className='flex justify-center w-full'>
            <div className='w-[1280px] p-3 bg-[#fef9f2] border shadow-sm rounded-lg border-[#ffe0b4] '>
                <div className='flex justify-between items-center text-3xl font-semibold'>
                    <h3>Store Performance</h3>
                    <FaChevronRight />
                </div>
                <div className='flex items-center justify-between mt-6'>
                    <div>
                        <h3 className='text-xl font-semibold'>0.0%</h3>
                        <div className='flex gap-1 md:gap-5 justify-between  text-gray-400 mt-1 items-center'>
                            <h4 className='text-sm md:text-base '>Cancel Rate</h4>
                            <FaChevronRight className='' />
                        </div>
                    </div>
                    <div className='border-l ml-1 border-gray-300 pl-3'>
                        <h3 className='text-xl font-semibold'>100.0%</h3>
                        <div className='flex gap-1 md:gap-5 justify-between  text-gray-400 mt-1 items-center'>
                            <h4 className='text-sm md:text-base '>Cancel Rate</h4>
                            <FaChevronRight />
                        </div>
                    </div>
                    <div className='border-l ml-1 border-gray-300 pl-3'>
                        <h3 className='text-xl font-semibold'>0.0%</h3>
                        <div className='flex gap-1 md:gap-5 justify-between  text-gray-400 mt-1 items-center'>
                            <h4 className='text-sm md:text-base '>Cancel Rate</h4>
                            <FaChevronRight />
                        </div>
                    </div>
                    <div className='border-l ml-1 border-gray-300 pl-3'>
                        <h3 className='text-xl font-semibold'>-</h3>
                        <div className='flex gap-1 md:gap-5 text-gray-400 mt-1 justify-between items-center'>
                            <h4 className='text-sm md:text-base '>Cancel Rate</h4>
                            <FaChevronRight />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Performance
