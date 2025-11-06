 
import { useState } from "react";
import PopupVideo from "../../Common/PopupVideo/PopupVideo";
const Video = () => {
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
            <div className="video-area-2 position-relative">
                <div className="video_thumb2-1 background-image" style={{ backgroundImage: "url('/assets/img/normal/testimonial_2-1.png')" }}>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="video-wrap2" style={{ backgroundImage: "url('/assets/img/bg/video-bg2-1.png')" }}>
                                <a onClick={openPopup} className="play-btn-wrap style2 justify-content-end text-end">
                                    <div className="video-text text-right">
                                        See our intro video
                                    </div>
                                    <span className="play-btn style8">
                                        <i className="ri-play-fill"></i>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <PopupVideo popup={popup} setPopup={setPopup} isActive={isActive} setIsActive={setIsActive}></PopupVideo>
        </>
    );
};

export default Video;