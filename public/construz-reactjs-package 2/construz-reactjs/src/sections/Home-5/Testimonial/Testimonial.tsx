 
import Slider from "react-slick";

const Testimonial = () => {
    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        speed: 1500,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    dots: false,
                },
            },
        ],
    };

    return (
        <div className="testimonial-area-5 home-one-testimonial overflow-hidden space position-relative">
            <div
                className="testimonial-bg-thumb5-1 background-image"
                style={{ backgroundImage: "url('assets/img/bg/testimonial-bg5-1.png')" }}
            ></div>
            <div
                className="testimonial-bg-thumb5-2 background-image"
                style={{ backgroundImage: "url('assets/img/bg/testimonial-bg5-2.png')" }}
            ></div>
            <div className="container">
                <div className="row gx-100 gy-60">
                    <div className="col-xl-5 col-lg-6">
                        <div className="title-area">
                            <span className="sub-title text-theme">
                                Testimonials <i className="ri-arrow-right-down-line"></i>
                            </span>
                            <h2 className="sec-title text-white">What client says</h2>
                        </div>
 
                        <Slider
                            {...settings}
                            className="row global-carousel testi-slider5 dot-style2"
                        >
                            <div className="col-lg-6">
                                <div className="testi-card style5">
                                    <div className="testi-card-profile">
                                        <div className="testi-card-thumb">
                                            <img src="assets/img/testimonial/testi_5_1.png" alt="img" />
                                        </div>
                                        <div className="testi-card-profile-details">
                                            <h4 className="testi-profile-title">Bm Ashik</h4>
                                            <span className="testi-profile-desig">
                                                Designer at Rainbow Themes
                                            </span>
                                        </div>
                                    </div>

                                    <div className="testi-card_content">
                                        <div className="testi-rating">
                                            <i className="ri-star-fill"></i>
                                            <i className="ri-star-fill"></i>
                                            <i className="ri-star-fill"></i>
                                            <i className="ri-star-fill"></i>
                                            <i className="ri-star-fill"></i>
                                        </div>
                                        <p className="testi-card_text">
                                            When an unknown printer took a galley of type and
                                            scrambled it to make a type specimen book, It has survived
                                            not only five centuries.
                                        </p>
                                        <div className="quote-icon">
                                            <img src="assets/img/icon/quote.svg" alt="img" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="testi-card style5">
                                    <div className="testi-card-profile">
                                        <div className="testi-card-thumb">
                                            <img src="assets/img/testimonial/testi_5_1.png" alt="img" />
                                        </div>
                                        <div className="testi-card-profile-details">
                                            <h4 className="testi-profile-title">Bm Ashik</h4>
                                            <span className="testi-profile-desig">
                                                Designer at Rainbow Themes
                                            </span>
                                        </div>
                                    </div>

                                    <div className="testi-card_content">
                                        <div className="testi-rating">
                                            <i className="ri-star-fill"></i>
                                            <i className="ri-star-fill"></i>
                                            <i className="ri-star-fill"></i>
                                            <i className="ri-star-fill"></i>
                                            <i className="ri-star-fill"></i>
                                        </div>
                                        <p className="testi-card_text">
                                            When an unknown printer took a galley of type and
                                            scrambled it to make a type specimen book, It has survived
                                            not only five centuries.
                                        </p>
                                        <div className="quote-icon">
                                            <img src="assets/img/icon/quote.svg" alt="img" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="testi-card style5">
                                    <div className="testi-card-profile">
                                        <div className="testi-card-thumb">
                                            <img src="assets/img/testimonial/testi_5_1.png" alt="img" />
                                        </div>
                                        <div className="testi-card-profile-details">
                                            <h4 className="testi-profile-title">Bm Ashik</h4>
                                            <span className="testi-profile-desig">
                                                Designer at Rainbow Themes
                                            </span>
                                        </div>
                                    </div>

                                    <div className="testi-card_content">
                                        <div className="testi-rating">
                                            <i className="ri-star-fill"></i>
                                            <i className="ri-star-fill"></i>
                                            <i className="ri-star-fill"></i>
                                            <i className="ri-star-fill"></i>
                                            <i className="ri-star-fill"></i>
                                        </div>
                                        <p className="testi-card_text">
                                            When an unknown printer took a galley of type and
                                            scrambled it to make a type specimen book, It has survived
                                            not only five centuries.
                                        </p>
                                        <div className="quote-icon">
                                            <img src="assets/img/icon/quote.svg" alt="img" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slider>

                        {/* Custom dots */}
                        {/* TODO: custom add here */}
                    </div>

                    <div className="col-lg-6">
                        <div className="testi-client-group5">
                            <div className="client-group-thumb">
                                <img src="assets/img/normal/client_group_1-2.png" alt="img" />
                            </div>
                            <div className="testi-counter-wrap">
                                <h3 className="testi-counter-number">
                                    <span className="counter-number">2</span>m+
                                </h3>
                                <p className="testi-counter-text">Success Peoples</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
