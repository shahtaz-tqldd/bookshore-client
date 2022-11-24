import { createBrowserRouter } from "react-router-dom";
import BlogDetails from "../pages/Blogs/BlogDetails";
import Blogpage from "../pages/Blogs/Blogpage";
import Categories from "../pages/Categories/Categories";
import ProductPage from "../pages/Categories/components/Products/ProductPage";
import Dashboard from "../pages/Dashboard/Dashboard";
import Erropage from "../pages/Erropage/Erropage";
import Homepage from "../pages/Homepage/Homepage";
import Login from "../pages/LoginRegister/Login";
import Register from "../pages/LoginRegister/Register";
import DashboardLayout from "./layouts/DashboardLayout";
import Main from "./layouts/Main";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                path: '/',
                element: <Homepage/>
            },
            {
                path: '/categories',
                element: <Categories/>
            },
            {
                path: '/categories/:id',
                element: <ProductPage/>
            },
            {
                path: '/blogs',
                element: <Blogpage/>
            },
            {
                path: '/blogs/:id',
                element: <BlogDetails/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/register',
                element: <Register/>
            },
            {
                path: '*',
                element: <Erropage />
            }
        ]
    },
    {
        path:'/dashboard',
        element: <DashboardLayout/>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard/>,
            }
        ]
    }
]);