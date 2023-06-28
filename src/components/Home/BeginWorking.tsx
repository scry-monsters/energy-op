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
		<div className="container mx-auto flex" style={{ margin: "70px 0 70px 0" }}>
			<h1 className="text-center mb-5" style={{ fontWeight: "bold" }}>
				Начните работать с нами
			</h1>
			<div className="row flex flex-md-row flex-column">
				<div className="col-12 col-lg-2 flex flex-column align-items-center my-auto">
					<p
						className="border border-2 border-light text-center rounded-3 p-2 text-white"
						style={{ cursor: "pointer", backgroundColor: "black" }}
						onClick={() => changeWork(0)}
					>
						Процесс работы
					</p>
					<p
						className="border border-2 border-light text-center rounded-3 p-2 text-white"
						style={{ cursor: "pointer", backgroundColor: "black" }}
						onClick={() => changeWork(1)}
					>
						Сборка продукта
					</p>
					<p
						className="border border-2 border-light text-center rounded-3 p-2 text-white"
						style={{ cursor: "pointer", backgroundColor: "black" }}
						onClick={() => changeWork(2)}
					>
						Возможности
					</p>
				</div>
				<div className="col-12 col-lg-6">
					<img src={imageState.image} alt="gundam" className="w-100" />
				</div>
				<div className="col-12 col-lg-4">
					<h2 className="d-none d-lg-block">{imageState.title}</h2>
					<p>{imageState.bodyText}</p>
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
						Узнать больше
					</button>
				</div>
			</div>
		</div>
	);
};

export default BeginWorking;
