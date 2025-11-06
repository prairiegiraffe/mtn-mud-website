 
import { useRef } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const CTA = () => {
    const sliderRef = useRef(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 1500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    initialSlide: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
        ],
    };

    const handlePrev = () => {
        (sliderRef.current as any).slickPrev();
    };

    const handleNext = () => {
        (sliderRef.current as any).slickNext();
    };

    return (
        <div
            className="bg-shape background-image"
            style={{ backgroundImage: "url('/assets/img/bg/cta-bg4-2.png')" }}
        >
            {/* top container or img section */}
            <div className="cta-area-4 space-top" id="contact-sec">
                <div className="container">
                    <div
                        className="cta-wrap4 text-center background-image"
                        style={{ backgroundImage: "url('/assets/img/bg/cta-bg4-1.png')" }}
                        data-overlay="title"
                        data-opacity="6"
                    >
                        <div className="title-area mb-30">
                            <span className="sub-title text-white">
                                We have won many factory awards
                            </span>
                            <h2 className="cta-title style2">Your Renovation</h2>
                            <h3 className="cta-title text-white">Starts Here</h3>
                        </div>
                        <div className="btn-wrap justify-content-center">
                            <Link to="/contact" className="btn style2">
                                Get in Touch <i className="ri-arrow-right-up-line"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* blog area section */}
            <section className="blog-area-4 space" id="blog-sec">
                <div className="container">
                    <div className="row justify-content-lg-between justify-content-center align-items-center">
                        <div className="col-lg-6 blog-extra-padding">
                            <div className="title-area blog-area-content-text-extra-style">
                                <span className="sub-title text-theme">
                                    Journal <i className="ri-arrow-right-down-line"></i>
                                </span>
                                <h2 className="sec-title">News and Article</h2>
                            </div>
                        </div>
                        <div className="col-md-auto white-space-hidden">
                            <div className="sec-btn">
                                <div className="icon-box">
                                    <button
                                        onClick={handlePrev}
                                        data-slick-prev=".blog-slider4"
                                        className="slick-arrow default style2"
                                    >
                                        <i className="ri-arrow-left-line"></i>
                                    </button>
                                    <button
                                        onClick={handleNext}
                                        data-slick-next=".blog-slider4"
                                        className="slick-arrow default style2"
                                    >
                                        <i className="ri-arrow-right-line"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                     
                    <Slider
                        {...settings}
                        ref={sliderRef}
                        className="row global-carousel blog-slider4 slider-shadow"
                    >
                        <div className="col-md-6 col-lg-4">
                            <div className="blog-card style4">
                                <div className="blog-img">
                                    <img src="/assets/img/blog/blog_4_1.png" alt="blog image" />
                                    <div className="blog-date">
                                        <Link to="/blog">
                                            <span>17</span>JUN
                                        </Link>
                                    </div>
                                </div>
                                <div className="blog-content">
                                    <div className="blog-meta">
                                        <Link to="/blog">By Rebecca</Link>
                                        <Link to="/blog">Architecture</Link>
                                    </div>
                                    <h3 className="blog-title">
                                        <Link to="/blog-details">
                                            Cultural artifacts and new attitudes
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4">
                            <div className="blog-card style4">
                                <div className="blog-img">
                                    <img src="/assets/img/blog/blog_4_2.png" alt="blog image" />
                                    <div className="blog-date">
                                        <Link to="/blog">
                                            <span>20</span>AUG
                                        </Link>
                                    </div>
                                </div>
                                <div className="blog-content">
                                    <div className="blog-meta">
                                        <Link to="/blog">By Rebecca</Link>
                                        <Link to="/blog">Office</Link>
                                        <Link to="/blog">News 2024</Link>
                                    </div>
                                    <h3 className="blog-title">
                                        <Link to="/blog-details">
                                            Interactive technologies in factories and plants
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4">
                            <div className="blog-card style4">
                                <div className="blog-img">
                                    <img src="/assets/img/blog/blog_4_3.png" alt="blog image" />
                                    <div className="blog-date">
                                        <Link to="/blog">
                                            <span>30</span>SEP
                                        </Link>
                                    </div>
                                </div>
                                <div className="blog-content">
                                    <div className="blog-meta">
                                        <Link to="/blog">By Rebecca</Link>
                                        <Link to="/blog">Building</Link>
                                    </div>
                                    <h3 className="blog-title">
                                        <Link to="/blog-details">
                                            Creation of industrial projects around the world
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4">
                            <div className="blog-card style4">
                                <div className="blog-img">
                                    <img src="/assets/img/blog/blog_4_1.png" alt="blog image" />
                                    <div className="blog-date">
                                        <Link to="/blog">
                                            <span>17</span>JUN
                                        </Link>
                                    </div>
                                </div>
                                <div className="blog-content">
                                    <div className="blog-meta">
                                        <Link to="/blog">By Rebecca</Link>
                                        <Link to="/blog">Architecture</Link>
                                    </div>
                                    <h3 className="blog-title">
                                        <Link to="/blog-details">
                                            Cultural artifacts and new attitudes
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4">
                            <div className="blog-card style4">
                                <div className="blog-img">
                                    <img src="/assets/img/blog/blog_4_2.png" alt="blog image" />
                                    <div className="blog-date">
                                        <Link to="/blog">
                                            <span>20</span>AUG
                                        </Link>
                                    </div>
                                </div>
                                <div className="blog-content">
                                    <div className="blog-meta">
                                        <Link to="/blog">By Rebecca</Link>
                                        <Link to="/blog">Office</Link>
                                        <Link to="/blog">News 2024</Link>
                                    </div>
                                    <h3 className="blog-title">
                                        <Link to="/blog-details">
                                            Interactive technologies in factories and plants
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4">
                            <div className="blog-card style4">
                                <div className="blog-img">
                                    <img src="/assets/img/blog/blog_4_3.png" alt="blog image" />
                                    <div className="blog-date">
                                        <Link to="/blog">
                                            <span>30</span>SEP
                                        </Link>
                                    </div>
                                </div>
                                <div className="blog-content">
                                    <div className="blog-meta">
                                        <Link to="/blog">By Rebecca</Link>
                                        <Link to="/blog">Building</Link>
                                    </div>
                                    <h3 className="blog-title">
                                        <Link to="/blog-details">
                                            Creation of industrial projects around the world
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </section>
        </div>
    );
};

export default CTA;
