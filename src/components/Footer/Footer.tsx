import classNames from "classnames";
import styles from "./Footer.module.scss";
import { FaTelegram, FaWhatsapp, FaPhone } from "react-icons/fa";

const Footer = () => {
	return (
		<footer className={styles.site_footer}>
			<div className="container">
				<div className="row">
					<div className="col-lg-3 col-10 me-auto mb-4">
						<p className="copyright-text text-muted mt-lg-5 mb-4 mb-lg-0">
							Copyright © 2022<strong>Denis</strong>
						</p>
						<br />
					</div>

					<div className="col-lg-5 col-8">
						<h5 className="text-white mb-3">Sitemap</h5>

						<ul className={classNames(styles.footer_menu, "d-flex flex-wrap")}>
							<li className="footer-menu-item">
								<a href="about.html" className="footer-menu-link">
									Story
								</a>
							</li>

							<li className={classNames(styles.footer_menu_item)}>
								<a href="#" className="footer-menu-link">
									Products
								</a>
							</li>

							<li className={classNames(styles.footer_menu_item)}>
								<a href="#" className={classNames(styles.footer_menu_link)}>
									Privacy policy
								</a>
							</li>

							<li className={classNames(styles.footer_menu_item)}>
								<a href="#" className={classNames(styles.footer_menu_link)}>
									FAQs
								</a>
							</li>

							<li className={classNames(styles.footer_menu_item)}>
								<a href="#" className={classNames(styles.footer_menu_link)}>
									Contact
								</a>
							</li>
						</ul>
					</div>

					<div className="col-lg-3 col-4">
						<h5 className="text-white mb-3">Social</h5>

						<ul className={classNames(styles.social_icon)}>
							<li>
								<a href="#">
									<FaTelegram />
								</a>
							</li>

							<li className="mx-3">
								<a href="#">
									<FaWhatsapp />
								</a>
							</li>

							<li>
								<a href="#">
									<FaPhone />
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
