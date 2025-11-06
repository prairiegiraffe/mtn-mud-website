import { Link } from "react-router-dom";

 

const CTA = () => {
    return (
        <div className="cta-area-5">
            <div className="container">
                <div className="cta-wrap5 background-image" style={{ backgroundImage: "url('/assets/img/bg/cta-bg5-1.png')" }}>
                    <h4 className="cta-title text-white">
                        Roofing & Restoration services that will leave your home better than before
                    </h4>
                    <Link className="btn style4" to="/contact">Start your free quote <i className="ri-arrow-right-up-line"></i></Link>
                </div>
            </div>
        </div>
    );
};

export default CTA;