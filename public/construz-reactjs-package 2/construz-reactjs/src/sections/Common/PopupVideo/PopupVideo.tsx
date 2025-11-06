
const PopupVideo = ({ setIsActive, isActive, setPopup, popup } : any) => {
    const closePopup = () => {
        setPopup(false); 
        const iframe = document.getElementById("youtube-video") as HTMLIFrameElement;
        if (iframe) {
            iframe.src = "";
        }
        setIsActive(false);
        document.body.style.overflow = 'unset';
    };
    return (
        <div
            className={`popup-video ${popup ? "popup" : "popdown"}`}
            onClick={closePopup}
        >
            <div className={`video-wrapper ${isActive ? 'active' : ''}`}>
                <iframe
                    id="youtube-video"
                    className="video"
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/Q5PG0rMXgvw"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
                <button className="mfp-close" onClick={closePopup}>×
                </button>
            </div>
        </div>
    );
};

export default PopupVideo;