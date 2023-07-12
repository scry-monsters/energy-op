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
					<h5
						style={{ fontWeight: "300", lineHeight: "1.6", color: "#717275" }}
					>
						Компания «СтройЭлектро» организована в 1992 г. из подразделения
						Главзапстроя как самостоятельное предприятие с собственной
						материально-технической базой площадью 2 500 кв. м для производства,
						сборки и ремонта электрооборудования, с парком автотранспорта,
						строительной техники и специализированных механизмов, а также
						коллективом специалистов высокого класса. Общество успешно выполняет
						полный комплекс работ, связанных с электромонтажом промышленных и
						гражданских объектов, установкой слаботочных устройств и
						охранно-пожарной сигнализации: разработка проектно-сметной
						документации, согласование и утверждение ее во всех инстанциях,
						комплектация объекта материалами и оборудованием, производство
						электрощитовой продукции, производство монтажных и пусконаладочных
						работ и сдача объекта в эксплуатацию.
					</h5>
				</div>
			</section>
		</>
	);
};

export default About;
