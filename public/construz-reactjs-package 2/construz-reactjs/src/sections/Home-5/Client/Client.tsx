 
import { Link } from "react-router-dom";
import Slider from "react-slick";

const Client = () => {
    const settings = {
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1500,
        autoplaySpeed: 5000,
        arrows: false,
        centerMode: true,
        dots: false,
        responsive: [
            { breakpoint: 1200, settings: { slidesToShow: 4 } },
            { breakpoint: 992, settings: { slidesToShow: 3 } },
            { breakpoint: 768, settings: { slidesToShow: 2 }, centerMode: true, },
            { breakpoint: 576, settings: { slidesToShow: 1 }, centerMode: true, },
        ],
    };

    return (
        <div className="client-area-1 home-two-five-client text-center client-space-extra bg-title overflow-hidden">
            <div className="container">
                 
                <Slider
                    {...settings}
                    className="row global-carousel client-slider1"
                    data-slide-show="5"
                    data-lg-slide-show="4"
                    data-md-slide-show="3"
                    data-sm-slide-show="2"
                >
                    <div className="col-lg-auto">
                        <div className="client-logo">
                            <Link to="/home-1">
                                <img src="/assets/img/client/client-1-1.svg" alt="img" />
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-auto">
                        <div className="client-logo">
                            <Link to="/home-1">
                                <img src="/assets/img/client/client-1-2.svg" alt="img" />
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-auto">
                        <div className="client-logo">
                            <Link to="/home-1">
                                <img src="/assets/img/client/client-1-3.svg" alt="img" />
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-auto">
                        <div className="client-logo">
                            <Link to="/home-1">
                                <img src="/assets/img/client/client-1-4.svg" alt="img" />
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-auto">
                        <div className="client-logo">
                            <Link to="/home-1">
                                <img src="/assets/img/client/client-1-5.svg" alt="img" />
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-auto">
                        <div className="client-logo">
                            <Link to="/home-1">
                                <img src="/assets/img/client/client-1-1.svg" alt="img" />
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-auto">
                        <div className="client-logo">
                            <Link to="/home-1">
                                <img src="/assets/img/client/client-1-2.svg" alt="img" />
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-auto">
                        <div className="client-logo">
                            <Link to="/home-1">
                                <img src="/assets/img/client/client-1-3.svg" alt="img" />
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-auto">
                        <div className="client-logo">
                            <Link to="/home-1">
                                <img src="/assets/img/client/client-1-4.svg" alt="img" />
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-auto">
                        <div className="client-logo">
                            <Link to="/home-1">
                                <img src="/assets/img/client/client-1-5.svg" alt="img" />
                            </Link>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default Client;
