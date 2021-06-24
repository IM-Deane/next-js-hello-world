import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

// Children = all components that're contained with the layout wrapper
const Layout = ({ children }) => {
	return (
		// Site Structure
		<div className="content">
			<Navbar />
			{children}
			<Footer />
		</div>
	);
};

export default Layout;
