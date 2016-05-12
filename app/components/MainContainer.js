var React = require('react');
var styles = require('../styles');

function MainContainer (props) {
	return (
		<div className="col-xs-12 container-fluid" style={styles.mainContainerStyle}>	
			{props.children}
		</div>
	)
}

module.exports = MainContainer;