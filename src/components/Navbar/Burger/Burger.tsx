import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { NavLink } from "react-router-dom";
import { FaTelegram, FaWhatsapp } from "react-icons/fa";
import energy from "../../../assets/alter.png";

function Burger() {
	const [show, setShow] = useState(false);

	return (
		<>
			<Button variant="white" onClick={() => setShow(true)}>
				<span className="navbar-toggler-icon"></span>
			</Button>

			<Modal
				show={show}
				onHide={() => setShow(false)}
				dialogClassName="modal-90w"
				aria-labelledby="example-custom-modal-styling-title"
			>
				<Modal.Header closeButton>
					<Modal.Title
						id="example-custom-modal-styling-title"
						className="text-center"
					>
						<img src={energy} alt="Company logo" className="w-50" />
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<ul className="navbar-nav mx-auto gap-3">
						<li className="nav-item">
							<NavLink
								className="nav-link"
								to="/"
								onClick={() => setShow(false)}
							>
								Главная
							</NavLink>
						</li>

						<li className="nav-item">
							<NavLink
								className="nav-link"
								to="/about"
								onClick={() => setShow(false)}
							>
								О нас
							</NavLink>
						</li>

						<li className="nav-item">
							<NavLink
								className="nav-link"
								to="/projects"
								onClick={() => setShow(false)}
							>
								Объекты
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								className="nav-link"
								to="/partners"
								onClick={() => setShow(false)}
							>
								Партнеры
							</NavLink>
						</li>

						<li className="nav-item">
							<NavLink
								className="nav-link"
								to="/contacts"
								onClick={() => setShow(false)}
							>
								Контакты
								<FaWhatsapp className="mx-1" />
								<FaTelegram />
							</NavLink>
						</li>
					</ul>
				</Modal.Body>
			</Modal>
		</>
	);
}

export default Burger;
