import FooterTwo from "../Common/Footer/FooterTwo";
import HeaderTwo from "../Common/Header/HeaderTwo";
import ScrollTopButton from "../Common/Scroll/Scroll";
import Wrapper from "../Common/Wrapper";
import About from "../Home-3/About/About";
import Blog from "../Home-3/Blog/Blog";
import Client from "../Home-3/Client/Client";
import Contact from "../Home-3/Contact/Contact";
import Counter from "../Home-3/Counter/Counter";
import CTA from "../Home-3/CTA/CTA";
import Hero from "../Home-3/Hero/Hero";
import Portfolio from "../Home-3/Portfolio/Portfolio";
import Process from "../Home-3/Process/Process";
import Team from "../Home-3/Team/Team";
import Testimonial from "../Home-3/Testimonial/Testimonial";
import WhyChoose from "../Home-3/WhyChoose/WhyChoose";

 

const HomeThree = () => {
	return (
		<Wrapper>
			<div style={{ overflow: "hidden" }}>
				<HeaderTwo />
				<Hero />
				<About />
				<WhyChoose />
				<Process />
				<Portfolio />
				<Counter />
				<Contact />
				<Testimonial />
				<Client />
				<Team />
				<CTA />
				<Blog />
				<FooterTwo />
				<ScrollTopButton />
			</div>
		</Wrapper>
	);
};

export default HomeThree;
