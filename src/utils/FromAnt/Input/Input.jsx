import React, { useEffect, useMemo, useState } from 'react';
import { Input as Text } from 'antd';
import classes from './input.module.css';
import cn from 'classnames';

const { TextArea } = Text;
const Input = ({
	label = '',
	placeholder = 'Не заполнено',
	disabled = false,
	error,
	value,
	setValue,
	name,
	type,
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
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [value]);
	return (
		<div style={{ position: 'relative' }}>
			<span className={classes.label}>{label}</span>
			{type === 'textarea' ? (
				<TextArea
					name={name}
					{...props}
					style={errorInput}
					value={input}
					className={cn({ [classes.error]: error })}
					placeholder={placeholder}
					disabled={disabled}
					onChange={change}
				/>
			) : (
				<Text
					name={name}
					{...props}
					type={type}
					style={errorInput}
					value={input}
					className={cn({ [classes.error]: error })}
					placeholder={placeholder}
					disabled={disabled}
					onChange={change}
				/>
			)}
			{error && <span className={'form-fail'}>{error}</span>}
		</div>
	);
};

export default Input;
