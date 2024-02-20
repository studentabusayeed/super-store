import React from 'react';

const SoldList = () => {
    return (
        <div>
            {/* title */}
            <div className='my-5'>
                <h1 className="text-4xl text-center">Sold list</h1>
            </div>
            {/* about cards */}
            <div className='flex flex-col gap-4'>
                {/* first card */}
                <div className="flex flex-row justify-between items-center space-y-4 rounded-lg shadow-lg bg-[#EFF4F7] mr-3">
                    <img alt="Product Image" className=" object-cover  rounded-l-lg h-36" src="https://source.unsplash.com/200x200/?bed" />
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
                </div>
            </div>
        </div>
    );
};

export default SoldList;