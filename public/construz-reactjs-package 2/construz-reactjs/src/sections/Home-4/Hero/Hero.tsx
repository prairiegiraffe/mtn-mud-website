 
import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
// import CircleText from "../../Common/CircleText";
import { Link } from "react-router-dom";
import CircleText from "../../Common/CircleText/CircleText";
 
const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    // const sliderRef = useRef(null);
      const sliderRef = useRef<any>(null);
    

    const settings = {
        dots: false,
        fade: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false,
        arrows: false,
        speed: 1500,
        autoplay: true,
        autoplaySpeed: 5000,
        afterChange: (current : number) => setCurrentSlide(current), 
        
    };

    useEffect(() => {
        if (sliderRef.current) {
            sliderRef.current.slickGoTo(currentSlide);
        }
    }, [currentSlide]);

    return (
        <div>
            <div className="hero-wrapper home-five-hero hero-4" id="hero">
                 
                <Slider
                    {...settings}
                    ref={sliderRef}
                    afterChange={(current) => setCurrentSlide(current)}
                    className="hero-slider4 global-carousel"
                >
                    <div id="slide1">
                        <div
                            className={`hero-slide background-image ${currentSlide == 0 ? 'slick-current slick-active' : ''}`} data-opacity="4" data-overlay="title"
                            style={{ backgroundImage: "url('/assets/img/hero/hero_bg_4_1.png')" }}
                        >
                            <div className="container">
                                <div className="hero-style4">
                                    <div className="hero-shadow-text">Architecture</div>
                                    <div className="jump-reverse hero-shadow-text-wrap">
                                        <div className="hero-shadow-text2 hero-four-slider-text-inline-flex">
                                            Contact Info{" "}
                                            <img src="/assets/img/icon/long-arrow-right2.svg" alt="img" />{" "}
                                            Scroll Down
                                        </div>
                                    </div>
                                    <div className="row align-items-center">
                                        <div className="col-xxl-7 col-xl-8">
                                            <div
                                                className={`hero-subtitle slider-custom-anim-left hero-four-home-four-flex ${currentSlide == 0 ? 'slider-animated' : ''}`}
                                                style={{ animationDelay: '0.1s' }}
                                            >
                                                Our Vision{" "}
                                                <img src="/assets/img/icon/long-arrow-right2.svg" alt="img" />
                                            </div>
                                            <h1
                                                className={`hero-title slider-custom-anim-left ${currentSlide == 0 ? 'slider-animated' : ''}`}
                                                style={{ animationDelay: '0.1s' }}
                                            >
                                                Comprehensive
                                            </h1>
                                            <h1
                                                className={`hero-title slider-custom-anim-left ${currentSlide == 0 ? 'slider-animated' : ''}`}
                                                style={{ animationDelay: '0.2s' }}
                                            >
                                                architectural solutions
                                            </h1>
                                            <p
                                                className={`hero-text slider-custom-anim-left ${currentSlide == 0 ? 'slider-animated' : ''}`} style={{ animationDelay: '0.2s' }}
                                            >
                                                We craft unique digital experiences. With more than 7
                                                years of expertise we design and code clean websites.
                                            </p>
                                        </div>
                                        <div className="col-xxl-5 col-xl-4 text-xl-center">
                                            <div
                                                className={`hero-tag slideinup ${currentSlide == 0 ? 'slider-animated' : ''}`}
                                                style={{ animationDelay: '0.4s' }}
                                            >

                                                <div className="about-two__video-box">
                                                    <div className="round-text">
                                                        <CircleText />
                                                    </div>
                                                    <Link to="/contact" className="hero-tag_icon">
                                                        <i className="ri-arrow-right-up-line"></i>
                                                    </Link>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="slide2">
                        <div
                            className={`hero-slide background-image ${currentSlide == 1 ? 'slick-current slick-active' : ''}`} data-opacity="4" data-overlay="title"
                            style={{ backgroundImage: "url('/assets/img/hero/hero_bg_4_2.png')" }}

                        >
                            <div className="container">
                                <div className="hero-style4">
                                    <div className="hero-shadow-text">Architecture</div>
                                    <div className="jump-reverse hero-shadow-text-wrap">
                                        <div className="hero-shadow-text2">
                                            Contact Info{" "}
                                            <img src="/assets/img/icon/long-arrow-right2.svg" alt="img" />{" "}
                                            Scroll Down
                                        </div>
                                    </div>
                                    <div className="row align-items-center">
                                        <div className="col-xxl-7 col-xl-8">
                                            <div
                                                className={`hero-subtitle slider-custom-anim-left hero-four-home-four-flex ${currentSlide == 1 ? 'slider-animated' : ''}`}
                                                style={{ animationDelay: '0.1s' }}
                                            >
                                                Our Vision{" "}
                                                <img src="/assets/img/icon/long-arrow-right2.svg" alt="img" />
                                            </div>
                                            <h1
                                                className={`hero-title slider-custom-anim-left ${currentSlide == 1 ? 'slider-animated' : ''}`}
                                                style={{ animationDelay: '0.1s' }}
                                            >
                                                Comprehensive
                                            </h1>
                                            <h1
                                                className={`hero-title slider-custom-anim-left ${currentSlide == 1 ? 'slider-animated' : ''}`}
                                                style={{ animationDelay: '0.2s' }}
                                            >
                                                architectural solutions
                                            </h1>
                                            <p
                                                className={`hero-text slider-custom-anim-left ${currentSlide == 1 ? 'slider-animated' : ''}`} style={{ animationDelay: '0.2s' }}
                                            >
                                                We craft unique digital experiences. With more than 7
                                                years of expertise we design and code clean websites.
                                            </p>
                                        </div>
                                        <div className="col-xxl-5 col-xl-4 text-xl-center">
                                            <div
                                                className={`hero-tag slideinup ${currentSlide == 1 ? 'slider-animated' : ''}`}
                                                style={{ animationDelay: '0.4s' }}
                                            >

                                                <div className="about-two__video-box">
                                                    <div className="round-text">
                                                        <CircleText />
                                                    </div>
                                                    <Link to="/contact" className="hero-tag_icon">
                                                        <i className="ri-arrow-right-up-line"></i>
                                                    </Link>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="slide3">
                        <div
                            className={`hero-slide background-image ${currentSlide == 2 ? 'slick-current slick-active' : ''}`} data-opacity="4" data-overlay="title"
                            style={{ backgroundImage: "url('/assets/img/hero/hero_bg_4_3.png')" }}

                        >
                            <div className="container">
                                <div className="hero-style4">
                                    <div className="hero-shadow-text">Architecture</div>
                                    <div className="jump-reverse hero-shadow-text-wrap">
                                        <div className="hero-shadow-text2">
                                            Contact Info{" "}
                                            <img src="/assets/img/icon/long-arrow-right2.svg" alt="img" />{" "}
                                            Scroll Down
                                        </div>
                                    </div>
                                    <div className="row align-items-center">
                                        <div className="col-xxl-7 col-xl-8">
                                            <div
                                                className={`hero-subtitle slider-custom-anim-left hero-four-home-four-flex ${currentSlide == 2 ? 'slider-animated' : ''}`}
                                                style={{ animationDelay: '0.1s' }}
                                            >
                                                Our Vision{" "}
                                                <img src="/assets/img/icon/long-arrow-right2.svg" alt="img" />
                                            </div>
                                            <h1 className={`hero-title slider-custom-anim-left ${currentSlide == 2 ? 'slider-animated' : ''}`}
                                                style={{ animationDelay: '0.1s' }}
                                            >
                                                Comprehensive
                                            </h1>
                                            <h1
                                                className={`hero-title slider-custom-anim-left ${currentSlide == 2 ? 'slider-animated' : ''}`}
                                                style={{ animationDelay: '0.2s' }}
                                            >
                                                architectural solutions
                                            </h1>
                                            <p
                                                className={`hero-text slider-custom-anim-left ${currentSlide == 2 ? 'slider-animated' : ''}`} style={{ animationDelay: '0.2s' }}
                                            >
                                                We craft unique digital experiences. With more than 7
                                                years of expertise we design and code clean websites.
                                            </p>
                                        </div>
                                        <div className="col-xxl-5 col-xl-4 text-xl-center">
                                            <div
                                                className={`hero-tag slideinup ${currentSlide == 2 ? 'slider-animated' : ''}`}
                                                style={{ animationDelay: '0.4s' }}
                                            >

                                                <div className="about-two__video-box">
                                                    <div className="round-text">
                                                        <CircleText />
                                                    </div>
                                                    <Link to="/contact" className="hero-tag_icon">
                                                        <i className="ri-arrow-right-up-line"></i>
                                                    </Link>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>

                {/* button slider */}
                <div className="container">
                    <div className="hero-4-number-tab" data-asnavfor=".hero-slider4">
                        <button
                            className={`tab-btn ${currentSlide === 0 ? 'active' : ''}`}
                            onClick={() => sliderRef.current.slickGoTo(0)}
                        >
                            01
                        </button>
                        <button
                            className={`tab-btn ${currentSlide === 1 ? 'active' : ''}`}
                            onClick={() => sliderRef.current.slickGoTo(1)}
                        >
                            02
                        </button>
                        <button
                            className={`tab-btn ${currentSlide === 2 ? 'active' : ''}`}
                            onClick={() => sliderRef.current.slickGoTo(2)}
                        >
                            03
                        </button>
                    </div>
                </div>
            </div>

            <div className="hero-contact-area position-relative z-index-common">
                <div className="hero-contact-bg-img bg-title">
                    <img src="/assets/img/hero/hero_4_contact_bg.png" alt="img" />
                </div>
                <div className="container">
                    <div className="hero-contact-wrap">
                        <div className="hero-award-wrap" style={{ backgroundImage: "url('/assets/img/hero/hero_4_award_bg.png')" }}>
                            <div className="hero-award-icon">
                                <img src="/assets/img/hero/hero_4_award_icon.svg" alt="img" />
                            </div>
                            <div className="hero-award-logo">
                                <img src="/assets/img/logo-white2.svg" alt="img" />
                            </div>
                            <h4 className="hero-award-title">We're Award Winning Company</h4>
                        </div>
                        <div className="hero-contact-info-wrap">
                            <div className="hero-contact-icon">
                                <img src="/assets/img/hero/hero4-contact-info-icon1.svg" alt="img" />
                            </div>
                            <h4 className="hero-contact-info-title">Working Hours</h4>
                            <p className="hero-contact-info-text">Mon - Sat 07:00 - 22:00</p>
                        </div>
                        <div className="hero-contact-info-wrap">
                            <div className="hero-contact-icon">
                                <img src="/assets/img/hero/hero4-contact-info-icon2.svg" alt="img" />
                            </div>
                            <h4 className="hero-contact-info-title">Call Any Time</h4>
                            <p className="hero-contact-info-text">+971 551 579 261</p>
                        </div>
                        <div className="hero-contact-info-wrap">
                            <div className="hero-contact-icon">
                                <img src="/assets/img/hero/hero4-contact-info-icon3.svg" alt="img" />
                            </div>
                            <h4 className="hero-contact-info-title">Say Something</h4>
                            <p className="hero-contact-info-text">Construz.info@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
