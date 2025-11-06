 
import { Link } from "react-router-dom";
import Slider from "react-slick";

const ClientThree = () => {
  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 5000,
    arrows: false,
    centerMode: true,
    dots: false,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 4 } },
      { breakpoint: 992, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 576, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div
      className="client-area-1 text-center space overflow-hidden shape-mockup-wrap background-image"
      style={{ backgroundImage: "url('/assets/img/bg/client-bg1-1.png')" }}
      data-overlay="title"
      data-opacity="9"
    >
      <div
        className="client_shape_1-1 shape-mockup jump-reverse"
        style={{ bottom: '0%', right: '-6%' }}
      >
        <img src="/assets/img/shape/client-bg-shape1.png" alt="img" />
      </div>
      <div className="container">
        <div className="title-area text-center">
          <span className="sub-title text-white">
            <img src="/assets/img/icon/section-subtitle-icon.svg" alt="img" />
            Happy Clients
          </span>
          <h2 className="sec-title text-white">Our trusted partners</h2>
        </div>
         
        <Slider {...settings} className="row global-carousel client-slider1">
          <div className="col-lg-auto">
            <div className="client-logo">
              <Link to="/home-1">
                <img src="/assets/img/client/client-1-1.svg" alt="img" />
              </Link>
            </div>
          </div>
          <div className="col-lg-auto">
            <div className="client-logo">
              <Link to="/home-1">
                <img src="/assets/img/client/client-1-2.svg" alt="img" />
              </Link>
            </div>
          </div>
          <div className="col-lg-auto">
            <div className="client-logo">
              <Link to="/home-1">
                <img src="/assets/img/client/client-1-3.svg" alt="img" />
              </Link>
            </div>
          </div>
          <div className="col-lg-auto">
            <div className="client-logo">
              <Link to="/home-1">
                <img src="/assets/img/client/client-1-4.svg" alt="img" />
              </Link>
            </div>
          </div>
          <div className="col-lg-auto">
            <div className="client-logo">
              <Link to="/home-1">
                <img src="/assets/img/client/client-1-5.svg" alt="img" />
              </Link>
            </div>
          </div>
          <div className="col-lg-auto">
            <div className="client-logo">
              <Link to="/home-1">
                <img src="/assets/img/client/client-1-1.svg" alt="img" />
              </Link>
            </div>
          </div>
          <div className="col-lg-auto">
            <div className="client-logo">
              <Link to="/home-1">
                <img src="/assets/img/client/client-1-2.svg" alt="img" />
              </Link>
            </div>
          </div>
          <div className="col-lg-auto">
            <div className="client-logo">
              <Link to="/home-1">
                <img src="/assets/img/client/client-1-3.svg" alt="img" />
              </Link>
            </div>
          </div>
          <div className="col-lg-auto">
            <div className="client-logo">
              <Link to="/home-1">
                <img src="/assets/img/client/client-1-4.svg" alt="img" />
              </Link>
            </div>
          </div>
          <div className="col-lg-auto">
            <div className="client-logo">
              <Link to="/home-1">
                <img src="/assets/img/client/client-1-5.svg" alt="img" />
              </Link>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default ClientThree;
