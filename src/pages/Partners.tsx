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
							style={{ margin: "200px 0", fontWeight: "900" }}
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
						В данной статье рассмотрены основные понятия о строительстве,
						выявление процессов строительства и его компоненты, разработка
						проектов, определены основные понятия о сметной документации,
						представлен обзор конструктивных решений зданий и сооружений,
						усовершенствование и разработка проектно-сметных документаций,
						проанализированы основные конструктивные элементы зданий и
						сооружений, раскрытие требований для проектирования зданий и
						сооружений,особое внимание уделено совершентствованию
						проектно-сметных документов и строительству.
					</h5>
					<Carousel />
				</div>
			</section>
		</>
	);
};

export default Partners;
