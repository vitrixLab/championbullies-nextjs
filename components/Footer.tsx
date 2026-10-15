import Image from "next/image";
import { contactInfo, footerSocials } from "@/lib/site";

export default function Footer() {
	return (
		<footer>
			<div className="footer-grid">
				<div>
					<Image
						className="footer-logo"
						src="/images/footer-logo.jpg"
						alt="Champion Bullies logo"
						width={100}
						height={94}
					/>
					<div className="footer-text">
						55 Champions In 5 Generations. 26 Of Those Are In The Hall Of Fame.
					</div>
					<div className="footer-socials">
						{footerSocials.map((social) => (
							<span key={social.label} aria-label={social.label} role="img">
								{social.glyph}
							</span>
						))}
					</div>
				</div>
				<div>
					<h3>Contact Us</h3>
					<div className="footer-contact">
						<div>✉ &nbsp; {contactInfo.email}</div>
						<div>➤ &nbsp; Florida</div>
						<div>☎ &nbsp; {contactInfo.phone}</div>
					</div>
				</div>
				<div>
					<h3>Working Hours</h3>
					<div className="footer-contact">
						<div>Open from 9am – 6pm</div>
						<div>Holidays – Closed</div>
						<div>Weekends – Closed</div>
					</div>
				</div>
			</div>
			<div className="footer-bottom">
				© 2025 Dog Breed All rights reserved. Powered By The Keith Hopkins
			</div>
		</footer>
	);
}
