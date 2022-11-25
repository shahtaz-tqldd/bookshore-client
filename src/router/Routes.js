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
import SellBooks from "../pages/SellBooks/SellBooks";
import DashboardLayout from "./layouts/DashboardLayout";
import Main from "./layouts/Main";
import PrivateRoute from "./PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Homepage />
            },
            {
                path: '/categories',
                element: <Categories />
            },
            {
                path: '/categories/:id',
                element: <PrivateRoute><ProductPage /></PrivateRoute>
            },
            {
                path: '/sell-books',
                element: <PrivateRoute><SellBooks /></PrivateRoute>
            },
            {
                path: '/blogs',
                element: <Blogpage />
            },
            {
                path: '/blogs/:id',
                element: <BlogDetails />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '*',
                element: <Erropage />
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard />,
            }
        ]
    }
]);