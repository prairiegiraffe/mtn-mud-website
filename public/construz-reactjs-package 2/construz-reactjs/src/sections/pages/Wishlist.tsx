import FooterTwo from "../Common/Footer/FooterTwo";
import HeaderOne from "../Common/Header/HeaderOne";
import ScrollTopButton from "../Common/Scroll/Scroll";
import Wrapper from "../Common/Wrapper";
import BreadcumbFifteen from "../Wishlist/BreadcumbFifteen/BreadcumbFifteen";
import WishlistArea from "../Wishlist/Wishlist/Wishlist";

const Wishlist = () => {
	return (
		<Wrapper>
			<HeaderOne />
			<BreadcumbFifteen />
			<WishlistArea />
			<FooterTwo />
			<ScrollTopButton />
		</Wrapper>
	);
};

export default Wishlist;
