import React from "react";

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
];

const partiMotion =
	"https://data.riksdagen.se/dokumentlista/?sok=&doktyp=mot&rm=&from=2018-09-09&tom=&ts=&bet=&tempbet=&nr=&org=&iid=&parti=S&avd=&webbtv=&talare=&exakt=&planering=&facets=&sort=rel&sortorder=desc&rapport=&utformat=json&a=s#soktraff";

const Motioner = (props) => {
	// Props.party should equal to a single party acronym
	// Map through const partier, use title to find a match, return the array as party

	const [docs, setDocs] = React.useState([]);
	const [loading, setLoading] = React.useState(true);

	React.useEffect(async () => {
		const respone = await fetch(partiMotion);
		const data = await respone.json();
		const item = data.dokumentlista;
		console.log(item);
		// setDocs(item);
		setLoading(false);
	}, []);

	return <p>{docs.dokumentlista}</p>;
};
export default Motioner;

// const FullDocuments = () => {
// 	const [docs, setDocs] = React.useState([]);
// 	const [loading, setLoading] = React.useState(true);

// 	React.useEffect(async () => {
// 		const respone = await fetch(url);
// 		const data = await respone.json();
// 		const item = data.dokumentlista.dokument;
// 		setDocs(item);
// 		setLoading(false);
// 	}, []);

// 	return docs;
// };
