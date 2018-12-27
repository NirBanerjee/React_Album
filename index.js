/** @format */

import React from 'react';
//import ReactNative from 'react-native';
import { AppRegistry, Text } from 'react-native';
import Header from './src/components/header';

// import { AppRegistry } from 'react-native';
// import App from './App';
// import { name as appName } from './app.json';

const App = () => (
	<Header />
);


AppRegistry.registerComponent('albums', () => App);
