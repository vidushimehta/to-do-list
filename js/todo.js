
function addValue() {

	var inputValue = document.getElementById('data').value;
	if(inputValue) {
		createli = document.createElement('li');
		var createtext = document.createTextNode(inputValue);
		createli.appendChild(createtext);

		var divmain = document.getElementById('test');
		divmain.appendChild(createli);

	 	document.getElementById('data').value = '';
	 
	 	deleteValue(createli);
	}
	else
	{
		alert("please add a task")
	}		
	return false;
}

function deleteValue(createli) {

	var deleteButton = document.createElement("button");
	deleteButton.innerHTML = "Delete";
	createli.appendChild(deleteButton);
	deleteButton.setAttribute("id", "delete");
	deleteButton.addEventListener("click", function() {	
		createli.parentNode.removeChild(createli);		
	})
	return false;
}