import React from "react";
import "./home.scss";
import { Link, redirectTo } from "@reach/router";

const Home = (props) => {
	// Figure out how to make this as non-bias as possible, return without parameters
	return (
		<div className="home">
			<h2>Välkommen!</h2>
			<p>
				Så.. denna sidan är inte dekorerad men känn dig fri att klicka runt i
				menyn över.
			</p>
		</div>
	);
};

export default Home;
