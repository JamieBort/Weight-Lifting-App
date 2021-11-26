// src/components/ToggleButton.js

import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const ToggleButton = ({ fnctn }) => {
	// const ToggleButton = (props) => {
	return (
		<View style={styles.toggleButton}>
			<Text>Toggle button switches between default screen and edit screen</Text>
			<Button title="Toggle Button" onPress={fnctn} />
		</View>
	);
};

const styles = StyleSheet.create({
	toggleButton: {
		backgroundColor: 'green',
		// flex: 1,
		// alignItems: 'center',
		// justifyContent: 'center',
		margin: 10,
		padding: 10,
	},
});

export default ToggleButton;
