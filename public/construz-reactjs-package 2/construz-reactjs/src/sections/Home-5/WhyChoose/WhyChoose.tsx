 
import { useState } from "react"; 
import { Link } from "react-router-dom";

const WhyChoose = () => {
  const [activeTab, setActiveTab] = useState("why-pill-1");

  const handleTabClick = (tabId : string) => {
    setActiveTab(tabId);
  };

  return (
    <div className="why-area-3 space-top overflow-hidden" id="service-sec">
      <div
        className="why-sec-bg3-1"
        style={{ backgroundImage: "url('/assets/img/bg/why-bg5-1.png')" }}
      ></div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="title-area text-center">
              <span className="sub-title text-theme">
                What we do <i className="ri-arrow-right-down-line"></i>
              </span>
              <h2 className="sec-title">
                We provide excellent service to our customers
              </h2>
            </div>
          </div>
        </div>
        <div className="row gy-50">
          <div className="col-xl-4">
            <ul className="why-tab-wrap nav nav-pills" role="tablist">
              <li className="nav-item">
                <button
                  className={`nav-link ${activeTab === "why-pill-1" ? "active" : ""
                    }`}
                  id="why-pill-1-tab"
                  onClick={() => handleTabClick("why-pill-1")}
                  type="button"
                  role="tab"
                  aria-controls="why-pill-1"
                  aria-selected={activeTab === "why-pill-1"}
                >
                  General construction{" "}
                  <i className="ri-arrow-right-down-line"></i>
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link ${activeTab === "why-pill-2" ? "active" : ""
                    }`}
                  id="why-pill-2-tab"
                  onClick={() => handleTabClick("why-pill-2")}
                  type="button"
                  role="tab"
                  aria-controls="why-pill-2"
                  aria-selected={activeTab === "why-pill-2"}
                >
                  Property maintenance{" "}
                  <i className="ri-arrow-right-down-line"></i>
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link ${activeTab === "why-pill-3" ? "active" : ""
                    }`}
                  id="why-pill-3-tab"
                  onClick={() => handleTabClick("why-pill-3")}
                  type="button"
                  role="tab"
                  aria-controls="why-pill-3"
                  aria-selected={activeTab === "why-pill-3"}
                >
                  Project management{" "}
                  <i className="ri-arrow-right-down-line"></i>
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link ${activeTab === "why-pill-4" ? "active" : ""
                    }`}
                  id="why-pill-4-tab"
                  onClick={() => handleTabClick("why-pill-4")}
                  type="button"
                  role="tab"
                  aria-controls="why-pill-4"
                  aria-selected={activeTab === "why-pill-4"}
                >
                  Renovation & Remodeling{" "}
                  <i className="ri-arrow-right-down-line"></i>
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link ${activeTab === "why-pill-5" ? "active" : ""
                    }`}
                  id="why-pill-5-tab"
                  onClick={() => handleTabClick("why-pill-5")}
                  type="button"
                  role="tab"
                  aria-controls="why-pill-5"
                  aria-selected={activeTab === "why-pill-5"}
                >
                  Preconstruction <i className="ri-arrow-right-down-line"></i>
                </button>
              </li>
            </ul>
          </div>
          <div className="col-xl-8">
            <div className="tab-content custom-animation">
              <div
                className={`tab-pane fade ${activeTab === "why-pill-1" ? "show active custom-fadeIn" : ""
                  }`}
                id="why-pill-1"
                role="tabpanel"
                aria-labelledby="why-pill-1-tab"
              >
                <div className="row gx-80 gy-40 align-items-center">
                  <div className="col-lg-5">
                    <div className="why-thumb-wrap3-1">
                      <div className="why-tab-thumb">
                        <img src="/assets/img/why/why-tab-thumb3-1.png" alt="img" />
                      </div>
                      <div className="why-text-wrap">
                        <h4 className="title">Service</h4>
                        <hr className="line" />
                        <div className="number">01</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-7">
                    <div className="why-content-wrap">
                      <h4 className="title">About this Service</h4>
                      <h5 className="subtitle">General construction</h5>
                      <p className="text">
                        We craft unique digital experiences. With more than 7
                        years of expertise we design and code clean websites we
                        have been the trusted name in heating, air conditioning
                        and plumbing businesses.
                      </p>
                      <div className="checklist mb-35">
                        <ul>
                          <li>
                            <img
                              src="/assets/img/icon/about-checklsit-icon1-1.svg"
                              alt="img"
                            />
                            Regularly Maintaining and Organizing your Tools
                          </li>
                        </ul>
                      </div>
                      <div className="btn-group mt-35">
                        <Link to="/service" className="btn style3">
                          More Details{" "}
                          <i className="ri-arrow-right-up-line"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`tab-pane fade ${activeTab === "why-pill-2" ? "show active custom-fadeIn" : ""
                  }`}
                id="why-pill-2"
                role="tabpanel"
                aria-labelledby="why-pill-2-tab"
              >
                <div className="row gx-80 gy-40 align-items-center">
                  <div className="col-lg-5">
                    <div className="why-thumb-wrap3-1">
                      <div className="why-tab-thumb">
                        <img src="/assets/img/why/why-tab-thumb3-2.png" alt="img" />
                      </div>
                      <div className="why-text-wrap">
                        <h4 className="title">Service</h4>
                        <hr className="line" />
                        <div className="number">02</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-7">
                    <div className="why-content-wrap">
                      <h4 className="title">About this Service</h4>
                      <h5 className="subtitle">Property maintenance</h5>
                      <p className="text">
                        We craft unique digital experiences. With more than 7
                        years of expertise we design and code clean websites we
                        have been the trusted name in heating, air conditioning
                        and plumbing businesses.
                      </p>
                      <div className="checklist mb-35">
                        <ul>
                          <li>
                            <img
                              src="/assets/img/icon/about-checklsit-icon1-1.svg"
                              alt="img"
                            />
                            Regularly Maintaining and Organizing your Tools
                          </li>
                        </ul>
                      </div>
                      <div className="btn-group mt-35">
                        <Link to="/service" className="btn style3">
                          More Details{" "}
                          <i className="ri-arrow-right-up-line"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`tab-pane fade ${activeTab === "why-pill-3" ? "show active custom-fadeIn" : ""
                  }`}
                id="why-pill-3"
                role="tabpanel"
                aria-labelledby="why-pill-3-tab"
              >
                <div className="row gx-80 gy-40 align-items-center">
                  <div className="col-lg-5">
                    <div className="why-thumb-wrap3-1">
                      <div className="why-tab-thumb">
                        <img src="/assets/img/why/why-tab-thumb3-1.png" alt="img" />
                      </div>
                      <div className="why-text-wrap">
                        <h4 className="title">Service</h4>
                        <hr className="line" />
                        <div className="number">03</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-7">
                    <div className="why-content-wrap">
                      <h4 className="title">About this Service</h4>
                      <h5 className="subtitle">Project management</h5>
                      <p className="text">
                        We craft unique digital experiences. With more than 7
                        years of expertise we design and code clean websites we
                        have been the trusted name in heating, air conditioning
                        and plumbing businesses.
                      </p>
                      <div className="checklist mb-35">
                        <ul>
                          <li>
                            <img
                              src="/assets/img/icon/about-checklsit-icon1-1.svg"
                              alt="img"
                            />
                            Regularly Maintaining and Organizing your Tools
                          </li>
                        </ul>
                      </div>
                      <div className="btn-group mt-35">
                        <Link to="/service" className="btn style3">
                          More Details{" "}
                          <i className="ri-arrow-right-up-line"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`tab-pane fade ${activeTab === "why-pill-4" ? "show active custom-fadeIn" : ""
                  }`}
                id="why-pill-4"
                role="tabpanel"
                aria-labelledby="why-pill-4-tab"
              >
                <div className="row gx-80 gy-40 align-items-center">
                  <div className="col-lg-5">
                    <div className="why-thumb-wrap3-1">
                      <div className="why-tab-thumb">
                        <img src="/assets/img/why/why-tab-thumb3-2.png" alt="img" />
                      </div>
                      <div className="why-text-wrap">
                        <h4 className="title">Service</h4>
                        <hr className="line" />
                        <div className="number">04</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-7">
                    <div className="why-content-wrap">
                      <h4 className="title">About this Service</h4>
                      <h5 className="subtitle">Renovation & Remodeling</h5>
                      <p className="text">
                        We craft unique digital experiences. With more than 7
                        years of expertise we design and code clean websites we
                        have been the trusted name in heating, air conditioning
                        and plumbing businesses.
                      </p>
                      <div className="checklist mb-35">
                        <ul>
                          <li>
                            <img
                              src="/assets/img/icon/about-checklsit-icon1-1.svg"
                              alt="img"
                            />
                            Regularly Maintaining and Organizing your Tools
                          </li>
                        </ul>
                      </div>
                      <div className="btn-group mt-35">
                        <Link to="/service" className="btn style3">
                          More Details{" "}
                          <i className="ri-arrow-right-up-line"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`tab-pane fade ${activeTab === "why-pill-5" ? "show active custom-fadeIn" : ""
                  }`}
                id="why-pill-5"
                role="tabpanel"
                aria-labelledby="why-pill-5-tab"
              >
                <div className="row gx-80 gy-40 align-items-center">
                  <div className="col-lg-5">
                    <div className="why-thumb-wrap3-1">
                      <div className="why-tab-thumb">
                        <img src="/assets/img/why/why-tab-thumb3-1.png" alt="img" />
                      </div>
                      <div className="why-text-wrap">
                        <h4 className="title">Service</h4>
                        <hr className="line" />
                        <div className="number">05</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-7">
                    <div className="why-content-wrap">
                      <h4 className="title">About this Service</h4>
                      <h5 className="subtitle">Preconstruction</h5>
                      <p className="text">
                        We craft unique digital experiences. With more than 7
                        years of expertise we design and code clean websites we
                        have been the trusted name in heating, air conditioning
                        and plumbing businesses.
                      </p>
                      <div className="checklist mb-35">
                        <ul>
                          <li>
                            <img
                              src="/assets/img/icon/about-checklsit-icon1-1.svg"
                              alt="img"
                            />
                            Regularly Maintaining and Organizing your Tools
                          </li>
                        </ul>
                      </div>
                      <div className="btn-group mt-35">
                        <Link to="/service" className="btn style3">
                          More Details{" "}
                          <i className="ri-arrow-right-up-line"></i>
                        </Link>
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

export default WhyChoose;
