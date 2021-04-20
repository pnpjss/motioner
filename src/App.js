import React from "react";
//
import { Router } from "@reach/router";
import Home from "./views/home/index.js";
import Propositions from "./views/propositions/index.js";
import Petitions from "./views/petitions/index.js";
import Parties from "./views/motioner/index.js";
// Views

// components
import Header from "./components/header/index.js";

function App() {
	return (
		<div className="App">
			<Header></Header>
			<Router>
				<Home path="/" />
				<Propositions path="/propositioner" />
				<Petitions path="/skrivelser" />
				<Parties path="partier/:party"></Parties>
			</Router>
		</div>
	);
}

export default App;
