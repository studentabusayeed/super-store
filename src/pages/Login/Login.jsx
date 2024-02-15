import React from 'react';
import SocialLogin from '../SocialLogin/SocialLogin';
import { FaRegEnvelope } from 'react-icons/fa';
import { MdLockOutline } from "react-icons/md";
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.png";
import stock from "../../assets/stock1.jpg";

function Login() {
    return (
        <div className="flex justify-center items-center">
            <div className="w-[50%] text-center">
                <h3 className="text-2xl font-bold mb-6 flex justify-center items-center">Get more things done with<br /> Logging platform.</h3>
                <p className="text-gray-600 flex justify-center items-center">Access to the most powerful tool in the<br /> entire design and web industry.</p>
                <img src={stock} alt="" className="mx-auto mt-4 w-2/3" />
            </div>
            <div className="bg-[#44C97D] w-[50%] px-7 h-screen overflow-hidden">
                <div className="flex justify-center py-12">
                    <img className="w-44 md:w-48" src={logo} alt="logo" />
                </div>
                <SocialLogin />
                <div className="max-w-[150px] flex justify-center border-2 border-[#fff] rounded mx-auto my-8"></div>
                <form>
                    <div className="flex flex-col items-start gap-3">
                        <div className="w-full flex items-center gap-2 border bg-white border-slate-500 hover:border-[#0fcda18c] px-2 rounded-lg hover:bg-[#fff] cursor-pointer">
                            <FaRegEnvelope className="w-5 h-5 text-slate-400" />
                            <input
                                className="flex-1 bg-white text-base outline-none py-2"
                                type="email"
                                autoComplete="off"
                                name="email"
                                placeholder="Email"
                            />
                        </div>
                        <div className="w-full flex items-center gap-2 border bg-white border-slate-500 hover:border-[#0fcda18c] px-2 rounded-lg hover:bg-[#fff] cursor-pointer">
                            <MdLockOutline className="w-5 h-5 text-slate-400" />
                            <input
                                className="flex-1 bg-transparent text-base outline-none py-2"
                                type="password"
                                name="password"
                                autoComplete="off"
                                placeholder="Password"
                            />
                        </div>
                    </div>
                    <div className="flex justify-end mt-1">
                        <span
                            className="text-right cursor-pointer hover:link text-slate-100 hover:text-blue-500 text-sm"
                        >
                            Forgot your password?
                        </span>
                    </div>
                    <button
                        type="submit"
                        className=" px-6 py-[6px] bg-white text-slate-700 rounded-md cursor-pointer mt-3 mb-6 "
                    >
                        Sign in
                    </button>
                </form>
                <div className="text-center pb-10 text-sm text-slate-100">
                    <Link
                        to="/signup"
                        className="cursor-pointer link hover:text-blue-500 mr-1"
                    >
                        Sign up
                    </Link>
                    if you don't have an account yet.
                </div>
            </div>
        </div>
    );
}

export default Login;
