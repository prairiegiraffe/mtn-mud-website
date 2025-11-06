 


import { useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick'; 


const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const settings = {
        dots: true,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1500,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        infinite: true,
        afterChange: (current : number) => setCurrentSlide(current),
    };

    return (
        <div className="hero-wrapper home-five-hero hero-5" id="hero">
            <div className="hero_shape_5_1">
                <img src="/assets/img/hero/hero_shape_5_1.png" alt="img" />
            </div>
             
            <Slider className="hero-slider5 global-carousel" {...settings}>
                <div className='draggable'>
                    <div className="hero-slide background-image" style={{ backgroundImage: "url('/assets/img/hero/hero_bg_5_1.png')" }}>
                        <div className="container">
                            <div className="hero-style5">
                                <div className="row align-items-center">
                                    <div className="col-xl-8">
                                        <div className={`hero-rating-wrap slider-custom-anim-left ${currentSlide == 0 ? 'slider-animated' : ''}`} style={{ animationDelay: '0.1s' }}>
                                            <div className="single-rating-wrap">
                                                <div className="rating">
                                                    <i className="ri-star-fill"></i>
                                                    <i className="ri-star-fill"></i>
                                                    <i className="ri-star-fill"></i>
                                                    <i className="ri-star-fill"></i>
                                                    <i className="ri-star-fill"></i>
                                                </div>
                                                <div className="rating-text home-five-hero-five-flex">
                                                    <img src="/assets/img/icon/google-logo.svg" alt="img" /> 4.9 Rating
                                                </div>
                                            </div>
                                            <div className="single-rating-wrap">
                                                <div className="rating">
                                                    <i className="ri-star-fill"></i>
                                                    <i className="ri-star-fill"></i>
                                                    <i className="ri-star-fill"></i>
                                                    <i className="ri-star-fill"></i>
                                                    <i className="ri-star-fill"></i>
                                                </div>
                                                <div className="rating-text home-five-hero-five-flex">
                                                    <img src="/assets/img/icon/facebook-logo.svg" alt="img" /> 5.0 Rating
                                                </div>
                                            </div>
                                            <div className="single-rating-wrap">
                                                <div className="rating">
                                                    <i className="ri-star-fill"></i>
                                                    <i className="ri-star-fill"></i>
                                                    <i className="ri-star-fill"></i>
                                                    <i className="ri-star-fill"></i>
                                                    <i className="ri-star-fill"></i>
                                                </div>
                                                <div className="rating-text home-five-hero-five-flex">
                                                    <img src="/assets/img/icon/construz-logo.svg" alt="img" /> A+ Rating
                                                </div>
                                            </div>
                                        </div>
                                        <h1 className={`hero-title slider-custom-anim-left ${currentSlide == 0 ? 'slider-animated' : ''}`} style={{ animationDelay: '0.1s' }}>We Are Unsurpassed Roofing</h1>
                                        <h1 className={`hero-title slider-custom-anim-left ${currentSlide == 0 ? 'slider-animated' : ''}`} style={{ animationDelay: '0.2s' }}>Services Agency</h1>
                                        <p className={`hero-text slider-custom-anim-left ${currentSlide == 0 ? 'slider-animated' : ''}`} style={{ animationDelay: '0.2s' }}>We craft unique digital experiences. With more than 7 years of expertise we design and code clean websites.</p>
                                        <div className={`btn-group slider-custom-anim-left ${currentSlide == 0 ? 'slider-animated' : ''}`} style={{ animationDelay: '0.4s' }}>

                                            <Link to="/about" className="btn style2">REQUEST A FREE ESTIMATE <i className="ri-arrow-right-up-line"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="hero-slide background-image" style={{ backgroundImage: "url('/assets/img/hero/hero_bg_5_2.png')" }}>
                        <div className="container">
                            <div className="hero-style5">
                                <div className="row align-items-center">
                                    <div className="col-xl-8">
                                        <div className={`hero-rating-wrap slider-custom-anim-left ${currentSlide == 1 ? 'slider-animated' : ''}`} style={{ animationDelay: '0.1s' }}>
                                            <div className="single-rating-wrap">
                                                <div className="rating">
                                                    <i className="ri-star-fill"></i>
                                                    <i className="ri-star-fill"></i>
                                                    <i className="ri-star-fill"></i>
                                                    <i className="ri-star-fill"></i>
                                                    <i className="ri-star-fill"></i>
                                                </div>
                                                <div className="rating-text home-five-hero-five-flex">
                                                    <img src="/assets/img/icon/google-logo.svg" alt="img" /> 4.9 Rating
                                                </div>
                                            </div>
                                            <div className="single-rating-wrap">
                                                <div className="rating">
                                                    <i className="ri-star-fill"></i>
                                                    <i className="ri-star-fill"></i>
                                                    <i className="ri-star-fill"></i>
                                                    <i className="ri-star-fill"></i>
                                                    <i className="ri-star-fill"></i>
                                                </div>
                                                <div className="rating-text home-five-hero-five-flex">
                                                    <img src="/assets/img/icon/facebook-logo.svg" alt="img" /> 5.0 Rating
                                                </div>
                                            </div>
                                            <div className="single-rating-wrap">
                                                <div className="rating">
                                                    <i className="ri-star-fill"></i>
                                                    <i className="ri-star-fill"></i>
                                                    <i className="ri-star-fill"></i>
                                                    <i className="ri-star-fill"></i>
                                                    <i className="ri-star-fill"></i>
                                                </div>
                                                <div className="rating-text home-five-hero-five-flex">
                                                    <img src="/assets/img/icon/construz-logo.svg" alt="img" /> A+ Rating
                                                </div>
                                            </div>
                                        </div>
                                        <h1 className={`hero-title slider-custom-anim-left ${currentSlide == 1 ? 'slider-animated' : ''}`} style={{ animationDelay: '0.1s' }}>We Are Unsurpassed Roofing</h1>
                                        <h1 className={`hero-title slider-custom-anim-left ${currentSlide == 1 ? 'slider-animated' : ''}`} style={{ animationDelay: '0.2s' }}>Services Agency</h1>
                                        <p className={`hero-text slider-custom-anim-left ${currentSlide == 1 ? 'slider-animated' : ''}`} style={{ animationDelay: '0.2s' }}>We craft unique digital experiences. With more than 7 years of expertise we design and code clean websites.</p>
                                        <div className={`btn-group slider-custom-anim-left ${currentSlide == 1 ? 'slider-animated' : ''}`} style={{ animationDelay: '0.4s' }}>

                                            <Link to="/about" className="btn style2">REQUEST A FREE ESTIMATE <i className="ri-arrow-right-up-line"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="hero-slide background-image" style={{ backgroundImage: "url('/assets/img/hero/hero_bg_5_3.png')" }}>
                        <div className="container">
                            <div className="hero-style5">
                                <div className="row align-items-center">
                                    <div className="col-xl-8">
                                        <div className={`hero-rating-wrap slider-custom-anim-left ${currentSlide == 2 ? 'slider-animated' : ''}`} style={{ animationDelay: '0.1s' }}>
                                            <div className="single-rating-wrap">
                                                <div className="rating">
                                                    <i className="ri-star-fill"></i>
                                                    <i className="ri-star-fill"></i>
                                                    <i className="ri-star-fill"></i>
                                                    <i className="ri-star-fill"></i>
                                                    <i className="ri-star-fill"></i>
                                                </div>
                                                <div className="rating-text home-five-hero-five-flex">
                                                    <img src="/assets/img/icon/google-logo.svg" alt="img" /> 4.9 Rating
                                                </div>
                                            </div>
                                            <div className="single-rating-wrap">
                                                <div className="rating">
                                                    <i className="ri-star-fill"></i>
                                                    <i className="ri-star-fill"></i>
                                                    <i className="ri-star-fill"></i>
                                                    <i className="ri-star-fill"></i>
                                                    <i className="ri-star-fill"></i>
                                                </div>
                                                <div className="rating-text home-five-hero-five-flex">
                                                    <img src="/assets/img/icon/facebook-logo.svg" alt="img" /> 5.0 Rating
                                                </div>
                                            </div>
                                            <div className="single-rating-wrap">
                                                <div className="rating">
                                                    <i className="ri-star-fill"></i>
                                                    <i className="ri-star-fill"></i>
                                                    <i className="ri-star-fill"></i>
                                                    <i className="ri-star-fill"></i>
                                                    <i className="ri-star-fill"></i>
                                                </div>
                                                <div className="rating-text home-five-hero-five-flex">
                                                    <img src="/assets/img/icon/construz-logo.svg" alt="img" /> A+ Rating
                                                </div>
                                            </div>
                                        </div>
                                        <h1 className={`hero-title slider-custom-anim-left ${currentSlide == 2 ? 'slider-animated' : ''}`} style={{ animationDelay: '0.1s' }}>We Are Unsurpassed Roofing</h1>
                                        <h1 className={`hero-title slider-custom-anim-left ${currentSlide == 2 ? 'slider-animated' : ''}`} style={{ animationDelay: '0.2s' }}>Services Agency</h1>
                                        <p className={`hero-text slider-custom-anim-left ${currentSlide == 2 ? 'slider-animated' : ''}`} style={{ animationDelay: '0.2s' }}>We craft unique digital experiences. With more than 7 years of expertise we design and code clean websites.</p>
                                        <div className={`btn-group slider-custom-anim-left ${currentSlide == 2 ? 'slider-animated' : ''}`} style={{ animationDelay: '0.4s' }}>

                                            <Link to="/about" className="btn style2">REQUEST A FREE ESTIMATE <i className="ri-arrow-right-up-line"></i></Link>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default Hero;