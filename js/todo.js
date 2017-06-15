//Add value to the list
function addValue() {

	var inputValue = document.getElementById('data').value;
	if(inputValue) {
		var createli = document.createElement('LI');
		createli.setAttribute('id', 'list')
		var randomId = createli.children.length+1
		var createSpan = document.createElement('span');
		createSpan.setAttribute('id', randomId);
		
		createli.appendChild(createSpan);
		var createtext = document.createTextNode(inputValue);
		// createli.appendChild(createtext);

		createSpan.appendChild(createtext);
		console.log(createli);
		var divmain = document.getElementById('test');
		divmain.appendChild(createli);

	 	document.getElementById('data').value = '';
	 
	 	deleteValue(createli);
	 	checkedClass();
	 	editValue(createSpan, createli);
	}
	else
	{
		alert("please add a task")
	}		

	return false;
}

//Add checked class to li
function checkedClass() {
	var b = document.querySelector('ul');
	b.addEventListener('click', function(ev) {
	  if (ev.target.tagName === 'LI') {
	    ev.target.classList.toggle('checked');
	  }
	}, false);
}

//Delete the list
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

//Edit the list
function editValue(createSpan, createli) {

	var editButton =  document.createElement("button");
	editButton.innerHTML = "Edit";
	editButton.setAttribute = ('id', 'editbtn')
	createli.appendChild(editButton);

	editButton.addEventListener("click", function() {	
		createSpan.setAttribute('contentEditable', 'true');
		createSpan.focus();
	})

	// method for keypress 
	createSpan.addEventListener('keypress', function(evt) {
  	if (evt.which === 13) {
      evt.preventDefault();
    	createSpan.setAttribute('contentEditable', 'false');

  	}
  	return false;
	});
		
}