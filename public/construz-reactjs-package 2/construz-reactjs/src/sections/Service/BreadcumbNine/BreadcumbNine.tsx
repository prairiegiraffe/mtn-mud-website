import { Link } from "react-router-dom";

 

const BreadcumbNine = () => {
    return (
        <div className="breadcumb-wrapper" style={{ backgroundImage: "url('/assets/img/bg/breadcrumb-bg.png')" }}>
            <div className="section-animation-shape1-1 shape-mockup animation-infinite" data-top="0" style={{ backgroundImage: "url('/assets/img/shape/global-line-shape1.png')" }}>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="breadcumb-content">
                            <h1 className="breadcumb-title">Our Services</h1>
                            <ul className="breadcumb-menu">
                                <li><Link to="/home-1"><i className="ri-home-4-fill"></i> HOME</Link></li>
                                <li className="active">OUR SERVICES </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BreadcumbNine;