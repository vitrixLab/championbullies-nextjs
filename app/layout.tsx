import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Champion Bullies | English & French Bulldogs",
	description:
		"Dedicated English & French Bulldog breeder in Florida, specializing exclusively in these two beloved breeds with 2-3 litters per year.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
