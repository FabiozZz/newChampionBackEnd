import { useState } from 'react';
import { isEmpty } from '../helpers/common';

export const useInputOnObject = initialState => {
	const [state, setState] = useState(initialState);
	const handleChange = e => {
		if (e && e.target) {
			let name = e.target.name;
			let value = e.target.value;
			setState(prev => ({ ...prev, [name]: value }));
		} else if (e && e.props) {
			let name = e.props.name;
			let value = e.value;
			setState(prev => ({ ...prev, [name]: value }));
		} else if (typeof e === 'object') {
			setState(prev => ({ ...prev, ...(e && e) }));
		}
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
