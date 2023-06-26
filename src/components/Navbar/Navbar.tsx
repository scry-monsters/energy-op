import { Link, NavLink } from "react-router-dom";
import energy from "../../assets/alter.png";
import { FaTelegram, FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
	return (
		<nav
			className="navbar navbar-expand-lg mx-auto position-fixed w-100"
			style={{ zIndex: "99", backgroundColor: "#ffffff" }}
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

				<Link className="navbar-brand" to="/">
					<img src={energy} alt="company logo" height="50" />
				</Link>

				<div className="d-lg-none"></div>

				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav mx-auto">
						<li className="nav-item">
							<NavLink className="nav-link" to="/">
								Главная
							</NavLink>
						</li>

						<li className="nav-item">
							<NavLink className="nav-link" to="/about">
								О нас
							</NavLink>
						</li>

						<li className="nav-item">
							<NavLink className="nav-link" to="/projects">
								Проекты
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" to="/partners">
								Партнеры
							</NavLink>
						</li>

						<li className="nav-item">
							<NavLink className="nav-link" to="/contacts">
								Контакты
								<FaWhatsapp className="mx-1" />
								<FaTelegram />
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
