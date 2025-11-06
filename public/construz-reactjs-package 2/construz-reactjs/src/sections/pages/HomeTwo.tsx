 

import FooterThree from "../Common/Footer/FooterThree";
import HeaderFour from "../Common/Header/HeaderFour";
import ScrollTopButton from "../Common/Scroll/Scroll";
import Wrapper from "../Common/Wrapper";
import About from "../Home-2/About/About";
import Blog from "../Home-2/Blog/Blog";
import Client from "../Home-2/Client/Client";
import Contact from "../Home-2/Contact/Contact";
import Counter from "../Home-2/Counter/Counter";
import FAQ from "../Home-2/FAQ/FAQ";
import Hero from "../Home-2/Hero/Hero";
import Portfolio from "../Home-2/Portfolio/Portfolio";
import Pricing from "../Home-2/Pricing/Pricing";
import Process from "../Home-2/Process/Process";
import Service from "../Home-2/Service/Service";
import Testimonial from "../Home-2/Testimonial/Testimonial";
import Video from "../Home-2/Video/Video";



const HomeTwo = () => {
  return (
    <Wrapper>
      <div style={{ overflow: 'hidden' }}>
        <HeaderFour />
        <Hero />
        <About />
        <Service />
        <Process />
        <Video />
        <Counter />
        <Portfolio />
        <Testimonial />
        <Pricing />
        <FAQ />
        <Client />
        <Blog />
        <Contact />
        <FooterThree />
        <ScrollTopButton />
      </div>
    </Wrapper>
  );
};

export default HomeTwo;