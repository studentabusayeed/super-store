import { useState } from 'react';
import EmployeeDashboard from '../EmployeeDashboard/EmployeeDashboard/EmployeeDashbaord';
import AdminDashboard from '../AdminDashboard/AdminDashboard/AdminDashboard';

const Dashboard = () => {
    const employee = false;
    const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
    const toggleSideMenu = () => {
        setIsSideMenuOpen(!isSideMenuOpen);
    }

    return (
        <div>
            {employee ?
                <EmployeeDashboard
                    isSideMenuOpen={isSideMenuOpen}
                    toggleSideMenu={toggleSideMenu}
                ></EmployeeDashboard> :
                <AdminDashboard
                    isSideMenuOpen={isSideMenuOpen}
                    toggleSideMenu={toggleSideMenu}
                ></AdminDashboard>
            }
        </div>
    );
};

export default Dashboard;