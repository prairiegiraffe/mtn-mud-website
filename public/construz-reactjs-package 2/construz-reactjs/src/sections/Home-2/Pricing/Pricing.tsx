 
import { useState } from "react";
import { Link } from "react-router-dom";

const Pricing = () => {
    const [isActive, setIsActive] = useState(false);
    return (
        <div className="pricing-area-1 space">
            <div className="container">
                <div className="row justify-content-xxl-between justify-content-center align-items-center">
                    <div className="col-xxl-7">
                        <div className="title-area pricing-area-content-text-extra-style">
                            <span className="sub-title"><img src="/assets/img/icon/section-subtitle-icon.svg" alt="img" />Package</span>
                            <h2 className="sec-title">AFFORDABLE PRICING PLANS</h2>
                        </div>
                    </div>
                    <div className="col-xxl-5 col-xl-8">
                        <p className="sec-text mt-xxl-0 mt-n3 home-two-pricing-align mb-xxl-0 mb-40">We craft unique digital experiences. With more than 7 years of expertise we design and code clean websites we have been the trusted name in heating, air conditioning and plumbing businesses. Throughout the years, our number one goal</p>
                    </div>
                    <div className="col-12 home-two-pricing-button-align">
                        <ul className="pricing-tabs nav nav-tabs" role={'tablist'}>
                            <li className="nav-item">
                                <button onClick={() => setIsActive(!isActive)} className={`nav-link ${isActive ? '' : 'active'}`} id="monthly-tab" data-bs-toggle="tab" data-bs-target="#monthly" type="button" role={"tab"} aria-controls="monthly" aria-selected="true">Monthly Plan</button>
                            </li>
                            <li className="nav-item">
                                <button onClick={() => setIsActive(!isActive)} className={`nav-link ${isActive ? 'active' : ''}`} id="yearly-tab" data-bs-toggle="tab" data-bs-target="#yearly" type="button" role={"tab"} aria-controls="yearly" aria-selected="false">Yearly Plan</button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="tab-content">
                    <div className={`tab-pane fade ${isActive ? '' : 'show active'}`} id="monthly" role={"tabpanel"} aria-labelledby="monthly-tab">
                        <div className="row gy-4 justify-content-center">
                            <div className="col-xl-4 col-md-6">
                                <div className="pricing-card" style={{ backgroundImage: "url('/assets/img/bg/pricing-card-bg1-1.png')" }}>
                                    <h4 className="pricing-card_title">Basic Plan</h4>
                                    <p className="pricing-card_text">What you will get in this plan</p>
                                    <h4 className="pricing-card_price">
                                        <span className="pricing-card_currency">$</span>299<span className="pricing-card_duration">Month</span>
                                    </h4>
                                    <div className="pricing-card-details">
                                        <div className="checklist">
                                            <ul>
                                                <li>Prepare Documentation</li>
                                                <li>Brand Consistency</li>
                                                <li className="unavailable">Quality Control System</li>
                                                <li className="unavailable">Floor Plan Design</li>
                                                <li className="unavailable">Great Customer Support</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <Link to="/project-details" className="btn-with-icon" tabIndex={-1}>
                                        GET START NOW
                                        <span className="btn-icon">
                                            <i className="ri-arrow-right-up-line"></i>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6">
                                <div className="pricing-card" style={{ backgroundImage: "url('/assets/img/bg/pricing-card-bg1-1.png')" }}>
                                    <h4 className="pricing-card_title">Standard Plans</h4>
                                    <p className="pricing-card_text">What you will get in this plan</p>
                                    <h4 className="pricing-card_price">
                                        <span className="pricing-card_currency">$</span>460<span className="pricing-card_duration">Month</span>
                                    </h4>
                                    <div className="pricing-card-details">
                                        <div className="pricing-card-icon">
                                            <div className="icon">
                                                <img src="/assets/img/icon/pricing-icon1-1.svg" alt="img" />
                                            </div>
                                            <div className="tag">POPULAR</div>
                                        </div>
                                        <div className="checklist">
                                            <ul>
                                                <li>Prepare Documentation</li>
                                                <li>Brand Consistency</li>
                                                <li>Quality Control System</li>
                                                <li>Floor Plan Design</li>
                                                <li>Great Customer Support</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <Link to="/project-details" className="btn-with-icon" tabIndex={-1}>
                                        GET START NOW
                                        <span className="btn-icon">
                                            <i className="ri-arrow-right-up-line"></i>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6">
                                <div className="pricing-card" style={{ backgroundImage: "url('/assets/img/bg/pricing-card-bg1-1.png')" }}>
                                    <h4 className="pricing-card_title">Premium Plan</h4>
                                    <p className="pricing-card_text">What you will get in this plan</p>
                                    <h4 className="pricing-card_price">
                                        <span className="pricing-card_currency">$</span>850<span className="pricing-card_duration">Month</span>
                                    </h4>
                                    <div className="pricing-card-details">
                                        <div className="checklist">
                                            <ul>
                                                <li>Prepare Documentation</li>
                                                <li>Brand Consistency</li>
                                                <li className="unavailable">Quality Control System</li>
                                                <li className="unavailable">Floor Plan Design</li>
                                                <li>24/7 Customer Support</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <Link to="/project-details" className="btn-with-icon" tabIndex={-1}>
                                        GET START NOW
                                        <span className="btn-icon">
                                            <i className="ri-arrow-right-up-line"></i>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`tab-pane fade ${isActive ? 'show active' : ''}`} id="yearly" role={"tabpanel"} aria-labelledby="yearly-tab">
                        <div className="row gy-4 justify-content-center">
                            <div className="col-xl-4 col-md-6">
                                <div className="pricing-card" style={{ backgroundImage: "url('/assets/img/bg/pricing-card-bg1-1.png')" }}>
                                    <h4 className="pricing-card_title">Basic Plan</h4>
                                    <p className="pricing-card_text">What you will get in this plan</p>
                                    <h4 className="pricing-card_price">
                                        <span className="pricing-card_currency">$</span>599<span className="pricing-card_duration">YEAR</span>
                                    </h4>
                                    <div className="pricing-card-details">
                                        <div className="checklist">
                                            <ul>
                                                <li>Prepare Documentation</li>
                                                <li>Brand Consistency</li>
                                                <li className="unavailable">Quality Control System</li>
                                                <li className="unavailable">Floor Plan Design</li>
                                                <li className="unavailable">Great Customer Support</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <Link to="/project-details" className="btn-with-icon" tabIndex={-1}>
                                        GET START NOW
                                        <span className="btn-icon">
                                            <i className="ri-arrow-right-up-line"></i>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6">
                                <div className="pricing-card" style={{ backgroundImage: "url('/assets/img/bg/pricing-card-bg1-1.png')" }}>
                                    <h4 className="pricing-card_title">Standard Plans</h4>
                                    <p className="pricing-card_text">What you will get in this plan</p>
                                    <h4 className="pricing-card_price">
                                        <span className="pricing-card_currency">$</span>860<span className="pricing-card_duration">YEAR</span>
                                    </h4>
                                    <div className="pricing-card-details">
                                        <div className="pricing-card-icon">
                                            <div className="icon">
                                                <img src="/assets/img/icon/pricing-icon1-1.svg" alt="img" />
                                            </div>
                                            <div className="tag">POPULAR</div>
                                        </div>
                                        <div className="checklist">
                                            <ul>
                                                <li>Prepare Documentation</li>
                                                <li>Brand Consistency</li>
                                                <li>Quality Control System</li>
                                                <li>Floor Plan Design</li>
                                                <li>Great Customer Support</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <Link to="/project-details" className="btn-with-icon" tabIndex={-1}>
                                        GET START NOW
                                        <span className="btn-icon">
                                            <i className="ri-arrow-right-up-line"></i>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6">
                                <div className="pricing-card" style={{ backgroundImage: "url('/assets/img/bg/pricing-card-bg1-1.png')" }}>
                                    <h4 className="pricing-card_title">Premium Plan</h4>
                                    <p className="pricing-card_text">What you will get in this plan</p>
                                    <h4 className="pricing-card_price">
                                        <span className="pricing-card_currency">$</span>1250<span className="pricing-card_duration">YEAR</span>
                                    </h4>
                                    <div className="pricing-card-details">
                                        <div className="checklist">
                                            <ul>
                                                <li>Prepare Documentation</li>
                                                <li>Brand Consistency</li>
                                                <li className="unavailable">Quality Control System</li>
                                                <li className="unavailable">Floor Plan Design</li>
                                                <li>24/7 Customer Support</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <Link to="/project-details" className="btn-with-icon" tabIndex={-1}>
                                        GET START NOW
                                        <span className="btn-icon">
                                            <i className="ri-arrow-right-up-line"></i>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Pricing;