import { Link } from "react-router-dom";

 

const Contact = () => {
  return (
    <section
      className="contact-area-1 space bg-title overflow-hidden shape-mockup-wrap background-image"
      id="contact-sec"
      style={{ backgroundImage: "url('/assets/img/bg/contact-bg1-1.png')" }}
    >
      <div
        className="section-animation-shape1-1 shape-mockup animation-infinite style-gray background-image"
        style={{ backgroundImage: "url('/assets/img/shape/global-line-shape1.png')", top: '0px' }}
      ></div>
      <div className="container">
        <div className="row gy-60 flex-row-reverse justify-content-lg-between justify-content-center align-items-center">
          <div className="col-xl-5">
            <div className="contact-thumb1-1">
              <img src="/assets/img/normal/contact_1-1.png" alt="imh" />
            </div>
          </div>
          <div className="col-xl-7">
            <div className="title-area">
              <span className="sub-title">
                <img src="/assets/img/icon/section-subtitle-icon.svg" alt="img" />
                <span className="text-white">Contact Us</span>
              </span>
              <h2 className="sec-title text-white">
                HAVE A PROJECT IN MIND? CONTACT WITH US TODAY
              </h2>
              <p className="text-white">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form by
                injected humour.
              </p>
            </div>
            <div className="row gy-60">
              <div className="col-lg-6">
                <div className="contact-grid-wrap">
                  <div className="contact-grid-icon">
                    <img src="/assets/img/icon/contact-icon1-1.svg" alt="img" />
                  </div>
                  <div className="contact-grid-details">
                    <h4 className="contact-grid-title">New York</h4>
                    <p className="contact-grid-text">
                      92 los Angle Street, Saba Carpet Antiques Store, USA
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="contact-grid-wrap">
                  <div className="contact-grid-icon">
                    <img src="/assets/img/icon/contact-icon1-2.svg" alt="img" />
                  </div>
                  <div className="contact-grid-details">
                    <h4 className="contact-grid-title">Phone Number</h4>
                    <p className="contact-grid-text">
                      <Link to="tel:225515792670">(+22) 551-579-2670</Link>
                    </p>
                    <p className="contact-grid-text">
                      <Link to="tel:002345672569">+ (00) 234-567-2569</Link>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="contact-grid-wrap">
                  <div className="contact-grid-icon">
                    <img src="/assets/img/icon/contact-icon1-3.svg" alt="img" />
                  </div>
                  <div className="contact-grid-details">
                    <h4 className="contact-grid-title">Email Address</h4>
                    <p className="contact-grid-text">Response within 2 hour</p>
                    <p className="contact-grid-text">
                      <Link to="mailto:support@construz.com">
                        support@construz.com
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="contact-grid-wrap">
                  <div className="contact-grid-icon">
                    <img src="/assets/img/icon/contact-icon1-4.svg" alt="img" />
                  </div>
                  <div className="contact-grid-details">
                    <h4 className="contact-grid-title">Get Connected</h4>
                    <div className="social-btn style5 mt-10">
                      <Link to="https://www.twitter.com/">
                        <i className="ri-twitter-x-line"></i>
                      </Link>
                      <Link to="https://instagram.com/">
                        <i className="ri-instagram-line"></i>
                      </Link>
                      <Link to="https://facebook.com/">
                        <i className="ri-facebook-fill"></i>
                      </Link>
                      <Link to="https://linkedin.com/">
                        <i className="ri-linkedin-fill"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
