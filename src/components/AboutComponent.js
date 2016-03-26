var AboutComponent = React.createClass({
	getInitialState: function(){
		return {msg: ''};
	},
	clickHandler: function(){
		require('../sections/contact.js');
	},
	componentDidMount: function(){
		this.setState({msg: 'Acabou de renderizar este AboutComponent'});
	},
	render: function(){
		return (
			<div className="module-holder">
				<h1 className="page-header">About</h1>
				<br/><br/>
				<p className="well">
					Go to <a onClick={this.clickHandler}>Contact</a>
				</p>
				<p className="alert alert-success">{this.state.msg}</p>
			</div>

		);
	}
});

ReactDOM.render(
	<AboutComponent/>,
	document.querySelector('main')
);