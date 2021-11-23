import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import DefaultScreen from './src/js/components/DefaultScreen';
// import EditScreen from './src/js/components/EditScreen';
// import ToggleButton from './src/js/components/ToggleButton';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isToggleOn: true,
			// exerciseExists: false,
		};

		// This binding is necessary to make `this` work in the callback
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState((prevState) => ({
			isToggleOn: !prevState.isToggleOn,
		}));
	}

	render() {
		return (
			<Text style={styles.container}>hi</Text>
			// <View style={styles.container}>
			// 	<ToggleButton myFunction={this.handleClick} />
			// 	{this.state.isToggleOn ? <DefaultScreen /> : <EditScreen />}
			// </View>
		);
	}

	// render() {
	// 	return (
	// 		<View style={styles.container}>
	// 			<ToggleButton myFunction={this.handleClick} />
	// 			{this.state.isToggleOn ? <DefaultScreen /> : <EditScreen />}
	// 		</View>
	// 	);
	// }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
export default App;
