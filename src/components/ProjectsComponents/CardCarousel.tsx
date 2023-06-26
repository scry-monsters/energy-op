import Carousel from "react-bootstrap/Carousel";
import CarouselItem from "react-bootstrap/CarouselItem";

function CardCarousel() {
	return (
		<Carousel
			slide={true}
			interval={100000}
			touch={true}
			indicators={false}
			controls={true}
		>
			<CarouselItem>
				<img
					className="d-block w-100"
					src="https://images.adsttc.com/media/images/5d78/8e5b/284d/d158/9f00/00ac/newsletter/industrieel_gebouw_sheddak_rozenburg14.jpg?1568181836"
					alt="First slide"
				/>
			</CarouselItem>
			<CarouselItem>
				<img
					className="d-block w-100"
					src="https://images.adsttc.com/media/images/5d78/888e/284d/d158/9f00/009d/newsletter/feature_-_industrieel_gebouw_sheddak_rozenburg2.jpg?1568180352"
					alt="Second slide"
				/>
			</CarouselItem>
			<CarouselItem>
				<img
					className="d-block w-100"
					src="https://images.adsttc.com/media/images/5d78/8879/284d/d167/3700/024a/newsletter/industrieel_gebouw_sheddak_rozenburg1.jpg?1568180330"
					alt="Third slide"
				/>
			</CarouselItem>
		</Carousel>
	);
}

export default CardCarousel;
