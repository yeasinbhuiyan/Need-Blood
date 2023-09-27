import { SiGoogleclassroom } from 'react-icons/si'
import { RiUserSettingsFill } from 'react-icons/ri'

import { NavLink } from 'react-router-dom';

const DashboardLink = () => {
    return (

     <div>
        <NavLink
            to='profile'
            className={({ isActive }) =>
                `flex items-center px-4 py-2 mt-2  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                }`
            }
        >
            <RiUserSettingsFill className='w-5 h-5' />

            <span className='mx-4 font-medium'>Profile</span>
        </NavLink>
        <NavLink
            to='want-to-be-donor'
            className={({ isActive }) =>
                `flex items-center px-4 py-2 mt-2  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                }`
            }
        >
            <SiGoogleclassroom className='w-5 h-5' />

            <span className='mx-4 font-medium'>Want To Be Donor</span>
        </NavLink>
        <NavLink
            to='donated-blood'
            className={({ isActive }) =>
                `flex items-center px-4 py-2 mt-2  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                }`
            }
        >
            <SiGoogleclassroom className='w-5 h-5' />

            <span className='mx-4 font-medium'>Donated Blood</span>
        </NavLink>
    </div>

   
    );
};

export default DashboardLink;