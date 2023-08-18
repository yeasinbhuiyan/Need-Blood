import { createBrowserRouter } from "react-router-dom";
import Home from "../Page/Home/Home";
import About from "../Page/About/About";
import Contact from "../Page/Contact/Contact";
import MainLayout from "../Layout/MainLayout/MainLayout";
import AllDonors from "../Page/AllDonors/AllDonors";
import DonorDetails from "../Page/DonorDetails/DonorDetails";



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
            },{
                path: '/allDonors',
                element : <AllDonors/>
            },
            {
                path : '/donorDetails/:id',
                element : <DonorDetails/>
            }
        ]
    }
])


export default router;