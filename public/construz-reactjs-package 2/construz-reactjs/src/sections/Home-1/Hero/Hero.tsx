 
import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [totalSlides, setTotalSlides] = useState(0);
  const sliderRef = useRef<any>(null);

  useEffect(() => {
    if (sliderRef.current) {
      setTotalSlides(sliderRef.current.props.children.length);
    }
  }, []);

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

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    fade: true, 
    beforeChange: (next: number) => setCurrentSlide(next),
  };

  return (
    <div
      className="hero-wrapper hero-1 shape-mockup-wrap background-image"
      id="hero"
      style={{ backgroundImage: "url('/assets/img/hero/hero_bg_1_1.png')" }}
    >
      {/* Slider */}
       
      <Slider {...settings} ref={sliderRef} className="hero-slider1">
        {/* Slides */}
        <div className="hero-slide">
          <div className="container larger-no-space">
            <div className="row">
              <div className="col-lg-6">
                <div className="hero-style1">
                  <h1 className="hero-title text-white">
                    Build Your dream buildings for the future
                  </h1>
                  <p className="hero-text text-white">
                    We craft unique digital experiences. With more than 7 years
                    of expertise we design and code clean websites.
                  </p>
                  <div className="btn-group">
                    <Link to="/about" className="btn style2">
                      Discover More <i className="ri-arrow-right-up-line"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-thumb text-center">
            <img src="/assets/img/hero/hero_thumb_1_1.png" alt="img" />
          </div>
        </div>

        <div className="hero-slide">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="hero-style1">
                  <h1 className="hero-title text-white">
                    Quality Build Construction Service
                  </h1>
                  <p className="hero-text text-white">
                    We craft unique digital experiences. With more than 7 years
                    of expertise we design and code clean websites.
                  </p>
                  <div className="btn-group">
                    <Link to="/about" className="btn style2">
                      Discover More <i className="ri-arrow-right-up-line"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-thumb text-center">
            <img src="/assets/img/hero/hero_thumb_1_2.png" alt="img" />
          </div>
        </div>

        <div className="hero-slide">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="hero-style1">
                  <h1 className="hero-title text-white">
                    Apex Architects Build Construction for future
                  </h1>
                  <p className="hero-text text-white">
                    We craft unique digital experiences. With more than 7 years
                    of expertise we design and code clean websites.
                  </p>
                  <div className="btn-group">
                    <Link to="/about" className="btn style2">
                      Discover More <i className="ri-arrow-right-up-line"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-thumb text-center">
            <img src="/assets/img/hero/hero_thumb_1_3.png" alt="img" />
          </div>
        </div>
      </Slider>

      {/* Custom navigation */}
      <div className="slider-controller-wrap">
        <div className="slider-btn-wrap">
          <div className="icon-box">
            <button onClick={goToPrev} className="slick-arrow default">
              <i className="ri-arrow-left-down-line"></i>
            </button>
            <button onClick={goToNext} className="slick-arrow default">
              <i className="ri-arrow-right-up-line"></i>
            </button>
          </div>
          <div className="slides-numbers">
            <span className="active">0{currentSlide + 1}</span> /
            <span className="total">0{totalSlides}</span>
          </div>
        </div>
      </div>

      {/* Other elements */}
      <div className="hero-bg-shape1-1"></div>
      <div className="hero-bg-shape1-2"></div>
      <div className="section-animation-shape1-1 shape-mockup animation-infinite background-image" style={{ backgroundImage: "url('/assets/img/shape/global-line-shape1.png')" }}>
      </div>
      <div className="section-animation-shape1-2 shape-mockup animation-infinite background-image" style={{ backgroundImage: "url('/assets/img/shape/global-line-shape1.png')" }}>
      </div>

      <div className="hero-shape1-1 shape-mockup movingX">
        <img src="/assets/img/hero/hero_shape_1_1.png" alt="img" />
      </div>

      {/* hero wrapper */}
      <div
        className="hero-experience-wrap"
        style={{
          backgroundImage: "url('/assets/img/hero/hero_experience_wrap_bg_1_1.png')",
        }}
      >
        <span className="shadow-text">Business Experience</span>
        <div className="hero-experience-icon">
          <img src="/assets/img/hero/hero_experience_wrap_icon_1_1.png" alt="img" />
        </div>
        <h2 className="hero-experience-counter">
          <span className="counter-number">
            <CountUp start={0} end={40} />
          </span>
          +
        </h2>
        <p className="hero-experience-text">Years we have been doing this</p>
        <div className="media">
          <div className="icon">
            <img src="/assets/img/hero/hero_experience_wrap_icon_1_2.png" alt="img" />
          </div>
          <Link className="link-btn link-text" to="/about">
            Let’s work together{" "}<img src="/assets/img/icon/long-arrow-right.png" alt="img" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;