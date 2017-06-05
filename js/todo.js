function addValue() {

	var inputValue = document.getElementById('data').value;
	console.log(inputValue);
	if(inputValue) {
		var createli = document.createElement('li');
		var createtext = document.createTextNode(inputValue);
		createli.appendChild(createtext);
		var button = document.createElement("button");
		button.innerHTML = "Delete";
		createli.appendChild(button);
		console.log(button)

		var divmain = document.getElementById('test');
		divmain.appendChild(createli);
	 	document.getElementById('data').value = '';
	}
	else
	{
		alert("please add a task")
	}
	return false;
}