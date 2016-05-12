var React = require('react');
var styles = require('../styles');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;


var GetWeather = React.createClass({
	render: function(){
		return(
			<Link to="Weather=">
				<button type='button' className='btn btn-success' style={styles.space}>Get Weather</button>
			</Link>
		)
	}
});


module.exports = GetWeather;