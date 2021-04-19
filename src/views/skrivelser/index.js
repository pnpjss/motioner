import React from "react";
import FullDocuments from "../../assets/api/index.js";
import { Router, Link } from "@reach/router";
import "./skrivelser.scss";
const url =
	"https://data.riksdagen.se/dokumentlista/?sok=&doktyp=&rm=&from=&tom=&ts=&bet=&tempbet=&nr=&org=&iid=&avd=&webbtv=&talare=&exakt=&planering=&facets=&sort=rel&sortorder=desc&rapport=inkomnaforslag&utformat=json&a=s#soktraff";

const Skrivelser = () => {
	const docs = FullDocuments();

	const skrivelser = docs.filter((doc) => doc.dokumentnamn === "Skrivelse");

	return (
		<div className="views skrivelser">
			{skrivelser.map((item) => {
				return (
					<article className="article">
						<h3 key={item.id}> {item.titel}</h3>
						<a target="_blank" href={item.filbilaga.fil.url}>
							visa dokument
						</a>
						<i>{item.publicerad}</i>
					</article>
				);
			})}
		</div>
	);
};

export default Skrivelser;
