import energy from "../assets/alter.png";
import { FaTelegram, FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
	return (
		<nav
			className="navbar navbar-expand-lg mx-auto position-fixed bg-white w-100"
			style={{ zIndex: "99" }}
		>
			<div className="container">
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>

				<a className="navbar-brand" href="index.html">
					<img src={energy} alt="company logo" height="50" />
				</a>

				<div className="d-lg-none"></div>

				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav mx-auto">
						<li className="nav-item">
							<a className="nav-link active" href="index.html">
								Главная
							</a>
						</li>

						<li className="nav-item">
							<a className="nav-link" href="about.html">
								О нас
							</a>
						</li>

						<li className="nav-item">
							<a className="nav-link" href="projects.html">
								Проекты
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="partners.html">
								Партнеры
							</a>
						</li>

						<li className="nav-item">
							<a className="nav-link" href="contact.html">
								Контакты
								<FaWhatsapp className="mx-1" />
								<FaTelegram />
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
