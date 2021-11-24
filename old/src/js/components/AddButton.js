// /old/src/js/components/AddButton.js

import React from 'react';

const AddButton = ({ addedFunction, text }) => {
	return <button onClick={addedFunction}>{text}</button>;
};
export default AddButton;
