import { Link } from "react-router-dom";

 
const CircleTextTwo = () => {

    return (
        <div className="about-three__img-icon-box circleWrap4">
            <Link to="/contact">
                <div className="round-text circleWrap3 circle-text-4-new">
                    <svg
                        xmlns="http://www.w3.org/2000/svg" 
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        version="1.1"
                        width="12cm"
                        height="12cm"
                        viewBox="0 0 1000 1000"
                        preserveAspectRatio="xMinYMin"

 
  
                    >
                        <defs>
                            <path id="textPath" d="M 500,500 m -250,0 a 250,250 0 1,1 500,0 a 250,250 0 1,1 -500,0" />
                        </defs>
                        <text className="circle-text4 text-white" x="500" y="500" textAnchor="middle">
                            <textPath xlinkHref="#textPath" startOffset="10%">
                                circle- Explore More - Explore More -
                            </textPath>
                        </text>
                    </svg>
                </div>
            </Link>
        </div>
    );
};

export default CircleTextTwo;
