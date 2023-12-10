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
						<h1
							className="text-center"
							style={{ margin: "200px 0 150px 0", fontWeight: "900" }}
						>
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
					className="container"
					style={{ marginTop: "80px", marginBottom: "100px" }}
				>
					<h5
						style={{
							fontWeight: "300",
							lineHeight: "1.6",
							color: "#717275",
							marginBottom: "100px",
						}}
					>
						Наш опыт и качество работ неразрывно связаны с нашими партнерами, с
						которыми мы уверенно идём вперед, предоставляя клиентам передовые
						решения. Сотрудничество с нашими партнерами позволяет нам
						реализовывать проекты любой сложности с высочайшим уровнем
						профессионализма и точности. Мы стремимся к постоянному
						совершенствованию и применению передовых технологий, а благодаря
						партнерским отношениям мы можем предложить клиентам современные и
						эффективные решения для промышленных и гражданских объектов. Если вы
						заинтересованы в партнерстве с нами, мы будем рады обсудить
						возможности сотрудничества. Свяжитесь с нами, чтобы узнать больше о
						том, как наше совместное партнерство может усилить ваш бизнес и
						обеспечить успешную реализацию проектов.
					</h5>
					<Carousel />
				</div>
			</section>
		</>
	);
};

export default Partners;
