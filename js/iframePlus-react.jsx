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
      this.renderFrameContents();
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

var Hello = React.createClass({
    getInitialState: function() {
      return { contents: '' };
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

          <div className="row">

            <div className="gridHalf">
            <p>Use Three hyphens in a row to create a new section in the iframe (ex: "---").</p>
              <TypeBox value={this.state.value} updateValue={this.updateValue} />
            </div>

            <div className="gridHalf">
              <p>Below is an iframe:</p>
              <Frame head={
                <link type='text/css' rel='stylesheet' href='./css/iframe.css' />
              }>
                <div>
                {contentsArr.map(function(x){
                  console.log(contentsArr);
                  return <Section content={x.text} key={x.id} />
                }) }
                </div>
              </Frame>
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
    console.log(i);
    temp.text = arr[i];
    toReturn[i] = temp;
  }
  return toReturn;
}
React.render(<Hello />, document.getElementById('react-location'));