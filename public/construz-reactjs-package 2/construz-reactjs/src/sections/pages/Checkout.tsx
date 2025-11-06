import BreadcumbFive from "../Checkout/BreadcumbFive/BreadcumbFive";
import CheckoutArea from "../Checkout/CheckoutArea/CheckoutArea";
import FooterTwo from "../Common/Footer/FooterTwo";
import HeaderOne from "../Common/Header/HeaderOne";
import ScrollTopButton from "../Common/Scroll/Scroll";
import Wrapper from "../Common/Wrapper";

const Checkout = () => {
	return (
		<Wrapper>
			<HeaderOne />
			<BreadcumbFive />
			<CheckoutArea />
			<FooterTwo />
			<ScrollTopButton />
		</Wrapper>
	);
};

export default Checkout;
