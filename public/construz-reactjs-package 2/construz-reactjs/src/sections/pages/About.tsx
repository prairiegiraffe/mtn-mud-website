import AboutThree from "../About/AboutThree/AboutThree";
import BlogThree from "../About/BlogThree/BlogThree";
import Breadcumb from "../About/Breadcumb/Breadcumb";
import ClientThree from "../About/ClientThree/ClientThree";
import CounterThree from "../About/CounterThree/CounterThree";
import ProcessThree from "../About/ProcessThree/ProcessThree";
import TeamThree from "../About/TeamThree/TeamThree";
import TestimonialThree from "../About/TestimonialThree/TestimonialThree";
import WhyChooseThree from "../About/WhyChooseThree/WhyChooseThree";
import FooterTwo from "../Common/Footer/FooterTwo";
import HeaderOne from "../Common/Header/HeaderOne";
import ScrollTopButton from "../Common/Scroll/Scroll";
import Wrapper from "../Common/Wrapper";
import Portfolio from "../Home-1/Portfolio/Portfolio";


const About = () => {
  return (
    <Wrapper>
      <HeaderOne />
      <Breadcumb />
      <AboutThree />
      <WhyChooseThree />
      <ProcessThree />
      <Portfolio />
      <CounterThree />
      <TestimonialThree />
      <TeamThree />
      <ClientThree />
      <BlogThree />
      <FooterTwo />
      <ScrollTopButton />
    </Wrapper>
  );
};

export default About;