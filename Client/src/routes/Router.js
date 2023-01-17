import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import WhyChooseUs from "../Pages/Home/Home/WhyChooseUs";
import StudentProfile from "../Pages/StudentProfile/StudentProfile";

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
                path: "/studentprofile",
                element: <StudentProfile></StudentProfile>
            }, 
            {
                path: "/whychoseus",
                element: <WhyChooseUs></WhyChooseUs>
            }, 
        ]
    }
])