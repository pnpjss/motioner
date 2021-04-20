import React from "react";
import FullDocuments from "../../assets/api/index.js";

import "./skrivelser.scss";

const Skrivelser = () => {
	const docs = FullDocuments();

	const skrivelser = docs.filter((doc) => doc.dokumentnamn === "Skrivelse");

	return (
		<div className="views skrivelser">
			{skrivelser.map((item) => {
				return (
					<article className="article">
						<h3 key={item.id}> {item.titel}</h3>
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

export default Skrivelser;
