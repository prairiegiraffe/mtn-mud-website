import FooterTwo from "../Common/Footer/FooterTwo";
import HeaderOne from "../Common/Header/HeaderOne";
import ScrollTopButton from "../Common/Scroll/Scroll";
import Wrapper from "../Common/Wrapper";
import BreadcumbEight from "../Project-Details/BreadcumbEight/BreadcumbEight";
import ContactSix from "../Project-Details/ContactSix/ContactSix";
import ProjectDetailsArea from "../Project-Details/ProjectDetails/ProjectDetails";

const ProjectDetails = () => {
  return (
    <Wrapper>
        <div style={{overflow: 'hidden'}}>
            <HeaderOne />
            <BreadcumbEight />
            <ProjectDetailsArea />
            <ContactSix />
            <FooterTwo />
            <ScrollTopButton />
        </div>
    </Wrapper>
  );
};

export default ProjectDetails;