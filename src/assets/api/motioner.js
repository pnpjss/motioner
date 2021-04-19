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

const PartiMotioner = (props) => {
	// Props.party should equal to a single party acronym
	// Map through const partier, use title to find a match, return the array as party

	// props.title;

	const [test] = partier;
	return test;
};
export default PartiMotioner;
