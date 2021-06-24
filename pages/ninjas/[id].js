import React from "react";

// Get the ninja id's
export const getStaticPaths = async () => {
	const res = await fetch("https://jsonplaceholder.typicode.com/users");
	const data = await res.json();

	// Get id's from data response
	const paths = data.map((ninja) => {
		return {
			params: {
				id: ninja.id.toString(),
			},
		};
	});

	return {
		paths,
		fallback: false,
	};
};

// Used to grab individual id's at build
export const getStaticProps = async (context) => {
	// Uses context to fetch the specified id
	const id = context.params.id;
	const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
	const data = await res.json();

	return {
		props: { ninja: data },
	};
};

// Generate page after fetching data
const Details = ({ ninja }) => {
	return (
		<div>
			<h1>{ninja.name}</h1>
			<p>{ninja.email}</p>
			<p>{ninja.website}</p>
			<p>{ninja.address.city}</p>
		</div>
	);
};

export default Details;
