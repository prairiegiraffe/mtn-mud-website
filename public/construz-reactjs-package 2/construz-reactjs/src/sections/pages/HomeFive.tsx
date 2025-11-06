import CounterTwo from "../Common/CounterTwo/CounterTwo";
import FooterFive from "../Common/Footer/FooterFive";
import HeaderThree from "../Common/Header/HeaderThree";
import ScrollTopButton from "../Common/Scroll/Scroll";
import Wrapper from "../Common/Wrapper";
import About from "../Home-5/About/About";
import Award from "../Home-5/Award/Award";
import Benefit from "../Home-5/Benefit/Benefit";
import Blog from "../Home-5/Blog/Blog";
import Client from "../Home-5/Client/Client";
import Contact from "../Home-5/Contact/Contact";
import CTA from "../Home-5/CTA/CTA";
import Hero from "../Home-5/Hero/Hero";
import Portfolio from "../Home-5/Portfolio/Portfolio";
import Testimonial from "../Home-5/Testimonial/Testimonial";
import WhyChoose from "../Home-5/WhyChoose/WhyChoose";

 

const HomeFive = () => {
	return (
		<Wrapper>
			<div style={{ overflow: "hidden" }}>
				<HeaderThree />
				<Hero />
				<About />
				<WhyChoose />
				<Benefit />
				<Testimonial />
				<Award />
				<Contact />
				<Portfolio />
				<CounterTwo />
				<Client />
				<Blog />
				<CTA />
				<FooterFive />
				<ScrollTopButton />
			</div>
		</Wrapper>
	);
};

export default HomeFive;
