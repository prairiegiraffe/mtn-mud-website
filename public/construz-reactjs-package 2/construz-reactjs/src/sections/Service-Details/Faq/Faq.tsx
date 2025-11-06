 
import { Accordion } from "react-bootstrap";

const Faq = () => {
  return (
    <div className="faq-area-1 space overflow-hidden">
      <div className="container">
        <div className="title-area text-center">
          <h2 className="sec-title2">Your frequently asked question</h2>
        </div>
        <div className="row gy-50 gx-50 justify-content-center">
          <div className="col-xl-8">
            <Accordion defaultActiveKey="0" className="accordion-area">
              <Accordion.Item eventKey="0" className="accordion-card ">
                <Accordion.Header className="accordion-decoration">
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
                <Accordion.Header className="accordion-decoration">
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
                <Accordion.Header className="accordion-decoration">
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
                <Accordion.Header className="accordion-decoration">
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
                <Accordion.Header className="accordion-decoration">
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
                <Accordion.Header className="accordion-decoration">
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
      </div>
    </div>
  );
};

export default Faq;
