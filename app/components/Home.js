var React = require('react');
var ReactRouter = require('react-router');
var MainContainer = require('./MainContainer');
var styles = require('../styles');
var SearchBox = require('./SearchBox');
var GetWeather = require('./GetWeather');
var Link = ReactRouter.Link;

function Home () {
	return (
		<MainContainer>
			<div className="text-center" style={styles.bgStyle}>
				<h1 style={styles.titleFont}>Enter a City and State</h1>
				<div style={styles.searchBoxDisplay}>
					<SearchBox ph="Random Ulica St." size="200"/>
					<GetWeather />
				</div>
			</div>
		</MainContainer>
	)
}; 

module.exports = Home;

