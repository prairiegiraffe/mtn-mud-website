import { Link } from "react-router-dom";

 


const Service = () => {
    return (
        <div className="service-area-5 space-top overflow-hidden">
            <div className="container">
                <div className="service-card-wrap5">
                    <div className="row gy-50 justify-content-xl-between justify-content-center">
                        <div className="col-xxl-auto col-xl-4 col-md-6">
                            <div className="service-card style5">
                                <div className="service-card-number">
                                    1
                                </div>
                                <div className="service-card_content">
                                    <div className="service-card_icon">
                                        <img src="/assets/img/icon/service-icon4-1.svg" alt="img" />
                                    </div>
                                    <h4 className="service-card_title"><Link to="/service-details">Buildings</Link></h4>
                                    <p className="service-card_text">Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-auto col-xl-4 col-md-6">
                            <div className="service-card style5">
                                <div className="service-card-number">
                                    2
                                </div>
                                <div className="service-card_content">
                                    <div className="service-card_icon">
                                        <img src="/assets/img/icon/service-icon4-2.svg" alt="img" />
                                    </div>
                                    <h4 className="service-card_title"><Link to="/service-details">Civil Infrastructure</Link></h4>
                                    <p className="service-card_text">Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-auto col-xl-4 col-md-6">
                            <div className="service-card style5">
                                <div className="service-card-number">
                                    3
                                </div>
                                <div className="service-card_content">
                                    <div className="service-card_icon">
                                        <img src="/assets/img/icon/service-icon4-3.svg" alt="img" />
                                    </div>
                                    <h4 className="service-card_title"><Link to="/service-details">Multipurpose</Link></h4>
                                    <p className="service-card_text">Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;