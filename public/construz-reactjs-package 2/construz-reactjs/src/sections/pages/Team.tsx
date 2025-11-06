import FooterTwo from "../Common/Footer/FooterTwo";
import HeaderOne from "../Common/Header/HeaderOne";
import ScrollTopButton from "../Common/Scroll/Scroll";
import Wrapper from "../Common/Wrapper";
import BreadcumbThirteen from "../Team/BreadcumbThirteen/BreadcumbThirteen";
import TeamFour from "../Team/TeamFour/TeamFour";

const Team = () => {
	return (
		<Wrapper>
			<HeaderOne />
			<BreadcumbThirteen />
			<TeamFour />
			<FooterTwo />
			<ScrollTopButton />
		</Wrapper>
	);
};

export default Team;
