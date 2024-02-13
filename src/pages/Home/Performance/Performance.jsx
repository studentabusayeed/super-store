import React from 'react'
import { FaChevronRight } from "react-icons/fa";

const Performance = () => {
    return (
        <div className='flex justify-center w-full'>
            <div className='w-[1280px] p-3 bg-[#FFF6E9] rounded-lg'>
                <div className='flex justify-between items-center text-3xl font-semibold'>
                    <h3>Store Performance</h3>
                    <FaChevronRight />
                </div>
                <div className='flex items-center justify-between mt-6'>
                    <div>
                        <h3 className='text-xl font-semibold'>0.0%</h3>
                        <div className='flex gap-4 justify-between items-center'>
                            <h4 className='text-base text-gray-400'>Cancel Rate</h4>
                            <FaChevronRight className='' />
                        </div>
                    </div>
                    <div className='border-l border-gray-400 pl-5'>
                        <h3 className='text-xl font-semibold'>100.0%</h3>
                        <div className='flex gap-4 justify-between items-center'>
                            <h4 className='text-base text-gray-400'>Cancel Rate</h4>
                            <FaChevronRight />
                        </div>
                    </div>
                    <div className='border-l border-gray-400 pl-5'>
                        <h3 className='text-xl font-semibold'>0.0%</h3>
                        <div className='flex gap-4 justify-between items-center'>
                            <h4 className='text-base text-gray-400'>Cancel Rate</h4>
                            <FaChevronRight />
                        </div>
                    </div>
                    <div className='border-l border-gray-400 pl-5'>
                        <h3 className='text-xl font-semibold'>-</h3>
                        <div className='flex gap-4 justify-between items-center'>
                            <h4 className='text-base text-gray-400'>Cancel Rate</h4>
                            <FaChevronRight />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Performance
