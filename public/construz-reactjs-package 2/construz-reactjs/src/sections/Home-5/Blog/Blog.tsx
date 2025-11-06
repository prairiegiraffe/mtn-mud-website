 
import { Link } from "react-router-dom";
import Slider from "react-slick";

const Blog = () => {
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 1500,
        autoplaySpeed: 5000,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <section className="blog-area-4 space" id="blog-sec">
            <div className="container">
                <div className="row justify-content-lg-between justify-content-center align-items-center">
                    <div className="col-lg-6">
                        <div className="title-area blog-area-content-text-extra-style">
                            <span className="sub-title text-theme">
                                Daily Update <i className="ri-arrow-right-down-line"></i>
                            </span>
                            <h2 className="sec-title">Our latest news and blog</h2>
                        </div>
                    </div>
                    <div className="col-md-auto">
                        <div className="sec-btn">
                            <Link to="/blog" className="btn">
                                View all post <i className="ri-arrow-right-up-line"></i>
                            </Link>
                        </div>
                    </div>
                </div>
                 
                <Slider
                    {...settings}
                    className="row global-carousel blog-slider5 slider-shadow"
                >
                    <div className="col-md-6 col-lg-4">
                        <div className="blog-card style5">
                            <div className="blog-img">
                                <img src="/assets/img/blog/blog_5_1.png" alt="blog image" />
                                <div className="blog-date">
                                    <Link to="/blog">
                                        <span>22</span>JUN
                                    </Link>
                                    <div className="year">2024</div>
                                </div>
                            </div>
                            <div className="blog-content">
                                <div className="blog-meta">
                                    <Link to="/blog">By Jr. Saller</Link>
                                    <Link to="/blog">News in 2024</Link>
                                </div>
                                <h3 className="blog-title">
                                    <Link to="/blog-details">
                                        Protecting your roof from storm damage
                                    </Link>
                                </h3>
                                <Link
                                    to="/blog-details"
                                    className="btn style-border4"
                                    tabIndex={0}
                                >
                                    Read More <i className="ri-arrow-right-up-line"></i>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-4">
                        <div className="blog-card style5">
                            <div className="blog-img">
                                <img src="/assets/img/blog/blog_5_2.png" alt="blog image" />
                                <div className="blog-date">
                                    <Link to="/blog">
                                        <span>14</span>FEB
                                    </Link>
                                    <div className="year">2024</div>
                                </div>
                            </div>
                            <div className="blog-content">
                                <div className="blog-meta">
                                    <Link to="/blog">By Ashik</Link>
                                    <Link to="/blog">News in 2024</Link>
                                </div>
                                <h3 className="blog-title">
                                    <Link to="/blog-details">
                                        Roofing are fact makes easier 10 reason
                                    </Link>
                                </h3>
                                <Link
                                    to="/blog-details"
                                    className="btn style-border4"
                                    tabIndex={0}
                                >
                                    Read More <i className="ri-arrow-right-up-line"></i>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-4">
                        <div className="blog-card style5">
                            <div className="blog-img">
                                <img src="/assets/img/blog/blog_5_3.png" alt="blog image" />
                                <div className="blog-date">
                                    <Link to="/blog">
                                        <span>09</span>JUN
                                    </Link>
                                    <div className="year">2024</div>
                                </div>
                            </div>
                            <div className="blog-content">
                                <div className="blog-meta">
                                    <Link to="/blog">By Jekson</Link>
                                    <Link to="/blog">News in 2024</Link>
                                </div>
                                <h3 className="blog-title">
                                    <Link to="/blog-details">
                                        Why roofing material warranties important?
                                    </Link>
                                </h3>
                                <Link
                                    to="/blog-details"
                                    className="btn style-border4"
                                    tabIndex={0}
                                >
                                    Read More <i className="ri-arrow-right-up-line"></i>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-4">
                        <div className="blog-card style5">
                            <div className="blog-img">
                                <img src="/assets/img/blog/blog_5_1.png" alt="blog image" />
                                <div className="blog-date">
                                    <Link to="/blog">
                                        <span>22</span>JUN
                                    </Link>
                                    <div className="year">2024</div>
                                </div>
                            </div>
                            <div className="blog-content">
                                <div className="blog-meta">
                                    <Link to="/blog">By Jr. Saller</Link>
                                    <Link to="/blog">News in 2024</Link>
                                </div>
                                <h3 className="blog-title">
                                    <Link to="/blog-details">
                                        Protecting your roof from storm damage
                                    </Link>
                                </h3>
                                <Link
                                    to="/blog-details"
                                    className="btn style-border4"
                                    tabIndex={0}
                                >
                                    Read More <i className="ri-arrow-right-up-line"></i>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-4">
                        <div className="blog-card style5">
                            <div className="blog-img">
                                <img src="/assets/img/blog/blog_5_2.png" alt="blog image" />
                                <div className="blog-date">
                                    <Link to="/blog">
                                        <span>14</span>FEB
                                    </Link>
                                    <div className="year">2024</div>
                                </div>
                            </div>
                            <div className="blog-content">
                                <div className="blog-meta">
                                    <Link to="/blog">By Ashik</Link>
                                    <Link to="/blog">News in 2024</Link>
                                </div>
                                <h3 className="blog-title">
                                    <Link to="/blog-details">
                                        Roofing are fact makes easier 10 reason
                                    </Link>
                                </h3>
                                <Link
                                    to="/blog-details"
                                    className="btn style-border4"
                                    tabIndex={0}
                                >
                                    Read More <i className="ri-arrow-right-up-line"></i>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-4">
                        <div className="blog-card style5">
                            <div className="blog-img">
                                <img src="/assets/img/blog/blog_5_3.png" alt="blog image" />
                                <div className="blog-date">
                                    <Link to="/blog">
                                        <span>09</span>JUN
                                    </Link>
                                    <div className="year">2024</div>
                                </div>
                            </div>
                            <div className="blog-content">
                                <div className="blog-meta">
                                    <Link to="/blog">By Jekson</Link>
                                    <Link to="/blog">News in 2024</Link>
                                </div>
                                <h3 className="blog-title">
                                    <Link to="/blog-details">
                                        Why roofing material warranties important?
                                    </Link>
                                </h3>
                                <Link
                                    to="/blog-details"
                                    className="btn style-border4"
                                    tabIndex={0}
                                >
                                    Read More <i className="ri-arrow-right-up-line"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </section>
    );
};

export default Blog;
