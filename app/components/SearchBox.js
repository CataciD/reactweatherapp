var React = require('react');
var styles = require('../styles');


var SearchBox = React.createClass({
	getDefaultProps: function(){
		return {
			ph: 'Default Street',
			size: '300'
		};
	},
	render: function(){
		return(
			<div style={styles.space}>
			<input type="text" className="form-control center-block" placeholder={this.props.ph} style={{width: this.props.size +'px'}}/>
			</div>
		)
	}
});

module.exports = SearchBox;
//style={{marginRight: spacing + 'em'}}