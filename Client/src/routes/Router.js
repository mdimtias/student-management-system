import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import LogIn from "../Pages/LogIn/LogIn/LogIn";
import Register from "../Pages/LogIn/Register/Register";

export const router = createBrowserRouter([
    {
        path: "/", 
        element: <Main></Main>, 
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            }, 
            {
                path: "/register",
                element: <Register></Register>
            }, 
            {
                path: "/login",
                element: <LogIn></LogIn>
            }, 
        ]
    }
])