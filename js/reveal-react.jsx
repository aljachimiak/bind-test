var DemoBox = React.createClass({
	updateValue: function(modifiedValue){
		this.setState({
			value:modifiedValue
		})
	},
  getInitialState:function(){
    return{
    		// make this empty for production
        value:''
    }
  },
	render: function() {
		return(
			<div classNmae="demoBox">
				<div className="row">
				 	<div className="gridHalf">
				 		<TypeBox value={this.state.value} updateValue={this.updateValue} />
				 	</div>
					<div className="gridHalf">
						<DisplayBox data={this.state.value} />
					</div>
				</div>
			</div>
		);
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

var DisplayBox = React.createClass({
	render: function(){
		return(
			<p>{this.props.data}</p>
		)
	}
});

React.render(
	<DemoBox />, document.getElementById('react-location')
);

