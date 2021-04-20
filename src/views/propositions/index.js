import React from "react";
import FullDocuments from "../../assets/api/index.js";
import "./propositions.scss";

const Propositions = (props) => {
	const docs = FullDocuments();
	const propositions = docs.filter((doc) => doc.dokumentnamn === "Proposition");

	return (
		<div className="views propositions">
			{propositions.map((item) => {
				// How to return filbilaga.fil.url- when there is none
				return (
					<article key={item.titel}>
						<h3 key={item.id}> {item.titel}</h3>
						{/* <a href={item.filbilaga.fil.url}>visa dokument</a> */}
						<p>{props.name}</p>
					</article>
				);
			})}
		</div>
	);
};

export default Propositions;
