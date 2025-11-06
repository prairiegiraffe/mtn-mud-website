import ContactDropdown from "../../Common/ContactDropdown/ContactDropdown";

 

const ContactAreaTwo = () => {
  return (
    <section className="contact-area-2 space-bottom overflow-hidden">
      <div className="container">
        <div
          className="contact-wrap2 space overflow-hidden shape-mockup-wrap background-image"
          style={{ backgroundImage: "url('/assets/img/bg/contact-bg3-1.png')" }}
        >
          <div
            className="section-animation-shape1-1 shape-mockup animation-infinite background-image"
            data-top="0"
            data-left="0"
            style={{
              backgroundImage: "url('/assets/img/shape/global-line-shape1.png')",
              top: '0px',
              left: '0px'
            }}
          ></div>
          <div className="row gy-60 justify-content-lg-end justify-content-center">
            <div className="col-xl-7">
              <div className="contact-form-wrap">
                <div className="title-area">
                  <span className="sub-title text-theme">
                    <img src="/assets/img/icon/section-subtitle-icon.svg" alt="img" />
                    Get Free Quote
                  </span>
                  <h2 className="sec-title">Have a project in mind?</h2>
                </div>
                <form
                   onSubmit={e => e.preventDefault()}
                  className="contact-form ajax-contact"
                >
                  <div className="row gy-4">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          id="name"
                          placeholder="Your Name"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          id="email"
                          placeholder="Email Address"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="tel"
                          className="form-control"
                          name="number"
                          id="number"
                          placeholder="Phone Number"
                        />
                      </div>
                    </div>
                    <ContactDropdown></ContactDropdown>

                    <div className="col-12">
                      <div className="form-group">
                        <textarea
                          name="message"
                          id="message"
                          cols={30}
                          rows={3}
                          className="form-control"
                          placeholder="Message..."
                        ></textarea>
                      </div>
                    </div>
                    <div className="form-btn col-12">
                      <button className="btn w-100">
                        Submit Now <i className="ri-arrow-right-up-line"></i>
                      </button>
                    </div>
                  </div>
                  <p className="form-messages mb-0 mt-3"></p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactAreaTwo;
