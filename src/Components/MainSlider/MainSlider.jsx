
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './MainSlider.css'
import { Link } from "react-router-dom";

const MainSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1500,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 500,
    };
    return (
        <div className="slider w-full mx-auto overflow-hidden">
            <Slider {...settings}>
                <div>
                    <Link>
                        <img src="https://api.anayase.com/slider_images/1689479328597_Golden%20Rose%20Cover.webp?auto=compress&q=50" alt="" />
                    </Link>

                </div>
                <div>
                    <Link>
                        <img src="https://api.anayase.com/slider_images/1689479257308_Golden%20Rose%20Perfume.webp?auto=compress&q=100" alt="" />
                    </Link>
                </div>
                <div>
                    <Link>
                        <img src="https://api.anayase.com/slider_images/1689478938694_Golden%20Rose%20Foundations.webp?auto=compress&q=100" alt="" />
                    </Link>
                </div>
                <div>
                    <Link>
                        <img src="https://api.anayase.com/slider_images/1689478761770_Golden%20Rose.webp?auto=compress&q=100" alt="" />
                    </Link>
                </div>
                <div>
                    <Link>
                        <img src="https://api.anayase.com/slider_images/1689479257308_Golden%20Rose%20Perfume.webp?auto=compress&q=5" alt="" />
                    </Link>

                </div>
            </Slider >
        </div >
    );
};

export default MainSlider;