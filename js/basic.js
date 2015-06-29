function js() {
	elem = document.getElementById('type-here');
	div = document.getElementById('put-here');
		
	elem.onkeyup = function(e) {
		div.textContent = elem.value;
	}
}
js();

