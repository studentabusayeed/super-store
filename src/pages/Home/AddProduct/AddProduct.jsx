import React from 'react'
import { FaChevronRight } from "react-icons/fa";


const AddProduct = () => {
    return (
        <div className='flex justify-center mt-10'>
            <div className='w-[1280px] px-3 py-4 border shadow-sm rounded-lg border-[#ffe0b4] bg-[#fef9f2]  '>
                <div className='flex justify-between items-center text-2xl font-bold '>
                    <h3>Product</h3>
                    <FaChevronRight />
                </div>
                <div className='text-center border-dashed cursor-pointer border-[#ffbe64] bg-[#fbe4c4] font-bold border-2 py-2 mt-5 rounded-lg'>
                    <button>Add Product</button>
                </div>
                <div className='flex items-center justify-between mt-5 '>
                    <div className=''>
                        <h3 className='text-xl font-semibold '>0</h3>
                        <div className='flex mt-1 items-center text-sm md:text-base gap-3 md:gap-5 text-gray-400'>
                            <h4 className=''>Pending</h4>
                            <FaChevronRight />
                        </div>
                    </div>
                    <div className='border-l ml-1 border-gray-300 pl-5'>
                        <h3 className='text-xl font-semibold '>38</h3>
                        <div className='flex mt-1 items-center  text-sm md:text-base gap-3 md:gap-5 text-gray-400'>
                            <h4 className=''>Online</h4>
                            <FaChevronRight />
                        </div>
                    </div>
                    <div className='border-l ml-1 border-gray-300 pl-5'>
                        <h3 className='text-xl font-semibold '>0</h3>
                        <div className='flex mt-1 items-center  text-sm md:text-base gap-3 md:gap-5 text-gray-400'>
                            <h4 className=''>Out Of Stock</h4>
                            <FaChevronRight />
                        </div>
                    </div>
                    <div className='border-l ml-1 border-gray-300 pl-5'>
                        <h3 className='text-xl font-semibold '>4</h3>
                        <div className='flex mt-1 items-center  text-sm md:text-base gap-3 md:gap-5 text-gray-400 '>
                            <h4 className=''>Rejected</h4>
                            <FaChevronRight />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddProduct
