

import { useRef } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import CounterTwo from "../../Common/CounterTwo/CounterTwo";



const Portfolio = () => {
    const sliderRef = useRef(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 1500,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };


    const handlePrev = () => {
        (sliderRef.current as any).slickPrev();
    };

    const handleNext = () => {
        (sliderRef.current as any).slickNext();
    };

    return (
        <div id="project-sec"
            className="bg-shape background-image"
            style={{ backgroundImage: "url('/assets/img/bg/project-bg4-1.png')" }}
        >
            <div className="portfolio-area-4 space-top">
                <div className="container">
                    {/* top content */}
                    <div className="row justify-content-between align-items-center">
                        <div className="col-lg-7 portfolio-extra-padding">
                            <div className="title-area content-text-extra-style">
                                <span className="sub-title text-theme">
                                    Recent Projects <i className="ri-arrow-right-down-line"></i>
                                </span>
                                <h2 className="sec-title">
                                    Architecture heavy project solutions
                                </h2>
                            </div>
                        </div>
                        <div className="col-lg-auto white-space-hidden">
                            <div className="sec-btn">
                                <div className="icon-box">
                                    <button
                                        onClick={handlePrev}
                                        className="slick-arrow default style2"
                                    >
                                        <i className="ri-arrow-left-line"></i>
                                    </button>
                                    <button
                                        onClick={handleNext}
                                        className="slick-arrow default style2"
                                    >
                                        <i className="ri-arrow-right-line"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Slider */}
                    <div className="extra-space-top">
                         
                        <Slider
                            {...settings}
                            ref={sliderRef}
                            className="row gy-30 gx-30 global-carousel portfolio-slider4"
                        >
                            {/* per slider here */}
                            <div className="col-lg-4">
                                <div className="portfolio-card style4">
                                    <div className="portfolio-card-thumb">
                                        <img src="/assets/img/project/project4_1.png" alt="img" />
                                        <span className="portfolio-card-number">N.01</span>
                                    </div>
                                    <div className="portfolio-card-details">
                                        <span className="portfolio-card-subtitle">
                                            Architecture
                                        </span>
                                        <h4 className="portfolio-card-title">
                                            <Link to="/project-details">
                                                News Office Building
                                            </Link>
                                        </h4>
                                    </div>
                                    <Link to="/project-details" className="icon-btn">
                                        <i className="ri-arrow-right-line"></i>
                                    </Link>
                                </div>
                            </div>

                            {/* other slider items */}
                            <div className="col-lg-4">
                                <div className="portfolio-card style4">
                                    <div className="portfolio-card-thumb">
                                        <img src="/assets/img/project/project4_2.png" alt="img" />
                                        <span className="portfolio-card-number">N.02</span>
                                    </div>
                                    <div className="portfolio-card-details">
                                        <span className="portfolio-card-subtitle">Building</span>
                                        <h4 className="portfolio-card-title">
                                            <Link to="/project-details">
                                                General Construction
                                            </Link>
                                        </h4>
                                    </div>
                                    <Link to="/project-details" className="icon-btn">
                                        <i className="ri-arrow-right-line"></i>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="portfolio-card style4">
                                    <div className="portfolio-card-thumb">
                                        <img src="/assets/img/project/project4_3.png" alt="img" />
                                        <span className="portfolio-card-number">N.03</span>
                                    </div>
                                    <div className="portfolio-card-details">
                                        <span className="portfolio-card-subtitle">Industry</span>
                                        <h4 className="portfolio-card-title">
                                            <Link to="/project-details">
                                                Renovation & Remodeling
                                            </Link>
                                        </h4>
                                    </div>
                                    <Link to="/project-details" className="icon-btn">
                                        <i className="ri-arrow-right-line"></i>
                                    </Link>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>

            <CounterTwo />

        </div>
    );
};

export default Portfolio;
