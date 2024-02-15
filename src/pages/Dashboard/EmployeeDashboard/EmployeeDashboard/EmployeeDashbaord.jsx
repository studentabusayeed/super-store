import { NavLink, Outlet } from 'react-router-dom';
import { AiFillFacebook, AiFillInstagram, AiOutlineHome, AiOutlineSchedule, AiOutlineTwitter, AiOutlineWhatsApp } from "react-icons/ai";
import { FaUserClock } from 'react-icons/fa';
import { FaBarsStaggered, FaXmark } from 'react-icons/fa6';
import Navbar from '../../../../shared/Navbar/Navbar';

const EmployeeDashboard = ({ isSideMenuOpen, toggleSideMenu }) => {
    
    const navlinks = <>
        <li className="relative px-2 py-1">
            <NavLink
                defaultChecked
                className={({ isActive }) =>
                    isActive ? "inline-flex items-center font-bold text-[#3d48df] hover:text-blue-600 text-lg" : "inline-flex items-center font-semibold hover:text-blue-600 text-lg"
                }
                to="/dashboard/home"
            >
                <AiOutlineHome />
                <span className="ml-4">Home</span>
            </NavLink>
        </li>
        <li className="relative px-2 py-1 ">
            <NavLink
                className={({ isActive }) =>
                    isActive ? "inline-flex items-center font-bold text-[#3d48df] hover:text-blue-600 text-lg" : "inline-flex items-center font-semibold hover:text-blue-600 text-lg"
                }
                to="addProduct"
            >
                <AiOutlineSchedule />
                <span className="ml-4">Add Product</span>
            </NavLink>
        </li>
        <li className="relative px-2 py-1 ">
            <NavLink
                className={({ isActive }) =>
                    isActive ? "inline-flex items-center font-bold text-[#3d48df] hover:text-blue-600 text-lg" : "inline-flex items-center font-semibold hover:text-blue-600 text-lg"
                }
                to="productList"
            >
                <FaUserClock />
                <span className="ml-4">Product List</span>
            </NavLink>
        </li>

        <li className="relative px-2 py-1 ">
            <NavLink
                className={({ isActive }) =>
                    isActive ? "inline-flex items-center font-bold text-[#3d48df] hover:text-blue-600 text-lg" : "inline-flex items-center font-semibold hover:text-blue-600 text-lg"
                }
                to="soldProduct"
            >
                <AiOutlineHome />
                <span className="ml-4">Sold Product</span>
            </NavLink>
        </li>
        <li className="relative px-2 py-1 ">
            <NavLink
                className={({ isActive }) =>
                    isActive ? "inline-flex items-center font-bold text-[#3d48df] hover:text-blue-600 text-lg" : "inline-flex items-center font-semibold hover:text-blue-600 text-lg"
                }
                to="orderedList"
            >
                <AiOutlineHome />
                <span className="ml-4">Sold List</span>
            </NavLink>
        </li>
    </>

    return (
        <div className={`flex h-screen bg-white ${isSideMenuOpen ? "overflow-hidden" : ""}`}>
            {/* Dashboard */}
            <aside className='z-20 flex-shrink-0 fixed hidden w-64 overflow-y-auto bg-[#fef9f2] md:block'>
                <div className='h-screen py-3 pl-3 flex flex-col justify-between shadow-xl'>
                    {/* logo */}
                    <div>
                        <h1 className="text-3xl">Patowary Super Store</h1>
                    </div>
                    {/* items and routes */}
                    <div className=" flex flex-col justify-between">
                        <ul className="leading-10">
                            {navlinks}
                        </ul>
                    </div>
                    {/* social icons */}
                    <div className='flex gap-2 justify-center items-center'>
                        <AiFillFacebook className='text-2xl rounded-full text-blue-500' />
                        <AiFillInstagram className='text-2xl rounded-full text-pink-600' />
                        <AiOutlineWhatsApp className='text-2xl rounded-full text-green-500' />
                        <AiOutlineTwitter className='text-2xl rounded-full' />
                    </div>
                </div>
            </aside>
            <div className="fixed inset-0 -z-10 flex items-end bg-slate-300 bg-opacity-50 sm:items-center sm:justify-center"></div>
            {/* responsive dashboard */}
            <aside className={`z-20 fixed w-64 inset-y-0 ease-in-out overflow-y-auto bg-white ${isSideMenuOpen ? "-translate-x-full" : "translate-x-0"} md:hidden`}>
                <div className='h-screen py-3 pl-3 flex flex-col justify-between shadow-xl'>
                    {/* logo */}
                    <div>
                        <h1 className="text-3xl">Patowary Super Store</h1>
                    </div>
                    {/* items and routes */}
                    <div className=" flex flex-col justify-between">
                        <ul className="leading-10">
                            {navlinks}
                        </ul>
                    </div>
                    {/* social icons */}
                    <div className='flex gap-2 justify-center items-center'>
                        <AiFillFacebook className='text-2xl rounded-full text-blue-500' />
                        <AiFillInstagram className='text-2xl rounded-full text-pink-600' />
                        <AiOutlineWhatsApp className='text-2xl rounded-full text-green-500' />
                        <AiOutlineTwitter className='text-2xl rounded-full' />
                    </div>
                </div>
            </aside>
            {/* components */}
            <div className="flex flex-col flex-1 w-full bg-white overflow-y-auto ">
                <header className="z-40 py-5 bg-slate-50 fixed w-full top-0 md:hidden">
                    <div className="flex items-center justify-between h-8 px-6 mx-auto">
                        <button
                            className="p-1 mr-5 -ml-1 rounded-md md:hidden focus:outline-none focus:shadow-outline-purple"
                            onClick={toggleSideMenu}
                            aria-label="Menu"
                        >
                            {!isSideMenuOpen ? (
                                <FaXmark className="w-6 h-6" />
                            ) : (
                                <FaBarsStaggered className="w-6 h-6" />
                            )}
                        </button>
                        <div className="flex md:hidden justify-center mr-4 w-[80%]"></div>
                    </div>
                </header>
                <main className="lg:ml-72 scroll-smooth">
                    <Navbar></Navbar>
                    <Outlet></Outlet>
                </main>
            </div>
        </div>
    );
};

export default EmployeeDashboard;