// I know this is ridiculous, but I didn't want to include any templating libs
var menu = '<hr/>								'+
'<div class="row">					'+
'	<div class="gridHalf">		'+
'		<a href="./basic.html">(1) Simple binding with Vanilla JS</a> '+
'		<a href="./simple-bind-react.html">(2) Simple binding with react</a> '+
'	</div> 												'+

'	<div class="gridHalf">				'+
'		<a href="./iframe-react.html">(3) Binding events into a React Iframe</a> '+
'		<a href="./iframePlus-react.html">(4) Binding plus iteration into a React Iframe</a> '+
'	</div>												'+
'</div>													'+
'<hr/>													'+
'<div class="row">							'+
'	<div class="gridHalf">				'+
'		<a href="./reveal-react.html">(5) Create reveal.js presentation with react</a> '+
'	</div>												'+
'	<div class="gridHalf">				'+
'		<a href="./CK-plugin-test.html">(6) Create a simple CKEditor plugin</a> '+
'	</div>												'+
'</div>													'+
'<hr/>													'+
'<div class="row">							'+
	
'	<div class="gridHalf">				'+
'		<a href="./ck-reveal-react.html">(7) Connect CK Editor to Reveal</a> '+
'	</div>												'+
'	<div class="gridHalf">				'+
		
'	</div>												'+
'</div>													'+
'<div class="intro"><a href="./index.html">INTRO</a></div>';

function appendDiv() {
	var newDiv = document.createElement('div');
	newDiv.innerHTML = menu;
	document.body.appendChild(newDiv);
}

appendDiv();

function ShowCode(){
	var modal = document.createElement("div");
	modal.id = "modal";
	var p = document.createElement("p");

	var code = js.toString();

	var mystring = code;
	var newLine = "\n";
	var regex = new RegExp(newLine, "g");
	linedCode = mystring.replace(regex, "</span><br><span class='lineNumber'>");

	mystring = linedCode;
	var tab = "\t";
	regex = new RegExp(tab, "g");
	tabbedCode = mystring.replace(regex, "&nbsp;&nbsp;");

	mystring = tabbedCode;
	var spaces = "  ";
	regex = new RegExp(spaces, "g");
	newCode = mystring.replace(regex, "  &nbsp;&nbsp;")

	p.innerHTML = "<span class='lineNumber'>" + newCode + " </span>";

	modal.appendChild(p);	

	$(modal).css({
		height: "95%",
		width: "95%",
		background: "#333",
		position: "absolute",
		top: "2.5%",
		left:"2.5%",
		margin:"2em",
		fontFamily : 'monospace',
		fontSize: "14px",
		color: "#eee",
		overflow: "scroll"
	});

	$(p).css({
		margin: "2em"
	});

	document.body.appendChild(modal);

	var a = document.createElement("a");
	a.id = "remove";
	a.onclick = RemoveCode;
	$(a).css({
		position: "fixed",
		color: "white",
		right: "1em",
		top: "calc(1em + 5%)",
		fontSize: "32px",
		cursor: "pointer",
		margin: ".5em"
	}).html("&times;");
	modal.appendChild(a);
}

function RemoveCode(){
	document.body.removeChild(document.getElementById("modal"));
}

function CodeButton() {
	var button = document.createElement("button");
	button.onclick = ShowCode;
	//button.textContent("JS");
	$('small').append(button);
	$(button).text("JS");
}
CodeButton();
