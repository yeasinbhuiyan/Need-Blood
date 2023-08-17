import Donors from "../../Components/Donors/Donors";
import MainSlider from "../../Components/MainSlider/MainSlider";

const Home = () => {

    return (
        <div>
            {/* <h1 className="text-3xl text-blue-800 font-semibold text-center"> this is home page </h1> */}
            <MainSlider />

            <Donors />

        </div>
    );
};

export default Home;