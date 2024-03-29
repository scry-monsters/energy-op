import { useState } from "react";
import begin1 from "../../assets/BeginWorking/1.jpg";
import begin2 from "../../assets/BeginWorking/2.jpg";
import begin3 from "../../assets/BeginWorking/3.jpg";
import classNames from "classnames";
import { FaArrowDown } from "react-icons/fa";

const clickData = [
	{
		id: 1,
		buttonText: "Проектирование",
		image: begin1,
		bodyText:
			"Разрабатываем проекты в соответствие со всем действующими нормативными документами и выполнение их в полном объеме, необходимом для прохождения экспертизы.",
		title: "Проектирование",
	},

	{
		id: 2,
		buttonText: "Монтажные работы",
		image: begin2,
		bodyText:
			"Производство работ по строительству электрических сетей, монтажу электрооборудования напряжением до 110кВ",
		title: "Монтаж",
	},
	{
		id: 3,
		buttonText: "Пуско-наладочные работы",
		image: begin3,
		bodyText:
			"Проведение сертификационных, приемо-сдаточных, периодических испытаний электроустановок зданий и сооружений для получения акта-допуска в эксплуатацию.",
		title: "Пуско-наладочные работы",
	},
];

const BeginWorking = () => {
	const [imageState, setImageState] = useState(clickData[0]);
	const changeWork = (id: number) => {
		setImageState(clickData[id]);
	};
	return (
		<div className="container mx-auto flex" style={{ margin: "70px 0" }}>
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
						Проектирование
					</p>
					<div className="d-flex align-items-center justify-content-center pb-3">
						<FaArrowDown />
					</div>
					<p
						className="border border-2 border-light text-center rounded-3 p-2 text-white"
						style={{ cursor: "pointer", backgroundColor: "black" }}
						onClick={() => changeWork(1)}
					>
						Монтажные работы
					</p>
					<div className="d-flex align-items-center justify-content-center pb-3">
						<FaArrowDown />
					</div>
					<p
						className="border border-2 border-light text-center rounded-3 p-2 text-white"
						style={{ cursor: "pointer", backgroundColor: "black" }}
						onClick={() => changeWork(2)}
					>
						Пуско-наладочные работы
					</p>
				</div>
				<div className="col-12 col-lg-6">
					<img
						src={imageState.image}
						alt="gundam"
						className={classNames("w-100")}
						style={{
							width: "100%",
							height: "100%",
							maxHeight: "50vh",
							objectFit: "cover",
						}}
					/>
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
						<a href="/about" className="text-white">
							Узнать больше
						</a>
					</button>
				</div>
			</div>
		</div>
	);
};

export default BeginWorking;
