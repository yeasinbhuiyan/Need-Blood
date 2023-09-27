// import SideBar from '../../Components/Dashboard/SideBar/SideBar';
import { Outlet } from 'react-router-dom';
import SideBar from '../../Components/Dashboard/SideBar/SideBar';

const DashboradLayout = () => {
    return (
        <div className='relative min-h-screen md:flex'>
       
       <SideBar></SideBar>
       <div className='flex-1  md:ml-64'>
           <div className='p-5'>
               <Outlet />
           </div>
       </div>
   </div>
    );
};

export default DashboradLayout;