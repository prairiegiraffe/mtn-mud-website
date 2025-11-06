'use client'

import { useEffect, useState } from 'react';
import Slider from 'react-slick';
// import Lightbox from 'react-image-lightbox';
// import 'react-image-lightbox/style.css';  
import 'slick-carousel/slick/slick.css';  
import 'slick-carousel/slick/slick-theme.css';   
import { Link } from 'react-router-dom';

const images = [
  "/assets/img/project/project1_1.png",
  "/assets/img/project/project1_2.png",
  "/assets/img/project/project1_3.png",
  "/assets/img/project/project1_1.png",
  "/assets/img/project/project1_2.png",
  "/assets/img/project/project1_3.png",
];

const Portfolio = () => {
  const [photoIndex, setPhotoIndex] = useState(-1);

  useEffect(() => {
    if (photoIndex >= 0) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [photoIndex]);

  const settings = {
    dots: true,
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    centerPadding: "20%",
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerMode: false,
          centerPadding: "0%",
          dots: true,
        }
      },
      {
        breakpoint: 767,
        settings: {
          centerMode: false,
          centerPadding: "0%",
          dots: false,
        }
      }
    ]
  };

  const handleOpen = (index : any) => {
    setPhotoIndex(index);
  };

  return (
    <div className="portfolio-area-1 space">
      <div className="container">
        <div className="title-area text-center">
          <span className="sub-title">
            <img src="/assets/img/icon/section-subtitle-icon.svg" alt="img" /> Recent Work
          </span>
          <h2 className="sec-title">Check our latest projects</h2>
          <p className="sec-text">We are the best construction agency in the world</p>
        </div>
        <div className="portfolio-slider1 overflow-hidden">
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index}>
                <div className="portfolio-card" style={{ margin: "0px 1rem" }}>
                  <div className="portfolio-card-thumb">
                    <img src={image} alt={`Project ${index + 1}`} />
                    <button className="icon-btn popup-image" onClick={() => handleOpen(index)}>
                      <i className="ri-eye-line"></i>
                    </button>
                  </div>
                  <div className="portfolio-card-details">
                    <div className="media-left">
                      <span className="portfolio-card-subtitle">Building</span>
                      <h4 className="portfolio-card-title">
                        <Link to="/project-details">
                          General Construction
                        </Link>
                      </h4>
                      <p className="portofolio-card-text">
                        Building since 09,01,2024
                      </p>
                    </div>
                  </div>
                  <Link to="/project-details" className="btn">
                    Explore Service <i className="ri-arrow-right-up-line"></i>
                  </Link>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      {/* {photoIndex >= 0 && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setPhotoIndex(-1)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )} */}
    </div>
  );
};

export default Portfolio;

















 