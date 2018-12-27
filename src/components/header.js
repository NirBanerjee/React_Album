//Import Libraries
import React from 'react';
import { Text, View } from 'react-native';

//Make a component
const Header = () => {
	const { textStyle, viewStyle } = styles;
	return (
		<View style={viewStyle}>
			<Text style={textStyle}>Albums!</Text>
		</View>
	);
};

const styles = {
	viewStyle: {
		backgroundColor: '#F8F8F8',
		justifyContent: 'center',
		alignItems: 'center',
		height: 60,
		paddingTop: 15,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2},
		shadowOpacity: 0.4,
		elevation: 2,
		position: 'relative'
	},
	textStyle: {
		fontSize: 30
	}
};
//Make componenent Available to other modules.
export default Header;
