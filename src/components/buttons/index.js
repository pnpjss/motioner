import React from "react";
import "./buttons.scss";
import PartiMotioner from "../../assets/api/motioner";
import { Router, Link, useParams } from "@reach/router";
const url =
	"https://data.riksdagen.se/dokumentlista/?sok=&doktyp=mot&rm=&from=&tom=&ts=&bet=&tempbet=&nr=&org=&iid=&parti=S&avd=&webbtv=&talare=&exakt=&planering=&facets=&sort=rel&sortorder=asc&rapport=&utformat=json&a=s#soktraff";

const Buttons = (prop) => {
	const party = prop;
	console.log(prop);
	return (
		<Link to={"/partier/" + prop}>
			<br />
			<button>{prop}</button>
		</Link>
	);
	// returnera en knapp med prop som id och knappinnehåll
};

export default Buttons;
