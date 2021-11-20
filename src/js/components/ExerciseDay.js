// src/js/components/ExerciseDay.js

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
			<h3>An exercise day such as leg day</h3>
			<EditButton text="Edit this Exercise." editFunction={null} />
			<RemoveButton
				text="Remove this Exercise."
				status={props.status}
				// removeFunction={this.handleClick}

				removeFunction={props.removeFunction}
			/>
			<p>{props.status ? 'true' : 'false'}</p>
		</View>
	);
};
export default ExerciseDay;
