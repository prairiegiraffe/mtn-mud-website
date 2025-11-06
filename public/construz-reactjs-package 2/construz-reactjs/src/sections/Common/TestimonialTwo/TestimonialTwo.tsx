 

import Slider from "react-slick";

const TestimonialTwo = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    focusOnSelect: true,
    arrows: false,
    centerMode: true,
    centerPadding: "0",
    initialSlide: 1,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 2, dots: false } },
      { breakpoint: 576, settings: { slidesToShow: 1, dots: false } },
    ],
  };
  return (
    <div className="testimonial-area-3 overflow-hidden">
      <div className="container">
        {/* header testimonial */}
        <div className="row justify-content-between">
          <div className="col-lg-7 testimonial-extra-padding">
            <div className="title-area text-lg-start text-center services-title-area testimonial-area-bottom-space-row content-text-extra-style service-testimonial-align">
              <span className="sub-title">
                <img src="/assets/img/icon/section-subtitle-icon.svg" alt="" />
                Testimonials
              </span>
              <h2 className="sec-title">What client saying about us</h2>
            </div>
          </div>
          <div className="col-lg-auto">
            <div className="sec-btn btn-wrap">
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
        </div>
 
        <Slider
          {...settings}
          className="row global-carousel testi-slider3 slider-shadow services-slider"
          data-slide-show="3"
          data-lg-slide-show="2"
          data-dots="true"
          data-xl-dots="true"
          data-ml-dots="true"
          data-center-mode="true"
          data-xl-center-mode="true"
          data-ml-center-mode="true"
        >
          {/* per slide */}
          <div className="col-lg-4">
            <div className="testi-card style3 client-click-slider-gap">
              <div className="testi-card-thumb">
                <img src="/assets/img/testimonial/testi_2_2.png" alt="img" />
                <div className="media-body">
                  <h4 className="testi-card_title">Best Construction!</h4>
                  <div className="testi-card_review">
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                  </div>
                </div>
              </div>
              <div className="testi-card_content">
                <p className="testi-card_text">
                  We craft unique digital experiences. With more than 7 years of
                  expertise we design and code clean.
                </p>
                <div className="testi-card-profile">
                  <h4 className="testi-profile-title">Joshua Pul</h4>
                  <span className="testi-profile-desig">/ CEO Industry</span>
                </div>
              </div>
              <div className="quote-icon">
                <img src="/assets/img/icon/quote3.svg" alt="img" />
              </div>
            </div>
          </div>

          {/* per slide */}
          <div className="col-lg-4">
            <div className="testi-card style3 client-click-slider-gap">
              <div className="testi-card-thumb">
                <img src="/assets/img/testimonial/testi_2_3.png" alt="img" />
                <div className="media-body">
                  <h4 className="testi-card_title">Good Services!</h4>
                  <div className="testi-card_review">
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                  </div>
                </div>
              </div>
              <div className="testi-card_content">
                <p className="testi-card_text">
                  We craft unique digital experiences. With more than 7 years of
                  expertise we design and code clean.
                </p>
                <div className="testi-card-profile">
                  <h4 className="testi-profile-title">Aya Nikola</h4>
                  <span className="testi-profile-desig">/ Sr. Manager</span>
                </div>
              </div>
              <div className="quote-icon">
                <img src="/assets/img/icon/quote3.svg" alt="img" />
              </div>
            </div>
          </div>

          {/* per slide */}
          <div className="col-lg-4">
            <div className="testi-card style3 client-click-slider-gap">
              <div className="testi-card-thumb">
                <img src="/assets/img/testimonial/testi_2_1.png" alt="img" />
                <div className="media-body">
                  <h4 className="testi-card_title">Best Company!</h4>
                  <div className="testi-card_review">
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                  </div>
                </div>
              </div>
              <div className="testi-card_content">
                <p className="testi-card_text">
                  We craft unique digital experiences. With more than 7 years of
                  expertise we design and code clean.
                </p>
                <div className="testi-card-profile">
                  <h4 className="testi-profile-title">Christopher</h4>
                  <span className="testi-profile-desig">/ Engineer</span>
                </div>
              </div>
              <div className="quote-icon">
                <img src="/assets/img/icon/quote3.svg" alt="img" />
              </div>
            </div>
          </div>

          {/* per slide */}
          <div className="col-lg-4">
            <div className="testi-card style3 client-click-slider-gap">
              <div className="testi-card-thumb">
                <img src="/assets/img/testimonial/testi_2_2.png" alt="img" />
                <div className="media-body">
                  <h4 className="testi-card_title">Best Construction!</h4>
                  <div className="testi-card_review">
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                  </div>
                </div>
              </div>
              <div className="testi-card_content">
                <p className="testi-card_text">
                  We craft unique digital experiences. With more than 7 years of
                  expertise we design and code clean.
                </p>
                <div className="testi-card-profile">
                  <h4 className="testi-profile-title">Joshua Pul</h4>
                  <span className="testi-profile-desig">/ CEO Industry</span>
                </div>
              </div>
              <div className="quote-icon">
                <img src="/assets/img/icon/quote3.svg" alt="img" />
              </div>
            </div>
          </div>

          {/* per slide */}
          <div className="col-lg-4">
            <div className="testi-card style3 client-click-slider-gap">
              <div className="testi-card-thumb">
                <img src="/assets/img/testimonial/testi_2_3.png" alt="img" />
                <div className="media-body">
                  <h4 className="testi-card_title">Good Services!</h4>
                  <div className="testi-card_review">
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                  </div>
                </div>
              </div>
              <div className="testi-card_content">
                <p className="testi-card_text">
                  We craft unique digital experiences. With more than 7 years of
                  expertise we design and code clean.
                </p>
                <div className="testi-card-profile">
                  <h4 className="testi-profile-title">Aya Nikola</h4>
                  <span className="testi-profile-desig">/ Sr. Manager</span>
                </div>
              </div>
              <div className="quote-icon">
                <img src="/assets/img/icon/quote3.svg" alt="img" />
              </div>
            </div>
          </div>

          {/* per slide */}
          <div className="col-lg-4">
            <div className="testi-card style3 client-click-slider-gap">
              <div className="testi-card-thumb">
                <img src="/assets/img/testimonial/testi_2_1.png" alt="img" />
                <div className="media-body">
                  <h4 className="testi-card_title">Best Company!</h4>
                  <div className="testi-card_review">
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                  </div>
                </div>
              </div>
              <div className="testi-card_content">
                <p className="testi-card_text">
                  We craft unique digital experiences. With more than 7 years of
                  expertise we design and code clean.
                </p>
                <div className="testi-card-profile">
                  <h4 className="testi-profile-title">Christopher</h4>
                  <span className="testi-profile-desig">/ Engineer</span>
                </div>
              </div>
              <div className="quote-icon">
                <img src="/assets/img/icon/quote3.svg" alt="img" />
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialTwo;
