import React from 'react';
import { FaFacebook, FaGoogle } from 'react-icons/fa';

const SocialLogin = () => {
    return (
        <div className="flex justify-center gap-2">
            <div
                className="flex items-center justify-center gap-2 border border-slate-500  p-2 text-slate-100 rounded-lg  cursor-pointer w-2/6"
            >
                <span>Sign in with Facebook</span>
                <FaFacebook className="w-5 h-5 text-slate-100" />
            </div>
            <div
                className="flex items-center justify-center gap-2 border border-slate-500  p-2 text-slate-100 rounded-lg cursor-pointer w-2/6"
            >
                <span>Sign in with Google</span>
                <FaGoogle className="w-5 h-5 text-slate-100" />
            </div>
        </div>
    );
};

export default SocialLogin;