import { Link } from "react-router-dom";

 

const Hero = () => {
    return (
        <div className="hero-wrapper hero-3" id="hero">
            <div className="hero-bg-3-1 background-image bg-mask"
                style={{
                    backgroundImage: "url('/assets/img/hero/hero_bg_3_1.png')",
                    backgroundPosition: "center",
                    maskImage: "url('/assets/img/hero/hero_bg_mask_3_1.png')",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",                   

                }}>
            </div>
            <div className="hero-shadow-text">construz</div>
            <div className="hero-bg-shape3-1 shape-mockup jump" style={{ bottom: '3%', left: '3%', position: 'absolute' }}>
                <img src="/assets/img/shape/sec-bg-shape2.png" alt="img" />
            </div>

            <div className="container">
                <div className="hero-style3">
                    <div className="row">
                        <div className="col-lg-12">
                            <span className="hero-subtitle">Our Vision <img src="/assets/img/icon/long-arrow-right2.svg" alt="img" /></span>
                            <h1 className="hero-title">Quality Construction</h1>
                            <h1 className="hero-title style2">& Honest Service</h1>
                            <p className="hero-text">We craft unique digital experiences. With more than 7 years of expertise we design and code clean websites.</p>
                            <Link to="/about" className="btn style2">DISCOVER MORE <i className="ri-arrow-right-up-line"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;