import Donors from "../../Components/Donors/Donors";
import MainSlider from "../../Components/MainSlider/MainSlider";
import DonationConfusion from "./DonationConfusion/DonationConfusion";

const Home = () => {

    return (
        <div>
            <MainSlider />
            <DonationConfusion />
            <Donors />
        </div>
    );
};

export default Home;