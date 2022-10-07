import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
	return (
		<div className="header">
			<Link to="/" className="logoBox">
				<div className="logo"></div>
				<span className="name">Mohamad Sina Kheiry</span>
			</Link>
			<div className="buttonBox">
				<Button className="button" variant="text" color="warning">
					About me
				</Button>
				<Button className="button" variant="text" color="warning">
					Skills
				</Button>
				<Button className="button" variant="text" color="warning">
					Projects
				</Button>
				<Button className="button" variant="text" color="warning">
					Experience
				</Button>
				<Button className="button" variant="text" color="warning">
					Education
				</Button>
			</div>
		</div>
	);
}
