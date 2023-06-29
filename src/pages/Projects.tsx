import Header from "../components/ProjectsComponents/Header";
import SectionProject from "../components/ProjectsComponents/SectionProject";
import HC1 from "../assets/HouseComplex/HC1.jpg";
import HC2 from "../assets/HouseComplex/HC2.jpg";
import HC3 from "../assets/HouseComplex/HC3.jpg";
import HC4 from "../assets/HouseComplex/HC4.jpg";
import HC5 from "../assets/HouseComplex/HC5.jpg";
import P1 from "../assets/Ports/port1.jpg";
import P2 from "../assets/Ports/port2.jpg";
import P3 from "../assets/Ports/port3.jpg";
import P4 from "../assets/Ports/port4.jpg";
import P5 from "../assets/Ports/port5.jpg";
import P6 from "../assets/Ports/port6.jpg";
import OON1 from "../assets/OON/OON1.jpg";
import OON2 from "../assets/OON/OON2.jpg";
import OON3 from "../assets/OON/OON3.jpg";
import R1 from "../assets/Railway/Railway1.jpg";
import R2 from "../assets/Railway/Railway2.jpg";
import R3 from "../assets/Railway/Railway3.jpg";
import R4 from "../assets/Railway/Railway4.jpg";
import R5 from "../assets/Railway/Railway5.jpg";
import R6 from "../assets/Railway/Railway6.jpg";

const data = [
	{
		id: 1,
		title: "Жилые комплексы",
		images: [HC1, HC2, HC3, HC4, HC5],
		bodyText:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta iusto neque facilis omnis expedita quae officiis fugit exercitationem? Hic, consequatur. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur ipsam necessitatibus nisi sint inventore consequuntur, nam reprehenderit distinctio quis optio?",
	},

	{
		id: 2,
		title: "Морской порт и контейнерный терминал Санкт Петербурга",
		images: [P1, P2, P3, P4, P5, P6],
		bodyText:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta iusto neque facilis omnis expedita quae officiis fugit exercitationem? Hic, consequatur. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur ipsam necessitatibus nisi sint inventore consequuntur, nam reprehenderit distinctio quis optio?",
	},
	{
		id: 3,
		title: "Объекты общественного назначения",
		images: [OON1, OON2, OON3],
		bodyText:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta iusto neque facilis omnis expedita quae officiis fugit exercitationem? Hic, consequatur. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur ipsam necessitatibus nisi sint inventore consequuntur, nam reprehenderit distinctio quis optio?",
	},
	{
		id: 4,
		title: "Объекты железной дороги",
		images: [R1, R2, R3, R4, R5, R6],
		bodyText:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta iusto neque facilis omnis expedita quae officiis fugit exercitationem? Hic, consequatur. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur ipsam necessitatibus nisi sint inventore consequuntur, nam reprehenderit distinctio quis optio?",
	},
];

const Projects = () => {
	let len = data.length;
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
							style={{
								margin: "200px 0",
								fontWeight: "900",
							}}
						>
							Проекты
						</h1>
					</div>
					<div
						className="col-lg-6 col-12"
						style={{
							backgroundImage:
								"url('https://proest.com/wp-content/uploads/2022/11/Building-Construction-Process-From-Start-To-Finish.jpg')",
							backgroundSize: "cover",
							backgroundPosition: "center",
						}}
					></div>
				</div>
			</div>
			<Header />
			{data.map((item) => (
				<SectionProject data={item} key={item.id} />
			))}
		</>
	);
};

export default Projects;
