 
import Slider from "react-slick"; 
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import CircleTextTwo from "../../Common/CircleTextTwo/CircleTextTwo";
// import CircleTextTwo from "../../Common/CircleTextTwo";

const Hero = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const sliderRef1 = useRef(null);
  const sliderRef2 = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  console.log(nav1, nav2);



  const shape1Style = {
    backgroundImage: "url('/img/shape/global-line-shape1.png')",
  };

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    dotsClass: "custom-dots",
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: true,
    speed: 1500,
    autoplay: true,
    autoplaySpeed: 7000,
    arrows: false,
    // afterChange: current => setActiveSlide(current),
    afterChange: (current: number) => setActiveSlide(current),
    responsive: [
      {
        breakpoint: 767,
        settings: {
          dots: false,
        },
      },
      {
        breakpoint: 766,
        settings: {
          dots: false,
        },
      },
    ],
  };

  const settingsTwo = {
    dots: false,
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: true,
    speed: 1500,
    autoplay: true,
    autoplaySpeed: 7000,
    arrows: false,
    afterChange: (current : number) => setActiveSlide(current),
    responsive: [
      {
        breakpoint: 767,
        settings: {
          dots: false,
        },
      },
      {
        breakpoint: 766,
        settings: {
          dots: false,
        },
      },
    ],
  };

  useEffect(() => {
    setNav1(sliderRef1?.current);
    setNav2(sliderRef2?.current);
  }, []);

  return (
    <>
      <div
        className="hero-wrapper hero-2 shape-mockup-wrap home-two-hero-space home-two-slider-navigation-dots"
        id="hero"
      >
        <div
          className="section-animation-shape1-1 shape-mockup animation-infinite background-image"
          style={shape1Style}
        ></div>
        <div
          className="section-animation-shape1-2 shape-mockup animation-infinite background-image"
          style={shape1Style}
        ></div>
 
        <Slider
          {...settings} 
          ref={sliderRef1}
          className="hero-slider2 global-carousel"
          data-asnavfor=".hero-number-slider2"
        >
          <div className="hero-slide">
            <div className="container">
              <div className="hero-style2 hero-two-extra-style">
                <div className="row">
                  <div className="col-lg-12">
                    <h1
                      className={`hero-title slider-custom-anim-left ${activeSlide == 0 ? 'slider-animated' : ''}`}
                      style={{ animationDelay: '0.1s' }}
                    >
                      RECONSTRUCTION <span className="year">{new Date().getFullYear()}</span>
                    </h1>
                  </div>
                  <div className="col-lg-7">
                    <div className={`hero-thumb text-center slideinleft ${activeSlide == 0 ? 'slider-animated' : ''}`} style={{ animationDelay: '0.4s' }} >
                      <img src="/assets/img/hero/hero_shape_1_1.png" alt="img" />
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <p className={`hero-text slider-custom-anim-left ${activeSlide == 0 ? 'slider-animated' : ''}`} style={{ animationDelay: '0.2s' }}>We craft unique digital experiences. With more than 7 years of expertise we design and code clean websites.</p>
                    <div className={`hero-tag slideinup ${activeSlide == 0 ? 'slider-animated' : ''}`} style={{ animationDelay: '0.4s' }}>
                      <div className="about-two__video-box">
                        <div className="round-text">
                          <CircleTextTwo />
                        </div>
                        <Link to="/contact" className="hero-tag_icon">
                          <i className="ri-arrow-right-up-line"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-slide">
            <div className="container">
              <div className="hero-style2">
                <div className="row">
                  <div className="col-lg-12">
                    <h1
                      className={`hero-title slider-custom-anim-left ${activeSlide == 1 ? 'slider-animated' : ''}`}
                      style={{ animationDelay: '0.1s' }}
                    >
                      ELITE RENOVATION <span className="year">{new Date().getFullYear()}</span>
                    </h1>
                  </div>
                  <div className="col-lg-7">
                    <div
                      className={`hero-thumb text-center slideinleft ${activeSlide == 1 ? 'slider-animated' : ''}`}
                      style={{ animationDelay: '0.4s' }}
                    >
                      <img src="/assets/img/hero/hero_thumb_2_1.png" alt="img" />
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <p
                      className={`hero-text slider-custom-anim-left ${activeSlide == 1 ? 'slider-animated' : ''}`} style={{ animationDelay: '0.2s' }}
                    >
                      We craft unique digital experiences. With more than 7
                      years of expertise we design and code clean websites.
                    </p>
                    <div
                      className={`hero-tag slideinup ${activeSlide == 1 ? 'slider-animated' : ''}`} style={{ animationDelay: '0.4s' }}
                    >
                      <div className="about-two__video-box">
                        <div className="round-text">
                          <CircleTextTwo />
                        </div>
                        <Link to="/contact" className="hero-tag_icon">
                          <i className="ri-arrow-right-up-line"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-slide">
            <div className="container">
              <div className="hero-style2">
                <div className="row">
                  <div className="col-lg-12">
                    <h1
                      className={`hero-title slider-custom-anim-left ${activeSlide == 2 ? 'slider-animated' : ''}`}
                      style={{ animationDelay: '0.1s' }}
                    >
                      INDUSTRY SOLUTION <span className="year">{new Date().getFullYear()}</span>
                    </h1>
                  </div>
                  <div className="col-lg-7">
                    <div
                      className={`hero-thumb text-center slideinleft ${activeSlide == 2 ? 'slider-animated' : ''}`}
                      style={{ animationDelay: '0.4s' }}
                    >
                      <img src="/assets/img/hero/hero_thumb_2_2.png" alt="img" />
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <p
                      className={`hero-text slider-custom-anim-left ${activeSlide == 2 ? 'slider-animated' : ''}`} style={{ animationDelay: '0.2s' }}
                    >
                      We craft unique digital experiences. With more than 7
                      years of expertise we design and code clean websites.
                    </p>
                    <div
                      className={`hero-tag slideinup ${activeSlide == 2 ? 'slider-animated' : ''}`} style={{ animationDelay: '0.4s' }}
                    >
                      <div className="about-two__video-box">
                        <div className="round-text">
                          <CircleTextTwo />
                        </div>
                        <Link to="/contact" className="hero-tag_icon">
                          <i className="ri-arrow-right-up-line"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>


        <div className="container">
           
          <Slider
            {...settingsTwo} 
            ref={sliderRef2}
            slidesToShow={1}
            swipeToSlide={true}
            focusOnSelect={true}
            className="row global-carousel hero-number-slider2"
            data-asnavfor=".hero-slider2"
          >
            <div>
              <div className="col-lg-auto">
                <div className="slider-number">1. Construction</div>
              </div>
            </div>
            <div>
              <div className="col-lg-auto">
                <div className="slider-number">2. Renovation</div>
              </div>
            </div>
            <div>
              <div className="col-lg-auto">
                <div className="slider-number">3. Industry</div>
              </div>
            </div>
          </Slider>
        </div>


        <div
          className="hero-shape2-1 shape-mockup jump-reverse d-lg-block d-none"
          style={{ bottom: "5%", left: "0px" }}
        >
          <img src="/assets/img/hero/hero_shape_2_1.png" alt="img" />
        </div>
        <div
          className="hero-shape2-2 shape-mockup jump d-sm-block d-none"
          style={{ top: "13%", right: "0px" }}
        >
          <img src="/assets/img/hero/hero_shape_2_2.png" alt="img" />
        </div>
        <div
          className="hero-shape2-3 shape-mockup jump-reverse d-xl-block d-none"
          style={{ bottom: "0px", right: "0px" }}
        >
          <img src="/assets/img/hero/hero_shape_2_3.png" alt="img" />
        </div>
      </div>
    </>
  );
};

export default Hero;
