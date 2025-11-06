 
import { Accordion } from "react-bootstrap";

const FAQ = () => {
  return (
    <div className="faq-area-1 space-bottom overflow-hidden shape-mockup-wrap">
      <div
        className="section-animation-shape1-2 shape-mockup animation-infinite background-image"
        style={{
          backgroundImage: "url('/assets/img/shape/global-line-shape2.png')",
          bottom: "0px",
        }}
      ></div>
      <div
        className="faq-bg-shape1-1 shape-mockup d-lg-block d-none"
        data-top="0"
        data-left="0"
      >
        <img src="/assets/img/bg/faq-bg-shape1-1.png" alt="img" />
      </div>
      <div className="container">
        <div className="title-area text-center">
          <span className="sub-title">
            <img src="/assets/img/icon/section-subtitle-icon.svg" alt="img" /> FAQS
          </span>
          <h2 className="sec-title">Frequently Asked Questions</h2>
        </div>
        <div className="row gy-50 gx-50">
          <div className="col-xl-6">
            <div id="faqAccordion">
              {/* Accordion items */}
              <Accordion
                defaultActiveKey="0"
                className="accordion-area homeTwo-custom-accordion-card"
              >
                <Accordion.Item eventKey="0" className="accordion-card">
                  <Accordion.Header>
                    PREPARE A CONSTRUCTION PROJECT SCHEDULE?{" "}
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="faq-text">
                      The point of using lorem ipsum is that has more-or-less
                      packages normal commercial management in construction
                      ensures the planning, execution and coordination of a
                      construction project finish these specific projects.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item className="accordion-card" eventKey="1">
                  <Accordion.Header>
                    PRODUCT DESIGN AND PLANNING!{" "}
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="faq-text">
                      The point of using lorem ipsum is that has more-or-less
                      packages normal commercial management in construction
                      ensures the planning, execution and coordination of a
                      construction project finish these specific projects.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item className="accordion-card" eventKey="2">
                  <Accordion.Header>
                    WHAT IS COMMERCIAL IN CONSTRUCTION?{" "}
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="faq-text">
                      The point of using lorem ipsum is that has more-or-less
                      packages normal commercial management in construction
                      ensures the planning, execution and coordination of a
                      construction project finish these specific projects.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item className="accordion-card" eventKey="3">
                  <Accordion.Header>
                    START A CONSTRUCTION MANAGEMENT?{" "}
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="faq-text">
                      The point of using lorem ipsum is that has more-or-less
                      packages normal commercial management in construction
                      ensures the planning, execution and coordination of a
                      construction project finish these specific projects.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item className="accordion-card" eventKey="4">
                  <Accordion.Header>
                    HOW ARE PAYMENTS HANDLED AND DEALT WITH?{" "}
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="faq-text">
                      The point of using lorem ipsum is that has more-or-less
                      packages normal commercial management in construction
                      ensures the planning, execution and coordination of a
                      construction project finish these specific projects.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item className="accordion-card" eventKey="5">
                  <Accordion.Header>
                    MEASURE QUALITY IN CONSTRUCTION PROJECTS?{" "}
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="faq-text">
                      The point of using lorem ipsum is that has more-or-less
                      packages normal commercial management in construction
                      ensures the planning, execution and coordination of a
                      construction project finish these specific projects.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>

          {/* Right side form */}
          <div className="col-xxl-4 col-xl-5">
            <div className="faq-form-wrap">
              <h4 className="faq-form-title">Ask us a question ?</h4>
              <div className="faq-form">
                <p className="faq-text">
                  The point of using lorem ipsum is that it has more-or-less
                  packages normal
                </p>
                <div className="row gy-15">
                  <div className="col-12 form-group">
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="form-control style-border3"
                    />
                  </div>
                  <div className="col-12 form-group">
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="form-control style-border3"
                    />
                  </div>
                  <div className="col-12 form-group">
                    <input
                      type="text"
                      placeholder="Phone Number"
                      className="form-control style-border3"
                    />
                  </div>
                  <div className="col-12 form-group">
                    <textarea
                      placeholder="Question or Message?"
                      className="form-control style-border3"
                    ></textarea>
                  </div>
                  <div className="col-12 form-group mb-0">
                    <button className="btn-with-icon style2">
                      GET START NOW
                      <span className="btn-icon">
                        <i className="ri-arrow-right-up-line"></i>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="faq-thumb1-1 shape-mockup">
        <img src="/assets/img/normal/faq_1-1.png" alt="img" />
      </div>
    </div>
  );
};

export default FAQ;
