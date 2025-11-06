 
import { useState } from "react";
import { Link } from "react-router-dom";
import PopupVideo from "../../Common/PopupVideo/PopupVideo";


const About = () => {
    const [popup, setPopup] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const openPopup = () => {
        setPopup(true);
        const iframe = document.getElementById("youtube-video") as HTMLIFrameElement;
        if (iframe) {
            iframe.src = "https://www.youtube.com/embed/Q5PG0rMXgvw";
        }
        setIsActive(true);
        document.body.style.overflow = 'hidden';
    };
    return (
        <>
            <div className="about-area-5 space shape-mockup-wrap" id="about-sec">
                <div className="about-bg-shape5-1 shape-mockup" style={{ top: '-170px', right: '0px' }}>
                    <img src="/assets/img/bg/about-bg-shape5-1.png" alt="img" />
                </div>
                <div className="container">
                    <div className="row gx-100 align-items-center">
                        <div className="col-xl-5">
                            <div className="about-thumb5 mb-40 mb-xl-0">
                                <div className="about-img-1 mb-40">
                                    <img src="/assets/img/normal/about_5-1.png" alt="img" />
                                </div>
                                <p>We craft unique digital experiences. With more than 7 years of expertise we design and code clean websites. </p>
                                <div className="btn-group mt-30">
                                    <Link to="/about" className="btn">NOW MORE COMPANY <i className="ri-arrow-right-up-line"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="about-wrap5">
                                <div className="title-area mb-40">
                                    <span className="sub-title text-theme">ABOUT US <i className="ri-arrow-right-down-line"></i></span>
                                    <h2 className="sec-title">We building everything that you needed</h2>
                                    <p className="sec-text">We craft unique digital experiences. With more than 7 years of expertise we design and code clean websites.
                                    </p>
                                    <div className="checklist mb-35 mt-30">
                                        <ul>
                                            <li><img src="/assets/img/icon/about-checklsit-icon1-1.svg" alt="img" />Providing Solutions For Construction, Management
                                            </li>
                                            <li><img src="/assets/img/icon/about-checklsit-icon1-1.svg" alt="img" />Engineers design and build the structure</li>
                                        </ul>
                                    </div>
                                    <div className="btn-wrap">
                                        <div className="cta-grid-wrap">
                                            <div className="icon-btn">
                                                <i className="ri-phone-fill"></i>
                                            </div>
                                            <div className="media-body">
                                                <Link className="link" to="tel:+2590256215">+123 556 8824</Link>
                                                <h6 className="title">Ned Help?</h6>
                                            </div>
                                        </div>
                                        <div className="about-author-wrap">
                                            <div className="author-thumb">
                                                <img src="/assets/img/normal/about_3-4.png" alt="img" />
                                            </div>
                                            <div className="media-body">
                                                <div className="author-sign">
                                                    <img src="/assets/img/normal/about_4-sign.png" alt="img" />
                                                </div>
                                                <div className="author-text">Funder of Construz</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="about-thumb5 mt-60 d-inline-block">
                                    <div className="video-wrap about-img-2">
                                        <img src="/assets/img/normal/about_5-2.png" alt="img" />
                                        <a onClick={openPopup} className="play-btn style6"><i className="ri-play-fill"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <PopupVideo popup={popup} setPopup={setPopup} isActive={isActive} setIsActive={setIsActive}></PopupVideo>
        </>
    );
};

export default About;