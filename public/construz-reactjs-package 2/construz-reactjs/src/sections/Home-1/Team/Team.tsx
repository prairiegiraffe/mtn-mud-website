import { Link } from "react-router-dom";

 
const Team = () => {
  return (
    <div className="team-area-1 space shape-mockup-wrap">
      <div
        className="section-animation-shape1-1 shape-mockup animation-infinite background-image"
        style={{
          bottom: "0px",
          backgroundImage: "url('/assets/img/shape/global-line-shape2.png')",
        }}
      ></div>
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-7 col-md-7">
            <div className="title-area text-left content-text-extra-style">
              <span className="sub-title">
                <img src="/assets/img/icon/section-subtitle-icon.svg" alt="img" />
                Our Team
              </span>
              <h2 className="sec-title">Meet our leadership</h2>
            </div>
          </div>
          <div className="col-md-auto">
            <div className="sec-btn">
              <Link to="/about" className="btn">
                View All Members <i className="ri-arrow-right-up-line"></i>
              </Link>
            </div>
          </div>
        </div>

        <div className="row gy-30 justify-content-center">
          {/* card one */}
          <div className="col-lg-4 col-md-6">
            <div
              className="team-card custom-team-card"
              style={{ backgroundImage: 'url("/assets/img/bg/team-card-bg1-1.png")' }}
            >
              <div className="team-card_content">
                <h4 className="team-card_title">
                  <Link to="/team-details">Penelopa Miller</Link>
                </h4>
                <span className="team-card_desig">Head of Production</span>
                <div className="team-social_wrap">
                  <div className="social-btn">
                    <Link to="https://facebook.com/">
                      <i className="ri-facebook-fill"></i>
                    </Link>
                    <Link to="https://www.twitter.com/">
                      <i className="ri-twitter-x-line"></i>
                    </Link>
                    <Link to="https://instagram.com/">
                      <i className="ri-instagram-line"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="team-card_img">
                <img src="/assets/img/team/team-1-1.png" alt="img" />
              </div>
              <Link to="tel:0023745671379" className="contact-btn-wrap">
                <span className="number">(+00) 347 456 1379</span>
                <div className="icon-btn">
                  <i className="ri-phone-fill"></i>
                </div>
              </Link>
            </div>
          </div>

          {/* card two */}
          <div className="col-lg-4 col-md-6">
            <div
              className="team-card custom-team-card"
              style={{ backgroundImage: "url('/assets/img/bg/team-card-bg1-1.png')" }}
            >
              <div className="team-card_content">
                <h4 className="team-card_title">
                  <Link to="/team-details">Mark Ronaldo</Link>
                </h4>
                <span className="team-card_desig">Sr. Engineer</span>
                <div className="team-social_wrap">
                  <div className="social-btn">
                    <Link to="https://facebook.com/">
                      <i className="ri-facebook-fill"></i>
                    </Link>
                    <Link to="https://www.twitter.com/">
                      <i className="ri-twitter-x-line"></i>
                    </Link>
                    <Link to="https://instagram.com/">
                      <i className="ri-instagram-line"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="team-card_img">
                <img src="/assets/img/team/team-1-2.png" alt="img" />
              </div>
              <Link to="tel:0023745671379" className="contact-btn-wrap">
                <span className="number">(+00) 347 456 1379</span>
                <div className="icon-btn">
                  <i className="ri-phone-fill"></i>
                </div>
              </Link>
            </div>
          </div>

          {/* card three */}
          <div className="col-lg-4 col-md-6">
            <div
              className="team-card custom-team-card"
              style={{ backgroundImage: 'url("/assets/img/bg/team-card-bg1-1.png")' }}
            >
              <div className="team-card_content">
                <h4 className="team-card_title">
                  <Link to="/team-details">John Maxwell</Link>
                </h4>
                <span className="team-card_desig">Project Management</span>
                <div className="team-social_wrap">
                  <div className="social-btn">
                    <Link to="https://facebook.com/">
                      <i className="ri-facebook-fill"></i>
                    </Link>
                    <Link to="https://www.twitter.com/">
                      <i className="ri-twitter-x-line"></i>
                    </Link>
                    <Link to="https://instagram.com/">
                      <i className="ri-instagram-line"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="team-card_img">
                <img src="/assets/img/team/team-1-3.png" alt="img" />
              </div>
              <Link to="tel:0023745671379" className="contact-btn-wrap">
                <span className="number">(+00) 347 456 1379</span>
                <div className="icon-btn">
                  <i className="ri-phone-fill"></i>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
