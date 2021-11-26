// old/src/js/components/ExerciseDay.js

// The home screen for when I open the app.
// Displays the type of exercises I performed when.
// Leg day on Tuesday, Back day on Wednesday, etc.

// Button to  get to the default screen.

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import EditButton from './EditButton';
import RemoveButton from './RemoveButton';

const ExerciseDay = (props) => {
	return (
		<View>
			<Text>
				<h3>An exercise day such as leg day</h3>
			</Text>
			<EditButton text="Edit this Exercise." editFunction={null} />
			<RemoveButton text="Remove this Exercise." status={props.status} removeFunction={props.removeFunction} />
			<Text>
				<p>{props.status ? 'true' : 'false'}</p>
			</Text>
		</View>
	);
};
export default ExerciseDay;
