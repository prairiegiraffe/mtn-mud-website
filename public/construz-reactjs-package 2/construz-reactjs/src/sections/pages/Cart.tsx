import BreadcumbFour from "../Cart/BreadcumbFour/BreadcumbFour";
import CartArea from "../Cart/CartArea/CartArea";
import FooterTwo from "../Common/Footer/FooterTwo";
import HeaderOne from "../Common/Header/HeaderOne";
import ScrollTopButton from "../Common/Scroll/Scroll";
import Wrapper from "../Common/Wrapper";

const Cart = () => {
	return (
		<Wrapper>
			<HeaderOne />
			<BreadcumbFour />
			<CartArea />
			<FooterTwo />
			<ScrollTopButton />
		</Wrapper>
	);
};

export default Cart;
