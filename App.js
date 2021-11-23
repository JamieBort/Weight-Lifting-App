// ./App.js

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DefaultScreen from './src/components/DefaultScreen';
import EditScreen from './src/components/EditScreen';
import ToggleButton from './src/components/ToggleButton';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isToggleOn: true,
			// exerciseExists: false,
		};

		// This binding is necessary to make `this` work in the callback
		this.handleToggleButton = this.handleToggleButton.bind(this);
	}

	handleToggleButton() {
		console.log('ToggleButton fired.');
		this.setState((prevState) => ({
			isToggleOn: !prevState.isToggleOn,
		}));
	}

	render() {
		return (
			<View style={styles.container}>
				<DefaultScreen />
				<EditScreen />
				<Text>Open up App.js to start working on your app!</Text>
				<ToggleButton fnctn={this.handleToggleButton} />
				{this.state.isToggleOn ? <DefaultScreen /> : <EditScreen />}
			</View>
		);
	}
}

// export default function App() {
// 	function handleToggleButton() {
// 		console.log('ToggleButton fired.');
// 	}

// 	return (
// 		<View style={styles.container}>
// 			<Text>Open up App.js to start working on your app!</Text>
// 			<ToggleButton fnctn={handleToggleButton} />
// 			<DefaultScreen />
// 			<EditScreen />
// 		</View>
// 	);
// }

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'lightblue',
		// backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
export default App;
