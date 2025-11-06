
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Counter = () => {
    const { ref: counterRef, inView: counterInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    return (
        <div className="counter-area-1 space-bottom" ref={counterRef}>
            <div className="container">
                <div className="row justify-content-between gy-40">
                    <div className="col-auto">
                        <div className="counter-card">
                            <h2 className="counter-card_number"><span className="counter-number">{counterInView && <CountUp start={0} end={26} />}</span>k+</h2>
                            <p className="counter-card_text">Projects Completed</p>
                        </div>
                    </div>
                    <div className="col-auto">
                        <div className="counter-card">
                            <h2 className="counter-card_number"><span className="counter-number">{counterInView && <CountUp start={0} end={98} />}</span>%</h2>
                            <p className="counter-card_text">Customers Satisfied</p>
                        </div>
                    </div>
                    <div className="col-auto">
                        <div className="counter-card">
                            <h2 className="counter-card_number"><span className="counter-number">{counterInView && <CountUp start={0} end={20} />}</span>M</h2>
                            <p className="counter-card_text">Special Machinery</p>
                        </div>
                    </div>
                    <div className="col-auto">
                        <div className="counter-card">
                            <h2 className="counter-card_number"><span className="counter-number">{counterInView && <CountUp start={0} end={30} />}</span>+</h2>
                            <p className="counter-card_text">Years in Business</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Counter;