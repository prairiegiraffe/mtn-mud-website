
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { useState } from "react";
import { Link } from "react-router-dom";

// import Lightbox from "yet-another-react-lightbox";
// import "yet-another-react-lightbox/styles.css";

const portfolioItems = [
    {
        imgSrc: "/assets/img/project/project1_1.png",
        altText: "img",
        href: "/assets/img/project/project1_1.png",
        subtitle: "Building",
        title: "General Construction",
        date: "Building since 09,01,2024",
        detailsHref: "/project-details"
    },
    {
        imgSrc: "/assets/img/project/project1_2.png",
        altText: "img",
        href: "/assets/img/project/project1_2.png",
        subtitle: "Building",
        title: "General Construction",
        date: "Building since 09,01,2024",
        detailsHref: "/project-details"
    },
    {
        imgSrc: "/assets/img/project/project1_3.png",
        altText: "img",
        href: "/assets/img/project/project1_3.png",
        subtitle: "Building",
        title: "General Construction",
        date: "Building since 09,01,2024",
        detailsHref: "/project-details"
    },
    {
        imgSrc: "/assets/img/project/project1_1.png",
        altText: "img",
        href: "/assets/img/project/project1_1.png",
        subtitle: "Building",
        title: "General Construction",
        date: "Building since 09,01,2024",
        detailsHref: "/project-details"
    },
    {
        imgSrc: "/assets/img/project/project1_2.png",
        altText: "img",
        href: "/assets/img/project/project1_2.png",
        subtitle: "Building",
        title: "General Construction",
        date: "Building since 09,01,2024",
        detailsHref: "/project-details"
    },
    {
        imgSrc: "/assets/img/project/project1_3.png",
        altText: "img",
        href: "/assets/img/project/project1_3.png",
        subtitle: "Building",
        title: "General Construction",
        date: "Building since 09,01,2024",
        detailsHref: "/project-details"
    }
];

const Portfolio = () => {
    // const [photoIndex, setPhotoIndex] = useState<number | null>(null);


    const settings = {
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1500,
        arrows: false,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };




    // const slides = portfolioItems.map((image) => ({ src: image.href }));

    return (
        <div className="portfolio-area-3 space-bottom" id="project-sec">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-lg-7">
                        <div className="title-area blog-area-content-text-extra-style">
                            <span className="sub-title text-theme">Complete Works <i className="ri-arrow-right-down-line"></i></span>
                            <h2 className="sec-title">Explore recent projects</h2>
                        </div>
                    </div>
                    <div className="col-lg-auto">
                        <div className="sec-btn">
                            <Link to="/project" className="btn">View All Projects <i className="ri-arrow-right-up-line"></i></Link>
                        </div>
                    </div>
                </div>
                <div className="portfolio-slider3 overflow-hidden">
                     
                    <Slider {...settings} className="row gy-30 gx-30 global-carousel custom-carousel" data-slide-show="2" data-ml-slide-show="2" data-lg-slide-show="1">
                        {portfolioItems.map((item, index) => (
                            <div className="col-lg-6 custom-slide" key={index}>
                                <div className="portfolio-card">
                                    <div className="portfolio-card-thumb">
                                        <img src={item.imgSrc} alt={item.altText} />
                                        <a className="icon-btn popup-image" style={{ cursor: "pointer" }}>
                                            <i className="ri-eye-line"></i>
                                        </a>
                                    </div>
                                    <div className="portfolio-card-details">
                                        <div className="media-left">
                                            <span className="portfolio-card-subtitle">{item.subtitle}</span>
                                            <h4 className="portfolio-card-title">
                                                <Link to={item.detailsHref}>{item.title}</Link>
                                            </h4>
                                            <p className="portofolio-card-text">{item.date}</p>
                                        </div>
                                    </div>
                                    <Link to={item.detailsHref} className="btn">
                                        Explore Service <i className="ri-arrow-right-up-line"></i>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
            <div id="large-slider">
                {/* {photoIndex !== null && (
                    <Lightbox
                        open={photoIndex !== null}
                        close={() => setPhotoIndex(null)}
                        slides={slides}
                        index={photoIndex}
                        on={{
                            view: ({ index }) => setPhotoIndex(index),
                        }}
                    />
                )} */}
            </div>
        </div>
    );
};

export default Portfolio;
