// /src/components/EditScreen.js

import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import AddButton from './AddButton';
import ExerciseDay from './ExerciseDay';

class EditScreen extends Component {
	// const EditScreen = () => {
	// need state to remember the number of children components.
	state = {
		numberOfChildren: 0,
	};

	// function addFunction() {
	addFunction = () => {
		console.log('AddButton pressed');
		this.setState({ numberOfChildren: this.state.numberOfChildren + 1 });
		console.log('numberOfChildren', this.state.numberOfChildren);
	};

	// need a function to add them.
	fnctn = () => {
		this.setState({ numberOfChildren: this.state.numberOfChildren + 1 });
		console.log('numberOfChildren', this.state.numberOfChildren);
	};

	removeFunction = () => {
		console.log('Remove button.');
		this.setState({ numberOfChildren: this.state.numberOfChildren - 1 });
		console.log('numberOfChildren', this.state.numberOfChildren);
	};

	render() {
		const children = [];
		for (var integer = 0; integer < this.state.numberOfChildren; integer++) {
			console.log('integer: ', integer);
			children.push(
				<div key={integer}>
					<ExerciseDay remove={this.removeFunction} />
				</div>,
			);
		}
		return (
			<View style={styles.editScreen}>
				<Text>Edit Screen</Text>
				<Text>Screen that allows me to add or edit exercise days</Text>
				<Text>List existing exercise days.</Text>
				<AddButton fnctn={this.addFunction} />
				{/* <Button title="Add Another Component" onPress={this.fnctn} /> */}
				{children}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	editScreen: {
		backgroundColor: 'pink',
		// flex: 1,
		// alignItems: 'center',
		// justifyContent: 'center',
		margin: 10,
		padding: 10,
	},
});
export default EditScreen;
