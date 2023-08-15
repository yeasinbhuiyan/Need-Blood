import { createBrowserRouter } from "react-router-dom";
import Home from "../Page/Home/Home";
import About from "../Page/About/About";
import Contact from "../Page/Contact/Contact";
import MainLayout from "../Layout/MainLayout/MainLayout";



const router = createBrowserRouter([
    {
        path : '/',
        element : <MainLayout/>,
        children : [
            {
                path: '/',
                element : <Home/>,
            },
            {
                path: '/about',
                element: <About/>
            },
            {
                path :'/contact',
                element : <Contact/>
            }
        ]
    }
])


export default router;