import React from "react";

const url =
	"https://data.riksdagen.se/dokumentlista/?sok=&doktyp=&rm=&from=&tom=&ts=&bet=&tempbet=&nr=&org=&iid=&avd=&webbtv=&talare=&exakt=&planering=&facets=&sort=rel&sortorder=desc&rapport=inkomnaforslag&utformat=json&a=s#soktraff";

const FullDocuments = (props) => {
	// Fetch these documents directly?

	const [docs, setDocs] = React.useState([]);
	const [loading, setLoading] = React.useState(true);
	console.log(loading);
	React.useEffect(async () => {
		const respone = await fetch(url);
		const data = await respone.json();
		console.log(data);
		const item = data.dokumentlista.dokument;
		setDocs(item);
		setLoading(false);
	}, [props]);

	return docs;
};

export default FullDocuments;
