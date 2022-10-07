import "./App.scss";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./component/footer/Footer";
import Header from "./component/header/Header";
import Portfolio from "./page/portfolio/Portfolio";
import { returnTheme } from "./services/theme";

function App() {
	const preferredTheme = returnTheme();
	const [theme, setTheme] = useState<string | null>("");

	useEffect(() => {
		const configureTheme = async () => {
			// localStorage.removeItem("theme");
			if (!localStorage.getItem("theme")) {
				localStorage.setItem("theme", preferredTheme);
				setTheme(preferredTheme);
			} else {
				setTheme(localStorage.getItem("theme"));
			}
		};

		configureTheme();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className={`App ${theme === "dark" ? "dark" : "light"}`}>
			<div className="widthFix">
				<Router>
					<Header />
					<Routes>
						<Route path="/" element={<Portfolio />} />
					</Routes>
					<Footer />
				</Router>
			</div>
		</div>
	);
}

export default App;
