import React from "react";

const GetDocuments = (props) => {
	let url = props;

	const [docs, setDocs] = React.useState([]);
	const [loading, setLoading] = React.useState(true);
	console.log(loading);
	React.useEffect(async () => {
		const respone = await fetch(url);
		const data = await respone.json();
		const item = data.dokumentlista.dokument;
		setDocs(item);
		setLoading(false);
	}, []);
	console.log(docs);
	return docs;
};
export default GetDocuments;
