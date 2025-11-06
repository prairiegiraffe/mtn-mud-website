import { Link } from "react-router-dom";

const BreadcumbFive = () => {
	return (
		<div
			className="breadcumb-wrapper"
			style={{ backgroundImage: "url('/assets/img/bg/breadcrumb-bg.png')" }}
		>
			<div
				className="section-animation-shape1-1 shape-mockup animation-infinite"
				data-top="0"
				data-bg-src="assets/img/shape/global-line-shape1.png"
			></div>
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="breadcumb-content">
							<h1 className="breadcumb-title">Checkout Page</h1>
							<ul className="breadcumb-menu">
								<li>
									<Link to="/">
										<i className="ri-home-4-fill"></i> HOME
									</Link>
								</li>
								<li className="active">CHECKOUT</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BreadcumbFive;
