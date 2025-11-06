 
import { useRef } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const Testimonial = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        speed: 1500,
        autoplaySpeed: 5000,
    };

    const sliderRef = useRef<any>(null);

    const goToPrev = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
        }
    };

    const goToNext = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
        }
    };

    return (
        <div
            className="testimonial-area-1 home-one-testimonial overflow-hidden space bg-smoke shape-mockup-wrap background-image"
            style={{ backgroundImage: "url('/assets/img/bg/testimonial-bg1-1.png')" }}
        >
            <div
                className="testimonial_shape_1-1 shape-mockup jump d-xxl-block d-none"
                style={{ top: '0px', right: '4%' }}
            >
                <img src="/assets/img/shape/sec-bg-shape2.png" alt="img" />
            </div>
            <div className="container">
                <div className="row gx-100 gy-60 flex-row-reverse">
                    <div className="col-xl-6">
                        <div className="title-area">
                            <span className="sub-title">
                                <img src="/assets/img/icon/section-subtitle-icon.svg" alt="img" />
                                Testimonials
                            </span>
                            <h2 className="sec-title">Our happy customers</h2>
                        </div>
 
                        <Slider
                            {...settings}
                            className="row global-carousel testi-slider1"
                            data-slide-show="1"
                            ref={sliderRef}
                        >
                            <div className="col-lg-6">
                                <div className="testi-card">
                                    <div className="quote-icon">
                                        <img src="/assets/img/icon/quote.svg" alt="img" />
                                    </div>
                                    <div className="testi-card-thumb">
                                        <img src="/assets/img/testimonial/testi_1_1.png" alt="img" />
                                    </div>
                                    <div className="testi-card_content">
                                        <h4 className="testi-card_title">Best Company!</h4>
                                        <p className="testi-card_text">
                                            Tortor posuere ac ut consequat. Tellusi elem isis etum sag
                                            ittis vitae et leo duis ut diam. Odio ut sem nulla phar.
                                            Purus sit ame nus mas do eiusmod.
                                        </p>
                                        <div className="testi-card-profile">
                                            <h4 className="testi-profile-title">Aleesha brown.</h4>
                                            <span className="testi-profile-desig">
                                                CEO at Construz
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="testi-card">
                                    <div className="quote-icon">
                                        <img src="/assets/img/icon/quote.svg" alt="img" />
                                    </div>
                                    <div className="testi-card-thumb">
                                        <img src="/assets/img/testimonial/testi_1_2.png" alt="img" />
                                    </div>
                                    <div className="testi-card_content">
                                        <h4 className="testi-card_title">Best Company!</h4>
                                        <p className="testi-card_text">
                                            Tortor posuere ac ut consequat. Tellusi elem isis etum sag
                                            ittis vitae et leo duis ut diam. Odio ut sem nulla phar.
                                            Purus sit ame nus mas do eiusmod.
                                        </p>
                                        <div className="testi-card-profile">
                                            <h4 className="testi-profile-title">Aleesha brown.</h4>
                                            <span className="testi-profile-desig">
                                                CEO at Construz
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="testi-card">
                                    <div className="quote-icon">
                                        <img src="/assets/img/icon/quote.svg" alt="img" />
                                    </div>
                                    <div className="testi-card-thumb">
                                        <img src="/assets/img/testimonial/testi_1_1.png" alt="img" />
                                    </div>
                                    <div className="testi-card_content">
                                        <h4 className="testi-card_title">Best Company!</h4>
                                        <p className="testi-card_text">
                                            Tortor posuere ac ut consequat. Tellusi elem isis etum sag
                                            ittis vitae et leo duis ut diam. Odio ut sem nulla phar.
                                            Purus sit ame nus mas do eiusmod.
                                        </p>
                                        <div className="testi-card-profile">
                                            <h4 className="testi-profile-title">Aleesha brown.</h4>
                                            <span className="testi-profile-desig">
                                                CEO at Construz
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slider>

                        <div className="btn-wrap mt-70">
                            <div className="icon-box">
                                <button
                                    onClick={goToPrev}
                                    data-slick-prev=".testi-slider1"
                                    className="slick-arrow style2 default"
                                >
                                    <i className="ri-arrow-left-down-line"></i>
                                </button>
                                <button
                                    onClick={goToNext}
                                    data-slick-next=".testi-slider1"
                                    className="slick-arrow style2 default"
                                >
                                    <i className="ri-arrow-right-up-line"></i>
                                </button>
                            </div>
                            <div className="client-group-thumb">
                                <img src="/assets/img/normal/client_group_1-2.png" alt="img" />
                            </div>
                            <div className="testi-counter-wrap">
                                <h3 className="testi-counter-number">
                                    <span className="counter-number">2</span>m+
                                </h3>
                                <p className="testi-counter-text">Success Peoples</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-6">
                        <div
                            className="testimonial-card background-image"
                            style={{
                                backgroundImage: "url('/assets/img/bg/testimonial-card-bg1-1.png')",
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center",
                                overflow: 'hidden'
                            }}
                        >
                            <h3 className="testimonial-card-title">
                                Have you any questions?
                            </h3>
                            <p className="testimonial-card-text">
                                Podcasting operational change management inside of making this
                                the first true generator.
                            </p>
                            <div className="btn-group">
                                <Link to="/contact" className="btn style6">
                                    Contact with Us <i className="ri-arrow-right-up-line"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
