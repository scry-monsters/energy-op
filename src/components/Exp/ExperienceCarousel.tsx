import Carousel from "react-bootstrap/Carousel";
import CarouselItem from "react-bootstrap/CarouselItem";
import styles from "./Exp.module.scss";
function ExperienceCarousel() {
	return (
		<Carousel
			slide={true}
			touch={true}
			indicators={false}
			controls={true}
			className={styles.exp_main}
		>
			<CarouselItem>
				<img
					className="d-block w-100"
					src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg"
					alt="First slide"
				/>
			</CarouselItem>
			<CarouselItem>
				<img
					className="d-block w-100"
					src="https://webassets.bv.com/2019-09/Two_Combined_Cycle_Power_Plants_1920x1080.jpg"
					alt="Second slide"
				/>
			</CarouselItem>
			<CarouselItem>
				<img
					className="d-block w-100"
					src="https://origins.osu.edu/sites/default/files/article18-19/nuclear-power-plant-4727976_1920.jpg"
					alt="Third slide"
				/>
			</CarouselItem>
		</Carousel>
	);
}

export default ExperienceCarousel;
