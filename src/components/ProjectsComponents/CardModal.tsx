import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FaInfo } from "react-icons/fa";
import CardCarousel from "./CardCarousel";

function CardModal() {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<Button variant="primary" onClick={handleShow}>
				<FaInfo />
			</Button>

			<Modal show={show} onHide={handleClose} size="lg">
				<Modal.Header closeButton>
					<Modal.Title>Проект №1</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<CardCarousel />
					<hr />
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam
						asperiores ipsum, minus modi sunt quia incidunt perspiciatis iusto
						libero? Corrupti accusamus quae dolore accusantium ex esse animi
						necessitatibus quibusdam quia incidunt autem consectetur sapiente,
						adipisci nam perspiciatis, deleniti excepturi delectus.
					</p>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="danger" onClick={handleClose}>
						Закрыть
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default CardModal;
