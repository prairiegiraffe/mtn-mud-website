import FooterTwo from "../Common/Footer/FooterTwo";
import HeaderOne from "../Common/Header/HeaderOne";
import ScrollTopButton from "../Common/Scroll/Scroll";
import BreadcumbTwelve from "../Shop-Details/BreadcumbTwelve/BreadcumbTwelve";
import ProductDetails from "../Shop-Details/ProductDetails/ProductDetails";

const ShopDetails = () => {
	return (
		<>
			<HeaderOne />
			<BreadcumbTwelve />
			<ProductDetails />
			<FooterTwo />
			<ScrollTopButton />
		</>
	);
};

export default ShopDetails;
