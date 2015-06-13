// I know this is ridiculous, but I didn't want to include any templating libs
var menu = '<hr/>								'+
'<div class="row">					'+
'	<div class="gridHalf">		'+
'		<a href="./index.html">Simple binding with Vanilla JS</a> '+
'		<a href="./simple-bind-react.html">Simple binding with react</a> '+
'	</div> 												'+

'	<div class="gridHalf">				'+
'		<a href="./iframe-react.html">Binding events into a React Iframe</a> '+
'		<a href="./iframePlus-react.html">Binding plus iteration into a React Iframe</a> '+
'	</div>												'+
'</div>													'+
'<hr/>													'+
'<div class="row">							'+
'	<div class="gridHalf">				'+
'		<a href="./reveal-react.html">Create reveal.js presentation with react</a> '+
'	</div>												'+
'	<div class="gridHalf">				'+
'		<a href="./CK-plugin-test.html">Create a simple CKEditor plugin</a> '+
'	</div>												'+
'</div>													'+
'<hr/>													'+
'<div class="row">							'+
	
'	<div class="gridHalf">				'+
'		<a href="./CK-reveal-react.html">Connect CK Editor to Reveal</a> '+
'	</div>												'+
'	<div class="gridHalf">				'+
		
'	</div>												'+
'</div>';

function appendDiv() {
	var newDiv = document.createElement('div');
	newDiv.innerHTML = menu;
	document.body.appendChild(newDiv);
}

appendDiv();


