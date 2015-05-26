// This solution needed to be found when 
// I couldn't bind the textarea to another component
// found at this site:
// http://voidcanvas.com/react-tutorial-two-way-data-binding/


var DisplayContainer1 = React.createClass({
    updateValue:function(modifiedValue){
        this.setState({
            value:modifiedValue
        })
    },
    getInitialState:function(){
        return{
            value:'My Value'
        }
    },
    render:function(){
        return (
            <div className="DisplayContainer">
	            <div className="row">
								<div className="gridHalf">
									<DisplayBox todisplay={this.state.value} />
								</div>
								<div className="gridHalf">
									<TypeBox value={this.state.value} updateValue={this.updateValue}/>
								</div>
							</div>
            </div>
        );
    }
});

var DisplayBox = React.createClass({
	render:function(){
		var content  = this.props.todisplay;
		return(
			<h3>{content}</h3>
		)
	}
})
 
var TypeBox = React.createClass({
    update:function(){
        var modifiedValue=this.refs.inputValue.getDOMNode().value;
        this.props.updateValue(modifiedValue);
    },
    render:function(){
        return (
        	<textarea type="text" ref="inputValue" value={this.props.value} onChange={this.update}>
        	</textarea>
        )
    }
});
 
React.render(<DisplayContainer1 />,document.getElementById("react-location"));