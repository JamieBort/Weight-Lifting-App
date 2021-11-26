// /src/js/components/AddButton.js

import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const AddButton = ({ fnctn }) => {
	return (
		<View style={styles.addButton}>
			<Text>Add button switches between default screen and edit screen</Text>
			<Button title="Add Button" onPress={fnctn} />
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
export default AddButton;
