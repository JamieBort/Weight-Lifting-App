// src/js/components/RemoveButton.js

import React from 'react';

const RemoveButton = ({ removeFunction, text }) => {
	return <button onClick={removeFunction}>{text}</button>;
};
export default RemoveButton;
