var Section = React.createClass({
  render: function() {
    var content = this.props.content;
    return(
      <section>{content}</section>
    )
  }

});
var Frame = React.createClass({
    render: function() {
        return <iframe />;
    },
    componentDidMount: function() {
      var doc = this.getDOMNode().contentWindow.document;
      this.renderFrameContents();

      ApppendScripts(doc);
    },
    renderFrameContents: function() {
      var doc = this.getDOMNode().contentWindow.document;
      
      if(doc.readyState === 'complete') {
        var contents = (
          <div>
            &shy;{this.props.head}
            {this.props.children}
          </div>
        );

        React.render(contents, doc.body);
      } else {
        setTimeout(this.renderFrameContents, 0);
      }
    },
    componentDidUpdate: function() {
      this.renderFrameContents();
    },
    componentWillUnmount: function() {
        React.unmountComponentAtNode(this.getDOMNode().contentWindow.document.body);
    }
});

var TypeBox = React.createClass({
  update: function(){
    var modifiedValue = this.refs.typeBoxInput.getDOMNode().value;
    this.props.updateValue(modifiedValue);
  },
  render:function(){
    return(
      <textarea 
        ref="typeBoxInput" 
        value={this.props.value} 
        onChange={this.update} 
        placeholder="Type Something...">
      </textarea>
    )
  }
});

var Reveal = React.createClass({
	render: function() {
		return (
			<script async src="./vendor/reveal/js/reveal.js"></script>
		)
	}
});


var Hello = React.createClass({
    getInitialState: function() {
      return { contents: "Hello --- What's up?" };
    },
    updateValue: function(modifiedValue){
      this.setState({
        contents:modifiedValue
      })
    },
    render: function() {
        var contentsForSection = this.state.contents;
        var contentsArr = ArrToObject(contentsForSection.split("---"));
        return (
        	<div>
        	<Frame head='' >
                
								<div className="reveal">
								<div className="slides">
                {contentsArr.map(function(x){
                  return <Section content={x.text} key={x.key} />
                }) }
                </div>
                </div>
                <script id="revealScript" async src="./vendor/reveal/js/reveal.js"></script>
								<script id="initScript" async src="./js/reveal-init.js"></script>
								<link href="./vendor/reveal/css/reveal.css" rel="stylesheet"></link>
      					<link id="theme" href="./vendor/reveal/css/theme/serif.css" rel="stylesheet"></link>
          </Frame>

          <div className="row">

            <div className="gridHalf">
            <p>Use Three hyphens in a row to create a new section in the iframe (ex: "---").</p>
              <TypeBox value={this.state.value} updateValue={this.updateValue} />
            </div>

            <div className="gridHalf"></div>
          </div>
          </div>
            
        );
    }
});

function ArrToObject(arr){
  var toReturn  = [];
  for (var i = 0; i < arr.length; i++) {
    var temp = {};
    temp.key = (i + 1000)+'unique';
    temp.text = arr[i];
    toReturn[i] = temp;
  }
  return toReturn;
}

React.render(<Hello />, document.getElementById('react-location'));

function ApppendScripts(location) {	
	var scripts = ["./vendor/reveal/js/reveal.js", "./js/reveal-init.js"];
	scripts.map(function(x){
		var script = location.createElement("script");
		script.src = x;

		location.head.appendChild(script);
	})

}