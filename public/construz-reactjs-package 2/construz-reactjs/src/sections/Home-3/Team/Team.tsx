import { Link } from "react-router-dom";

 
const Team = () => {
    return (
        <div className="team-area-2 space-bottom">
            <div className="container">
                <div className="row justify-content-between align-items-center">
                    <div className="col-lg-7 col-md-7">
                        <div className="title-area text-left content-text-extra-style">
                            <span className="sub-title text-theme">Worker <i className="ri-arrow-right-down-line"></i></span>
                            <h2 className="sec-title">Meet with our expert team</h2>
                        </div>
                    </div>
                    <div className="col-md-auto">
                        <div className="sec-btn">
                            <Link to="/about" className="btn">View All Worker <i className="ri-arrow-right-up-line"></i></Link>
                        </div>
                    </div>
                </div>

                <div className="row gy-30 justify-content-center">
                    <div className="col-lg-4 col-md-6">
                        <div className="team-card style2 home-three-white-space-none">
                            <div className="team-card_img">
                                <img src="/assets/img/team/team-2-1.png" alt="img" />
                                <div className="team-social_wrap">
                                    <div className="social-btn">
                                        <Link to="https://facebook.com/"><i className="ri-facebook-fill"></i></Link>
                                        <Link to="https://www.twitter.com/"><i className="ri-twitter-x-line"></i></Link>
                                        <Link to="https://instagram.com/"><i className="ri-instagram-line"></i></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="team-card_content">
                                <h4 className="team-card_title"><Link to="/team-details">Richard Jackson</Link>
                                </h4>
                                <span className="team-card_desig">CEO, of Construz</span>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="team-card style2 home-three-white-space-none">
                            <div className="team-card_img">
                                <img src="/assets/img/team/team-2-2.png" alt="img" />
                                <div className="team-social_wrap">
                                    <div className="social-btn">
                                        <Link to="https://facebook.com/"><i className="ri-facebook-fill"></i></Link>
                                        <Link to="https://www.twitter.com/"><i className="ri-twitter-x-line"></i></Link>
                                        <Link to="https://instagram.com/"><i className="ri-instagram-line"></i></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="team-card_content">
                                <h4 className="team-card_title"><Link to="/team-details">Mark Ronaldo</Link>
                                </h4>
                                <span className="team-card_desig">Engineer</span>

                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="team-card style2 home-three-white-space-none">
                            <div className="team-card_img">
                                <img src="/assets/img/team/team-2-3.png" alt="img" />
                                <div className="team-social_wrap">
                                    <div className="social-btn">
                                        <Link to="https://facebook.com/"><i className="ri-facebook-fill"></i></Link>
                                        <Link to="https://www.twitter.com/"><i className="ri-twitter-x-line"></i></Link>
                                        <Link to="https://instagram.com/"><i className="ri-instagram-line"></i></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="team-card_content">
                                <h4 className="team-card_title"><Link to="/team-details">John Maxwell</Link>
                                </h4>
                                <span className="team-card_desig">John Maxwell</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;