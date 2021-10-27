import React, { useState } from 'react';
import DatePickerRange from '../../../utils/FromAnt/DatePickerRange/DatePickerRange';
import { Select } from 'antd';
import { isEmpty } from '../../../helpers/common';
import DatePicker from '../../../utils/FromAnt/DatePicker/DatePicker';
const { Option } = Select;

export const ReportsVisit = () => {
	function handleChange(value) {
		alert(`selected ${value}`);
	}

	const [date, setDate] = useState(null);
	const someFunc = e => {
		setDate(e);
	};
	const [date1, setDate1] = useState(null);
	const someFunc1 = e => {
		setDate1(e);
	};
	return (
		<div style={{ width: 300 }}>
			<DatePicker setValue={someFunc1} />
			<DatePickerRange setValue={someFunc} />
			<Select
				listItemHeight={10}
				listHeight={250}
				style={{ width: '100%' }}
				placeholder={'Не выбрано'}
				onChange={handleChange}>
				<Option value={1}>sosssssssssssssssssssssssssssssme</Option>
				<Option value={2}>some2</Option>
				<Option value={3}>some3</Option>
				<Option value={3}>some3</Option>
				<Option value={3}>some3</Option>
				<Option value={3}>some3</Option>
				<Option value={3}>some3</Option>
				<Option value={3}>some3</Option>
				<Option value={3}>some3</Option>
				<Option value={3}>some3</Option>
				<Option value={3}>some3</Option>
			</Select>
			{date && date.from && date.to && `${date.from} - ${date.to}`}
			{date1 && date1}
		</div>
	);
};
