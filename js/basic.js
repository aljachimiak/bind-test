	var elem = document.getElementById('type-here');
	var div = document.getElementById('put-here');
	
	elem.onchange = function(e) {
		div.innerText = elem.value;
	}