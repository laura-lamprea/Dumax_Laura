import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import logoDumax from "../assets/images/logoDumax.png";

const CustomNavbar = () => {
	return (
		<>
			<Navbar className="my-2" color="dark" dark>
				<img
					alt="logo"
					src={logoDumax}
					style={{
						height: 40,
						width: 40,
					}}
				/>
				Reactstrap
			</Navbar>
		</>
	);
};

export default CustomNavbar;
