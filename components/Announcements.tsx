import Image from "next/image";

const announcements = [
	{ src: "/images/announcement-1.jpg", alt: "Champion Bullies announcement" },
	{ src: "/images/announcement-2.jpg", alt: "Champion Bullies announcement" },
	{ src: "/images/announcement-3.jpg", alt: "Charlie bulldog" },
];

export default function Announcements() {
	return (
		<section className="announcements">
			<h2 className="section-title">Announcements</h2>
			<div className="announcement-grid">
				{announcements.map((announcement) => (
					<Image
						key={announcement.src}
						src={announcement.src}
						alt={announcement.alt}
						width={428}
						height={500}
					/>
				))}
			</div>
		</section>
	);
}
