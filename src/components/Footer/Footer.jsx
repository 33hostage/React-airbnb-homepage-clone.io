import Link from "./../Link/Link";
import globeIcon from "./../../../public/img/icons/globe-black.svg";
import dollorIcon from "./../../../public/img/icons/dollor.svg";
import arrowIcon from "./../../../public/img/icons/arrow-top.svg";
import './style.scss';

const Footer = () => {

	const handleTopClick = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	};

	return (
		<footer className="footer">
			<div className="container">

				<div className="footer__row">

					<div className="footer__desc">
						<div className="footer__desc_arrp">© 2024 Airbnb, Inc</div>
						<div className="footer__desc_links">
							<span>&middot;</span>
							<a  href="#!">Terms</a>
							<span>&middot;</span>
							<a href="#!">Sitemap</a>
							<span>&middot;</span>
							<a href="#!">Privacy</a>
							<span>&middot;</span>
							<div className="footer__desc_links-icon">
								<a href="#!">Privacy</a>
								<img src="./public/img/icons/pivacy.svg" alt="pivacy" />
							</div>
						</div>
					</div>

					<div className="footer__link_wrap">
						<div className="footer__link">
							<Link icon={globeIcon} text={"English (US)"} />
						</div>
						<div className="footer__link">
							<Link icon={dollorIcon} text={"USD"} />
						</div>
						<div className="footer__link">
							<Link text={"Support & resources"} />
						</div>
						<div className="footer__link">
							<a className="scrollBtn" href="#!" onClick={handleTopClick}>
								<img className="go-top" src={arrowIcon} alt="go-top" />
							</a>
						</div>
						
					</div>

				</div>
			</div>
		</footer>
	);
}
 
export default Footer;