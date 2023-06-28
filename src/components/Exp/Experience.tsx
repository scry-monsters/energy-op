import ExperienceCarousel from "./ExperienceCarousel";
import styles from "./Exp.module.scss";
import classNames from "classnames";
const Experience = () => {
	return (
		<div
			style={{
				margin: "70px 0 70px 0",
				backgroundColor: "#F9F7F7",
			}}
			className="container-fluid"
		>
			<div className="row">
				<div className="col-12 col-lg-4 mx-0 px-0">
					<ExperienceCarousel />
				</div>
				<div className="col-12 col-lg-8 d-flex flex-column justify-content-around container p-3">
					<h1 className={classNames(styles.work_ten, "text-start")}>
						Опыт работы 10+ лет
					</h1>
					<h5
						style={{ fontWeight: "300", lineHeight: "1.6", color: "#717275" }}
					>
						Наша строительная компания не стоит на месте, она постоянно
						развивается, наращивает объемы и темпы строительства. На сегодняшний
						день «Стройэлектро» параллельно ведет несколько больших проектов.
					</h5>
					<h6 className={classNames(styles.work_button, "text-start")}>
						ПОСМОТРЕТЬ НАШИ ПРОЕКТЫ
					</h6>
				</div>
			</div>
		</div>
	);
};

export default Experience;
