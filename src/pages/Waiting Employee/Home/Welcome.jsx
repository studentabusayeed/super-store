import React from 'react'
import { MdSyncProblem } from "react-icons/md";

const Welcome = () => {
    return (
        <div className='supershop-container'>
            <div>
                <h1 className='md:text-3xl text-2xl font-bold text-center'>WELCOME TO SUPERSHOP</h1>
                <p className='text-center max-w-[30rem] text-sm md:text-base px-3 md:max-w-[40rem] mx-auto mt-5 font-semibold text-gray-500 '>Thank you for signing up with SuperShop! Your registration is being processed. Please await approval from our team. Once approved, you'll gain access to your personalized dashboard. Stay tuned for updates!</p>
            </div>

            <div className='flex justify-center md:text-3xl text-2xl mt-[10rem] '>
                <div className='bg-slate-200 flex flex-wrap justify-center  items-center gap-2 text-center px-4 py-3 rounded-lg'>
                <div className='bg-yellow-300 p-1 rounded-full'>
                    <MdSyncProblem />
                </div>
                <div>
                    <h3 className='text-red-500'>Your account is currently awaiting admin approval</h3>
                </div>
                </div>
            </div>

        </div>
    )
}

export default Welcome
