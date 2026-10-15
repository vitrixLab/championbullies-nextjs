import { contactInfo } from "@/lib/site";

export default function Contact() {
	return (
		<section className="contact" id="contact">
			<div className="contact-grid">
				<div>
					<h2>Get in Touch</h2>
					<p>
						We’re excited to help you find the perfect{" "}
						<strong>English or French Bulldog companion!</strong>
						<br />
						Whether you’re ready to reserve a puppy or just have questions about our breeding
						program, we’d love to hear from you.
					</p>
					<div className="contact-details">
						<div className="contact-line">
							<i>●</i> {contactInfo.location}
						</div>
						<div className="contact-line">
							<i>✉</i> {contactInfo.email}
						</div>
						<div className="contact-line">
							<i>☎</i> {contactInfo.phone}
						</div>
					</div>
				</div>
				<div className="contact-note">
					Fill out the form below and we’ll get back to you as soon as possible — usually within 24
					hours.
					<br />
					<br />
					We respond promptly to serious inquiries. If you’re interested in a specific litter or
					upcoming puppies, please mention that in your message!
				</div>
			</div>
		</section>
	);
}
