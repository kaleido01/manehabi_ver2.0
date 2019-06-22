import React, { useState } from "react";
import { Sidebar } from "semantic-ui-react";
import SideDrawer from "./../SideDrawer/SideDrawer";
import Navbar from "./../Navbar/Navbar";
import "./Layout.css";

const Layout = ({ children }) => {
	const [onSide, setOnSide] = useState(false);
	return (
		<Sidebar.Pushable>
			<Navbar onSide={setOnSide} />
			<SideDrawer onSide={onSide} onHide={setOnSide} />
			<div className="Layout">{children}</div>
		</Sidebar.Pushable>
	);
};

export default Layout;
