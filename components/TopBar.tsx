import Image from "next/image";
import { contactInfo, sections, topbarSocials } from "@/lib/site";

export default function TopBar() {
	return (
		<div className="topbar">
			<div className="container">
				<div className="top-left">
					<div className="top-item">
						● <span>{contactInfo.location}</span>
					</div>
					<div className="top-item">
						✉ <span>{contactInfo.email}</span>
					</div>
					<div className="top-item">
						☎ <span>{contactInfo.phone}</span>
					</div>
				</div>
				<div className="socials">
					{topbarSocials.map((social) => (
						<a key={social.label} href="#" aria-label={social.label}>
							{social.glyph}
						</a>
					))}
				</div>
			</div>
		</div>
	);
}

export function Navbar() {
	return (
		<header className="navbar">
			<div className="container">
				<a href="#home">
					<Image
						className="brand-logo"
						src="/images/logo.jpg"
						alt="Champion Bullies logo"
						width={100}
						height={94}
					/>
				</a>
				<nav className="navlinks">
					{sections.map((section, index) => (
						<a key={section.id} href={`#${section.id}`} className={index === 0 ? "active" : undefined}>
							{section.label}
						</a>
					))}
				</nav>
			</div>
		</header>
	);
}
