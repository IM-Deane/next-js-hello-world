import React from "react";

// Allow client side navigation
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
	return (
		<nav>
			<div className="logo">
				<Image src="/vercel.svg" width={125} height={75} alt="company logo" />
			</div>
			<Link href="/">
				<a>Home</a>
			</Link>
			<Link href="/about">
				<a>About</a>
			</Link>
			<Link href="/ninjas">
				<a>Ninja Listing</a>
			</Link>
		</nav>
	);
};

export default Navbar;
