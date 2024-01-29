import { Project } from "../../models/Project";
import CustomCarousel from "./CustomCarousel";
import classNames from "classnames";

interface Props {
	data: Project;
}

const SectionProject = ({
	data: { id, title, imgAndInfo, bodyText },
}: Props) => {
	return (
		<div key={id}>
			<hr className="mx-auto" style={{ width: "50vw" }} />
			<div className="container-fluid my-5">
				<div className="row d-flex align-items-center">
					<div className="col-12 col-lg-6 d-flex flex-column justify-content-around p-5">
						<h1 className={classNames("text-center text-md-start")}>{title}</h1>
						<h5
							className="text-justify text-md-start"
							style={{
								fontWeight: "300",
								lineHeight: "1.6",
								color: "#717275",
							}}
						>
							{title === "Объекты железной дороги" && (
								<>
									<h5
										style={{
											fontWeight: "300",
											lineHeight: "1.6",
											color: "#717275",
										}}
									>
										ООО «СтройЭлектро» выполнило комплекс электро-монтажных
										работ более чем на 40 объектах Октябрьской Железной Дороги.
										В том числе проведены реконструкции тяговых подстанций на
										объектах ОАО «РЖДстрой»:
									</h5>
								</>
							)}
							<ul>
								{bodyText.map((item) => (
									<li style={{ fontWeight: "300" }}>{item}</li>
								))}
							</ul>
						</h5>
					</div>
					<div className="col-12 col-lg-6 mx-0 px-0">
						<CustomCarousel data={imgAndInfo} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default SectionProject;
