var IndexComponent = React.createClass({
	clickHandler: function(){
		require('../sections/about.js');
	},
	render: function(){
		document.body.style.visibility = "visible";

		return (
			<div className="module-holder">
				<h1 className="page-header">Index</h1>
				<br/><br/>
				<p className="well">
					Go to <a onClick={this.clickHandler}>About</a>
				</p>
			</div>

		);
	}
});

ReactDOM.render(
	<IndexComponent/>,
	document.querySelector('main')
);