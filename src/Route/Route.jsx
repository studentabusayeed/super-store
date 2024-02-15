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
        ]
    }
]);

export default router;