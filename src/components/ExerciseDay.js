// src/js/components/ExerciseDay.js

import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
// import EditButton from './EditButton';
// import RemoveButton from './RemoveButton';

const ExerciseDay = (props) => {
	const doThis = (event) => {
		// console.log('Remove button.');
		// console.log('event: ', event);
		// console.log('event.target: ', event.target);
		// console.log('event.target.value: ', event.target.value);
		// console.log('event.target.parentNode: ', event.target.parentElement);
		// console.log('event.target.parentNode: ', event.target.parentNode);
		// console.log('window: ', window);
		// console.log('window.parent: ', window.parent);
		console.log('event.target.parentElement.id: ', event.target.parentElement.id);
		console.log('props.item: ', props.item);
	};
	return (
		<View id="bam!" style={styles.exerciseDay}>
			<Text>
				<h3>An exercise day such as leg day</h3>
				{props.item}
			</Text>
			<Button item={props.item} title={props.title + ': ' + props.item} onPress={props.remove} />
			{/* <EditButton text="Edit this Exercise." editFunction={null} />
			<RemoveButton text="Remove this Exercise." status={props.status} removeFunction={props.removeFunction} />
			<Text>
				<p>{props.status ? 'true' : 'false'}</p>
			</Text> */}
			{/* <div style={styles.buttonDiv}> */}
			<Button item={props.item} title="Temp Button" onPress={props.remove} />

			{/* </div> */}
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
		// button: {
		// 	backgroundColor: 'green',

		// margin: 10,
		// padding: 10,
		// },
	},
	// buttonDiv: {
	// 	backgroundColor: 'green',
	// 	// margin: 10 + 'em',
	// 	// padding: 10 + 'em',
	// },
});
export default ExerciseDay;
