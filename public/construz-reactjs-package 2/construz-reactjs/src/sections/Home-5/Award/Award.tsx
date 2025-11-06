const Award = () => {
  return (
    <div
      className="award-area-1 space-top overflow-hidden"
      style={{ backgroundImage: "url('/assets/img/bg/award-bg5-1.png')" }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="title-area text-center mb-50">
              <span className="sub-title text-theme">
                Award Winning <i className="ri-arrow-right-down-line"></i>
              </span>
              <h2 className="sec-title">Our Awards & Achievements</h2>
              <p>
                Podcasting operational change management inside of workflows to
                establish a framework, taking seamless key performance
                indicators offline.
              </p>
            </div>
          </div>
        </div>
        <div className="row gy-4 gx-40 justify-content-xl-between justify-content-center">
          {/* card one */}
          <div className="col-xxl-3 col-md-6">
            <div className="award-card custom-award-card">
              <div className="award-card-bg-shape">
                <img src="/assets/img/bg/award-card-bg1-1.png" alt="img" />
              </div>
              <div className="award-card-thumb">
                <img src="/assets/img/award/award1-1.png" alt="img" />
              </div>
              <div className="award-card-year">
                <span>IN</span>
                2024
              </div>
              <div className="award-card_content">
                <h4 className="award-card_title">Site of the day</h4>
                <p className="award-card_text">Winner</p>
                <div className="award-card-tag">Design Award</div>
              </div>
            </div>
          </div>
          {/* card two */}
          <div className="col-xxl-3 col-md-6">
            <div className="award-card custom-award-card">
              <div className="award-card-bg-shape">
                <img src="/assets/img/bg/award-card-bg1-1.png" alt="img" />
              </div>
              <div className="award-card-thumb">
                <img src="/assets/img/award/award1-2.png" alt="img" />
              </div>
              <div className="award-card-year">
                <span>IN</span>
                2023
              </div>
              <div className="award-card_content">
                <h4 className="award-card_title">Outstanding advisor</h4>
                <p className="award-card_text">Winner</p>
                <div className="award-card-tag">USA Award</div>
              </div>
            </div>
          </div>
          {/* card three */}
          <div className="col-xxl-3 col-md-6">
            <div className="award-card custom-award-card">
              <div className="award-card-bg-shape">
                <img src="/assets/img/bg/award-card-bg1-1.png" alt="img" />
              </div>
              <div className="award-card-thumb">
                <img src="/assets/img/award/award1-3.png" alt="img" />
              </div>
              <div className="award-card-year">
                <span>IN</span>
                2022
              </div>
              <div className="award-card_content">
                <h4 className="award-card_title">Best choose company</h4>
                <p className="award-card_text">Winner</p>
                <div className="award-card-tag">Best Award</div>
              </div>
            </div>
          </div>
          {/* card four */}
          <div className="col-xxl-3 col-md-6">
            <div className="award-card custom-award-card">
              <div className="award-card-bg-shape">
                <img src="/assets/img/bg/award-card-bg1-1.png" alt="img" />
              </div>
              <div className="award-card-thumb">
                <img src="/assets/img/award/award1-4.png" alt="img" />
              </div>
              <div className="award-card-year">
                <span>IN</span>
                2021
              </div>
              <div className="award-card_content">
                <h4 className="award-card_title">Best Consulting</h4>
                <p className="award-card_text">Winner</p>
                <div className="award-card-tag">Unique Award</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Award;
