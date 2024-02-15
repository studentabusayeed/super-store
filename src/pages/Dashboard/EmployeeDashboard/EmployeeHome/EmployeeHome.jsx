import React from 'react';

const EmployeeHome = () => {
    return (
        <div className='my-10 relative h-[130vh]'>
            {/* heading */}
            <div className='bg-[#EFF4F7] text-center rounded-tl-full h-32 py-3'>
                <h1 className="text-4xl font-bold">Welcome To Our Connection</h1>
            </div>
            {/* circle design */}
            <div className='bg-white absolute h-44 w-40 rounded-br-full rounded-tl-full -top-1'>
            </div>
            {/* main */}
            <div className='bg-[#EFF4F7] h-[100vh] py-5 flex justify-center gap-40 rounded-br-[13%] '>

                <div className='w-80 space-y-2'>
                    <h4 className="text-4xl">Hey,</h4>
                    <h1 className="text-3xl font-semibold border-l-4 border-teal-500 h-[70px] px-1"><span className='text-teal-500'>Bokkor</span> <br /> Cokkor</h1>
                    <p>This is your profile page.You can see the progress you've made with your work and manage your projects or assigned tasks.</p>
                    <p className='font-semibold'>Mail: bokkorcokkor@gmail.com</p>
                </div>
                <div className=''>
                    <img className='w-60 h-72' src="https://i.ibb.co/sJNzPg5/profile.jpg" alt="" />
                </div>
            </div>
            {/* stats */}
            <div className='absolute right-40 bottom-0'>
                <div>
                    <h1 className="text-3xl font-bold text-center my-4">Stats</h1>
                </div>
                {/* stats info*/}
                <div className='h-52 flex flex-row justify-center items-center border-4 border-[#cfcbc4] bg-[#fef9f2] rounded-xl'>

                    <div className='flex flex-col text-center justify-center items-center p-5 border-r-2 border-gray-300 space-y-4'>
                        <h1 className="text-xl">Total Added Product</h1>
                        <p className='font-bold'>20</p>
                    </div>
                    <div className='flex flex-col text-center justify-center items-center p-5 border-r-2 border-gray-300 space-y-4'>
                        <h1 className="text-xl">Total Sold Product</h1>
                        <p className='font-bold'>12</p>
                    </div>
                    <div className='flex flex-col text-center justify-center items-center p-5 space-y-4'>
                        <h1 className="text-xl ">Remaining Product</h1>
                        <p className='font-bold'>08</p>
                    </div>


                </div>
            </div>
            {/* circle design */}
            <div className='bg-white absolute h-44 w-32 rounded-br-full rounded-tl-full right-0 bottom-[51px]'>
            </div>
        </div>
    );
};

export default EmployeeHome;