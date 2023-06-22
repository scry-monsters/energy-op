const Experience = () => {
	return (
		<div className="flex flex-row" style={{ maxHeight: "50vh" }}>
			<div className="row">
				<div className="col-4">
					<img
						src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg"
						alt="ay"
						style={{ height: "100%", width: "100%" }}
					/>
				</div>
				<div className="col-8">
					<h1>Опыт работы 10+ лет</h1>
					<h3>
						Наша строительная компания не стоит на месте, она постоянно
						развивается, наращивает объемы и темпы строительства. На сегодняшний
						день «Стройэлектро» параллельно ведет несколько больших проектов.
					</h3>
					<h4 style={{ cursor: "pointer" }}>ПОСМОТРЕТЬ НАШИ ПРОЕКТЫ</h4>
				</div>
			</div>
		</div>
	);
};

export default Experience;
