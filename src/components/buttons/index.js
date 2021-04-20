import React from "react";
import "./buttons.scss";
import { Link } from "@reach/router";
// const url =
// 	"https://data.riksdagen.se/dokumentlista/?sok=&doktyp=mot&rm=&from=&tom=&ts=&bet=&tempbet=&nr=&org=&iid=&parti=S&avd=&webbtv=&talare=&exakt=&planering=&facets=&sort=rel&sortorder=asc&rapport=&utformat=json&a=s#soktraff";

const Buttons = (props) => {
	return (
		<Link to={"/partier/" + props}>
			<div className="button-body">
				<button>{props}</button>
			</div>
		</Link>
	);
};

export default Buttons;
