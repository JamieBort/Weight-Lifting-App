// src/components/ToggleButton.js

import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const ToggleButton = (props) => {
	return (
		<View style={styles.container}>
			<Text>Toggle button switches between default screen and edit screen</Text>
			<Button title="Toggle Button" onPress={props.fnctn} />
		</View>
	);
};

const styles = StyleSheet.create({
	toggleButton: {
		flex: 1,
		backgroundColor: 'blue',
		// backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
		margin: 20,
	},
});

export default ToggleButton;
