 
import { useRef } from "react";
import { Accordion } from "react-bootstrap";
import Slider from "react-slick";

const Testimonial = () => {
    const sliderRef = useRef(null);

    const settings = {
        arrows: false,
        dots: false,
        speed: 1500,
        autoplay: true,
        autoplaySpeed: 5000,
    };

    const handlePrev = () => {
        (sliderRef.current as any).slickPrev();
    };

    const handleNext = () => {
        (sliderRef.current as any).slickNext();
    };

    return (
        <div
            className="testimonial-area-4 home-one-testimonial overflow-hidden space bg-smoke shape-mockup-wrap background-image"
            style={{ backgroundImage: "url('/assets/img/bg/testimonial-bg4-1.png')" }}
        >
            <div
                className="testimonial_shape_1-1 shape-mockup jump d-xxl-block d-none"
                data-top="0"
                data-right="4%"
            >
                <img src="/assets/img/shape/sec-bg-shape2.png" alt="img" />
            </div>
            <div className="container">
                <div className="row gx-100 gy-60 flex-row-reverse">
                    {/* slider section */}
                    <div className="col-xl-6">
                        {/* slider title area */}
                        <div className="title-area">
                            <span className="sub-title text-theme">
                                Testimonials <i className="ri-arrow-right-down-line"></i>
                            </span>
                            <h2 className="sec-title">Our happy customers</h2>
                        </div>
                        <Slider
                            {...settings}
                            ref={sliderRef}
                            className="row global-carousel testi-slider1"
                            data-slide-show="1"
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

                        {/* carousel navigation button */}
                        <div className="btn-wrap mt-70">
                            <div className="icon-box">
                                <button
                                    data-slick-prev=".testi-slider1"
                                    className="slick-arrow style2 default"
                                    onClick={handlePrev}
                                >
                                    <i className="ri-arrow-left-down-line"></i>
                                </button>
                                <button
                                    data-slick-next=".testi-slider1"
                                    className="slick-arrow style2 default"
                                    onClick={handleNext}
                                >
                                    <i className="ri-arrow-right-up-line"></i>
                                </button>
                            </div>

                            {/* bottom right section */}
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

                    {/* accordion section */}
                    <div className="col-xl-6">
                        <div id="faqAccordion">
                            <Accordion
                                defaultActiveKey="1"
                                className="accordion-area style2 accordion"
                            >
                                <Accordion.Item eventKey="1" className="accordion-card">
                                    <Accordion.Header>
                                        Prepare A Construction Project Schedule?
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <p className="faq-text">
                                            The point of using lorem ipsum is that has more-or-less
                                            packages normal commercial management in construction
                                            ensures the planning, execution and coordination of a
                                            construction project finish these specific projects.
                                        </p>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item
                                    eventKey="2"
                                    className="accordion-card custom-border"
                                >
                                    <Accordion.Header>
                                        Product Design And Planning!
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <p className="faq-text">
                                            The point of using lorem ipsum is that has more-or-less
                                            packages normal commercial management in construction
                                            ensures the planning, execution and coordination of a
                                            construction project finish these specific projects.
                                        </p>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item
                                    eventKey="3"
                                    className="accordion-card custom-border"
                                >
                                    <Accordion.Header>
                                        What Is Commercial In Construction?
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <p className="faq-text">
                                            The point of using lorem ipsum is that has more-or-less
                                            packages normal commercial management in construction
                                            ensures the planning, execution and coordination of a
                                            construction project finish these specific projects.
                                        </p>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item
                                    eventKey="4"
                                    className="accordion-card custom-border"
                                >
                                    <Accordion.Header>
                                        Start A Construction Management?
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <p className="faq-text">
                                            The point of using lorem ipsum is that has more-or-less
                                            packages normal commercial management in construction
                                            ensures the planning, execution and coordination of a
                                            construction project finish these specific projects.
                                        </p>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item
                                    eventKey="5"
                                    className="accordion-card custom-border"
                                >
                                    <Accordion.Header>
                                        How Are Payments Handled And Dealt With?
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <p className="faq-text">
                                            The point of using lorem ipsum is that has more-or-less
                                            packages normal commercial management in construction
                                            ensures the planning, execution and coordination of a
                                            construction project finish these specific projects.
                                        </p>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
