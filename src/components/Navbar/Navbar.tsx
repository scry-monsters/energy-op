import { Link, NavLink } from "react-router-dom";
import energy from "../../../public/alter.png";
import { FaTelegram, FaWhatsapp } from "react-icons/fa";
import styles from "./Navbar.module.scss";
import classNames from "classnames";

const Navbar = () => {
	return (
		<nav
			className={classNames(
				styles.nav_main,
				"navbar navbar-expand-lg mx-auto w-100 fill"
			)}
			style={{ zIndex: "99", backgroundColor: "#ffff" }}
		>
			<div className="container h-100">
				{/* Mobile version */}
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
					id="offcanvasExample"
					aria-labelledby="offcanvasExampleLabel"
				>
					<div className="offcanvas-header">
						<h5 className="offcanvas-title" id="offcanvasExampleLabel">
							<Link className="navbar-brand" to="/">
								<img src={energy} alt="company logo" height="70" />
							</Link>
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
											Объекты
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
				{/* Desktop version */}
				<Link className="navbar-brand" to="/">
					<img src={energy} alt="company logo" height="70" />
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
								Объекты
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
