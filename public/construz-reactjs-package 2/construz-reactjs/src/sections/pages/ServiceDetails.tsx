import FooterTwo from "../Common/Footer/FooterTwo";
import HeaderOne from "../Common/Header/HeaderOne";
import ScrollTopButton from "../Common/Scroll/Scroll";
import Wrapper from "../Common/Wrapper";
import BreadcumbTen from "../Service-Details/BreadcumbTen/BreadcumbTen";
import Faq from "../Service-Details/Faq/Faq";
import ServiceDetailsArea from "../Service-Details/ServiceDetails/ServiceDetailsArea";

 

const ServiceDetails = () => {
	return (
		<Wrapper>
			<div style={{ overflow: "hidden" }}>
				<HeaderOne />
				<BreadcumbTen />
				<ServiceDetailsArea />
				<Faq />
				<FooterTwo />
				<ScrollTopButton />
			</div>
		</Wrapper>
	);
};

export default ServiceDetails;
