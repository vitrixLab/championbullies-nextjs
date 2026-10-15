import Image from "next/image";

const galleryImages = [
	{ src: "/images/gallery-1.jpg", width: 415, height: 301 },
	{ src: "/images/gallery-2.jpg", width: 415, height: 301 },
	{ src: "/images/gallery-3.jpg", width: 415, height: 301 },
	{ src: "/images/gallery-4.jpg", width: 415, height: 220 },
	{ src: "/images/gallery-5.jpg", width: 415, height: 220 },
	{ src: "/images/gallery-6.jpg", width: 415, height: 220 },
];

export default function HomeGallery() {
	return (
		<section className="home-gallery">
			<div className="container">
				<h2>From Our Home to Yours</h2>
				<div className="gallery-grid">
					{galleryImages.map((image) => (
						<Image
							key={image.src}
							src={image.src}
							alt="Champion Bullies puppy gallery"
							width={image.width}
							height={image.height}
						/>
					))}
				</div>
				<div className="gallery-buy">
					<a className="cta" href="#contact">
						Buy Now
					</a>
				</div>
			</div>
		</section>
	);
}
