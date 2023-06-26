import Carousel from "../components/Home/CarouselComponent";
import BeginWorking from "../components/Home/BeginWorking";
import Experience from "../components/Home/Exp/Experience";
import OurProjects from "../components/Home/OurProjects";

const Home = () => {
	return (
		<>
			<Carousel />
			<BeginWorking />
			<Experience />
			<OurProjects />
		</>
	);
};

export default Home;
