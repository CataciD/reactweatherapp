var styles = {
	headerFont:{
		margin: '5px'
	},
	titleFont: {
		fontSize: '46px',
		color: 'white',
		fontWeight: '100'
	},
	mainContainerStyle: {
		position: 'fixed',
		display: 'flex',
		width: '100%',
		height: '92%',
		backgroundImage: 'url(app/images/pattern.svg)',
		backgroundSize: 'cover'
	},
	headerDisplay: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		background: 'rgba(252,90,44,0.89)',
		color: '#fff',
		padding:'5px'
	},
	headerSearchBox:{
		display:'flex'
	},
	bgStyle:{
		position: 'absolute',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		height: '100%',
		width: '100%'
	},
	transparentBg:{
		background: 'transparent'	
	},
	space: {
		margin: '5px'
	},
	searchBoxDisplay: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		maxWidth: '300px',
		alignSelf: 'right'	
	}
	

}

module.exports = styles;