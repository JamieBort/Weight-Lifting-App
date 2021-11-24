// /src/components/DefaultScreen.js

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const DefaultScreen = () => {
	return (
		<View style={styles.defaultScreen}>
			<Text>Default Screen/Home Screen</Text>
			<Text>Display which exercise day I performed when.</Text>
			<Text>Leg day last done on Tuesday</Text>
			<Text>Back day last done on Monday</Text>
			<Text>Ect.</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	defaultScreen: {
		backgroundColor: 'yellow',
		// flex: 1,
		// alignItems: 'center',
		// justifyContent: 'center',
		// margin: 20,
		// padding: 20,
	},
});

export default DefaultScreen;
