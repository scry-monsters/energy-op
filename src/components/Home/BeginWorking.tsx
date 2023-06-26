import { useState } from "react";

const clickData = [
	{
		id: 1,
		buttonText: "Процесс работы",
		image:
			"https://www.inventiva.co.in/wp-content/uploads/2022/09/why-we-need-to-invest-in-renewables-solar-wind-array-1920-1080.jpg",
		bodyText:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta iusto neque facilis omnis expedita quae officiis fugit exercitationem? Hic, consequatur. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur ipsam necessitatibus nisi sint inventore consequuntur, nam reprehenderit distinctio quis optio?",
		title: "Возможности",
	},

	{
		id: 2,
		buttonText: "Сборка продукта",
		image:
			"https://www.acquisition-international.com/wp-content/uploads/2020/05/AdobeStock_328443284-1920-x-1080.jpg",
		bodyText:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta iusto neque facilis omnis expedita quae officiis fugit exercitationem? Hic, consequatur. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur ipsam necessitatibus nisi sint inventore consequuntur, nam reprehenderit distinctio quis optio?",
		title: "Сборка",
	},
	{
		id: 3,
		buttonText: "Возможности",
		image:
			"https://sika.scene7.com/is/image/sika/glo-solar-roof-SSM1-south-Nauset:16-9?wid=1920&hei=1080&fit=crop%2C1",
		bodyText:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta iusto neque facilis omnis expedita quae officiis fugit exercitationem? Hic, consequatur. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur ipsam necessitatibus nisi sint inventore consequuntur, nam reprehenderit distinctio quis optio?",
		title: "Гарантия",
	},
];

const BeginWorking = () => {
	const [imageState, setImageState] = useState(clickData[0]);
	const changeWork = (id: number) => {
		setImageState(clickData[id]);
	};
	return (
		<div
			className="container mx-auto flex"
			style={{ margin: "130px 0 130px 0" }}
		>
			<h1 className="text-center mb-5" style={{ fontWeight: "bold" }}>
				Начните работать с нами
			</h1>
			<div className="row flex flex-md-row flex-column">
				<div className="col-12 col-lg-2 flex flex-column align-items-center my-auto">
					<p style={{ cursor: "pointer" }} onClick={() => changeWork(0)}>
						Процесс работы
					</p>
					<p style={{ cursor: "pointer" }} onClick={() => changeWork(1)}>
						Сборка продукта
					</p>
					<p style={{ cursor: "pointer" }} onClick={() => changeWork(2)}>
						Возможности
					</p>
				</div>
				<div className="col-12 col-lg-5">
					<img src={imageState.image} alt="gundam" className="w-100" />
				</div>
				<div className="col-12 col-lg-5">
					<h2>{imageState.title}</h2>
					<p>{imageState.bodyText}</p>
					<button className="btn btn-md md-dark btn-rounded bg-dark text-light">
						Узнать больше
					</button>
				</div>
			</div>
		</div>
	);
};

export default BeginWorking;
