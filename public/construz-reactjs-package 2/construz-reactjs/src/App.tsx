import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeOne from "./sections/pages/HomeOne"; 
import HomeTwo from "./sections/pages/HomeTwo";
import HomeThree from "./sections/pages/HomeThree";
import HomeFour from "./sections/pages/HomeFour"; 
import HomeFive from "./sections/pages/HomeFive";
import About from "./sections/pages/About";
import Service from "./sections/pages/Service";
import ServiceDetails from "./sections/pages/ServiceDetails";
import Contact from "./sections/pages/Contact";
import Blog from "./sections/pages/Blog";
import BlogDetails from "./sections/pages/BlogDetails";
import Project from "./sections/pages/Project";
import ProjectDetails from "./sections/pages/ProjectDetails";
import Team from "./sections/pages/Team";
import TeamDetails from "./sections/pages/TeamDetails";
import Shop from "./sections/pages/Shop";
import ShopDetails from "./sections/pages/ShopDetails";
import Cart from "./sections/pages/Cart";
import Checkout from "./sections/pages/Checkout";
import Wishlist from "./sections/pages/Wishlist";
import HomeOneSingle from "./sections/pages/HomeOneSingle";
import HomeTwoSignle from "./sections/pages/HomeTwoSignle";
import HomeThreeSignle from "./sections/pages/HomeThreeSignle";
import HomeFourSignle from "./sections/pages/HomeFourSignle";
import HomeFiveSignle from "./sections/pages/HomeFiveSignle";

const router = createBrowserRouter([
	{ path: "/", element: <HomeOne /> },
	{ path: "/home-1", element: <HomeOne /> },
	{ path: "/home-2", element: <HomeTwo /> },
	{ path: "/home-3", element: <HomeThree /> },
	{ path: "/home-4", element: <HomeFour /> },
	{ path: "/home-5", element: <HomeFive /> },
	{ path: "/about", element: <About /> },
	{ path: "/service", element: <Service /> },
	{ path: "/service-details", element: <ServiceDetails /> },
	{ path: "/blog", element: <Blog /> },
	{ path: "/blog-details", element: <BlogDetails /> },
	{ path: "/project", element: <Project /> },
	{ path: "/project-details", element: <ProjectDetails /> },
	{ path: "/team", element: <Team /> },
	{ path: "/team-details", element: <TeamDetails /> },
	{ path: "/shop", element: <Shop /> },
	{ path: "/shop-details", element: <ShopDetails /> },
	{ path: "/cart", element: <Cart /> },
	{ path: "/checkout", element: <Checkout /> },
	{ path: "/wishlist", element: <Wishlist /> },


	{ path: "/home-1-op", element: <HomeOneSingle /> },
	{ path: "/home-2-op", element: <HomeTwoSignle /> },
	{ path: "/home-3-op", element: <HomeThreeSignle /> },
	{ path: "/home-4-op", element: <HomeFourSignle /> },
	{ path: "/home-5-op", element: <HomeFiveSignle /> },



	{ path: "/contact", element: <Contact /> },
	 

	// { path: "*", element: <NotFound /> },
]);

function App() {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
