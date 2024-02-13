import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../pages/Home/Home/Home";
import Dashboard from "../pages/Dashboard/Dashboard/Dashboard";


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
            
        ]
    }
]);

export default router;