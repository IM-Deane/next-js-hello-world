// Custom 404 handler
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const NotFound = () => {
	// Redirect user after some time
	const router = useRouter();
	useEffect(() => {
		setTimeout(() => {
			// Back to home
			router.push("/");
		}, 3000);
	}, []);

	return (
		<div className="not-found">
			<h1>Oooops....</h1>
			<h2>That page cannot be found.</h2>
			<p>
				Go back to the{" "}
				<Link href="/">
					<a>home</a>
				</Link>
				.
			</p>
		</div>
	);
};

export default NotFound;
