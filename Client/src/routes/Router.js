import { createBrowserRouter } from "react-router-dom";
import Skills from "../component/skills/Skills";
import Main from "../Layout/Main/Main";
import AboutUs from "../Pages/AboutUs/AboutUs";
import ContactForm from "../Pages/contactForm/ContactForm";
import Courses from "../Pages/Courses/Courses";
import AdminDashboard from "../Pages/Dashboard/AdminDashboard";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Faq from "../Pages/Faq/Faq";
import FaqSection from "../Pages/FaqSection/FaqSection";
import Home from "../Pages/Home/Home/Home";
import WhyChooseUs from "../Pages/Home/Home/WhyChooseUs";
import LogIn from "../Pages/LogIn/LogIn/LogIn";
import Register from "../Pages/LogIn/Register/Register";
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
                path: "/contact",
                element: <ContactForm></ContactForm>
            }, 
            {
                path: "/about-us",
                element: <AboutUs></AboutUs>
            },
            {
                path : "/courses",
                element : <Courses/>
            },
            {
                path: "/register",
                element: <Register></Register>
            }, 
            {
                path: "/login",
                element: <LogIn></LogIn>
            },
            {
                path: "/student-profile",
                element: <StudentProfile></StudentProfile>
            }, 
            {
                path: "/why-choose-us",
                element: <WhyChooseUs></WhyChooseUs>
            }, 
            {
                path: "/faq",
                element: <Faq></Faq>
            }, 
            {
                path: "/skills",
                element: <Skills/>
            },
            {
                path: "/faq",
                element: <FaqSection/>
            },
            {
                path: "/admin-dashboard",
                element: <AdminDashboard/>
            }
        ]
    },
    
])