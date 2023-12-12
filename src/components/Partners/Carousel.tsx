import "./Carousel.scss";
import logo1 from "../../assets/Partners/RD.png";
import logo2 from "../../assets/Partners/transneft.png";
import logo3 from "../../assets/Partners/morskoiport.png";
import logo4 from "../../assets/Partners/rosseti.png";
import logo5 from "../../assets/Partners/siloviemach.png";
import logo6 from "../../assets/Partners/rdstroi.png";
import logo7 from "../../assets/Partners/spbcontainer.png";

const Carousel = () => {
	return (
		<div className="slider">
			<div className="slide-track">
				<div className="slide"></div>
				<div className="slide pt-2">
					<img
						style={{ height: "90%", width: "100%", maxHeight: "140px" }}
						src={logo1}
					/>
				</div>
				<div className="slide">
					<img
						style={{ height: "100%", width: "80%", maxHeight: "140px" }}
						src={logo2}
					/>
				</div>
				<div className="slide pt-5">
					<img
						style={{ height: "100%", width: "100%", maxHeight: "140px" }}
						src={logo3}
					/>
				</div>
				<div className="slide pt-3">
					<img
						style={{ height: "100%", width: "100%", maxHeight: "140px" }}
						src={logo4}
					/>
				</div>
				<div className="slide">
					<img
						style={{ height: "80%", width: "70%", maxHeight: "140px" }}
						src={logo5}
					/>
				</div>
				<div className="slide pt-4">
					<img
						style={{ height: "100%", width: "90%", maxHeight: "140px" }}
						src={logo7}
					/>
				</div>
				<div className="slide">
					<img
						style={{ height: "100%", width: "90%", maxHeight: "140px" }}
						src={logo6}
					/>
				</div>
			</div>
		</div>
	);
};

export default Carousel;
