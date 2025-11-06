 
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const ServiceDetailsTwo = () => {
 
  	// progress bar js code
	const progressBarRefs = useRef<HTMLDivElement[]>([]);
	const counterRefs = useRef<HTMLSpanElement[]>([]);

	useEffect(() => {
		const bars = [
			{ targetValue: 89, duration: 2000 },
			{ targetValue: 92, duration: 2000 },
			{ targetValue: 78, duration: 2000 },
		];

		bars.forEach((bar, index) => {
			// let startTime = null;
			let startTime: number | null = null;
			const updateCounter = (timestamp: number) => {
				if (!startTime) startTime = timestamp;
				const progress = timestamp - startTime;
				const value = Math.min(
					Math.floor((progress / bar.duration) * bar.targetValue),
					bar.targetValue
				);
				// counterRefs.current[index].innerText = value;
				counterRefs.current[index].innerText = value.toString();

				if (progress < bar.duration) {
					requestAnimationFrame(updateCounter);
				} 
			};

			requestAnimationFrame(updateCounter);
		});
	}, []);



  return (
    <div className="service-details-area space-top overflow-hidden">
      <div className="container">
        <div className="row gy-30 gx-30">
          <div className="col-12">
            <div className="single-page">
              <div className="team-single-card mb-60">
                <div
                  className="team-single-card_img text-end bg-smoke"
                  style={{
                    backgroundImage: "url('/assets/img/bg/team-card-bg1-1.png')",
                  }}
                >
                  <img src="/assets/img/team/team-1-1.png" alt="img" />
                </div>
                <div
                  className="team-about-card_box"
                  style={{
                    backgroundImage:
                      "url('/assets/img/team/team-details-card-bg-1.png')",
                  }}
                >
                  <span className="team-about-card_subtitle">Hello I'm</span>
                  <h3 className="team-about-card_title">John Maxwell</h3>
                  <p className="team-about-card_desig">CEO of Industrie</p>
                  <div className="about-contact-wrap">
                    <div className="about-contact">
                      <h6 className="about-contact-title">Department:</h6>
                      <p className="about-contact-text">Engineer</p>
                    </div>
                    <div className="about-contact">
                      <h6 className="about-contact-title">Experience:</h6>
                      <p className="about-contact-text">10 Years</p>
                    </div>
                    <div className="about-contact">
                      <h6 className="about-contact-title">Email:</h6>
                      <Link
                        to="mailto:john.maxwell@gmail.com"
                        className="about-contact-text"
                      >
                        john.maxwell@gmail.com
                      </Link>
                    </div>
                    <div className="about-contact">
                      <h6 className="about-contact-title">Phone:</h6>
                      <Link
                        to="tel:+19562365478"
                        className="about-contact-text"
                      >
                        +855 (2669) 1234
                      </Link>
                    </div>
                  </div>
                  <div className="social-btn style6">
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
              <p className="mb-50">
                <span className="text-theme d-inline-flex fw-semibold">
                  Hello There!
                </span>
                my name is Jhon Maxwell. I am a Engineer of Construction LTD.
                Collaborative administrate empowered markets via plug-and-play
                networks. Proactively envisioned multimedia based expertise and
                cross-media growth strategies seamlessly visualize quality
                intellectual capital without superior.
              </p>

              <div className="row gy-40 gx-100 justify-content-between">
                <div className="col-xl-6">
                  <h3 className="fw-semibold mb-20">Professional Skills</h3>
                  <p className="mb-25">
                    Industry's standard dummy text ever since the 1500s, when an
                    unknown printer took a galley of type and scrambled it to
                    make a type specimen book.
                  </p>

                  {/* progress bar section here */}
                  <div className="skill-feature style3">
                    <h3 className="skill-feature_title">Construction Works</h3>
                    <div className="progress">
                      <div
                        className="progress-bar progress-barOne"
                        ref={() => (progressBarRefs.current[0]  as HTMLDivElement)}
                        style={{ width: "89%" }}
                      ></div>
                      <div className="progress-value">
                        <span
                          className="counter-number counter-numberOne"
                          ref={() => (counterRefs.current[0] as HTMLSpanElement)}
                          data-count="89"
                        >
                          89
                        </span>
                        %
                      </div>
                    </div>
                  </div>

                  {/* progress bar section here */}
                  <div className="skill-feature style3">
                    <h3 className="skill-feature_title">Building Services</h3>
                    <div className="progress">
                      <div
                        className="progress-bar progress-barTwo"
                        ref={() => (progressBarRefs.current[1] as  HTMLDivElement)}
                        style={{ width: "92%" }}
                      ></div>
                      <div className="progress-value">
                        <span
                          className="counter-number counter-numberTwo"
                          ref={() => (counterRefs.current[1] as HTMLSpanElement)}
                          data-count="92"
                        >
                          92
                        </span>
                        %
                      </div>
                    </div>
                  </div>

                  {/* progress bar section here */}
                  <div className="skill-feature style3">
                    <h3 className="skill-feature_title">Industrial Solution</h3>
                    <div className="progress">
                      <div
                        className="progress-bar progress-barThree"
                        ref={() => (progressBarRefs.current[2] as HTMLDivElement)}
                        style={{ width: "78%" }}
                      ></div>
                      <div className="progress-value">
                        <span
                          className="counter-number counter-numberThree"
                          ref={() => (counterRefs.current[2] as HTMLSpanElement)}
                          data-count="78"
                        >
                          78
                        </span>
                        %
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6">
                  <h3 className="fw-semibold mb-20">Education Experience</h3>
                  <p className="mb-35">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <div className="education-card-wrap">
                    <div className="education-card">
                      <div className="education-card-number">1st</div>
                      <div className="education-card-details">
                        <h4 className="education-card-title">
                          Business Expert
                        </h4>
                        <p className="education-card-text">
                          2024 Present
                          <span className="text-theme">Google Co.</span>
                        </p>
                      </div>
                    </div>
                    <div className="education-card">
                      <div className="education-card-number">2nd</div>
                      <div className="education-card-details">
                        <h4 className="education-card-title">
                          Experience Employee
                        </h4>
                        <p className="education-card-text">
                          2015 - 2021
                          <span className="text-theme">Themeforest</span>
                        </p>
                      </div>
                    </div>
                    <div className="education-card">
                      <div className="education-card-number">3rd</div>
                      <div className="education-card-details">
                        <h4 className="education-card-title">
                          Finance Manager
                        </h4>
                        <p className="education-card-text">
                          2014 - 2010
                          <span className="text-theme">Rainbow IT</span>
                        </p>
                      </div>
                    </div>
                    <div className="education-card">
                      <div className="education-card-number">4th</div>
                      <div className="education-card-details">
                        <h4 className="education-card-title">
                          Junior Consultant
                        </h4>
                        <p className="education-card-text">
                          2009 - 2005
                          <span className="text-theme">Uplabs LTD</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsTwo;
