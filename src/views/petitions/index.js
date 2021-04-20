import React from "react";
import FullDocuments from "../../assets/api/index.js";

import "./petitions.scss";

const Petitions = () => {
	const docs = FullDocuments();

	const skrivelser = docs.filter((doc) => doc.dokumentnamn === "Skrivelse");

	return (
		<div className="views skrivelser">
			{skrivelser.map((item) => {
				return (
					<article className="article" key={item.titel}>
						<h3> {item.titel}</h3>
						<a target="_blank" rel="noreferrer" href={item.filbilaga.fil.url}>
							visa dokument
						</a>
						<i>{item.publicerad}</i>
					</article>
				);
			})}
		</div>
	);
};

export default Petitions;
