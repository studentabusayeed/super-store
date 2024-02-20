import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../pages/Home/Home/Home";
import Dashboard from "../pages/Dashboard/Dashboard/Dashboard";
import AddProduct from "../pages/Dashboard/EmployeeDashboard/AddProduct/AddProduct";
import SoldProduct from "../pages/Dashboard/EmployeeDashboard/SoldProduct/SoldProduct";
import EmployeeHome from "../pages/Dashboard/EmployeeDashboard/EmployeeHome/EmployeeHome";
import ProductList from "../pages/Dashboard/EmployeeDashboard/ProductList/ProductList";
import SoldList from "../pages/Dashboard/EmployeeDashboard/SoldList/SoldList";
import AdminHome from "../pages/Dashboard/AdminDashboard/AdminHome/AdminHome";
import Statements from "../pages/Dashboard/AdminDashboard/Statements/Statements";
import MemberRequest from "../pages/Dashboard/AdminDashboard/MemberRequest/MemberRequest";
import AllMembers from "../pages/Dashboard/AdminDashboard/AllMembers/AllMembers";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children:[
            {
                path: "/",
                element: <Home />
            }
        ]
    },
    {
        path : '/dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: 'adminHome',
                element: <AdminHome></AdminHome>
            },
            {
                path: 'statements',
                element: <Statements></Statements>
            },
            {
                path: 'memberRequest',
                element: <MemberRequest></MemberRequest>
            },
            {
                path: 'allMembers',
                element: <AllMembers></AllMembers>
            },



            {
                path: 'home',
                element: <EmployeeHome></EmployeeHome>
            },
            {
                path: 'addProduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: 'productList',
                element: <ProductList></ProductList>
            },
            {
                path: 'soldProduct',
                element: <SoldProduct></SoldProduct>
            },
            {
                path: 'soldList',
                element: <SoldList></SoldList>
            }
        ]
    }
]);

export default router;