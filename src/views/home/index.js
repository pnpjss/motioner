import React from "react";
// import reactDom from "react-dom";
import "./home.scss";
// import docs from "../../assets";
import { Router, Link } from "@reach/router";
import PartiDokument from "../../assets/api/motioner.js";

// This is not used as for now?
// const url =
// 	"https://data.riksdagen.se/dokumentlista/?sok=&doktyp=&rm=&from=&tom=&ts=&bet=&tempbet=&nr=&org=&iid=&avd=&webbtv=&talare=&exakt=&planering=&facets=&sort=rel&sortorder=desc&rapport=inkomnaforslag&utformat=json&a=s#soktraff";

const Home = (props) => {
	// const parti = props.parti;
	// console.log(parti);

	// Fetch partidokument and run the function by using props.party
	// let d = PartiDokument(parti);
	// console.log(d);
	return (
		<div className="views home">
			<Link to="/home/socialdemokraterna">
				<button type="button">socialdemokraterna</button>
			</Link>
			<Link to="/home/sd">
				<button type="button">SD</button>
			</Link>
		</div>
	);
};

export default Home;
