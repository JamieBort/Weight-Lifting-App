// src/js/components/EditScreen.js

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ToggleButton from './ToggleButton';
import ExerciseDay from './ExerciseDay';
import AddButton from './AddButton';

// const EditScreen = () => {
class EditScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			// isToggleOn: true,
			exerciseExists: false,
		};
		// This binding is necessary to make `this` work in the callback
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		if (this.state.exerciseExists) console.log('Removed');
		else console.log('Added');
		this.setState((prevState) => ({
			exerciseExists: !prevState.exerciseExists,
		}));
	}

	render() {
		return (
			<View>
				<h1>Edit Screen</h1>
				<p>Screen that allows me to add or edit exercise days</p>
				<p>List existing exercise days.</p>
				{this.state.exerciseExists ? (
					<ExerciseDay status={this.state.exerciseExists} removeFunction={this.handleClick} />
				) : null}
				<AddButton text="Add an exercise day." addedFunction={this.handleClick} />
			</View>
		);
	}
}
export default EditScreen;
