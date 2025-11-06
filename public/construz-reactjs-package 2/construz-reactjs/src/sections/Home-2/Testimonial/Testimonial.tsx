 
import Slider from "react-slick";


const Testimonial = () => {
    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1500,
        autoplaySpeed: 5000,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    dots: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    dots: false,
                },
            },
        ],
    };
    return (
        <div className="testimonial-area-2 overflow-hidden shape-mockup-wrap">
            <div className="testimonial-anim-shape2-1 section-animation-shape1-1 shape-mockup animation-infinite background-image" style={{ backgroundImage: "url('/assets/img/shape/global-line-shape2.png')", right: '0px', top: '0px' }}>
            </div>
            <div className="testimonial_shape_2-1 shape-mockup jump d-xxl-block d-none" style={{ bottom: '0px', right: '10%' }}>
                <img src="/assets/img/shape/sec-bg-shape2.png" alt="img" />
            </div>
            <div className="testimonial_shape_2-2">
                <img src="/assets/img/bg/testimonial-bg-shape2-1.png" alt="img" />
            </div>
            <div className="testimonial_shape_2-3 movingX">
                <img src="/assets/img/bg/testimonial-bg-shape2-2.png" alt="img" />
            </div>
            <div className="testimonial_shape_2-4 movingX">
            </div>

            <div className="testimonial_bg_thumb2-1 background-image" style={{ backgroundImage: "url('/assets/img/bg/testimonial-bg2-1.png')" }}>
            </div>
            <div className="testimonial_thumb2-1 background-image" style={{ backgroundImage: "url('/assets/img/normal/testimonial_2-1.png')" }}>
            </div>
            <div className="container">
                <div className="row justify-content-end">
                    <div className="col-xl-9">
                        <div className="testi-wrap2">
                            <div className="title-area">
                                <span className="sub-title text-theme"><img src="/assets/img/icon/section-subtitle-icon.svg" alt="img" />Testimonials</span>
                                <h2 className="sec-title text-white">WHAT OUR CLIENTS ARE SAYING!</h2>
                            </div>
                            <Slider {...settings} className="row global-carousel testi-slider2" data-slide-show="1" data-dots="true" data-xl-dots="true" data-ml-dots="true">
                                <div className="col-12">
                                    <div className="testi-card style2">
                                        <div className="testi-card-thumb">
                                            <img src="/assets/img/testimonial/testi_2_1.png" alt="img" />
                                            <div className="quote-icon">
                                                <img src="/assets/img/icon/quote2.svg" alt="img" />
                                            </div>
                                        </div>
                                        <div className="testi-card_content">
                                            <h4 className="testi-card_title">Best Company!</h4>
                                            <p className="testi-card_text">Tortor posuere ac ut consequat. Tellusi elem isis etum sag ittis vitae et leo duis ut diam. Odio ut sem nulla phar. Purus sit ame nus mas do eiusmod.</p>
                                            <div className="testi-card-profile">
                                                <h4 className="testi-profile-title">Aleesha brown.</h4>
                                                <span className="testi-profile-desig">CEO at Construz</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="testi-card style2">
                                        <div className="testi-card-thumb">
                                            <img src="/assets/img/testimonial/testi_2_2.png" alt="img" />
                                            <div className="quote-icon">
                                                <img src="/assets/img/icon/quote2.svg" alt="img" />
                                            </div>
                                        </div>
                                        <div className="testi-card_content">
                                            <h4 className="testi-card_title">Best Company!</h4>
                                            <p className="testi-card_text">Tortor posuere ac ut consequat. Tellusi elem isis etum sag ittis vitae et leo duis ut diam. Odio ut sem nulla phar. Purus sit ame nus mas do eiusmod.</p>
                                            <div className="testi-card-profile">
                                                <h4 className="testi-profile-title">Aleesha brown.</h4>
                                                <span className="testi-profile-desig">CEO at Construz</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="testi-card style2">
                                        <div className="testi-card-thumb">
                                            <img src="/assets/img/testimonial/testi_2_3.png" alt="img" />
                                            <div className="quote-icon">
                                                <img src="/assets/img/icon/quote2.svg" alt="img" />
                                            </div>
                                        </div>
                                        <div className="testi-card_content">
                                            <h4 className="testi-card_title">Best Company!</h4>
                                            <p className="testi-card_text">Tortor posuere ac ut consequat. Tellusi elem isis etum sag ittis vitae et leo duis ut diam. Odio ut sem nulla phar. Purus sit ame nus mas do eiusmod.</p>
                                            <div className="testi-card-profile">
                                                <h4 className="testi-profile-title">Aleesha brown.</h4>
                                                <span className="testi-profile-desig">CEO at Construz</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;