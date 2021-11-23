// src/js/components/ToggleButton.js

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DefaultScreen from './DefaultScreen';
import EditScreen from './EditScreen';

const ToggleButton = (props) => {
	return (
		<View>
			<Text>Toggle button switches between default screen and edit screen</Text>
			{/* <Text>
				<button onClick={props.myFunction}>Toggle Button</button>
			</Text> */}
		</View>
	);
};

export default ToggleButton;
