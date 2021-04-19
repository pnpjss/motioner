import React from "react";
const url =
	"https://data.riksdagen.se/dokumentlista/?sok=&doktyp=&rm=&from=&tom=&ts=&bet=&tempbet=&nr=&org=&iid=&avd=&webbtv=&talare=&exakt=&planering=&facets=&sort=rel&sortorder=desc&rapport=inkomnaforslag&utformat=json&a=s#soktraff";

const FullDocuments = () => {
	const [docs, setDocs] = React.useState([]);
	const [loading, setLoading] = React.useState(true);

	React.useEffect(async () => {
		const respone = await fetch(url);
		const data = await respone.json();
		const item = data.dokumentlista.dokument;
		setDocs(item);
		setLoading(false);
	}, []);

	return docs;
};

export default FullDocuments;
