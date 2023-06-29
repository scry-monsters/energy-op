import CustomCarousel from "./CustomCarousel";
import classNames from "classnames";

const SectionProject = ({ data: { id, title, images, bodyText, len } }) => {
	return (
		<div key={id}>
			<div className="container-fluid my-5">
				<div className="row">
					<div className="col-12 col-lg-6 d-flex flex-column justify-content-around p-5">
						<h1 className={classNames("text-start")}>{title}</h1>
						<h5
							style={{
								fontWeight: "300",
								lineHeight: "1.6",
								color: "#717275",
							}}
						>
							{bodyText}
						</h5>
					</div>
					<div className="col-12 col-lg-6 mx-0 px-0">
						<CustomCarousel data={images} />
					</div>
				</div>
			</div>

			<hr className="mx-auto" style={{ width: "50vw" }} />
		</div>
	);
};

export default SectionProject;
