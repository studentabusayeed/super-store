import React from 'react';

const Statements = () => {
    return (
        <div>
            {/* title */}
            <div className='my-5'>
                <h1 className="text-4xl text-center">Statements</h1>
            </div>
            {/* about cards */}
            <div className='flex flex-col gap-4'>
                {/* first card */}
                {/* <div className="flex flex-row justify-between items-center space-y-4 rounded-lg shadow-lg bg-[#EFF4F7] mr-3">
                    <div className='flex flex-col items-center gap-3 px-6 py-3'>
                        <p className=''>Transaction Code</p>
                        <p className='text-xl font-bold'>00001</p>
                    </div>
                    <div className="flex flex-col items-center gap-2 px-6 py-3">
                        <h1 className="">Product Name</h1>
                        <h1 className="text-xl font-bold">Sadha Balosh</h1>
                    </div>
                    <div className="flex flex-col items-center gap-2 px-6 py-3">
                        <h1 className="">Product Code</h1>
                        <h1 className="text-xl font-bold">401</h1>
                    </div>
                    <div className='flex flex-col items-center gap-3 px-6 py-3'>
                        <h3 className="">Total Price</h3>
                        <div className="text-xl font-bold">$99.99</div>
                    </div>
                    <div className='flex flex-col items-center gap-3 px-6 py-3'>
                        <p className=''>Quantity</p>
                        <p className='text-xl font-bold'>60 pcs</p>
                    </div>
                    <div className='flex flex-col items-center gap-3 px-6 py-3'>
                        <p className=''>Sold By</p>
                        <p className='text-xl font-bold'>Rokib</p>
                    </div>
                    <div className='flex flex-col items-center gap-3 px-6 py-3'>
                        <p className=''>Date</p>
                        <p className='text-xl font-bold'>17/02/2024</p>
                    </div>
                </div> */}
                <div className='shadow-md rounded flex items-center justify-between  border mr-4 text-[1.3rem] bg-slate-100  px-[1%] hover:bg-slate-300   py-2 mb-5 '>
                    <div className='flex flex-col gap-4'>
                        <div className='flex gap-3'>
                            <h1 className='font-semibold'>Transaction Code :</h1>
                            <h1 className=''> <span className=''>402</span></h1>
                        </div>
                        <div className='flex gap-3'>
                            <h1 className='font-semibold'>Total Price : </h1>
                            <p> <span className=''>22,000 BDT</span></p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <div className='flex gap-3'>
                            <h1 className='font-semibold'>Ordered Date:</h1>
                            <h1> <span className=''>24/02/24</span></h1>
                        </div>
                        <div className='flex gap-3'>
                            <h1 className='font-semibold'>Delivering Date:</h1>
                            <h1> <span className=''>28/02/24</span></h1>
                        </div>
                    </div>
                    <div className='text-center flex flex-col gap-4'>
                        <div className='flex gap-2 items-center'>
                            <h1 className='font-semibold'>Status:</h1>
                            <button className="px-3 py-1 bg-green-100 rounded-md text-xl font-semibold text-green-500">Panding</button>
                        </div>
                        <div className='flex gap-3'>
                            <h1 className='font-semibold'>Stock:</h1>
                            <p> <span className=''>200 pcs</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Statements;