import Carousel from "react-bootstrap/Carousel";
import CarouselItem from "react-bootstrap/CarouselItem";
import styles from "./Exp.module.scss";
import carousel1 from "../../assets/ExpCarouselImages/1.jpg";
import carousel2 from "../../assets/ExpCarouselImages/2.jpg";
import carousel3 from "../../assets/ExpCarouselImages/3.jpg";
import carousel4 from "../../assets/ExpCarouselImages/4.jpg";
import carousel5 from "../../assets/ExpCarouselImages/5.jpg";
import classNames from "classnames";
function ExperienceCarousel() {
	return (
		<Carousel
			slide={true}
			touch={true}
			indicators={false}
			controls={true}
			fade={true}
			className={styles.exp_main}
		>
			<CarouselItem>
				<img
					className={classNames(styles.carousel__image, "d-block")}
					src={carousel1}
					alt="First slide"
				/>
			</CarouselItem>
			<CarouselItem>
				<img
					className={classNames(styles.carousel__image, "d-block")}
					src={carousel2}
					alt="Second slide"
				/>
			</CarouselItem>
			<CarouselItem>
				<img
					className={classNames(styles.carousel__image, "d-block")}
					src={carousel3}
					alt="Third slide"
				/>
			</CarouselItem>
			<CarouselItem>
				<img
					className={classNames(styles.carousel__image, "d-block")}
					src={carousel4}
					alt="Fourth slide"
				/>
			</CarouselItem>
			<CarouselItem>
				<img
					className={classNames(styles.carousel__image, "d-block")}
					src={carousel5}
					alt="Fifth slide"
				/>
			</CarouselItem>
		</Carousel>
	);
}

export default ExperienceCarousel;
