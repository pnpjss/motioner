import React from "react";
import "./header.scss";

const Header = () => (
	<div className="header">
		<h1>RÖSTEN</h1>
		<ul>
			<li>
				<a href="/propositioner">propositioner</a>
			</li>
			<li>
				<a href="/skrivelser">skrivelser</a>
			</li>
			<li>
				<a href="/partier/Socialdemokraterna">partier</a>
			</li>
		</ul>
	</div>
);

export default Header;
