import React from 'react';

const AdminHome = () => {
    return (
        <div className='my-10 relative h-[130vh]'>
            {/* heading */}
            <div className='bg-[#EFF4F7] text-center rounded-tl-full h-32 py-14'>
                <h1 className="text-4xl font-bold">Welcome To Your Kingdom!</h1>
            </div>
            {/* circle design */}
            <div className='bg-white absolute h-44 w-40 rounded-br-full rounded-tl-full -top-1'>
            </div>
            {/* main */}
            <div className='bg-[#EFF4F7] h-[100vh] py-5 flex justify-center gap-40 rounded-br-[13%] items-center'>
                <div className='w-80 space-y-2'>
                    <h4 className="text-4xl">Hello,</h4>
                    <h1 className="text-3xl font-semibold border-l-4 border-teal-500 h-[70px] px-1"><span className='text-teal-500'>Patowary</span> <br /> Bodda</h1>
                    <p>This is your profile page.You can see the progress of company's work and all members that are added and are employee of the company.</p>
                </div>
                <div className='flex flex-col items-center space-y-3'>
                    <img className='w-60 h-64 rounded-full' src="https://i.ibb.co/sJNzPg5/profile.jpg" alt="" />
                    <p className='font-extrabold text-lg'>Admin</p>
                    <p className='font-semibold'>Owner of Patowary Tuper Thop.</p>
                </div>
            </div>
            {/* circle design */}
            <div className='bg-white absolute h-44 w-32 rounded-br-full rounded-tl-full right-0 bottom-[51px]'>
            </div>
        </div>
    );
};

export default AdminHome;