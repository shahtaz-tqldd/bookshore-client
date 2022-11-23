import { createBrowserRouter } from "react-router-dom";
import Homepage from "../pages/Homepage/Homepage";
import Login from "../pages/LoginRegister/Login";
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
                path: '/login',
                element: <Login/>
            }
        ]
    }
]);