function js() {
  var Section = React.createClass({
    render: function() {
      var content = this.props.content;
      return(
        <section dangerouslySetInnerHTML={{__html: content}}  />
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

  var Hello = React.createClass({
      getInitialState: function() {
        var origContents = document.getElementById('toEdit').innerHTML;
        return { contents: origContents };
      },
      updateValue: function(modifiedValue){
        this.setState({
          contents:modifiedValue
        })
      },
      componentDidMount: function() {
        setInterval(this.getCKContents, this.props.pollInterval);
      },
      getCKContents: function() {
        console.log(CKEDITOR.instances.toEdit.getData());
        var modifiedValue = CKEDITOR.instances.toEdit.getData();
        this.setState({
          contents:modifiedValue
        }); 
      },
      render: function() {
          var contentsForSection = this.state.contents;
          var contentsArr = ArrToObject(contentsForSection.split("<hr class=\"newSlide\" />"));
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
                    <link href="./vendor/reveal/css/reveal.css" rel="stylesheet"></link>
                    <link id="theme" href="./vendor/reveal/css/theme/simple.css" rel="stylesheet"></link>
              </Frame> 
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

  React.render(<Hello pollInterval={300} />, document.getElementById('react-location'));

  function ApppendScripts(location) { 
    var scripts = ["./vendor/reveal/js/reveal.js", "./js/reveal-init.js"];
    scripts.map(function(x){
      var script = location.createElement("script");
      script.src = x;

      location.head.appendChild(script);
    })

  }
}
js();