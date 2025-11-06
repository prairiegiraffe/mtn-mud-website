 
import  { useState } from "react";
import PopupVideo from "../../Common/PopupVideo/PopupVideo";

const ProcessThree = () => {
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
      <section
        className="process-area-1 space-top bg-attachment process-bg-half"
        data-overlay="title"
        data-opacity="8"
        style={{ backgroundImage: "url('/assets/img/bg/process-bg1-1.png')" }}
      >
        <div className="process_shape_1-1 movingX shape-mockup d-lg-block d-none"></div>
        <div className="process_shape_1-2 moving shape-mockup d-lg-block d-none"></div>
        <div
          className="process_shape_1-3 shape-mockup jump-reverse d-xl-block d-none"
          style={{ bottom: '-50%', right: '0px' }}
        >
          <img src="/assets/img/shape/sec-bg-shape1.png" alt="img" />
        </div>
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-4 col-md-6">
              <div className="title-area text-left content-text-extra-style">
                <span className="sub-title text-white">
                  <img src="/assets/img/icon/section-subtitle-icon.svg" alt="img" />
                  Work Process
                </span>
                <h2 className="sec-title text-white">
                  Our services that we provide
                </h2>
              </div>
            </div>
            <div className="col-md-auto">
              <div className="sec-btn text-center">
                <a onClick={openPopup}
                  className=" play-btn-wrap"
                >
                  Play Video
                  <span className="play-btn style2">
                    <i className="ri-play-fill"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="process-card-wrap">
            <div className="row gy-30 gx-30">
              <div className="col-xl-3 col-md-6">
                <div className="process-card">
                  <div className="process-card-number">
                    <span> 01 </span>
                    STEP
                  </div>
                  <h4 className="process-card-title">
                    Meet and consultant about project
                  </h4>
                  <p className="process-card-text">
                    Industry standard dummy text took since the when an unknown
                  </p>
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div className="process-card">
                  <div className="process-card-number">
                    <span> 02 </span>
                    STEP
                  </div>
                  <h4 className="process-card-title">
                    Product design and planning
                  </h4>
                  <p className="process-card-text">
                    Known printer took a galley of type and scrambled it to make
                  </p>
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div className="process-card">
                  <div className="process-card-number">
                    <span> 03 </span>
                    STEP
                  </div>
                  <h4 className="process-card-title">
                    Testing and quality control
                  </h4>
                  <p className="process-card-text">
                    It has survived not only centuries also the leap into
                    electronic
                  </p>
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div className="process-card">
                  <div className="process-card-number">
                    <span> 04 </span>
                    STEP
                  </div>
                  <h4 className="process-card-title">
                    Final assembly and project handover
                  </h4>
                  <p className="process-card-text">
                    Electronic typesetting conta the popularised in the 1960s
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <PopupVideo popup={popup} setPopup={setPopup} isActive={isActive} setIsActive={setIsActive}></PopupVideo>
    </>
  );
};

export default ProcessThree;
