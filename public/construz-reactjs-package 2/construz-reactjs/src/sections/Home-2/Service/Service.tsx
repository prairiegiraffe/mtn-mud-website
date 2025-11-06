import { Link } from "react-router-dom";

 

const Service = () => {
    return (
        <div className="service-area-2 space-top overflow-hidden shape-mockup-wrap background-image" style={{ backgroundImage: "url('/assets/img/bg/service-bg1-1.png')" }} id="service-sec">
            <div className="service_shape_2-1 shape-mockup jump-reverse d-xl-block d-none" style={{ right: '0px', bottom: '10%' }}>
                <img src="/assets/img/shape/sec-bg-shape1.png" alt="img" />
            </div>
            <div className="container">
                <div className="row justify-content-xl-start justify-content-center">
                    <div className="col-xxl-4 col-xl-5 col-md-6">
                        <div className="title-area mb-0 service-area-content-text-extra-style">
                            <span className="sub-title"><img src="/assets/img/icon/section-subtitle-icon.svg" alt="img" /> What We Do</span>
                            <h2 className="sec-title">OUR SERVICES THAT WE PROVIDE</h2>
                            <div className="btn-group mt-50 justify-content-xl-start justify-content-center">
                                <Link to="/service" className="btn">VIEW ALL SERVICES <i className="ri-arrow-right-up-line"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="service-card-wrap2">
                    <div className="row">
                        <div className="col-xl-3 col-md-6 service-card-list">
                            <div className="service-card style2">
                                <div className="service-card-number">
                                    01
                                </div>
                                <div className="service-card_content">
                                    <div className="service-card_icon">
                                        <img src="/assets/img/icon/service-icon2-1.svg" alt="img" />
                                    </div>
                                    <h4 className="service-card_title"><Link to="/service-details">GENERAL CONSTRUCTION</Link></h4>
                                    <p className="service-card_text">There are many passages of lorem ipsum available</p>
                                    <div className="btn-wrap">
                                        <Link to="/service-details" className="btn-with-icon">
                                            READ MORE
                                            <span className="btn-icon">
                                                <i className="ri-arrow-right-up-line"></i>
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 service-card-list">
                            <div className="service-card style2">
                                <div className="service-card-number">
                                    02
                                </div>
                                <div className="service-card_content">
                                    <div className="service-card_icon">
                                        <img src="/assets/img/icon/service-icon2-2.svg" alt="img" />
                                    </div>
                                    <h4 className="service-card_title"><Link to="/service-details">RENOVATION AND REMODELING</Link></h4>
                                    <p className="service-card_text">There are many passages of lorem ipsum available</p>
                                    <div className="btn-wrap">
                                        <Link to="/service-details" className="btn-with-icon">
                                            READ MORE
                                            <span className="btn-icon">
                                                <i className="ri-arrow-right-up-line"></i>
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 service-card-list">
                            <div className="service-card style2">
                                <div className="service-card-number">
                                    03
                                </div>
                                <div className="service-card_content">
                                    <div className="service-card_icon">
                                        <img src="/assets/img/icon/service-icon2-3.svg" alt="img" />
                                    </div>
                                    <h4 className="service-card_title"><Link to="/service-details">COMMERCIAL CONSTRUCTION</Link></h4>
                                    <p className="service-card_text">There are many passages of lorem ipsum available</p>
                                    <div className="btn-wrap">
                                        <Link to="/service-details" className="btn-with-icon">
                                            READ MORE
                                            <span className="btn-icon">
                                                <i className="ri-arrow-right-up-line"></i>
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 service-card-list">
                            <div className="service-card style2">
                                <div className="service-card-number">
                                    04
                                </div>
                                <div className="service-card_content">
                                    <div className="service-card_icon">
                                        <img src="/assets/img/icon/service-icon2-4.svg" alt="img" />
                                    </div>
                                    <h4 className="service-card_title"><Link to="/service-details">VIRTUAL DESIGN & BUILDING</Link></h4>
                                    <p className="service-card_text">There are many passages of lorem ipsum available</p>
                                    <div className="btn-wrap">
                                        <Link to="/service-details" className="btn-with-icon">
                                            READ MORE
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
                <div className="text-end right-end">
                    <div className="cta-wrap2">
                        <div className="cta-title-wrap">
                            <h3 className="cta-title">Need any services?</h3>
                            <p className="cta-text">Get in touch with us today !!</p>
                        </div>
                        <div className="cta-contact-grid">
                            <div className="icon-btn">
                                <i className="ri-phone-fill"></i>
                            </div>
                            <div className="cta-contact-grid-details">
                                <Link className="link" to="tel:+123551579209">+123 551 579 209</Link>
                                <h6 className="title">Mon - Sat : 10am - 07pm</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;