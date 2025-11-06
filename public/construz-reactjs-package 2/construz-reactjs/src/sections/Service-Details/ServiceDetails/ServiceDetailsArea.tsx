import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import PopupVideo from "../../Common/PopupVideo/PopupVideo";

const ServiceDetailsArea = () => {
	const [popup, setPopup] = useState(false);
	const [isActive, setIsActive] = useState(false);
	const openPopup = () => {
		setPopup(true);
		const iframe = document.getElementById(
			"youtube-video"
		) as HTMLIFrameElement;
		if (iframe) {
			iframe.src = "https://www.youtube.com/embed/Q5PG0rMXgvw";
		}
		setIsActive(true);
		document.body.style.overflow = "hidden";
	};

	// progress bar js code
	const progressBarRefs = useRef<HTMLDivElement[]>([]);
	const counterRefs = useRef<HTMLSpanElement[]>([]);

	useEffect(() => {
		const bars = [
			{ targetValue: 89, duration: 2000 },
			{ targetValue: 92, duration: 2000 },
			{ targetValue: 78, duration: 2000 },
		];

		bars.forEach((bar, index) => {
			// let startTime = null;
			let startTime: number | null = null;
			const updateCounter = (timestamp: number) => {
				if (!startTime) startTime = timestamp;
				const progress = timestamp - startTime;
				const value = Math.min(
					Math.floor((progress / bar.duration) * bar.targetValue),
					bar.targetValue
				);
				// counterRefs.current[index].innerText = value;
				counterRefs.current[index].innerText = value.toString();

				if (progress < bar.duration) {
					requestAnimationFrame(updateCounter);
				} 
			};

			requestAnimationFrame(updateCounter);
		});
	}, []);

	return (
		<>
			<div className="service-details-area space-top overflow-hidden">
				<div className="container3">
					<div className="row gy-30 gx-30">
						<div className="col-12">
							<div className="single-page">
								<div className="service-thumb mb-50">
									<img
										className="w-100"
										src="/assets/img/service/service_details1_1.png"
										alt="img"
									/>
								</div>
								<h2 className="sec-title2 mb-25">General Construction</h2>
								<p className="mb-50">
									Industry's standard dummy text ever since the 1500s, when an
									unknown printer took a galley of type and scrambled it to make
									a type specimen book. It has survived not only five centuries,
									but also the leapinto electronic typesetting, remaining
									essentially unchanged. It was popularised in the 1960s with
									the release letraset sheets containing. Richard Clintock a
									Latin professor at Hampden-Sydney College in Virginia, looked
									up one of the more obscure latin words, consectetur, from a
									Lorem Ipsum passage.
								</p>
								<div className="row gy-4 justify-content-center">
									<div className="col-xl-4 col-lg-6">
										<div className="service-card style4">
											<div className="service-card_icon">
												<img
													src="/assets/img/icon/service-icon1-1.png"
													alt="img"
												/>
											</div>
											<div className="service-card_content item-decoration">
												<h4 className="service-card_title">
													<Link to="/service-details">
														Full Principal Contractor service
													</Link>
												</h4>
												<p className="service-card_text">
													There are many passages of lorem ipsum available
												</p>
											</div>
										</div>
									</div>
									<div className="col-xl-4 col-lg-6">
										<div className="service-card style4">
											<div className="service-card_icon">
												<img
													src="/assets/img/icon/service-icon1-2.png"
													alt="img"
												/>
											</div>
											<div className="service-card_content item-decoration">
												<h4 className="service-card_title">
													<Link to="/service-details">
														Full-time Onsite Supervision
													</Link>
												</h4>
												<p className="service-card_text">
													There are many passages of lorem ipsum available
												</p>
											</div>
										</div>
									</div>
									<div className="col-xl-4 col-lg-6">
										<div className="service-card style4">
											<div className="service-card_icon">
												<img
													src="/assets/img/icon/service-icon1-3.png"
													alt="img"
												/>
											</div>
											<div className="service-card_content item-decoration">
												<h4 className="service-card_title">
													<Link to="/service-details">
														Timber and steel frame construction
													</Link>
												</h4>
												<p className="service-card_text">
													There are many passages of lorem ipsum available
												</p>
											</div>
										</div>
									</div>
								</div>
								<div className="mt-60 mb-60 service-details-absolute-container">
									<div className="row justify-content-between align-items-center gy-40">
										<div className="col-lg-6">
											<div className="title-area text-md-start text-center">
												<h2 className="sec-title2">Awesome Benefits</h2>
											</div>
											<div className="process-thumb2-1">
												<img
													src="/assets/img/normal/process-thumb2-1.png"
													alt="img"
												/>
											</div>
										</div>
										<div className="col-lg-6">
											<div className="process-grid-list style2 service-details-top-extra-space">
												<div className="process-grid-list-bg-text">BENEFIT</div>
												<div className="process-grid">
													<div className="process-grid-number">01</div>
													<div className="process-grid-details">
														<h3 className="process-grid-title">
															Advanced Technology{" "}
														</h3>
														<p className="process-grid-text">
															We craft unique digital experiences. With more
															years of expertise we design{" "}
														</p>
													</div>
												</div>
												<div className="process-grid">
													<div className="process-grid-number">02</div>
													<div className="process-grid-details">
														<h3 className="process-grid-title">
															Trusted Company{" "}
														</h3>
														<p className="process-grid-text">
															We craft unique digital experiences. With more
															years of expertise we design{" "}
														</p>
													</div>
												</div>
												<div className="process-grid">
													<div className="process-grid-number">03</div>
													<div className="process-grid-details">
														<h3 className="process-grid-title">
															Professional Teams{" "}
														</h3>
														<p className="process-grid-text">
															We craft unique digital experiences. With more
															years of expertise we design{" "}
														</p>
													</div>
												</div>
												<div className="process-grid">
													<div className="process-grid-number">04</div>
													<div className="process-grid-details">
														<h3 className="process-grid-title">
															Stylistic formula method
														</h3>
														<p className="process-grid-text">
															We craft unique digital experiences. With more
															years of expertise we design{" "}
														</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>

								{/* solution and planing section */}
								<div className="row align-items-end gy-40 justify-content-between">
									<div className="col-xl-6">
										<h2 className="fw-semibold service-text-adjustment">
											Solutions & Planning
										</h2>
										<p>
											Industry's standard dummy text ever since the 1500s, when
											an unknown printer took a galley of type and scrambled it
											to make a type specimen book. It has survived not only
											five centuries, but also the leapinto electronic
											typesetting.
										</p>
										<div className="mb-35">
											<div className="row gy-2">
												<div className="col-lg-6">
													<div className="checklist style6">
														<ul>
															<li>Powerful Product Strategy</li>
															<li>Professional Team Works</li>
														</ul>
													</div>
												</div>
												<div className="col-lg-6">
													<div className="checklist style6">
														<ul>
															<li>Quality Control System</li>
															<li>Budget Friendly Project</li>
														</ul>
													</div>
												</div>
											</div>
										</div>

										{/* progress bar section here */}
										<div className="skill-feature style3">
											<h3 className="skill-feature_title">
												Construction Works
											</h3>
											<div className="progress">
												<div
													className="progress-bar progress-barOne"
													ref={() => (progressBarRefs.current[0] as HTMLDivElement)}
													style={{ width: "89%" }}
												></div>
												<div className="progress-value">
													<span
														className="counter-number counter-numberOne"
														ref={() => (counterRefs.current[0] as HTMLSpanElement)}
														data-count="89"
													>
														89
													</span>
													%
												</div>
											</div>
										</div>

										{/* progress bar section here */}
										<div className="skill-feature style3">
											<h3 className="skill-feature_title">Building Services</h3>
											<div className="progress">
												<div
													className="progress-bar progress-barTwo"
													ref={() => (progressBarRefs.current[1] as HTMLDivElement)}
													style={{ width: "92%" }}
												></div>
												<div className="progress-value">
													<span
														className="counter-number counter-numberTwo"
														ref={() => (counterRefs.current[1] as HTMLSpanElement)}
														data-count="92"
													>
														92
													</span>
													%
												</div>
											</div>
										</div>

										{/* progress bar section here */}
										<div className="skill-feature style3">
											<h3 className="skill-feature_title">
												Industrial Solution
											</h3>
											<div className="progress">
												<div
													className="progress-bar progress-barThree"
													ref={() => (progressBarRefs.current[2] as HTMLDivElement)}
													style={{ width: "78%" }}
												></div>
												<div className="progress-value">
													<span
														className="counter-number counter-numberThree"
														ref={() => ((counterRefs.current[2] as HTMLSpanElement))}
														data-count="78"
													>
														78
													</span>
													%
												</div>
											</div>
										</div>
									</div>

									<div className="col-xxl-5 col-xl-6">
										<div className="video-wrap service-details-top-extra-space">
											<img
												className="w-100"
												src="/assets/img/service/service_details1_2.png"
												alt="img"
											/>
											<a onClick={openPopup} className="play-btn style7">
												<i className="ri-play-fill"></i>
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<PopupVideo
				popup={popup}
				setPopup={setPopup}
				isActive={isActive}
				setIsActive={setIsActive}
			></PopupVideo>
		</>
	);
};

export default ServiceDetailsArea;
