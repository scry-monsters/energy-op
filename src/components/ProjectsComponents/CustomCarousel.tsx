import Carousel from "react-bootstrap/Carousel";
import CarouselItem from "react-bootstrap/CarouselItem";
import CarouselCaption from "react-bootstrap/CarouselCaption";

function CustomCarousel({ data }) {
	return (
		<Carousel slide={true} touch={true} indicators={false} controls={true}>
			{data.map((item: string) => (
				<CarouselItem>
					<img className="d-block w-100" src={item} alt="First slide" />
					<CarouselCaption>
						<h3 className="text-start">
							ЖК Ленинский 14 (Потом решим с текстом)
						</h3>
					</CarouselCaption>
				</CarouselItem>
			))}
		</Carousel>
	);
}

export default CustomCarousel;
