//Import Libraries
import React from 'react';
import { Text } from 'react-native';

//Make a component
const Header = () => {
	const { textStyle } = styles;
	return <Text style={textStyle}> Albums! </Text>;
};

const styles = {
	textStyle: {
		fontSize: 20
	}
};
//Make componenent Available to other modules.
export default Header;
