import FooterTwo from "../Common/Footer/FooterTwo";
import HeaderOne from "../Common/Header/HeaderOne";
import ScrollTopButton from "../Common/Scroll/Scroll";
import Wrapper from "../Common/Wrapper";
import BreadcumbEleven from "../Shop/BreadcumbEleven/BreadcumbEleven";
import Product from "../Shop/Product/Product";

const Shop = () => {
	return (
		<Wrapper>
			<HeaderOne />
			<BreadcumbEleven />
			<Product />
			<FooterTwo />
			<ScrollTopButton />
		</Wrapper>
	);
};

export default Shop;
