const Contacts = () => {
	return (
		<>
			<div
				style={{
					backgroundColor: "#f0f8ff",
					overflow: "hidden",
				}}
			>
				<div className="row">
					<div className="col-12">
						<h1
							className="text-center"
							style={{ margin: "170px 0 100px 0", fontWeight: "900" }}
						>
							<span className="d-block text-primary">Свяжитесь с нами</span>
							<span className="d-block text-dark">Сегодня</span>
						</h1>
					</div>
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
								<a href="tel:+78124649031">+7 (812) 464-90-31</a> <br />
								<a href="tel:+78124649032">+7 (812) 464-90-32</a>
							</div>

							<div className="col-6 contact-info p-5">
								<h2 className="mb-3 contacts_h6">Почта</h2>

								<a href="mailto:stroyelektro@mail.ru" className="custom-link">
									stroyelektro@mail.ru
								</a>
							</div>
							<div className="col-12 border-top contact-info pt-5">
								<div className="row">
									<div className="col-6 d-flex flex-row align-items-center justify-items-center">
										<h2 className="pt-1 contacts_h6">Главный офис </h2>
										<span
											style={{
												height: "25px",
												width: "25px",
												backgroundColor: "#0d4779",
												borderRadius: "50%",
												display: "inline-block",
												marginLeft: "5px",
											}}
										></span>
									</div>
								</div>

								<p className="text-muted">
									<b>Адрес:</b> п. Металлострой, Школьная улица, 16 лит. А,
									196641
								</p>
								<div className="row">
									<div className="col-8 d-flex flex-row align-items-center justify-items-center">
										<h2 className="pt-1 contacts_h6">Склад и производство </h2>
										<span
											style={{
												height: "25px",
												width: "25px",
												backgroundColor: "#FF0000",
												borderRadius: "50%",
												display: "inline-block",
												marginLeft: "5px",
											}}
										></span>
									</div>
								</div>

								<p className="text-muted">
									<b>Адрес:</b> Колпино, территория Левый Берег Реки Ижоры
								</p>
								<div className="d-none d-md-block">
									<iframe
										src="https://yandex.ru/map-widget/v1/?um=constructor%3Ab10be06ccd01abf9e9e0cd784e24bc59736c047763d10def5307b485c07ce8af&amp;source=constructor"
										style={{ minHeight: "400px" }}
										width="100%"
										height="100%"
									></iframe>
								</div>
							</div>

							{/* BELOW WE HAVE THE TWO DIFFERENT MAP VERSION */}
							{/* <div className="col-6 border-top border-end contact-info p-5">
								<h2 className="mb-3 contacts_h6">Главный офис</h2>

								<p className="text-muted">
									<b>Адрес:</b> п. Металлострой, Школьная улица, 16 лит. А,
									196641
								</p>
								<div className="d-none d-md-block">
									<iframe
										src="https://yandex.ru/map-widget/v1/?um=constructor%3Ab10be06ccd01abf9e9e0cd784e24bc59736c047763d10def5307b485c07ce8af&amp;source=constructor"
										width="500"
										height="400"
									></iframe>
								</div>
							</div>

							<div className="col-6 border-top contact-info p-5">
								<h2 className="mb-3 contacts_h6">Склад и производство</h2>

								<p className="text-muted">
									<b>Адрес:</b> Колпино, территория Левый Берег Реки Ижоры
								</p>
								<div className="d-none d-md-block">
									<iframe
										src="https://yandex.ru/map-widget/v1/?um=constructor%3Ab10be06ccd01abf9e9e0cd784e24bc59736c047763d10def5307b485c07ce8af&amp;source=constructor"
										width="500"
										height="400"
									></iframe>
								</div>
							</div> */}
						</div>
					</div>
					<div className="col-lg-12 col-12 mt-5 d-block d-md-none">
						<div className="row text-center">
							<div className="col-12">
								<h2 className="mb-3 contacts_h6">Горячая линия</h2>
								<a href="tel:+78124649031">+7 (812) 464-90-31</a> <br />
								<a href="tel:+78124649032">+7 (812) 464-90-32</a>
								<hr />
							</div>

							<div className="col-12">
								<h2 className="mb-3 contacts_h6">Почта</h2>

								<a href="mailto:stroyelektro@mail.ru" className="custom-link">
									stroyelektro@mail.ru
								</a>
								<hr />
							</div>
							<div className="col-12">
								<h2 className="pt-1 contacts_h6">
									Главный офис{" "}
									<span
										style={{
											height: "20px",
											width: "20px",
											backgroundColor: "#0d4779",
											borderRadius: "50%",
											display: "inline-block",
											marginLeft: "5px",
										}}
									></span>
								</h2>

								<p className="text-muted">
									<b>Адрес:</b> п. Металлострой, Школьная улица, 16 лит. А,
									196641
								</p>

								<h2 className="mb-3 pt-1 contacts_h6">
									Склад и производство{" "}
									<span
										style={{
											height: "20px",
											width: "20px",
											backgroundColor: "#FF0000",
											borderRadius: "50%",
											display: "inline-block",
											marginLeft: "5px",
										}}
									></span>
								</h2>

								<p className="text-muted">
									<b>Адрес:</b> Колпино, территория Левый Берег Реки Ижоры
								</p>
								<div className="d-block d-md-none">
									<iframe
										src="https://yandex.ru/map-widget/v1/?um=constructor%3Ab10be06ccd01abf9e9e0cd784e24bc59736c047763d10def5307b485c07ce8af&amp;source=constructor"
										style={{ minHeight: "400px" }}
										width="100%"
										height="100%"
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
