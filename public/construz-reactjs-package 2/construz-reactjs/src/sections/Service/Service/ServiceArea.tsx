import { Link } from "react-router-dom";

 

const ServiceArea = () => {
    return (
        <div className="service-area-4 space-top overflow-hidden">
            <div className="container">
                <div className="row gy-30 gx-30">
                    <div className="col-xl-4 col-md-6">
                        <div className="title-area mb-0 text-left content-text-extra-style">
                            <span className="sub-title"><img src="/assets/img/icon/section-subtitle-icon.svg" alt="img" /> What We Do</span>
                            <h2 className="sec-title">Our services that we provide</h2>
                            <p>We craft unique digital experiences. With more than 7 years of expertise we design and code clean</p>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6">
                        <div className="service-card style3">
                            <div className="service-card-shadow-text">
                                SERVICES - 01
                            </div>
                            <div className="service-card_content">
                                <div className="service-card_icon">
                                    <img src="/assets/img/icon/service-icon1-1.png" alt="img" />
                                </div>
                                <h4 className="service-card_title"><Link to="/service-details">General construction</Link></h4>
                                <p className="service-card_text">There are many passages of lorem ipsum available</p>
                                <div className="btn-wrap">
                                    <div className="icon-btn"><i className="ri-arrow-right-up-line"></i></div>
                                    <Link to="/service-details" className="btn">Explore Service <i className="ri-arrow-right-up-line"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6">
                        <div className="service-card style3">
                            <div className="service-card-shadow-text">
                                SERVICES - 02
                            </div>
                            <div className="service-card_content">
                                <div className="service-card_icon">
                                    <img src="/assets/img/icon/service-icon1-2.png" alt="img" />
                                </div>
                                <h4 className="service-card_title"><Link to="/service-details">Property maintenance</Link></h4>
                                <p className="service-card_text">There are many passages of lorem ipsum available</p>
                                <div className="btn-wrap">
                                    <div className="icon-btn"><i className="ri-arrow-right-up-line"></i></div>
                                    <Link to="/service-details" className="btn">Explore Service <i className="ri-arrow-right-up-line"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6">
                        <div className="service-card style3">
                            <div className="service-card-shadow-text">
                                SERVICES - 03
                            </div>
                            <div className="service-card_content">
                                <div className="service-card_icon">
                                    <img src="/assets/img/icon/service-icon1-3.png" alt="img" />
                                </div>
                                <h4 className="service-card_title"><Link to="/service-details">Project management</Link></h4>
                                <p className="service-card_text">There are many passages of lorem ipsum available</p>
                                <div className="btn-wrap">
                                    <div className="icon-btn"><i className="ri-arrow-right-up-line"></i></div>
                                    <Link to="/service-details" className="btn">Explore Service <i className="ri-arrow-right-up-line"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6">
                        <div className="service-card style3">
                            <div className="service-card-shadow-text">
                                SERVICES - 04
                            </div>
                            <div className="service-card_content">
                                <div className="service-card_icon">
                                    <img src="/assets/img/icon/service-icon1-4.png" alt="img" />
                                </div>
                                <h4 className="service-card_title"><Link to="/service-details">Virtual design & build</Link></h4>
                                <p className="service-card_text">There are many passages of lorem ipsum available</p>
                                <div className="btn-wrap">
                                    <div className="icon-btn"><i className="ri-arrow-right-up-line"></i></div>
                                    <Link to="/service-details" className="btn">Explore Service <i className="ri-arrow-right-up-line"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6">
                        <div className="service-card style3">
                            <div className="service-card-shadow-text">
                                SERVICES - 05
                            </div>
                            <div className="service-card_content">
                                <div className="service-card_icon">
                                    <img src="/assets/img/icon/service-icon1-5.png" alt="img" />
                                </div>
                                <h4 className="service-card_title h5"><Link to="/service-details">Proconstruction</Link></h4>
                                <p className="service-card_text">There are many passages of lorem ipsum available</p>
                                <div className="btn-wrap">
                                    <div className="icon-btn"><i className="ri-arrow-right-up-line"></i></div>
                                    <Link to="/service-details" className="btn">Explore Service <i className="ri-arrow-right-up-line"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceArea;