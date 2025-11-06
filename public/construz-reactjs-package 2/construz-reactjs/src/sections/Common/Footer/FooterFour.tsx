import { Link } from "react-router-dom";

 

const FooterFour = () => {
    return (
        <div>
            <footer className="footer-wrapper footer-layout3 background-image" style={{ backgroundImage: "url('/assets/img/bg/footer-bg1-1.png')" }}>
                <div className="container">
                    <div className="widget-area">
                        <div className="row justify-content-between">
                            <div className="col-md-6 col-xl-3">
                                <div className="widget widget-about footer-widget">
                                    <h3 className="widget_title">About Company</h3>
                                    <p className="about-text">
                                        A small business can be better than a big business because of agility and adaptability due to their size and scale.
                                    </p>
                                    <h4 className="about-year">Since 2000</h4>
                                    <h5 className="about-subtitle">WE ARE AVAILABLE</h5>
                                    <p className="about-text">
                                        <span className="text-theme">Mon-Sat:</span> 10:00am to 07:30pm
                                    </p>
                                </div>
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
                            <div className="col-md-6 col-xl-auto">
                                <div className="widget footer-widget widget-contact">
                                    <h3 className="widget_title">Office Address</h3>
                                    <p className="contact-text">
                                        Losangle, Street Road 24, New York, USA - 67452
                                    </p>
                                    <h3 className="widget_title">Email Address</h3>
                                    <p className="text-white footer-text">Get in Touch!</p>
                                    <p className="footer-text">
                                        <Link to="mailto:support@gmail.com">support@gmail.com</Link>
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-auto">
                                <div className="widget footer-widget">
                                    <h3 className="widget_title">Phone Number</h3>
                                    <p className="footer-text">
                                        <Link to="tel:121551579266">+121 551 579 266</Link>
                                    </p>
                                    <p className="footer-text">
                                        <Link to="tel:851555961658">+85 155 596 1658</Link>
                                    </p>
                                    <h3 className="widget_title">Follow Us</h3>
                                    <div className="social-btn style2">
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
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="copyright-wrap">
                        <div className="row gy-3 justify-content-md-between justify-content-center">
                            <div className="col-auto align-self-center">
                                <p className="copyright-text text-center">
                                    © {new Date().getFullYear()} <Link to="#">Construz</Link> | All rights reserved
                                </p>
                            </div>
                            <div className="col-auto">
                                <div className="footer-links">
                                    <Link to="/contact">Terms & Condition</Link>
                                    <Link to="/contact">Privacy Policy</Link>
                                    <Link to="/contact">Contact Us</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    );
};

export default FooterFour; 