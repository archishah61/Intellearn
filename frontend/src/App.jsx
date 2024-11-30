import * as React from 'react';
import Courses from './components/Courses.jsx';
import Home from './components/Home';
import Profile from './components/Profile';
import About from './components/About';
import Contact from './components/Contact';
import Signup from './components/Signup';
import Layout from './components/Layout.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginForm from './components/Login.jsx';
import LogoutForm from './components/LogoutForm.jsx';
import HTMLCourse from './components/courses/HTMLCourse.jsx';
import MyCourses from './components/MyCourses.jsx';
import Assignment from './components/Assignment.jsx';
import CourseDetails from './components/courses/CourseDetails.jsx';


const router = createBrowserRouter([
    {
        path: '',
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />
            },{
                path: "/courses",
                element: <Courses />
            }
            , {
                path: "/profile",
                element: <Profile />
            }
            , {
                path: "/about",
                element: <About />
            }
            , {
                path: "/contact",
                element: <Contact />
            }
            , {
                path: "/signup",
                element: <Signup />
            }
            , {
                path: "/login",
                element: <LoginForm />
            },{
                path: "/logout",
                element: <LogoutForm />
            },{
                path:'/Course/:courseId',
                element:<HTMLCourse />
            },{
                path:'/Mycourses',
                element:<MyCourses/>
            },{
                path:'/Assignment',
                element:<Assignment/>
            },{
                path:'/Mycourses/:courseId',
                element: <CourseDetails/>
            }
            
            
        ]
    }
])


function App() {
    return (
        <RouterProvider router={router} />
    );
}

export default App;
