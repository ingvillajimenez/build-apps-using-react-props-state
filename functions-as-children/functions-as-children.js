var names = ["Alice", "Bob", "Charles", "Darwin", "Emily", "Fiona", "Garrett"];

function Names(props) {
	var namesList = [];
	for (var i = 1; i <= props.upto; i++) {

		namesList.push(props.children(i, names));
	}

	return <div>{namesList}</div>
}

function NameList(props) {

	return (
		<Names upto={props.upto}>
			{(index, names) => <div key={index}> {names[index]} </div>}
		</Names>
	);
}

ReactDOM.render(<NameList upto={5} />,
	document.getElementById("outer"));