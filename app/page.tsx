import About from "@/components/About";
import Announcements from "@/components/Announcements";
import Contact from "@/components/Contact";
import Difference from "@/components/Difference";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HomeGallery from "@/components/HomeGallery";
import Offer from "@/components/Offer";
import Puppies from "@/components/Puppies";
import TopBar, { Navbar } from "@/components/TopBar";

export default function Home() {
	return (
		<>
			<TopBar />
			<Navbar />
			<main id="home">
				<Hero />
				<Offer />
				<Announcements />
				<Difference />
				<About />
				<Puppies />
				<HomeGallery />
				<Contact />
			</main>
			<Footer />
		</>
	);
}
