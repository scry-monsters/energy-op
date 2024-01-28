import "./Carousel.scss";
import logo1 from "../../assets/Partners/RD.png";
import logo2 from "../../assets/Partners/transneft.png";
import logo3 from "../../assets/Partners/morskoiport.png";
import logo4 from "../../assets/Partners/rosseti.png";
import logo5 from "../../assets/Partners/siloviemach.png";
import logo6 from "../../assets/Partners/rdstroi.png";
import logo7 from "../../assets/Partners/spbcontainer.png";
import logo8 from "../../assets/Partners/bvit.png";
import logo9 from "../../assets/Partners/north.png";
import logo10 from "../../assets/Partners/loesk.png";
import logo11 from "../../assets/Partners/etm2.png";
import logo12 from "../../assets/Partners/ezois.png";
import logo13 from "../../assets/Partners/auction.png";

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
				<div className="slide">
					<img
						style={{ height: "100%", width: "90%", maxHeight: "140px" }}
						src={logo6}
					/>
				</div>
				<div className="slide pt-4">
					<img
						style={{ height: "100%", width: "90%", maxHeight: "140px" }}
						src={logo7}
					/>
				</div>
				<div className="slide pt-2">
					<img
						style={{ height: "100%", width: "100%", maxHeight: "200px" }}
						src={logo8}
					/>
				</div>
				<div className="slide pt-2">
					<img
						style={{ height: "100%", width: "100%", maxHeight: "180px" }}
						src={logo9}
					/>
				</div>
				<div className="slide pl-2">
					<img
						style={{
							height: "100%",
							width: "50%",
							maxHeight: "110px",
							marginLeft: "30px",
						}}
						src={logo10}
					/>
				</div>
				<div className="slide pt-2">
					<img
						style={{ height: "90%", width: "100%", maxHeight: "140px" }}
						src={logo11}
					/>
				</div>
				<div className="slide pt-2">
					<img
						style={{ height: "90%", width: "100%", maxHeight: "140px" }}
						src={logo12}
					/>
				</div>
				<div className="slide pt-2">
					<img
						style={{ height: "100%", width: "100%", maxHeight: "240px" }}
						src={logo13}
					/>
				</div>
				<div className="slide"></div>
				<div className="slide"></div>
				<div className="slide"></div>
				<div className="slide"></div>
			</div>
		</div>
	);
};

export default Carousel;
