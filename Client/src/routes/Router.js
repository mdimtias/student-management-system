import { createBrowserRouter } from "react-router-dom";
import ContactForm from "../component/contactForm/ContactForm";
import Skills from "../component/skills/Skills";
import Main from "../Layout/Main/Main";
import AboutUs from "../Pages/About Us/AboutUs";
import Courses from "../Pages/Courses/Courses";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";

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
                path: "/contact",
                element: <ContactForm/>
            }, 
            {
                path: "/aboutus",
                element: <AboutUs/>
            },
            {
                path : "/courses",
                element : <Courses/>
            },
            {
                path : "/skills",
                element : <Skills/>
            }
        ]
    },
    
])