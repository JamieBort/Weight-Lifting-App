// /src/js/components/AddExerciseDay.js

import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const AddExerciseDay = ({ fnctn, title }) => {
	return (
		<View style={styles.addButton}>
			<Text>Add Button adds a gym day.</Text>
			<Button
				// title="Add Button"
				title={title}
				onPress={fnctn}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	addButton: {
		backgroundColor: 'lightblue',
		// flex: 1,
		// alignItems: 'center',
		// justifyContent: 'center',
		margin: 10,
		padding: 10,
	},
});
export default AddExerciseDay;
