import React from "react";
import { Router, Link, useParams } from "@reach/router";
import "./partier.scss";
import Buttons from "../../components/buttons/index.js";

// Import components buttons
// Let user choose which parti they want to show by pressing a button
// Button redirects user to /Partier/x
// x Is interpreted as prop.party
// use prop.party to fetch the correct api list of motions
// return a display of the motions

const partier = [
	{
		title: "Socialdemokraterna",
		hemsida: "https://www.socialdemokraterna.se/",
		motionUrl:
			"https://data.riksdagen.se/dokumentlista/?sok=&doktyp=mot&rm=&from=&tom=&ts=&bet=&tempbet=&nr=&org=&iid=&parti=S&avd=&webbtv=&talare=&exakt=&planering=&facets=&sort=rel&sortorder=desc&rapport=&utformat=json&a=s#soktraff",
	},
	{
		title: "Moderaterna",
		hemsida: "",
		motionUrl:
			"https://data.riksdagen.se/dokumentlista/?sok=&doktyp=&rm=&from=&tom=&ts=&bet=&tempbet=&nr=&org=&iid=&parti=M&avd=&webbtv=&talare=&exakt=&planering=&facets=&sort=rel&sortorder=desc&rapport=&utformat=json&a=s#soktraff",
	},
	{
		title: "Vänsterpartiet",
		hemsida: "www.vänsterpartiet.se",
		motionUrl:
			"https://data.riksdagen.se/dokumentlista/?sok=&doktyp=mot&rm=&from=&tom=&ts=&bet=&tempbet=&nr=&org=&iid=&parti=V&avd=&webbtv=&talare=&exakt=&planering=&facets=&sort=rel&sortorder=desc&rapport=&utformat=json&a=s#soktraff",
	},
];

const Partier = (props) => {
	const parti = props.parti;
	const partiDokument = partier.filter((item) => item.title === parti);
	const url = partiDokument.map((item) => {
		return item.motionUrl;
	});

	const [docs, setDocs] = React.useState([]);
	const [loading, setLoading] = React.useState(true);
	console.log(loading);
	React.useEffect(async () => {
		const respone = await fetch(url);
		const data = await respone.json();
		const item = data.dokumentlista.dokument;
		setDocs(item);
		setLoading(false);
	}, [props.parti]);

	return (
		<div className="motions">
			<div className="party-buttons">
				{partier.map((item) => {
					return Buttons(item.title);
				})}
			</div>

			{docs.map((item) => {
				return (
					<article className="motioner">
						<h3>{item.titel}</h3>
						<p>{item.notis}</p>
					</article>
				);
			})}
		</div>
	);
};
export default Partier;
