
import Slider from "react-slick";
// import { useState } from 'react';
import { Link } from "react-router-dom";

// import Lightbox from "yet-another-react-lightbox";
// import "yet-another-react-lightbox/styles.css";

const Portfolio = () => {
    // const [photoIndex, setPhotoIndex] = useState<number | null>(null);

    const images = [
        { imgSrc: "/assets/img/project/project2_1.png", category: "Building", title: "Building Construction" },
        { imgSrc: "/assets/img/project/project2_2.png", category: "Construction", title: "General Construction" },
        { imgSrc: "/assets/img/project/project2_3.png", category: "Remodeling", title: "Renovation & Remodeling" },
    ];


    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1500,
        autoplaySpeed: 5000,
        dots: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
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

    // const slides = images.map((src) => ({ src }));
    // const slides = images.map((image) => ({ src: image.imgSrc }));


    return (
        <div className="portfolio-area-2 space" id="project-sec">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-lg-7">
                        <div className="title-area portfolio-area-content-text-extra-style">
                            <span className="sub-title">
                                <img src="/assets/img/icon/section-subtitle-icon.svg" alt="img" />Recent Work
                            </span>
                            <h2 className="sec-title">CHECK OUR LATEST PROJECTS</h2>
                        </div>
                    </div>
                    <div className="col-lg-auto">
                        <div className="sec-btn">
                            <Link to="/project" className="btn">View All Projects <i className="ri-arrow-right-up-line"></i></Link>
                        </div>
                    </div>
                </div>
                <div className="portfolio-slider2 overflow-hidden">
                     
                    <Slider {...settings} className="row gy-30 gx-30 global-carousel slider-shadow slick-initialized slick-slider">
                        {images.map((img, index) => (
                            <div className="col-lg-4" key={index}>
                                <div className="portfolio-card style2">
                                    <div className="portfolio-card-thumb">
                                        <img src={img.imgSrc} alt={`project-${index + 1}`} />
                                        <span className="portfolio-card-number">{`0${index + 1}`}</span>
                                        <button className="icon-btn popup-image">
                                            {/* onClick={() => setPhotoIndex(index)} */}
                                            <i className="ri-eye-line"></i>
                                        </button>
                                    </div>
                                    <div className="portfolio-card-details">
                                        <span className="portfolio-card-subtitle">{img.category}</span>
                                        <h4 className="portfolio-card-title">
                                            <Link to="/project-details">{img.title}</Link>
                                        </h4>
                                        <p className="portofolio-card-text">Building since 09,01,2024</p>
                                        <Link to="/project-details" className="btn-with-icon">
                                            VIEW DETAILS
                                            <span className="btn-icon">
                                                <i className="ri-arrow-right-up-line"></i>
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
            <div className="extra-style">
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
