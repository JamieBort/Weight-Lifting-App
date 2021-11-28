// /src/components/EditScreen.js

import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import AddExerciseDay from './AddExerciseDay';
import ExerciseDay from './ExerciseDay';

class EditScreen extends Component {
	state = {
		numberOfChildren: 0,
		hijos: [],
	};

	add = () => {
		console.log('AddExerciseDay pressed');
		const tempArr = this.state.hijos;
		tempArr.push({
			component: (
				<div key={this.state.numberOfChildren}>
					<ExerciseDay remove={this.remove} title={'Remove Button '} item={this.state.numberOfChildren} />
				</div>
			),
			child: this.state.numberOfChildren,
		});

		this.setState({
			numberOfChildren: this.state.numberOfChildren + 1,
			hijos: tempArr,
		});
		// console.log('numberOfChildren', this.state.numberOfChildren);
	};

	remove = () => {
		console.log('Remove button.');
		this.setState({ numberOfChildren: this.state.numberOfChildren - 1 });
		console.log('numberOfChildren', this.state.numberOfChildren);
	};

	// const arr = [];
	// for (var int = 0; int < this.state.numberOfChildren; int++) {
	// 	arr.push({
	// 		component: (
	// 			<div key={integer}>
	// 				<ExerciseDay remove={this.remove} title={'Remove Button '} item={integer} />
	// 			</div>
	// 		),
	// 		child: int,
	// 	});
	// }
	// console.log('arr: ', arr);

	render() {
		console.log('state: ', this.state);
		const children = [];
		for (var integer = 0; integer < this.state.numberOfChildren; integer++) {
			// console.log('integer: ', integer);
			children.push(
				<div key={integer}>
					<ExerciseDay remove={this.remove} title={'Remove Button '} item={integer} />
				</div>,
			);
		}
		return (
			<View style={styles.editScreen}>
				<Text>Edit Screen</Text>
				<Text>Screen that allows me to add or edit exercise days</Text>
				<Text>List existing exercise days.</Text>
				<AddExerciseDay fnctn={this.add} />
				{/* <Button title="Add Another Component" onPress={this.fnctn} /> */}
				{children}
				{/* {arr} */}
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
