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
						<h5
							className="d-sm-block d-none"
							style={{
								backgroundColor: "rgba(32,86,131,0.7)",
								position: "absolute",
								bottom: "70px",
								left: "-110px",
								padding: "20px 10px",
								borderRadius: "2px",
							}}
						>
							{item.title}
						</h5>
						<p
							className="d-sm-none d-block"
							style={{
								backgroundColor: "rgba(32,86,131,0.7)",
								position: "absolute",
								top: "1px",
								padding: "10px 5px",
								borderRadius: "2px",
								fontSize: "10px",
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
