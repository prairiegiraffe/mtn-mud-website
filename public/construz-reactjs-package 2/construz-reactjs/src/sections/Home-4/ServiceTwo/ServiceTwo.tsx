 
import { Link } from "react-router-dom";
import Slider from "react-slick";

const ServiceTwo = () => {
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    dotsClass: "service-card-dots",
    speed: 1500,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          focusOnSelect: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  return (
    <div className="space-hd-bottom" id="service-sec">
      <div
        className="service-area-6 space overflow-hidden position-relative shape-mockup-wrap background-image"
        style={{ backgroundImage: "url('/assets/img/bg/service-bg6-1.png')" }}
      >
        <div
          className="section-animation-shape1-1 shape-mockup animation-infinite background-image"
          data-top="0"
          style={{
            backgroundImage: "url('/assets/img/shape/global-line-shape1.png')",
            top: '0px'
          }}
        ></div>

        <div className="container">
          <div className="service-card-wrap6">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="title-area text-center mb-50">
                  <span className="sub-title text-theme">
                    WHAT WE DO <i className="ri-arrow-right-down-line"></i>
                  </span>
                  <h2 className="sec-title">
                    We provide our services all over the world
                  </h2>
                </div>
              </div>
            </div>
 
            <Slider
              {...settings}
              className="row global-carousel service-slider6 slick-dotted"
            >
              <div className="col-xxl-auto col-xl-4 col-md-6">
                <div
                  className="service-card style6 background-image"
                  style={{
                    backgroundImage: "url('/assets/img/bg/service-card-bg6-1.png')",
                    margin: "0rem 0.75rem",
                  }}
                >
                  <div className="service-card-number">N.01</div>
                  <div
                    className="service-card-thumb bg-mask"
                    style={{
                      maskImage: "url('/assets/img/service/service_thumb6_mask.png')",
                    }}
                  >
                    <img src="/assets/img/service/service_thumb6_1.png" alt="img" />
                  </div>
                  <div className="service-card_content">
                    <div className="service-card_icon">
                      <img src="/assets/img/icon/service-icon2-1.svg" alt="img" />
                    </div>
                    <h4 className="service-card_title">
                      <Link to="/service-details">
                        Architectural Design
                      </Link>
                    </h4>
                    <p className="service-card_text">
                      We craft unique digital experiences with more than 7 years
                      of expertise we design{" "}
                    </p>
                    <div className="btn-group">
                      <Link to="/service" className="btn">
                        EXPLORE SERVICE{" "}
                        <i className="ri-arrow-right-up-line"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-auto col-xl-4 col-md-6">
                <div
                  className="service-card style6 background-image"
                  style={{
                    backgroundImage: "url('/assets/img/bg/service-card-bg6-1.png')",
                    margin: "0rem 0.75rem",
                  }}
                >
                  <div className="service-card-number">N.02</div>
                  <div
                    className="service-card-thumb bg-mask"
                    style={{
                      maskImage: "url('/assets/img/service/service_thumb6_mask.png')",
                    }}
                  >
                    <img src="/assets/img/service/service_thumb6_2.png" alt="img" />
                  </div>
                  <div className="service-card_content">
                    <div className="service-card_icon">
                      <img src="/assets/img/icon/service-icon2-2.svg" alt="img" />
                    </div>
                    <h4 className="service-card_title">
                      <Link to="/service-details">
                        Project Management
                      </Link>
                    </h4>
                    <p className="service-card_text">
                      We craft unique digital experiences with more than 7 years
                      of expertise we design{" "}
                    </p>
                    <div className="btn-group">
                      <Link to="/service" className="btn">
                        EXPLORE SERVICE{" "}
                        <i className="ri-arrow-right-up-line"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-auto col-xl-4 col-md-6">
                <div
                  className="service-card style6 background-image"
                  style={{
                    backgroundImage: "url('/assets/img/bg/service-card-bg6-1.png')",
                    margin: "0rem 0.75rem",
                  }}
                >
                  <div className="service-card-number">N.03</div>
                  <div
                    className="service-card-thumb bg-mask"
                    style={{
                      maskImage: "url('/assets/img/service/service_thumb6_mask.png')",
                    }}
                  >
                    <img src="/assets/img/service/service_thumb6_3.png" alt="img" />
                  </div>
                  <div className="service-card_content">
                    <div className="service-card_icon">
                      <img src="/assets/img/icon/service-icon2-3.svg" alt="img" />
                    </div>
                    <h4 className="service-card_title">
                      <Link to="/service-details">
                        Interior Design
                      </Link>
                    </h4>
                    <p className="service-card_text">
                      We craft unique digital experiences with more than 7 years
                      of expertise we design{" "}
                    </p>
                    <div className="btn-group">
                      <Link to="/service" className="btn">
                        EXPLORE SERVICE{" "}
                        <i className="ri-arrow-right-up-line"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-auto col-xl-4 col-md-6">
                <div
                  className="service-card style6 background-image"
                  style={{
                    backgroundImage: "url('/assets/img/bg/service-card-bg6-1.png')",
                    margin: "0rem 0.75rem",
                  }}
                >
                  <div className="service-card-number">N.01</div>
                  <div
                    className="service-card-thumb bg-mask"
                    style={{
                      maskImage: "url('/assets/img/service/service_thumb6_mask.png')",
                    }}
                  >
                    <img src="/assets/img/service/service_thumb6_1.png" alt="img" />
                  </div>
                  <div className="service-card_content">
                    <div className="service-card_icon">
                      <img src="/assets/img/icon/service-icon2-1.svg" alt="img" />
                    </div>
                    <h4 className="service-card_title">
                      <Link to="/service-details">
                        Architectural Design
                      </Link>
                    </h4>
                    <p className="service-card_text">
                      We craft unique digital experiences with more than 7 years
                      of expertise we design{" "}
                    </p>
                    <div className="btn-group">
                      <Link to="/service" className="btn">
                        EXPLORE SERVICE{" "}
                        <i className="ri-arrow-right-up-line"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-auto col-xl-4 col-md-6">
                <div
                  className="service-card style6 background-image"
                  style={{
                    backgroundImage: "url('/assets/img/bg/service-card-bg6-1.png')",
                    margin: "0rem 0.75rem",
                  }}
                >
                  <div className="service-card-number">N.02</div>
                  <div
                    className="service-card-thumb bg-mask"
                    style={{
                      maskImage: "url('/assets/img/service/service_thumb6_mask.png')",
                    }}
                  >
                    <img src="/assets/img/service/service_thumb6_2.png" alt="img" />
                  </div>
                  <div className="service-card_content">
                    <div className="service-card_icon">
                      <img src="/assets/img/icon/service-icon2-2.svg" alt="img" />
                    </div>
                    <h4 className="service-card_title">
                      <Link to="/service-details">
                        Project Management
                      </Link>
                    </h4>
                    <p className="service-card_text">
                      We craft unique digital experiences with more than 7 years
                      of expertise we design{" "}
                    </p>
                    <div className="btn-group">
                      <Link to="/service" className="btn">
                        EXPLORE SERVICE{" "}
                        <i className="ri-arrow-right-up-line"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-auto col-xl-4 col-md-6">
                <div
                  className="service-card style6 background-image"
                  style={{
                    backgroundImage: "url('/assets/img/bg/service-card-bg6-1.png')",
                    margin: "0rem 0.75rem",
                  }}
                >
                  <div className="service-card-number">N.03</div>
                  <div
                    className="service-card-thumb bg-mask"
                    style={{
                      maskImage: "url('/assets/img/service/service_thumb6_mask.png')",
                    }}
                  >
                    <img src="/assets/img/service/service_thumb6_3.png" alt="img" />
                  </div>
                  <div className="service-card_content">
                    <div className="service-card_icon">
                      <img src="/assets/img/icon/service-icon2-3.svg" alt="img" />
                    </div>
                    <h4 className="service-card_title">
                      <Link to="/service-details">
                        Interior Design
                      </Link>
                    </h4>
                    <p className="service-card_text">
                      We craft unique digital experiences with more than 7 years
                      of expertise we design{" "}
                    </p>
                    <div className="btn-group">
                      <Link to="/service" className="btn">
                        EXPLORE SERVICE{" "}
                        <i className="ri-arrow-right-up-line"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceTwo;
