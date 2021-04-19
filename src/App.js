import React from "react";

import { Router, Link } from "@reach/router";
import Home from "./views/home/index.js";
import Propositioner from "./views/propositioner/index.js";
import Skrivelser from "./views/skrivelser/index.js";
// Views

// components
import Header from "./components/header/index.js";
const name = "lucas";

function App() {
	return (
		<div className="App">
			<Header></Header>
			<Router>
				<Home path="/" />
				<Home path="/home/:parti" />
				<Propositioner path="/propositioner" name="lucas" />
				<Skrivelser path="/skrivelser" />
			</Router>
		</div>
	);
}

export default App;
