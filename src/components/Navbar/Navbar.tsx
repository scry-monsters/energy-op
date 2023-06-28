import { Link, NavLink } from "react-router-dom";
import energy from "../../assets/alter.png";
import { FaTelegram, FaWhatsapp } from "react-icons/fa";
import styles from "./Navbar.module.scss";
import classNames from "classnames";
import Burger from "./Burger/Burger";

const Navbar = () => {
	return (
		<nav
			className={classNames(
				styles.nav_main,
				"navbar navbar-expand-lg mx-auto w-100"
			)}
			style={{ zIndex: "99", backgroundColor: "#ffffff" }}
		>
			<div className="container">
				<button
					className="btn btn-white d-block d-lg-none"
					type="button"
					data-bs-toggle="offcanvas"
					data-bs-target="#offcanvasExample"
					aria-controls="offcanvasExample"
				>
					<span className="navbar-toggler-icon"></span>
				</button>

				<div
					className="offcanvas offcanvas-start d-block d-lg-none"
					tabindex="-1"
					id="offcanvasExample"
					aria-labelledby="offcanvasExampleLabel"
				>
					<div className="offcanvas-header">
						<h5 className="offcanvas-title" id="offcanvasExampleLabel">
							СтройЭлектро
						</h5>
						<button
							type="button"
							className="btn-close text-reset"
							data-bs-dismiss="offcanvas"
							aria-label="Close"
						></button>
					</div>
					<div className="offcanvas-body">
						<div className="dropdown mt-3">
							<ul className="navbar-nav mx-auto gap-4">
								<li className="nav-item">
									<NavLink className="nav-link" to="/">
										<span data-bs-dismiss="offcanvas" aria-label="Close">
											Главная
										</span>
									</NavLink>
								</li>

								<li className="nav-item">
									<NavLink className="nav-link" to="/about">
										<span data-bs-dismiss="offcanvas" aria-label="Close">
											О нас
										</span>
									</NavLink>
								</li>

								<li className="nav-item">
									<NavLink className="nav-link" to="/projects">
										<span data-bs-dismiss="offcanvas" aria-label="Close">
											Проекты
										</span>
									</NavLink>
								</li>
								<li className="nav-item">
									<NavLink className="nav-link" to="/partners">
										<span data-bs-dismiss="offcanvas" aria-label="Close">
											Партнеры
										</span>
									</NavLink>
								</li>

								<li className="nav-item">
									<NavLink className="nav-link" to="/contacts">
										<span data-bs-dismiss="offcanvas" aria-label="Close">
											Контакты
											<FaWhatsapp className="mx-1" />
											<FaTelegram />
										</span>
									</NavLink>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<Link className="navbar-brand" to="/">
					<img src={energy} alt="company logo" height="50" />
				</Link>

				<div className="d-lg-none"></div>

				<div className="d-none d-lg-block" id="navbarNav">
					<ul className="navbar-nav mx-auto gap-4">
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
