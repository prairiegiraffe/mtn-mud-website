import Wrapper from "../Common/Wrapper";
import FooterTwo from "../Common/Footer/FooterTwo";
import HeaderOne from "../Common/Header/HeaderOne";
import ScrollTopButton from "../Common/Scroll/Scroll";
import Contact from "../Team-Details/Contact/Contact";
import BreadcumbFourteen from "../Team-Details/BreadcumbFourteen/BreadcumbFourteen";
import ServiceDetailsTwo from "../Team-Details/ServiceDetailsTwo/ServiceDetailsTwo";

const TeamDetails = () => {
	return (
		<Wrapper>
			<div style={{ overflow: "hidden" }}>
				<HeaderOne />
				<BreadcumbFourteen />
				<ServiceDetailsTwo />
				<Contact />
				<FooterTwo />
				<ScrollTopButton />
			</div>
		</Wrapper>
	);
};

export default TeamDetails;
