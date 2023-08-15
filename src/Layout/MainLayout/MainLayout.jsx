import NavigationBar from '../../Shared/NavigationBar/NavigationBar';
import Footer from '../../Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';


const MainLayout = () => {
    return (
        <div>
            <NavigationBar/>

            <Outlet/>

            <Footer/>
        </div>
    );
};

export default MainLayout;