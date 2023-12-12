import Carousel from "react-bootstrap/Carousel";
import CarouselItem from "react-bootstrap/CarouselItem";
import CarouselCaption from "react-bootstrap/CarouselCaption";
import { singleImgAndInfo } from "../../models/Project";

interface Props {
	data: singleImgAndInfo[];
}

function CustomCarousel({ data }: Props) {
	return (
		<Carousel
			slide={true}
			touch={true}
			indicators={false}
			controls={true}
			interval={null}
			fade={true}
		>
			{data.map((item) => (
				<CarouselItem>
					<img
						className="d-block"
						style={{
							width: "100%",
							height: "100%",
							maxHeight: "400px",
							objectFit: "cover",
						}}
						src={item.img}
						alt="First slide"
					/>
					<CarouselCaption>
						<p
							className="d-block"
							style={{
								backgroundColor: "rgba(32,86,131,0.5)",
								position: "absolute",
								bottom: "40%",
								left: "-22%",
								padding: "10px 15px",
								borderRadius: "2px",
								fontSize: "18px",
							}}
						>
							{item.title}
						</p>
					</CarouselCaption>
				</CarouselItem>
			))}
		</Carousel>
	);
}

export default CustomCarousel;
