 
import CounterOne from "../Common/Counter/CounterOne";
import FooterTwo from "../Common/Footer/FooterTwo";
import HeaderOne from "../Common/Header/HeaderOne";
import ScrollTopButton from "../Common/Scroll/Scroll";
import Wrapper from "../Common/Wrapper";
import About from "../Home-1/About/About";
import Blog from "../Home-1/Blog/Blog";
import Client from "../Home-1/Client/Client";
import Cta from "../Home-1/Cta/Cta";
import Hero from "../Home-1/Hero/Hero";
import Portfolio from "../Home-1/Portfolio/Portfolio";
import Process from "../Home-1/Process/Process";
import Service from "../Home-1/Service/Service";
import Team from "../Home-1/Team/Team";
import Testimonial from "../Home-1/Testimonial/Testimonial";
import WhyChoose from "../Home-1/WhyChoose/WhyChoose";



const HomeOne = () => {
	return (
		<Wrapper>
			<div style={{ overflow: "hidden" }}>
				<HeaderOne />
				<Hero />
				<About />
				<Service />
				<Cta />
				<WhyChoose />
				<Process />
				<Portfolio />
				<CounterOne />
				<Testimonial />
				<Team />
				<Client />
				<Blog />
				<FooterTwo />
				<ScrollTopButton />
			</div>
		</Wrapper>
	);
};

export default HomeOne;
