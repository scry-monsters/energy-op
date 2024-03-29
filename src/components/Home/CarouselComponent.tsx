import Carousel from "react-bootstrap/Carousel";
import CarouselItem from "react-bootstrap/CarouselItem";
import CarouselCaption from "react-bootstrap/CarouselCaption";
import classNames from "classnames";
import styles from "./CarouselComponent.module.scss";
import home1 from "../../assets/HomePage/1.jpg";
import home2 from "../../assets/HomePage/2.jpg";
import home3 from "../../assets/HomePage/3.jpg";

function CarouselComponent() {
	return (
		<Carousel
			slide={true}
			controls={false}
			touch={true}
			fade={true}
			indicatorLabels={[]}
		>
			<CarouselItem>
				<img
					className={classNames(styles.carousel__image, "d-block")}
					src={home1}
					alt="First slide"
				/>
				<CarouselCaption>
					<p className="lead text-white mt-lg-3 mb-lg-5 font-weight-bold">
						<span
							className="py-2 px-3 rounded"
							style={{ backgroundColor: "rgba(32,86,131,0.9)" }}
						>
							Решим любые глобальные задачи по электроснабжению.
						</span>
					</p>

					<a className="text-white" href="/projects">
						Узнать больше
					</a>
				</CarouselCaption>
			</CarouselItem>
			<CarouselItem>
				<img
					className={classNames(styles.carousel__image, "d-block")}
					src={home2}
					alt="Second slide"
				/>

				<CarouselCaption>
					<p className="lead text-white mt-lg-3 mb-lg-5 font-weight-bold">
						<span
							className="py-2 px-3 rounded"
							style={{ backgroundColor: "rgba(32,86,131,0.9)" }}
						>
							Подхватим работу на любом из этапов технологического
							присоединения.
						</span>
					</p>

					<a className="text-white" href="/projects">
						Узнать больше
					</a>
				</CarouselCaption>
			</CarouselItem>
			<CarouselItem className={classNames(styles.mobile_margin)}>
				<img
					className={classNames(styles.carousel__image, "d-block")}
					src={home3}
					alt="Third slide"
				/>

				<CarouselCaption>
					<p className="lead text-white mt-lg-3 mb-lg-5 font-weight-bold">
						<span
							className="py-2 px-3 rounded"
							style={{ backgroundColor: "rgba(32,86,131,0.9)" }}
						>
							30 лет успешной работы
						</span>
					</p>

					<a className="text-white" href="/projects">
						Узнать больше
					</a>
				</CarouselCaption>
			</CarouselItem>
		</Carousel>
	);
}

export default CarouselComponent;
