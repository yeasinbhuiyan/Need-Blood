import Donors from "../../Components/Donors/Donors";
import MainSlider from "../../Components/MainSlider/MainSlider";
import BasicRecuirments from "./BasicRecuirments/BasicRecuirments";
import DonationConfusion from "./DonationConfusion/DonationConfusion";

const Home = () => {

    return (
        <div>
            <MainSlider />
            <DonationConfusion />
            <Donors />
            <BasicRecuirments />
        </div>
    );
};

export default Home;