 
import BlogFive from '../BlogDetails/BlogFour/BlogFive';
import BreadcumbThree from '../BlogDetails/BreadcumbThree/BreadcumbThree';
import FooterTwo from '../Common/Footer/FooterTwo';
import HeaderOne from '../Common/Header/HeaderOne';
import ScrollTopButton from '../Common/Scroll/Scroll';
import Wrapper from '../Common/Wrapper';

const BlogDetails = () => {
  return (
    <Wrapper>
      <HeaderOne />
      <BreadcumbThree />
      <BlogFive />
      <FooterTwo />
      <ScrollTopButton />
    </Wrapper>
  );
};

export default BlogDetails;