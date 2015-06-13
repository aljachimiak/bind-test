var revealInitInterval = setInterval( function() { revealInterval(); }, 100);

function revealInterval() {
	if (typeof(Reveal) === "object") {
		clearInterval(revealInitInterval);
    console.log('reveal is ready');
    Init();
  }
}

function Init(){
	Reveal.initialize({
		controls: true,
		progress: true,
		history: true,
		center: false,

		transition: 'slide', // none/fade/slide/convex/concave/zoom  
		width: 'auto',
		height: 'auto',  

	  // Factor of the display size that should remain empty around the content
	  margin: 0.1,

	  // Bounds for smallest/largest possible scale to apply to content
	  minScale: 0.2,
	  maxScale: 1.5
	});
}