import { useState } from 'react';
import EmployeeDashboard from '../EmployeeDashboard/EmployeeDashbaord';
import AdminDashboard from '../AdminDashboard/AdminDashboard';

const Dashboard = () => {
    const employee = true;
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