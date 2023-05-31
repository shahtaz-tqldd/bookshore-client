import { createBrowserRouter } from "react-router-dom";
import BlogDetails from "../pages/Blogs/BlogDetails";
import Blogpage from "../pages/Blogs/Blogpage";
import Categories from "../pages/Categories/Categories";
import ProductPage from "../pages/Categories/components/Products/ProductPage";
import AllProducts from "../pages/Dashboard/AllProducts";
import AllUsers from "../pages/Dashboard/AllUsers";
import BookedProducts from "../pages/Dashboard/BookedProducts";
import Dashboard from "../pages/Dashboard/Dashboard";
import SellerProducts from "../pages/Dashboard/SellerProducts";
import Erropage from "../pages/Erropage/Erropage";
import Homepage from "../pages/Homepage/Homepage";
import Login from "../pages/LoginRegister/Login";
import Register from "../pages/LoginRegister/Register";
import SellBooks from "../pages/SellBooks/SellBooks";
import AdminRoute from "./AdminRoute";
import DashboardLayout from "../layouts/DashboardLayout";
import Main from "../layouts/Main";
import PrivateRoute from "./PrivateRoute";
import SellerRoute from "./SellerRoute";

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
				path: '/categories/:name',
				element: <ProductPage />,
				loader: (params) => { return params }
			},
			{
				path: '/sell-books',
				element: <PrivateRoute><SellerRoute><SellBooks /></SellerRoute></PrivateRoute>
			},
			{
				path: '/blogs',
				element: <Blogpage />
			},
			{
				path: '/blogs/:id',
				element: <BlogDetails />,
				loader: ({ params }) => fetch(`https://bookshore-server-shahtaz-tqldd.vercel.app/blogs/${params.id}`)
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
			},
			{
				path: '/dashboard/all-users',
				element: <AdminRoute><AllUsers /></AdminRoute>,
			},
			{
				path: '/dashboard/all-products',
				element: <AdminRoute><AllProducts /></AdminRoute>,
			},
			{
				path: '/dashboard/seller-products',
				element: <SellerRoute><SellerProducts /></SellerRoute>,
			},
			{
				path: '/dashboard/booked-products',
				element: <BookedProducts />
			},
		]
	}
]);
