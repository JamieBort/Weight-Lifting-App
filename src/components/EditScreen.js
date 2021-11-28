// /src/components/EditScreen.js

import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import AddExerciseDay from './AddExerciseDay';
import ExerciseDay from './ExerciseDay';

class EditScreen extends Component {
	state = {
		numberOfChildren: 0,
		hijos: [],
		numberOfHijos: 0,
	};

	addChildren = () => {
		this.setState({
			numberOfChildren: this.state.numberOfChildren + 1,
		});
	};

	removeChildren = () => {
		console.log('Remove button.');
		this.setState({ numberOfChildren: this.state.numberOfChildren - 1 });
		console.log('numberOfChildren', this.state.numberOfChildren);
		if (true) {
			console.log('The button pushed matches the component to be removed.');
		}
	};

	addHijos = () => {
		this.setState({
			hijos: [
				...this.state.hijos,
				<div key={this.state.numberOfHijos} id={this.state.numberOfHijos}>
					<ExerciseDay remove={this.removeHijos} title={'Remove Button '} item={this.state.numberOfHijos} />
					<button onClick={this.removeHijos}>Button in EditScreen.js to remove one component.</button>
				</div>,
			],
			numberOfHijos: this.state.numberOfHijos + 1,
		});
	};

	removeHijos = (event) => {
		let tempArray = [];
		for (let i = 0; i < this.state.hijos.length; i++) {
			if (event.target.parentElement.id != this.state.hijos[i]['key']) {
				// console.log('event.target.parentElement.id: ', event.target.parentElement.id);
				// console.log("this.state.hijos[i]['key']: ", this.state.hijos[i]['key']);
				tempArray.push(this.state.hijos[i]);
			}
		}
		// console.log('tempArray: ', tempArray);
		this.setState({ hijos: tempArray });
		// this.setState({ hijos: [ ...this.state.hijos, tempArray ] });
		// console.log('---------------------------------');
	};

	render() {
		console.log('state: ', this.state);
		const children = [];
		for (var integer = 0; integer < this.state.numberOfChildren; integer++) {
			children.push(
				<div key={integer}>
					<ExerciseDay remove={this.removeChildren} title={'Remove Button '} item={integer} />
				</div>,
			);
		}

		return (
			<View style={styles.editScreen}>
				<Text>Edit Screen</Text>
				<Text>Screen that allows me to add or edit exercise days</Text>
				<Text>List existing exercise days.</Text>

				{/* <AddExerciseDay title="addChildren" fnctn={this.addChildren} />
				{children} */}

				{/* {this.state.hijos.map((item, i) => <div key={item.child}>{item.component}</div>)} */}

				<AddExerciseDay title="addHijos" fnctn={this.addHijos} />
				{this.state.hijos}
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
