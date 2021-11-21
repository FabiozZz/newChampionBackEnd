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
	showSearch = false,
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

	const addProperties = showSearch
		? {
				showSearch: true,
				filterOption: (input, option) =>
					option.children && option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0,
		  }
		: { showSearch: false };

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
		<div style={{ width: '100%' }}>
			{label && <span className={classes.label}>{label}</span>}
			<S
				{...props}
				suffixIcon={() => (
					<svg width="12" height="7" viewBox="0 0 12 7" fill="none">
						<path
							d="M1.66437 0.252601C1.25159 -0.114317 0.619519 -0.0771359 0.252601 0.335647C-0.114317 0.74843 -0.0771359 1.3805 0.335647 1.74742L4.83565 5.74742C5.21453 6.08421 5.78549 6.08421 6.16437 5.74742L10.6644 1.74742C11.0772 1.3805 11.1143 0.74843 10.7474 0.335647C10.3805 -0.0771359 9.74843 -0.114317 9.33565 0.252601L5.50001 3.66206L1.66437 0.252601Z"
							fill="#BFC5D2"
						/>
					</svg>
				)}
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
				{...addProperties}
				// dropdownAlign={ }
				onChange={handleChange}>
				{data && renderList}
			</S>
			{error && <span className={'form-fail'}>{error}</span>}
		</div>
	);
};

export default Select;
