

import ClientTwo from "../Common/ClientTwo/ClientTwo";
import FooterFour from "../Common/Footer/FooterFour"; 
import HeaderTwoOp from "../Common/HeaderOp/HeaderTwoOp";
import ScrollTopButton from "../Common/Scroll/Scroll";
import Wrapper from "../Common/Wrapper";
import About from "../Home-4/About/About";
import CTA from "../Home-4/CTA/CTA";
import Hero from "../Home-4/Hero/Hero";
import Portfolio from "../Home-4/Portfolio/Portfolio";
import Service from "../Home-4/Service/Service";
import ServiceTwo from "../Home-4/ServiceTwo/ServiceTwo";
import Testimonial from "../Home-4/Testimonial/Testimonial";
import Video from "../Home-4/Video/Video";
import WhyChoose from "../Home-4/WhyChoose/WhyChoose";

 



const HomeFourSignle = () => {
	return (
		<Wrapper>
			<div style={{ overflow: "hidden" }}>
				<HeaderTwoOp />
				<Hero />
				<Service />
				<About />
				<ServiceTwo />
				<WhyChoose />
				<Video />
				<Portfolio />
				<Testimonial />
				<CTA />
				<ClientTwo />
				<FooterFour />
				<ScrollTopButton />
			</div>
		</Wrapper>
	);
};

export default HomeFourSignle;
