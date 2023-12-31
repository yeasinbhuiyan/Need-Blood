import { createBrowserRouter } from "react-router-dom";
import Home from "../Page/Home/Home";
import About from "../Page/About/About";
import Contact from "../Page/Contact/Contact";
import MainLayout from "../Layout/MainLayout/MainLayout";
import AllDonors from "../Page/AllDonors/AllDonors";
import DonorDetails from "../Page/DonorDetails/DonorDetails";
import BecomeDoror from "../Page/Home/DonationConfusion/BecomeDonor/BecomeDoror";
import GiveBlood from "../Page/Home/DonationConfusion/GiveBlood/GiveBlood";
import DonationHelps from "../Page/Home/DonationConfusion/DonationHelps/DonationHelps";
import MyDonation from "../Components/Dashboard/Donor/MyDonation/MyDonation";
import DashboradLayout from "../Layout/MainLayout/DashboradLayout";
import WantDonor from "../Components/Dashboard/Donor/WantDonor/WantDonor";
import Profile from "../Components/Dashboard/Donor/Profile/Profile";
import CreateProfile from "../Components/Dashboard/Donor/CreateProfile/CreateProfile";
import DonatedBlood from "../Components/Dashboard/Donor/DonatedBlood/DonatedBlood";
import Register from "../Page/Register/Register";
import Login from "../Page/Login/Login";
import MemberPrivateRoute from "./PrivateRoute/memberPrivateRoute";



const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element: <Contact />
            }, {
                path: '/allDonors',
                element: <AllDonors />
            },
            {
                path: '/donorDetails/:id',
                element: <DonorDetails />
            },
            {
                path: '/becomeDonor',
                element: <BecomeDoror />
            },
            {
                path: '/giveBlood',
                element: <GiveBlood />
            },
            {
                path: '/donationHelps',
                element: <DonationHelps />

            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/login',
                element: <Login />
            }

        ]
    },
    {
        path: 'dashboard',
        element: <MemberPrivateRoute><DashboradLayout></DashboradLayout></MemberPrivateRoute>,
        children: [
            {
                path: 'my-donation',
                element: <MyDonation></MyDonation>
            }, {
                path: 'want-to-be-donor',
                element: <WantDonor></WantDonor>
            }, {
                path: 'profile',
                element: <Profile></Profile>
            },
            {
                path: 'create-profile',
                element: <CreateProfile></CreateProfile>
            },
            {
                path: 'donated-blood',
                element: <DonatedBlood></DonatedBlood>
            }
        ]
    }
])


export default router;