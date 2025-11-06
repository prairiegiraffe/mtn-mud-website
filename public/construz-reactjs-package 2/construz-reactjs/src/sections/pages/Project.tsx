import FooterTwo from "../Common/Footer/FooterTwo";
import HeaderOne from "../Common/Header/HeaderOne";
import ScrollTopButton from "../Common/Scroll/Scroll";
import Wrapper from "../Common/Wrapper";
import BreadcumbSeven from "../Project/BreadcumbSeven/BreadcumbSeven";
import ProjectArea from "../Project/Project/Project";

const Project = () => {
	return (
		<Wrapper>
			<HeaderOne />
			<BreadcumbSeven />
			<ProjectArea />
			<FooterTwo />
			<ScrollTopButton />
		</Wrapper>
	);
};

export default Project;
