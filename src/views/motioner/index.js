import React from "react";
import "./parties.scss";
import Buttons from "../../components/buttons/index.js";

const parties = [
	{
		title: "Socialdemokraterna",
		homepage: "https://www.socialdemokraterna.se/",
		motionUrl:
			"https://data.riksdagen.se/dokumentlista/?sok=&doktyp=mot&rm=&from=&tom=&ts=&bet=&tempbet=&nr=&org=&iid=&parti=S&avd=&webbtv=&talare=&exakt=&planering=&facets=&sort=rel&sortorder=desc&rapport=&utformat=json&a=s#soktraff",
	},
	{
		title: "Moderaterna",
		homepage: "",
		motionUrl:
			"https://data.riksdagen.se/dokumentlista/?sok=&doktyp=&rm=&from=&tom=&ts=&bet=&tempbet=&nr=&org=&iid=&parti=M&avd=&webbtv=&talare=&exakt=&planering=&facets=&sort=rel&sortorder=desc&rapport=&utformat=json&a=s#soktraff",
	},
	{
		title: "Vänsterpartiet",
		homepage: "www.vänsterpartiet.se",
		motionUrl:
			"https://data.riksdagen.se/dokumentlista/?sok=&doktyp=mot&rm=&from=&tom=&ts=&bet=&tempbet=&nr=&org=&iid=&parti=V&avd=&webbtv=&talare=&exakt=&planering=&facets=&sort=rel&sortorder=desc&rapport=&utformat=json&a=s#soktraff",
	},
];

const Parties = (props) => {
	const partyName = props.party;
	const partyDocs = parties.filter((item) => item.title === partyName);
	const url = partyDocs.map((item) => {
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
	}, [props.party]);

	return (
		<div className="motions">
			{
				// This shows an error, figure out how to make Buttons() retrieve an id for every item and key it inside buttons-body div
				// Maybe send the entire item, though it seems unnecessary(?)
			}
			<div className="party-buttons">
				{parties.map((item) => {
					return Buttons(item.title);
				})}
			</div>

			{docs.map((item) => {
				return (
					<article key={item.titel}>
						<h3>{item.titel}</h3>
						<p>{item.notis}</p>
						<i>{item.datum}</i>
					</article>
				);
			})}
		</div>
	);
};
export default Parties;
