import { Link } from "react-router-dom";


const FooterThree = () => {
    return (
        <footer className="footer-wrapper footer-layout2 bg-title shape-mockup-wrap">
            <div className="footer_shape_2-1 shape-mockup" style={{ bottom: '0px', right: '0px' }}>
                <img src="/assets/img/bg/testimonial-bg-shape2-1.png" alt="img" />
            </div>
            <div className="container">
                <div className="widget-area">
                    <div className="row justify-content-between">
                        <div className="col-md-6 col-xl-4">
                            <div className="widget widget-about footer-widget">
                                <div className="footer-logo">
                                    <a href="/pages/homepage/home-1"><img src="/assets/img/logo-white.svg" alt="Construz" /></a>
                                </div>
                                <p className="about-text">Holisticly underwhelm ethical solutions whereas maintainable strategic theme areas. Uniquely optimize quality interface before resource.</p>
                                <h4 className="about-year">Since 2000</h4>
                            </div>
                        </div>
                        <div className="col-auto d-xxl-block d-none">
                            <div className="widget-divider"></div>
                        </div>
                        <div className="col-md-6 col-xl-auto">
                            <div className="widget widget_nav_menu footer-widget">
                                <h3 className="widget_title">Useful Links</h3>
                                <div className="menu-all-pages-container grid-style">
                                    <ul className="menu">
                                        <li><Link to="/about">About Us</Link></li>
                                        <li><Link to="/service">What We Do</Link></li>
                                        <li><Link to="/service">News & Article</Link></li>
                                        <li><Link to="/service">Success Story</Link></li>
                                        <li><Link to="/service">FAQ’s</Link></li>
                                    </ul>
                                    <ul className="menu">
                                        <li><Link to="/team">Our Team</Link></li>
                                        <li><Link to="/service">Careers</Link></li>
                                        <li><Link to="/service">Testimonials</Link></li>
                                        <li><Link to="/contact">Privacy Policy</Link></li>
                                        <li><Link to="/contact">Terms of use</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-auto d-xxl-block d-none">
                            <div className="widget-divider"></div>
                        </div>
                        <div className="col-md-6 col-xl-auto">
                            <div className="widget footer-widget widget-newsletter">
                                <h3 className="widget_title">Newsletter</h3>
                                <p className="footer-text">Subscribe for the latest news. Stay updated on the latest trends.</p>
                                <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                                    <div className="form-group">
                                        <input className="form-control style-border3" type="email" placeholder="Email Address..." required />
                                    </div>
                                    <button type="submit" className="btn-with-icon style3">
                                        SUBMIT NOW
                                        <span className="btn-icon">
                                            <i className="ri-arrow-right-up-line"></i>
                                        </span>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="copyright-wrap">
                <div className="container">
                    <div className="row gy-3 justify-content-center">
                        <div className="col-auto align-self-center"><p className="copyright-text text-center">© {new Date().getFullYear()} <a href="#">Construz</a>  |  All rights reserved</p></div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterThree;