var PowerRanger = React.createClass({
	render: function(){
		return(
			<li>
				{this.props.fighter.color} Ranger: {this.props.fighter.name}
			</li>
		)
	}
});

var ContactComponent = React.createClass({
	getInitialState: function(){
		return {rangers: null};
	},
	clickHandler: function(){
		var powerRangers = [{color: "Red", name: "Jason"}, 
			{color: "Black", name: "Zack"}, {color: "Blue", name: "Billy"}, 
			{color: "Pink", name: "Kimberly"}, {color: "Yellow", name: "Trini"}], list = [];
		powerRangers.map(function(item){
			list.push(<PowerRanger fighter={item}/>);
		});
		this.setState({rangers: list});
	},
	render: function(){
		return (
			<div className="module-holder">
				<h1 className="page-header">Contact</h1>
				<br/><br/>
				<p className="well">
					<a onClick={this.clickHandler}>Show me the power rangers real names!</a>
				</p>
				<ul>
					{this.state.rangers}
				</ul>
			</div>

		);
	}
});

ReactDOM.render(
	<ContactComponent/>,
	document.querySelector('main')
);