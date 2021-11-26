// src/components/AppComponent.js
// the following is from "React.js: How to append a component on click?" https://stackoverflow.com/a/35906206/8210460

import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import AddButton from './AddButton';

class AppComponent extends React.Component {
	state = {
		numChildren: 0,
	};

	onAddChild = () => {
		this.setState({
			numChildren: this.state.numChildren + 1,
		});
	};

	render() {
		const children = [];

		for (var i = 0; i < this.state.numChildren; i += 1) {
			children.push(<ChildComponent key={i} number={i} />);
		}

		return <ParentComponent addChild={this.onAddChild}>{children}</ParentComponent>;
	}
}

const ParentComponent = (props) => (
	<div className="card calculator">
		<p>
			<a href="#" onClick={props.addChild}>
				Add Another Child Component
			</a>
		</p>
		<div id="children-pane">{props.children}</div>
	</div>
);

const ChildComponent = (props) => <div>{'I am child ' + props.number}</div>;

export default AppComponent;
// default export AppComponent;
