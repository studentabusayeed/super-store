import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar justify-between bg-base-100 shadow-md rounded-b-xl">
            <div className="">
                <div className="form-control">
                    <input type="text" placeholder="Search here" className="input input-bordered w-96 focus:outline-none" />
                </div>
            </div>
            <div className="flex-none">
                <button className="btn btn-accent">
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Navbar;