import React, { useEffect, useMemo, useState } from 'react';
import { Select as S } from 'antd';
import classes from './select.module.css';
import { log_out } from '../../../store/Actions/userActions';
const { Option } = S;

const Select = ({
	value,
	setValue,
	data,
	field,
	label,
	placeholder = 'Не выбран',
	disabled = false,
	error,
	name,
	...props
}) => {
	const [select, setSelect] = useState(null);
	function handleChange(item) {
		setSelect(item);
		if (setValue && typeof setValue === 'function') {
			if (name) {
				let obj = {
					[name]: item,
				};
				setValue(obj);
			} else {
				setValue(item);
			}
		}
	}
	const renderList =
		data &&
		data.map(item => {
			let renderList =
				field === 'object'
					? field.reduce((acc, some) => (acc += `${item[some]} `), '').trim()
					: item[field];
			return (
				<Option
					key={item.id}
					selected={value === item.id}
					style={{ minWidth: '100%' }}
					value={item.id}>
					{renderList}
				</Option>
			);
		});
	const errorInput = useMemo(() => {
		if (error) {
			return {
				boxShadow: '0 0 3px 0px red',
				borderRadius: 2,
			};
		}
		return {};
	}, [error]);

	useEffect(() => {
		console.log(value);
		if (value) {
			setSelect(value);
		}
	}, [value]);
	return (
		<>
			{label && <span className={classes.label}>{label}</span>}
			<S
				{...props}
				dropdownStyle={{ zIndex: 99999999999 }}
				dropdownMatchSelectWidth={false}
				disabled={disabled}
				listItemHeight={10}
				listHeight={250}
				value={select}
				style={{
					width: '100%',
					...errorInput,
				}}
				placeholder={placeholder}
				// dropdownAlign={ }
				onChange={handleChange}>
				{data && renderList}
			</S>
			{error && <span className={'form-fail'}>{error}</span>}
		</>
	);
};

export default Select;
