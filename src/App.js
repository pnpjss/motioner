import React from "react";
// Router, Link
import { Router } from "@reach/router";
import Home from "./views/home/index.js";
import Propositioner from "./views/propositioner/index.js";
import Skrivelser from "./views/skrivelser/index.js";
import Partier from "./views/partier/index.js";
// Views

// components
import Header from "./components/header/index.js";

function App() {
	return (
		<div className="App">
			<Header></Header>
			<Router>
				<Home path="/" />
				<Home path="/home/:parti" />
				<Propositioner path="/propositioner" />
				<Skrivelser path="/skrivelser" />

				<Partier path="partier/:parti"></Partier>
			</Router>
		</div>
	);
}

export default App;
