import FooterTwo from "../Common/Footer/FooterTwo";
import HeaderOne from "../Common/Header/HeaderOne";
import ScrollTopButton from "../Common/Scroll/Scroll";
import TestimonialTwo from "../Common/TestimonialTwo/TestimonialTwo";
import Wrapper from "../Common/Wrapper";
import BreadcumbNine from "../Service/BreadcumbNine/BreadcumbNine";
import ClientTwoSharedSection from "../Service/Client/Client";
import Contact from "../Service/Contact/Contact";
import Process from "../Service/Process/Process";
import ServiceArea from "../Service/Service/ServiceArea";
 

const Service = () => {
	return (
		<Wrapper>
			<div style={{ overflow: "hidden" }}>
				<HeaderOne />
				<BreadcumbNine />
				<ServiceArea />
				<Process />
				<TestimonialTwo />
				<ClientTwoSharedSection />
				<Contact />
				<FooterTwo />
				<ScrollTopButton />
			</div>
		</Wrapper>
	);
};

export default Service;
