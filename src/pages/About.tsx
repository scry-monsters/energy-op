const About = () => {
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
							style={{ margin: "170px 0", fontWeight: "900" }}
						>
							<span className="d-block text-primary">Наша</span>
							<span className="d-block text-dark">История</span>
						</h1>
					</div>
					<div
						className="col-lg-6 col-12 px-0"
						style={{
							backgroundImage:
								"url('https://wallpapers.com/images/featured/dxva6ho3h8x6m3xb.jpg')",
							backgroundSize: "cover",
							backgroundPosition: "center",
						}}
					></div>
				</div>
			</div>
			<section>
				<div
					className="container"
					style={{ marginTop: "100px", marginBottom: "100px" }}
				>
					<h1 className="el_h1 text-center mb-5" style={{ fontWeight: "900" }}>
						Электричество
					</h1>

					<h5
						style={{ fontWeight: "300", lineHeight: "1.6", color: "#717275" }}
					>
						Задолго до того, как появились какие-либо знания об электричестве,
						люди знали о свойствах электрических рыб. Древнеегипетские тексты,
						датируемые 2750 годом до н. э., упоминают этих рыб как «Громовержцев
						Нила» и описывают их как «защитников» всех других рыб. Тысячелетия
						спустя об электрических рыбах вновь сообщали древнегреческие,
						римские и арабские естествоиспытатели и врачи. Некоторые древние
						писатели, такие как Плиний Старший и Скрибоний Ларг,
						свидетельствовали о парализующем действии электрических разрядов,
						производимых электрическими сомами и электрическими скатами, и
						знали, что такие разряды могут перемещаться вдоль проводящих
						объектов. Пациентам, страдающим от таких недугов, как подагра или
						головная боль, предписывалось дотрагиваться до электрических рыб — в
						надежде, что мощный разряд излечит их.
					</h5>
				</div>
			</section>
		</>
	);
};

export default About;
