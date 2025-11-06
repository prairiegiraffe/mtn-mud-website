import { Link } from "react-router-dom";

 

const ContactArea = () => {
  return (
    <section className="contact-page-area space">
      <div className="container">
        <div className="row gy-4 justify-content-center">
          <div className="col-md-6 col-lg-4">
            <div className="contact-page-card bg-smoke">
              <div className="contact-page-card-details">
                <h4 className="contact-page-card_title">Main Office</h4>
                <div className="contact-page-card-text">
                  <i className="ri-phone-line"></i>
                  <Link
                    className="contact-page-card_link"
                    to="tel:0022730240369"
                  >
                    +00 (22) 730 240 369
                  </Link>
                </div>
                <div className="contact-page-card-text">
                  <i className="ri-mail-line"></i>
                  <Link
                    className="contact-page-card_link"
                    to="mailto:construz.info@gmail.com"
                  >
                    construz.info@gmail.com
                  </Link>
                </div>
                <div className="contact-page-card-text">
                  <i className="ri-time-line"></i>Mon - Sat 10.00 - 18.00
                </div>
              </div>
              <div className="contact-page-card-thumb">
                <img src="/assets/img/normal/contact_page1-1.png" alt="img" />
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="contact-page-card bg-smoke">
              <div className="contact-page-card-details">
                <h4 className="contact-page-card_title">London Office</h4>
                <div className="contact-page-card-text">
                  <i className="ri-phone-line"></i>
                  <Link
                    className="contact-page-card_link"
                    to="tel:0022730240369"
                  >
                    +32 (0) 800 240 458
                  </Link>
                </div>
                <div className="contact-page-card-text">
                  <i className="ri-mail-line"></i>
                  <Link
                    className="contact-page-card_link"
                    to="mailto:construz.info@gmail.com"
                  >
                    construz.info@gmail.com
                  </Link>
                </div>
                <div className="contact-page-card-text">
                  <i className="ri-time-line"></i>Mon - Sat 12.00 - 20.00
                </div>
              </div>
              <div className="contact-page-card-thumb">
                <img src="/assets/img/normal/contact_page1-2.png" alt="img" />
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="contact-page-card bg-smoke">
              <div className="contact-page-card-details">
                <h4 className="contact-page-card_title">New York City</h4>
                <div className="contact-page-card-text">
                  <i className="ri-phone-line"></i>
                  <Link
                    className="contact-page-card_link"
                    to="tel:0022730240369"
                  >
                    +32 (0) 800 240 458
                  </Link>
                </div>
                <div className="contact-page-card-text">
                  <i className="ri-mail-line"></i>
                  <Link
                    className="contact-page-card_link"
                    to="mailto:construz.info@gmail.com"
                  >
                    construz.info@gmail.com
                  </Link>
                </div>
                <div className="contact-page-card-text">
                  <i className="ri-time-line"></i>Mon - Sat 08.00 - 16.00
                </div>
              </div>
              <div className="contact-page-card-thumb">
                <img src="/assets/img/normal/contact_page1-3.png" alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactArea;
