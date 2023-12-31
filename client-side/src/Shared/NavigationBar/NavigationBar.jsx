import { Link, NavLink } from "react-router-dom";

const NavigationBar = () => {
    const user = 'user'

    const handleLogOut = () => {

    }

    return (
        <div className=" pb-20 md:pb-16 ">
            <div className="navbar z-20 max-w-7xl bg-white shadow-md text-gray-500  fixed">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <NavLink to={'/'} className={({ isActive }) => isActive ? 'text-red' : ''}>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to={'allDonors'} className={({ isActive }) => isActive ? 'text-red font-semibold' : ''}>All Donors</NavLink>
                            </li>
                            <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <Link to={'/'}>    <span className="text-pink-700 text-3xl font-semibold">Need-Blood</span><span className="text-white text-xl">.com</span></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu  menu-horizontal px-1">
                        <li>
                            <NavLink to={'/'} className={({ isActive }) => isActive ? 'text-red font-semibold' : ''}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/allDonors'} className={({ isActive }) => isActive ? 'text-red font-semibold' : ''}>All Donors</NavLink>
                        </li>
                        <li tabIndex={0}>
                            <details>
                                <summary>Parent</summary>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </details>
                        </li>
                        <li><a>Item 3</a></li>
                        <li>
                            <NavLink to={'/dashboard/my-donation'} className={({ isActive }) => isActive ? 'text-red font-semibold' : ''}>Dashboard</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                      user ? <Link className="cursor-pointer px-5 text-white py-2 bg-red-700" to={'/login'}><button>Login</button></Link>
                      :
                      <button onClick={handleLogOut}>Logout</button>
                    }
                </div>
            </div>
        </div>
    );
};

export default NavigationBar;