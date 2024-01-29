import classNames from "classnames";
import styles from "./Footer.module.scss";
import { FaPhone } from "react-icons/fa";

const Footer = () => {
	const date = new Date();
	return (
		<footer className={styles.site_footer}>
			<div className="container">
				<div className="row">
					<div className="col-lg-3 col-10 mb-4 mx-auto">
						<p className="copyright-text mt-lg-5 mb-4 mb-lg-0 text-light">
							© {date.getFullYear()} <strong>СтройЭлектро</strong>
						</p>
						<br />
					</div>

					<div className="col-lg-5 col-8">
						<h5 className="text-white mb-3">Компания</h5>

						<ul className={classNames(styles.footer_menu, "d-flex flex-wrap")}>
							<li className={classNames(styles.footer_menu_item)}>
								<a
									href="/about"
									className={classNames(styles.footer_menu_link)}
								>
									О нас
								</a>
							</li>
							<li className={classNames(styles.footer_menu_item)}>
								<a
									href="/projects"
									className={classNames(styles.footer_menu_link)}
								>
									Объекты
								</a>
							</li>
						</ul>
					</div>

					<div className="col-lg-3 col-4">
						<h5 className="text-light mb-3 text-center">Контакты</h5>

						<ul className={classNames(styles.social_icon, "text-center")}>
							<li>
								<FaPhone className="text-white" />{" "}
								<a href="tel:+78124649031">+7 (812) 464-90-31</a>
							</li>
							<li>
								<FaPhone className="text-white" />{" "}
								<a href="tel:+78124649032">+7 (812) 464-90-32</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
