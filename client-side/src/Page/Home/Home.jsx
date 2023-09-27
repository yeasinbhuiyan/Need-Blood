import Donors from "../../Components/Donors/Donors";
import MainSlider from "../../Components/MainSlider/MainSlider";
import BasicRecuirments from "./BasicRecuirments/BasicRecuirments";
import BloodGroup from "./BloodGroup/BloodGroup";
import DonationConfusion from "./DonationConfusion/DonationConfusion";
import FactAbout from "./FactAbout/FactAbout";

const Home = () => {

    return (
        <div>
            <MainSlider />
            <DonationConfusion />
            <Donors />
            <BasicRecuirments />
            <FactAbout />

            <BloodGroup/>
        </div>
    );
};

export default Home;