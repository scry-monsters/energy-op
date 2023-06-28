import { FaTelegram, FaWhatsapp, FaPhone } from "react-icons/fa";

const Contacts = () => {
	return (
		<>
			<div
				style={{
					backgroundColor: "#f0f8ff",
				}}
			>
				<div className="row">
					<div className="col-lg-6 col-12">
						<h1
							className="text-center"
							style={{ margin: "170px 0", fontWeight: "900" }}
						>
							<span className="d-block text-primary">Свяжитесь</span>
							<span className="d-block text-dark">Сегодня</span>
						</h1>
					</div>
					<div
						className="col-lg-6 col-12 px-0"
						style={{
							backgroundImage:
								"url('https://www.mordeo.org/files/uploads/2018/09/Tokyo-Tower-Japan-Night-Cityscape-4K-Ultra-HD-Mobile-Wallpaper.jpg')",
							backgroundSize: "cover",
							backgroundPosition: "center",
						}}
					></div>
				</div>
			</div>
			<div
				className="container mx-auto"
				style={{ margin: "40px 0", maxWidth: "100%" }}
			>
				<div className="row container mx-auto">
					<div className="col-lg-12 col-12 mt-5 d-none d-md-block">
						<div className="row">
							<div className="col-6 border-end contact-info p-5">
								<h2 className="mb-3 contacts_h6">Горячая линия</h2>

								<a href="mailto:hello@company.com">help@company.com</a>
							</div>

							<div className="col-6 contact-info p-5">
								<h2 className="mb-3 contacts_h6">Почта</h2>

								<a href="mailto:studio@company.com" className="custom-link">
									denis@company.com
								</a>
							</div>

							<div className="col-6 border-top border-end contact-info p-5">
								<h2 className="mb-3 contacts_h6">Главный офис</h2>

								<p className="text-muted">улица Ломоносова, д. 9</p>
								<div className="d-none d-md-block">
									<iframe
										src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1996.5445421253878!2d30.299376015958675!3d59.97287826629827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46963153fc025b67%3A0xdee7007bb56a7792!2z0JLRj9C30LXQvNGB0LrQuNC5INC_0LXRgC4sIDUvNywg0KHQsNC90LrRgi3Qn9C10YLQtdGA0LHRg9GA0LMsIDE5NzAyMg!5e0!3m2!1sru!2sru!4v1669671493862!5m2!1sru!2sru"
										width="600"
										height="450"
										style={{ border: "0", maxWidth: "100%" }}
										allowFullScreen={true}
										loading="lazy"
										referrerPolicy="no-referrer-when-downgrade"
									></iframe>
								</div>
							</div>

							<div className="col-6 border-top contact-info p-5">
								<h2 className="mb-3 contacts_h6">Социальные сети</h2>
								<ul className="d-flex flex-row list-unstyled">
									<li>
										<a href="#" className="contacts_h6">
											<FaWhatsapp />
										</a>
									</li>

									<li className="mx-3">
										<a href="#" className="contacts_h6">
											<FaTelegram />
										</a>
									</li>

									<li>
										<a href="#" className="contacts_h6">
											<FaPhone />
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="col-lg-12 col-12 mt-5 d-block d-md-none">
						<div className="row text-center">
							<div className="col-12">
								<h2 className="mb-3 contacts_h6">Горячая линия</h2>

								<a href="mailto:hello@company.com">help@company.com</a>
								<hr />
							</div>

							<div className="col-12">
								<h2 className="mb-3 contacts_h6">Почта</h2>

								<a href="mailto:studio@company.com" className="custom-link">
									denis@company.com
								</a>
								<hr />
							</div>

							<div className="col-12">
								<h2 className="mb-3 contacts_h6">Социальные сети</h2>
								<ul className="d-flex flex-row list-unstyled justify-content-center">
									<li>
										<a href="#" className="contacts_h6">
											<FaWhatsapp />
										</a>
									</li>

									<li className="mx-3">
										<a href="#" className="contacts_h6">
											<FaTelegram />
										</a>
									</li>

									<li>
										<a href="#" className="contacts_h6">
											<FaPhone />
										</a>
									</li>
								</ul>
								<hr />
							</div>
							<div className="col-12">
								<h2 className="mb-3 contacts_h6">Главный офис</h2>

								<p className="text-muted">улица Ломоносова, д. 9</p>
								<div className="d-block d-md-none">
									<iframe
										src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1996.5445421253878!2d30.299376015958675!3d59.97287826629827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46963153fc025b67%3A0xdee7007bb56a7792!2z0JLRj9C30LXQvNGB0LrQuNC5INC_0LXRgC4sIDUvNywg0KHQsNC90LrRgi3Qn9C10YLQtdGA0LHRg9GA0LMsIDE5NzAyMg!5e0!3m2!1sru!2sru!4v1669671493862!5m2!1sru!2sru"
										width="600"
										height="450"
										style={{ border: "0", maxWidth: "100%" }}
										allowFullScreen={true}
										loading="lazy"
										referrerPolicy="no-referrer-when-downgrade"
									></iframe>
								</div>
								<hr />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Contacts;
