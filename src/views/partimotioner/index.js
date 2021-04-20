import React from "react";
import Motioner from "../../assets/api/motioner.js";
import { Router, Link } from "@reach/router";
import "./partimotioner.scss";

const partimotioner = (props) => {
	const docs = motioner();

	const motioner = docs.filter((doc) => doc.dokumentnamn === "Proposition");
	console.log(propositioner[0]);
	return (
		<div className="views propositioner">
			{propositioner.map((item) => {
				let url = item.filbilaga;
				if (url == null) {
					url = "ingenbilaga";
				}
				return (
					<article className="article">
						<h3 key={item.id}> {item.titel}</h3>

						{/* <a href={item.filbilaga.fil.url}>visa dokument</a> */}

						<p>{props.name}</p>
					</article>
				);
			})}
		</div>
	);
};

export default Propositioner;
