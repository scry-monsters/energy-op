import { Link } from "react-router-dom";

const OurProjects = () => {
	return (
		<section
			className="featured-product section-padding"
			style={{ margin: "70px 0 70px 0" }}
		>
			<div className="container">
				<div className="row">
					<div className="col-12 text-center">
						<h1 className="mb-5" style={{ fontWeight: "700" }}>
							Наши проекты
						</h1>
					</div>

					<div className="col-lg-4 col-12 mb-3">
						<div className="product-thumb">
							<Link to="/projects">
								<img
									src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
									className="img-fluid product-image"
									alt=""
								/>
							</Link>

							<div className="product-info d-flex">
								<div>
									<h5 className="product-title mb-0">текст</h5>

									<p className="product-p">текст</p>
								</div>

								<small className="product-price text-muted ms-auto mt-auto mb-5">
									$1000
								</small>
							</div>
						</div>
					</div>

					<div className="col-lg-4 col-12 mb-3">
						<div className="product-thumb">
							<Link to="/projects">
								<img
									src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1775&q=80"
									className="img-fluid product-image"
									alt=""
								/>
							</Link>

							<div className="product-info d-flex">
								<div>
									<h5 className="product-title mb-0">текст</h5>

									<p className="product-p">текст</p>
								</div>

								<small className="product-price text-muted ms-auto mt-auto mb-5">
									$1000
								</small>
							</div>
						</div>
					</div>

					<div className="col-lg-4 col-12">
						<div className="product-thumb">
							<Link to="/projects">
								<img
									src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
									className="img-fluid product-image"
									alt=""
								/>
							</Link>

							<div className="product-info d-flex">
								<div>
									<h5 className="product-title mb-0">текст</h5>

									<p className="product-p">текст</p>
								</div>

								<small className="product-price text-muted ms-auto mt-auto mb-5">
									$1000
								</small>
							</div>
						</div>
					</div>

					<div className="col-12 text-center">
						<Link to="/projects">
							<button
								style={{
									fontWeight: "700",
									backgroundColor: "#000000",
									borderRadius: "20px",
									border: "none",
									color: "#ffffff",
									padding: "10px 15px",
								}}
							>
								Вся продукция
							</button>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default OurProjects;
