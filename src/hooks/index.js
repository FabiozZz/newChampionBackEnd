import { useState } from 'react';
import { isEmpty } from '../helpers/common';

export const useInputOnObject = initialState => {
	const [state, setState] = useState(initialState);
	const handleChange = e => {
		let name = e.target.name;
		let value = e.target.value;
		setState(prev => ({ ...prev, [name]: value }));
	};
	const copyState = Object.assign({}, state);
	let newState = {};
	for (const key in copyState) {
		if (copyState[key]) {
			newState[key] = copyState[key];
		}
	}
	return {
		state: newState,
		onChange: handleChange,
	};
};

export const useInput = initialProps => {
	const [state, setState] = useState(initialProps);
	const handleChange = e => {
		let value = e.target.value;
		setState(value);
	};
	return {
		state,
		onChange: handleChange,
	};
};
