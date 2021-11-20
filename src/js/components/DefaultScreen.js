// src/js/components/DefaultScreen.js

// The home screen for when I open the app.
// Displays the type of exercises I performed when.
// Leg day on Tuesday, Back day on Wednesday, etc.

// Button to  get to the edit screen.

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ToggleButton from './ToggleButton';

const DefaultScreen = () => {
	console.log('toggle back and forth');
	return (
		<View>
			<h1>Default Screen/Home Screen</h1>

			<p>Display which exercise day I performed when.</p>
			<p>Leg day last done on Tuesday</p>
			<p>Back day last done on Monday</p>
			<p>Ect.</p>
			{/* <ToggleButton /> */}
		</View>
	);
};
export default DefaultScreen;
