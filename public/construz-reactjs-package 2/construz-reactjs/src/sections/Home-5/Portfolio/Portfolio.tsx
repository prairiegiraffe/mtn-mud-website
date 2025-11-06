import { Link } from "react-router-dom";

 


const Portfolio = () => {
    return (
        <div className="portfolio-area-5 overflow-hidden" id="project-sec">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-7">
                        <div className="title-area text-center">
                            <span className="sub-title text-theme">Our projects <i className="ri-arrow-right-down-line"></i></span>
                            <h2 className="sec-title">Recently completed projects</h2>
                        </div>
                    </div>
                </div>
                <div className="overflow-hidden">
                    <div className="row gy-30 gx-30">
                        <div className="col-lg-8">
                            <div className="portfolio-card style5">
                                <div className="portfolio-card-thumb">
                                    <img src="/assets/img/project/project5_1.png" alt="img" />
                                </div>
                                <div className="portfolio-card-details">
                                    <div className="media-left">
                                        <span className="portfolio-card-subtitle">Residential</span>
                                        <h4 className="portfolio-card-title"><Link to="/project-details">Modern pattern style for house roof</Link></h4>
                                    </div>
                                    <div className="btn-group">
                                        <Link to="/project-details" className="btn style2">
                                            Explore Project <i className="ri-arrow-right-line"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="portfolio-card style5">
                                <div className="portfolio-card-thumb">
                                    <img src="/assets/img/project/project5_2.png" alt="img" />
                                </div>
                                <div className="portfolio-card-details">
                                    <div className="media-left">
                                        <span className="portfolio-card-subtitle">Residential</span>
                                        <h4 className="portfolio-card-title"><Link to="/project-details">Modern pattern style for house roof</Link></h4>
                                    </div>
                                    <div className="btn-group">
                                        <Link to="/project-details" className="btn style2">
                                            Explore Project <i className="ri-arrow-right-line"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="portfolio-card style5">
                                <div className="portfolio-card-thumb">
                                    <img src="/assets/img/project/project5_3.png" alt="img" />
                                </div>
                                <div className="portfolio-card-details">
                                    <div className="media-left">
                                        <span className="portfolio-card-subtitle">Residential</span>
                                        <h4 className="portfolio-card-title"><Link to="/project-details">Modern pattern style for house roof</Link></h4>
                                    </div>
                                    <div className="btn-group">
                                        <Link to="/project-details" className="btn style2">
                                            Explore Project <i className="ri-arrow-right-line"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="portfolio-card style5">
                                <div className="portfolio-card-thumb">
                                    <img src="/assets/img/project/project5_4.png" alt="img" />
                                </div>
                                <div className="portfolio-card-details">
                                    <div className="media-left">
                                        <span className="portfolio-card-subtitle">Residential</span>
                                        <h4 className="portfolio-card-title"><Link to="/project-details">Modern pattern style for house roof</Link></h4>
                                    </div>
                                    <div className="btn-group">
                                        <Link to="/project-details" className="btn style2">
                                            Explore Project <i className="ri-arrow-right-line"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="portfolio-card style5">
                                <div className="portfolio-card-thumb">
                                    <img src="/assets/img/project/project5_5.png" alt="img" />
                                </div>
                                <div className="portfolio-card-details">
                                    <div className="media-left">
                                        <span className="portfolio-card-subtitle">Residential</span>
                                        <h4 className="portfolio-card-title"><Link to="/project-details">Modern pattern style for house roof</Link></h4>
                                    </div>
                                    <div className="btn-group">
                                        <Link to="/project-details" className="btn style2">
                                            Explore Project <i className="ri-arrow-right-line"></i>
                                        </Link>
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

export default Portfolio;