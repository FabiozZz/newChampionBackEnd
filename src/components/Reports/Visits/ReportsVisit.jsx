import React, { useState } from 'react';
import DatePickerRange from '../../../utils/FromAnt/DatePickerRange/DatePickerRange';
import { isEmpty } from '../../../helpers/common';
import DatePicker from '../../../utils/FromAnt/DatePicker/DatePicker';
import Select from '../../../utils/FromAnt/Select/Select';
import Input from '../../../utils/FromAnt/Input/Input';

const couches = [
	{ id: 1, last_name: 'Gro', middle_name: 'sfgas', first_name: 'Bar' },
	{ id: 2, last_name: 'Bro', middle_name: 'ghdfg', first_name: 'Bar' },
	{ id: 3, last_name: 'Fro', middle_name: 'as', first_name: 'Bar' },
	{ id: 4, last_name: 'Dro', middle_name: 'o', first_name: 'Bar' },
	{ id: 5, last_name: 'GFT', middle_name: 'Fo', first_name: 'Bar' },
	{ id: 6, last_name: ':LA', middle_name: 'oo', first_name: 'Bar' },
];

export const ReportsVisit = () => {
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
			<DatePicker label={'some'} setValue={someFunc1} />
			<DatePickerRange label={'Выберите период'} setValue={someFunc} />
			<Select data={couches} field={['last_name', 'first_name', 'middle_name']} />
			<Input />
			{date && date.from && date.to && `${date.from} - ${date.to}`}
			{date1 && date1}
		</div>
	);
};
