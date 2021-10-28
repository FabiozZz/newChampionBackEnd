import React, { useEffect, useMemo, useState } from 'react';
import { Input as Text } from 'antd';
import classes from './input.module.css';
import cn from 'classnames';

const Input = ({
	label = '',
	placeholder = 'Не заполнено',
	disabled = false,
	error,
	value,
	setValue,
	name,
	// type,
	...props
}) => {
	const [input, setInput] = useState('');

	const errorInput = useMemo(() => {
		if (error) {
			return {
				boxShadow: '0 0 3px 0px red',
				borderRadius: 2,
			};
		}
		return {};
	}, [error]);
	const [oneLoad, setOneLoad] = useState(true);

	const change = e => {
		let value = e.target.value;
		// if (type && type === 'number') {
		// 	value = value.replace(/\w/g, '');
		// }
		setInput(value);
		if (setValue && typeof setValue === 'function') {
			setValue(e);
		}
	};
	useEffect(() => {
		if (value && oneLoad) {
			setInput(value);
			setOneLoad(false);
		}
	}, []);
	return (
		<div style={{ position: 'relative' }}>
			<span className={classes.label}>{label}</span>
			<Text
				name={name}
				{...props}
				style={errorInput}
				value={input}
				className={cn({ [classes.error]: error })}
				placeholder={placeholder}
				disabled={disabled}
				onChange={change}
			/>
			{error && <span className={'form-fail'}>{error}</span>}
		</div>
	);
};

export default Input;
