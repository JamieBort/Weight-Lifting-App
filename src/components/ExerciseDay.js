// src/js/components/ExerciseDay.js

import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
// import EditButton from './EditButton';
// import RemoveButton from './RemoveButton';

const ExerciseDay = (props) => {
	// const removeButton = () => {
	// 	console.log('Remove button.');
	// };
	return (
		<View style={styles.exerciseDay}>
			<Text>
				<h3>An exercise day such as leg day</h3>
			</Text>
			<Button title="Remove Button" onPress={props.remove} />
			{/* <EditButton text="Edit this Exercise." editFunction={null} />
			<RemoveButton text="Remove this Exercise." status={props.status} removeFunction={props.removeFunction} />
			<Text>
				<p>{props.status ? 'true' : 'false'}</p>
			</Text> */}
		</View>
	);
};

const styles = StyleSheet.create({
	exerciseDay: {
		backgroundColor: 'lightgreen',
		// flex: 1,
		// alignItems: 'center',
		// justifyContent: 'center',
		margin: 10,
		padding: 10,
	},
});
export default ExerciseDay;
