import Carousel from "../components/Partners/Carousel";

const Partners = () => {
	return (
		<>
			<div
				style={{
					backgroundColor: "#f0f8ff",
					overflow: "hidden",
				}}
			>
				<div className="row">
					<div className="col-lg-6 col-12">
						<h1 className="text-center" style={{ margin: "200px 0" }}>
							<span className="d-block text-dark">Партнеры</span>
						</h1>
					</div>
					<div
						className="col-lg-6 col-12 px-0"
						style={{
							backgroundImage:
								"url('https://www.pos-blagajne.com/wp-content/uploads/2018/07/partners_background.jpg')",
							backgroundSize: "cover",
						}}
					></div>
				</div>
			</div>
			<section>
				<div
					className="container text-center"
					style={{ marginTop: "100px", marginBottom: "100px" }}
				>
					<p className="pb-5">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Id deserunt
						impedit asperiores! Excepturi molestias, at illo maiores explicabo
						ab voluptatum voluptas nisi beatae consectetur ea veritatis quas
						perferendis omnis ipsam corrupti provident vitae doloribus. Numquam
						expedita omnis sapiente iure cum dolore, nostrum eos corporis
						aspernatur. Facere sit molestias esse laboriosam quia? Assumenda
						nulla necessitatibus, dolorem ab, dicta cupiditate nobis aspernatur
						vitae aliquid delectus ipsam temporibus? Fuga at a ullam expedita,
						obcaecati pariatur quaerat minus nulla, id, fugit quisquam? Eius non
						illum aspernatur cupiditate nemo sequi eligendi omnis dolores quia?
						Corporis fugiat animi quibusdam dignissimos labore sint autem
						libero, a assumenda.
					</p>
					<Carousel />
				</div>
			</section>
		</>
	);
};

export default Partners;
