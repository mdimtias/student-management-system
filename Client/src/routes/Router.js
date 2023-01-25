import { createBrowserRouter } from "react-router-dom";
import ComingSoon from "../component/Coming Soon/ComingSoon";
import Skills from "../component/skills/Skills";
import AdminDashboard from "../Layout/AdminDashboard/AdminDashboard";
import Main from "../Layout/Main/Main";
import AboutUs from "../Pages/AboutUs/AboutUs";
import ContactForm from "../Pages/contactForm/ContactForm";
import Courses from "../Pages/Courses/Courses";
import AddStudent from "../Pages/Dashboard/Students/AddStudent/AddStudent";
import AllStudents from "../Pages/Dashboard/Students/AllStudents/AllStudents";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Faq from "../Pages/Faq/Faq";
import FaqSection from "../Pages/FaqSection/FaqSection";
import Home from "../Pages/Home/Home/Home";
import WhyChooseUs from "../Pages/Home/Home/WhyChooseUs";
import LogIn from "../Pages/LogIn/LogIn/LogIn";
import Register from "../Pages/LogIn/Register/Register";
import StudentProfile from "../Pages/StudentProfile/StudentProfile";
import AllTeachers from "../Pages/Dashboard/Teachers/AllTeachers/AllTeachers";
import AddTeachers from "../Pages/Dashboard/Teachers/AddTeachers/AddTeachers";
import AllParents from "../Pages/Dashboard/Parents/AllParents/AllParents";
import AddParents from "../Pages/Dashboard/Parents/AddParents/AddParents";
import AddBook from "../Pages/Dashboard/Books/AddBook/AddBook";
import AllBooks from "../Pages/Dashboard/Books/AllBooks/AllBooks";
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
            },
            {
                path: "/coming-soon",
                element: <ComingSoon></ComingSoon>
            },
        ]
    },
    {
        path: "/admin",
        element: <AdminDashboard></AdminDashboard>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            // {
            //     path: "/admin",
            //     element: <AdminDashboard></AdminDashboard>
            // },
            {
                path: "/admin/add-students", 
                element: <AddStudent></AddStudent>
            },
            {
                path: "/admin/all-students", 
                element: <AllStudents></AllStudents>
            },
            {
                path: "/admin/add-teachers", 
                element: <AddTeachers></AddTeachers>
            },
            {
                path: "/admin/all-teachers", 
                element: <AllTeachers></AllTeachers>
            },
            {
                path: "/admin/add-parents", 
                element: <AddParents></AddParents>
            },
            {
                path: "/admin/all-parents", 
                element: <AllParents></AllParents>
            },
            {
                path: "/admin/add-books", 
                element: <AddBook></AddBook>
            },
            {
                path: "/admin/all-books", 
                element: <AllBooks></AllBooks>
            },
           

        ]
    }
    
])
