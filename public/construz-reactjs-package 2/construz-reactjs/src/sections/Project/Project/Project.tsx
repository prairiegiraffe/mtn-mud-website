// import { useState } from "react";
import { Link } from "react-router-dom";
// import Lightbox from "yet-another-react-lightbox";
// import "yet-another-react-lightbox/styles.css";

const images = [
	"/assets/img/project/project2_1.png",
	"/assets/img/project/project2_2.png",
	"/assets/img/project/project2_3.png",
	"/assets/img/project/project2_4.png",
	"/assets/img/project/project2_5.png",
	"/assets/img/project/project2_6.png",
	"/assets/img/project/project2_7.png",
	"/assets/img/project/project2_8.png",
	"/assets/img/project/project2_9.png",
];

const ProjectArea = () => {
	// const [photoIndex, setPhotoIndex] = useState<number | null>(null);

	// const handleOpen = (index: number) => {
	// 	setPhotoIndex(index);
	// };

	// const slides = images.map((src) => ({ src }));

	return (
		<section className="project-page space-top space-extra-bottom">
			<div className="container">
				<div className="row gy-40 justify-content-center">
					{images.map((src, index) => (
						<div className="col-md-6 col-lg-4" key={index}>
							<div className="portfolio-card style2">
								<div className="portfolio-card-thumb">
									<img src={src} alt={`img ${index + 1}`} />
									<span className="portfolio-card-number">0{index + 1}</span>
									<button
										className="icon-btn popup-image"
										 
									>
										<i className="ri-eye-line"></i>
									</button>
								</div>
								<div className="portfolio-card-details">
									<span className="portfolio-card-subtitle">Category</span>
									<h4 className="portfolio-card-title">
										<Link to="/project-details">Project Title</Link>
									</h4>
									<p className="portofolio-card-text">
										Building since 09,01,2024
									</p>
									<Link to="/project-details" className="btn-with-icon">
										VIEW DETAILS
										<span className="btn-icon">
											<i className="ri-arrow-right-up-line"></i>
										</span>
									</Link>
								</div>
							</div>
						</div>
					))}
				</div>
				<div className="pagination justify-content-center">
					<ul>
						<li>
							<Link className="active" to="/blog">
								01
							</Link>
						</li>
						<li>
							<Link to="/blog">02</Link>
						</li>
						<li>
							<Link to="/blog">03</Link>
						</li>
						<li>
							<Link to="/blog">
								<i className="ri-arrow-right-line"></i>
							</Link>
						</li>
					</ul>
				</div>
			</div>
			{/* {photoIndex !== null && (
				<Lightbox
					open={photoIndex !== null}
					close={() => setPhotoIndex(null)}
					slides={slides}
					index={photoIndex}
					on={{
						view: ({ index }) => setPhotoIndex(index),
					}}
				/>
			)} */}
		</section>
	);
};

export default ProjectArea;
