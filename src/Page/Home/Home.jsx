import Donors from "../../Components/Donors/Donors";
import MainSlider from "../../Components/MainSlider/MainSlider";
import DonationConfusion from "./DonationConfusion/DonationConfusion";

const Home = () => {

    return (
        <div>
            {/* <h1 className="text-3xl text-blue-800 font-semibold text-center"> this is home page </h1> */}
            <MainSlider />
<DonationConfusion/>
            <Donors />

        </div>
    );
};

export default Home;