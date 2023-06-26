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
				<div className="col-12 col-lg-6 mx-0 px-0">
					<ExperienceCarousel />
				</div>
				<div className="col-12 col-lg-6 d-flex flex-column justify-content-around container">
					<h1 className={classNames(styles.work_ten, "text-center")}>
						Опыт работы 10+ лет
					</h1>
					<h5 className={classNames(styles.work_text, "text-center")}>
						Наша строительная компания не стоит на месте, она постоянно
						развивается, наращивает объемы и темпы строительства. На сегодняшний
						день «Стройэлектро» параллельно ведет несколько больших проектов.
					</h5>
					<h6 className={classNames(styles.work_button, "text-center")}>
						ПОСМОТРЕТЬ НАШИ ПРОЕКТЫ
					</h6>
				</div>
			</div>
		</div>
	);
};

export default Experience;
