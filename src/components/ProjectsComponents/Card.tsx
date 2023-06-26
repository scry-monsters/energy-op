import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardModal from "./CardModal";

function ProjectCard() {
	return (
		<Card style={{ width: "25rem", border: "white" }}>
			<Card.Img
				style={{ borderRadius: "8px" }}
				variant="top"
				src="https://cdn.cheapoguides.com/wp-content/uploads/sites/2/2014/06/nakagn-capsule-tower_Christopher-Tamcke_iStock-1210513355-1024x683.jpg"
			/>
			<Card.Body className="row">
				<div className="col-9 px-0">
					<Card.Title>Card Title</Card.Title>
					<Card.Text>
						Some quick example text to build on the card title and make up the
						bulk of the card's content.
					</Card.Text>
				</div>
				<div
					className="col-3 d-flex justify-content-end align-items-center justify-items-end px-0"
					style={{ paddingBottom: " 110px" }}
				>
					<CardModal />
				</div>
			</Card.Body>
		</Card>
	);
}

export default ProjectCard;
