// /src/components/EditScreen.js

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AddButton from './AddButton';

const EditScreen = () => {
	function addFunction() {
		console.log('pressed');
	}
	return (
		<View style={styles.editScreen}>
			<Text>Edit Screen</Text>
			<Text>Screen that allows me to add or edit exercise days</Text>
			<Text>List existing exercise days.</Text>
			<AddButton fnctn={addFunction} />
		</View>
	);
};

const styles = StyleSheet.create({
	editScreen: {
		backgroundColor: 'pink',
		// flex: 1,
		// alignItems: 'center',
		// justifyContent: 'center',
		// margin: 20,
		// padding: 20,
	},
});

export default EditScreen;
