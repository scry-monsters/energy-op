import Carousel from "../PartnersCarousel/Carousel";

const Header = () => {
	return (
		<div className="col-12 container" style={{ padding: "100px 0" }}>
			<h5
				className="text-justify text-md-none px-4 px-md-0"
				style={{ fontWeight: "300", lineHeight: "1.6", color: "#717275" }}
			>
				Наша страсть к инженерии и строительству отражается в каждом проекте,
				который мы осуществляем. Наши объекты – это наша гордость, визуальное
				отражение профессионализма, инноваций и непрерывной преданности
				качеству. Здесь представлены завершенные объекты: от промышленных
				комплексов до жилых домов, каждый из которых отражает стремление к
				совершенству и нашу способность превращать концепции в реальность.
			</h5>
			<div style={{ marginTop: "100px" }}>
				<Carousel />
			</div>
		</div>
	);
};

export default Header;
