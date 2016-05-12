var React = require('react');
var SearchBox = require('./SearchBox');
var GetWeather = require('./GetWeather');
var styles = require('../styles')

var Main = React.createClass({
	render: function(){
		return(
			<div>
				<div style={styles.headerDisplay}>
					<div style={styles.space}>
						<h2 style={styles.headerFont}>Clever Title</h2>
					</div>
					<div style={styles.headerSearchBox}>
						<SearchBox size="200"/>
						<GetWeather />
					</div>
				</div>
				{this.props.children}
			</div>
		);
	}
});


module.exports = Main;