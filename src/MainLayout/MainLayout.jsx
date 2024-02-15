import React from 'react';
import { Outlet } from 'react-router-dom';
import Login from '../pages/Login/Login';

const MainLayout = () => {
    return (
        <div>
            <Login />
            <Outlet />
        </div>
    );
};

export default MainLayout;