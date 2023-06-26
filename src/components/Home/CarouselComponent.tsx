import Carousel from "react-bootstrap/Carousel";
import CarouselItem from "react-bootstrap/CarouselItem";
import CarouselCaption from "react-bootstrap/CarouselCaption";
function CarouselComponent() {
	return (
		<Carousel slide={true} controls={false} touch={true}>
			<CarouselItem>
				<img
					className="d-block w-100"
					src="https://wallpaperaccess.com/full/2514412.jpg"
					alt="First slide"
				/>
				<CarouselCaption>
					<h1 className="slick-title" style={{ fontWeight: "bold" }}>
						Гарантия качества
					</h1>

					<p className="lead text-white mt-lg-3 mb-lg-5">
						Решим любые глобальные задачи по электроснабжению.
					</p>

					<button className="custom-btn">Узнать больше</button>
				</CarouselCaption>
			</CarouselItem>
			<CarouselItem>
				<img
					className="d-block w-100"
					src="https://webassets.bv.com/2019-09/Two_Combined_Cycle_Power_Plants_1920x1080.jpg"
					alt="Second slide"
				/>

				<CarouselCaption>
					<h1 className="slick-title" style={{ fontWeight: "bold" }}>
						Наши партнеры
					</h1>

					<p className="lead text-white mt-lg-3 mb-lg-5">
						Подхватим работу на любом из этапов технологического присоединения.
					</p>

					<button className="custom-btn">Узнать больше</button>
				</CarouselCaption>
			</CarouselItem>
			<CarouselItem>
				<img
					className="d-block w-100"
					src="https://origins.osu.edu/sites/default/files/article18-19/nuclear-power-plant-4727976_1920.jpg"
					alt="Third slide"
				/>

				<CarouselCaption>
					<h1 className="slick-title" style={{ fontWeight: "bold" }}>
						Наши проекты
					</h1>

					<p className="lead text-white mt-lg-3 mb-lg-5">
						5 лет успешной работы, 400 заключенных контрактов
					</p>

					<button className="custom-btn">Узнать больше</button>
				</CarouselCaption>
			</CarouselItem>
		</Carousel>
	);
}

export default CarouselComponent;
