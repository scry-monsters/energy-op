import ProjectCard from "../components/ProjectsComponents/Card";
import Header from "../components/ProjectsComponents/Header";

const Projects = () => {
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
						className="col-lg-6 col-12 px-0"
						style={{
							backgroundImage:
								"url('https://proest.com/wp-content/uploads/2022/11/Building-Construction-Process-From-Start-To-Finish.jpg')",
							backgroundSize: "cover",
							backgroundPosition: "center",
						}}
					></div>
				</div>
			</div>
			<div className="container">
				<Header />
				<div className="row d-flex flex-row flex-wrap justify-content-around">
					<ProjectCard />
					<ProjectCard />
					<ProjectCard />
					<ProjectCard />
					<ProjectCard />
					<ProjectCard />
				</div>
			</div>
		</>
	);
};

export default Projects;
