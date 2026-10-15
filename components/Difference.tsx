import Image from "next/image";

const differences = [
	{
		image: "/images/diff-akc.jpg",
		title: (
			<>
				AKC Registered
			</>
		),
		body: (
			<>
				All of our puppies are registered with the{" "}
				<strong>American Kennel Club (AKC)</strong>, ensuring that you receive a dog with verified
				lineage, proper documentation, and breed integrity. AKC registration reflects our commitment
				to ethical and responsible breeding practices.
			</>
		),
	},
	{
		image: "/images/diff-champion.jpg",
		title: (
			<>
				Champion Sired
				<br />
				Puppies
			</>
		),
		body: (
			<>
				We primarily breed to Champion Sires, meaning most of our puppies are direct offspring of
				award-winning show dogs. This approach helps promote excellent physical traits, strong
				structure, and sound temperament, while supporting overall health.
			</>
		),
	},
	{
		image: "/images/diff-health.jpg",
		title: (
			<>
				Health Certificate +
				<br />
				Warranty
			</>
		),
		body: (
			<>
				Every puppy goes home with a <strong>veterinarian-issued health certificate</strong> and is
				backed by a <strong>comprehensive health warranty</strong>. We stand behind the health of our
				puppies and are committed to your peace of mind.
			</>
		),
	},
	{
		image: "/images/diff-home.jpg",
		title: (
			<>
				Raised In-Home –
				<br />
				NO! a Puppy Mill
			</>
		),
		body: (
			<>
				Our puppies are born and raised <strong>inside our family home</strong>, surrounded by love
				and daily interaction—not in isolated kennels or commercial breeding setups. This home
				environment helps them develop into well-adjusted, happy companions.
			</>
		),
	},
];

export default function Difference() {
	return (
		<section className="difference">
			<div className="container">
				<div className="diff-head">
					<h2>
						What Makes Us
						<br />
						Different
					</h2>
					<p>
						When you choose <strong>ChampionBullies.com</strong>, you’re not just getting a
						pet—you’re gaining a loyal, healthy companion bred from championship bloodlines.
					</p>
				</div>
				<div className="diff-grid">
					{differences.map((item, index) => (
						<div className="diff-item" key={index}>
							<Image className="circle-img" src={item.image} alt="" width={220} height={230} />
							<div className="diff-card">
								<h3>{item.title}</h3>
								<p>{item.body}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
