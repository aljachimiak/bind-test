/*-----------------------------
//
//  Soulution for iframe found here:
// https://developer.zendesk.com/blog/rendering-to-iframes-in-react
//
//----------------------------*/
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
        console.log("ready and rendering");
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
      console.log("didUpdate");
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
      return { show: false };
    },
  	updateValue: function(modifiedValue){
			this.setState({
				contents:modifiedValue
			})
		},
    render: function() {
        return (
        	<div className="row">

						<div className="gridHalf">
							<TypeBox value={this.state.value} updateValue={this.updateValue} />
						</div>

						<div className="gridHalf">
						  Below is an iframe:
							<Frame head={
              	<link type='text/css' rel='stylesheet' href='./css/iframe.css' />
            	}>
	              <div>
	              	{this.state.contents}
	              </div>
	            </Frame>
						</div>
					</div>
            
        );
    }
});

React.render(<Hello />, document.getElementById('react-location'));


