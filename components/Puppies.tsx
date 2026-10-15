import Image from "next/image";

const availablePuppies = [
	{ src: "/images/puppy-1.jpg", alt: "Velma puppy" },
	{ src: "/images/puppy-2.jpg", alt: "Daphne puppy" },
	{ src: "/images/puppy-3.jpg", alt: "Scrappy puppy" },
];

const malePuppies = [
	{ src: "/images/male-1.jpg", alt: "Scooby puppy" },
	{ src: "/images/male-2.jpg", alt: "Shaggy puppy" },
	{ src: "/images/male-3.jpg", alt: "Fred puppy" },
];

function Dots() {
	return (
		<div className="dots">
			<span className="on">•</span> • •
		</div>
	);
}

export default function Puppies() {
	return (
		<section className="puppies" id="puppies">
			<h2 className="puppy-title">Available Puppies</h2>
			<div className="puppy-carousel">
				{availablePuppies.map((puppy) => (
					<Image key={puppy.src} src={puppy.src} alt={puppy.alt} width={435} height={553} />
				))}
			</div>
			<Dots />

			<h2 className="puppy-title" style={{ marginTop: 0 }}>
				Male Puppies
			</h2>
			<div className="puppy-carousel">
				{malePuppies.map((puppy) => (
					<Image key={puppy.src} src={puppy.src} alt={puppy.alt} width={434} height={621} />
				))}
			</div>
			<Dots />
			<div className="buy-wrap">
				<a className="buy" href="#contact">
					Buy a Puppy
				</a>
			</div>
		</section>
	);
}
