import { useState } from "react";

const clickData = [
	{
		id: 1,
		buttonText: "Процесс работы",
		image:
			"https://rare-gallery.com/uploads/posts/4517905-anime-gundam-mech-mobile-suit-shield.jpg",
		bodyText:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta iusto neque facilis omnis expedita quae officiis fugit exercitationem? Hic, consequatur. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur ipsam necessitatibus nisi sint inventore consequuntur, nam reprehenderit distinctio quis optio?",
		title: "Возможности",
	},

	{
		id: 2,
		buttonText: "Сборка продукта",
		image:
			"https://energyintel.brightspotcdn.com/dims4/default/2af0e43/2147483647/strip/true/crop/8387x4718+0+0/resize/1920x1080!/quality/90/?url=http%3A%2F%2Fenergy-intelligence-brightspot.s3.amazonaws.com%2F47%2F7c%2F8140ec6b4f888f85d98400551395%2Fss-1700360854-nuclear-reactor-sunset.jpg",
		bodyText:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta iusto neque facilis omnis expedita quae officiis fugit exercitationem? Hic, consequatur. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur ipsam necessitatibus nisi sint inventore consequuntur, nam reprehenderit distinctio quis optio?",
		title: "Сборка",
	},
	{
		id: 3,
		buttonText: "Возможности",
		image:
			"https://static.vecteezy.com/system/resources/thumbnails/001/408/459/original/nuclear-power-plant-video.jpg",
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
			<h1 className="text-center mb-5">Начните работать с нами</h1>
			<div className="row flex flex-md-row flex-column">
				<div className="col-2 flex flex-col align-items-center my-auto">
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
				<div className="col-5">
					<img src={imageState.image} alt="gundam" className="w-100" />
				</div>
				<div className="col-5">
					<h2>{imageState.title}</h2>
					<p>{imageState.bodyText}</p>
					<button className="custom-btn">Узнать больше</button>
				</div>
			</div>
		</div>
	);
};

export default BeginWorking;
