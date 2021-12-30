import React, { useEffect, useRef, useState } from 'react';
import { DatePicker as Picker } from 'antd';
import moment from 'moment';
import classes from './picker.module.css';
import locale from 'antd/es/date-picker/locale/ru_RU';
import ReactDOM from 'react-dom';
// import { replaceDateforBack } from '../../../helpers/common';

const DatePicker = ({
	setValue,
	disabled = false,
	label,
	placeholder = 'Не выбрано',
	name,
	value,
	toDay,
	defaultValue = null,
	limit = false,
}) => {
	const [date, setDate] = useState(null);
	const datePickerRef = useRef(null);
	const change_date = (e, str) => {
		setDate(e);
		if (setValue && typeof setValue === 'function') {
			if (name) {
				let obj = {
					[name]: str,
				};
				setValue(obj);
			} else {
				setValue(str);
			}
		}
	};
	function someFunc(e) {
		if (e.keyCode < 47 || e.keyCode > 57) {
			e.preventDefault();
		}
		let len = e.target.value.length;
		let value = e.target.value;
		if (len !== 1 || len !== 3) {
			if (e.keyCode === 47) {
				e.preventDefault();
			}
		}
		if (len === 2) {
			value += '.';
		}
		if (len === 5) {
			value += '.';
		}
		e.target.value = value;
	}

	useEffect(() => {
		const input = ReactDOM.findDOMNode(datePickerRef.current).children[0].children[0];
		input.addEventListener('keypress', someFunc);
		input.maxLength = 10;

		return () => {
			input.removeEventListener('keypress', someFunc);
		};
	}, []);
	function disabledDate(current) {
		return current && current > moment().endOf('day');
	}

	useEffect(() => {
		if (value) setDate(moment(value));
	}, [value]);
	return (
		<>
			{label && <span className={classes.label}>{label}</span>}
			<Picker
				// defaultValue={defaultValue}
				ref={datePickerRef}
				value={date}
				onChange={change_date}
				disabled={disabled}
				disabledDate={limit && disabledDate}
				allowClear={false}
				showToday={toDay}
				suffixIcon={
					<svg
						width="16"
						height="16"
						viewBox="0 0 16 16"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M16 5.28125C16 4.23719 16 3.50678 16 3.4375C16 2.66209 15.3692 2.03125 14.5938 2.03125H14.4062V3.75C14.4062 4.00887 14.1964 4.21875 13.9375 4.21875C13.6786 4.21875 13.4688 4.00887 13.4688 3.75C13.4688 3.22378 13.4688 1.774 13.4688 1.25C13.4688 0.991125 13.2589 0.78125 13 0.78125C12.7411 0.78125 12.5312 0.991125 12.5312 1.25V2.03125H9.40625V3.75C9.40625 4.00887 9.19637 4.21875 8.9375 4.21875C8.67863 4.21875 8.46875 4.00887 8.46875 3.75C8.46875 3.22378 8.46875 1.774 8.46875 1.25C8.46875 0.991125 8.25887 0.78125 8 0.78125C7.74113 0.78125 7.53125 0.991125 7.53125 1.25V2.03125H4.40625V3.75C4.40625 4.00887 4.19637 4.21875 3.9375 4.21875C3.67863 4.21875 3.46875 4.00887 3.46875 3.75C3.46875 3.22378 3.46875 1.774 3.46875 1.25C3.46875 0.991125 3.25887 0.78125 3 0.78125C2.74113 0.78125 2.53125 0.991125 2.53125 1.25V2.03125H1.40625C0.630844 2.03125 0 2.66209 0 3.4375V5.28125H16Z"
							fill="#69707F"
						/>
						<path
							d="M0 6.21875V13.8125C0 14.5879 0.630844 15.2188 1.40625 15.2188H14.5938C15.3692 15.2188 16 14.5879 16 13.8125C16 13.6117 16 9.22463 16 6.21875C15.7083 6.21875 0.161375 6.21875 0 6.21875ZM4.5 12.7188H3.5C3.24113 12.7188 3.03125 12.5089 3.03125 12.25C3.03125 11.9911 3.24113 11.7812 3.5 11.7812H4.5C4.75887 11.7812 4.96875 11.9911 4.96875 12.25C4.96875 12.5089 4.75887 12.7188 4.5 12.7188ZM4.5 10.7188H3.5C3.24113 10.7188 3.03125 10.5089 3.03125 10.25C3.03125 9.99113 3.24113 9.78125 3.5 9.78125H4.5C4.75887 9.78125 4.96875 9.99113 4.96875 10.25C4.96875 10.5089 4.75887 10.7188 4.5 10.7188ZM4.5 8.71875H3.5C3.24113 8.71875 3.03125 8.50887 3.03125 8.25C3.03125 7.99112 3.24113 7.78125 3.5 7.78125H4.5C4.75887 7.78125 4.96875 7.99112 4.96875 8.25C4.96875 8.50887 4.75887 8.71875 4.5 8.71875ZM8.5 12.7188H7.5C7.24113 12.7188 7.03125 12.5089 7.03125 12.25C7.03125 11.9911 7.24113 11.7812 7.5 11.7812H8.5C8.75887 11.7812 8.96875 11.9911 8.96875 12.25C8.96875 12.5089 8.75887 12.7188 8.5 12.7188ZM8.5 10.7188H7.5C7.24113 10.7188 7.03125 10.5089 7.03125 10.25C7.03125 9.99113 7.24113 9.78125 7.5 9.78125H8.5C8.75887 9.78125 8.96875 9.99113 8.96875 10.25C8.96875 10.5089 8.75887 10.7188 8.5 10.7188ZM8.5 8.71875H7.5C7.24113 8.71875 7.03125 8.50887 7.03125 8.25C7.03125 7.99112 7.24113 7.78125 7.5 7.78125H8.5C8.75887 7.78125 8.96875 7.99112 8.96875 8.25C8.96875 8.50887 8.75887 8.71875 8.5 8.71875ZM12.5 12.7188H11.5C11.2411 12.7188 11.0312 12.5089 11.0312 12.25C11.0312 11.9911 11.2411 11.7812 11.5 11.7812H12.5C12.7589 11.7812 12.9688 11.9911 12.9688 12.25C12.9688 12.5089 12.7589 12.7188 12.5 12.7188ZM12.5 10.7188H11.5C11.2411 10.7188 11.0312 10.5089 11.0312 10.25C11.0312 9.99113 11.2411 9.78125 11.5 9.78125H12.5C12.7589 9.78125 12.9688 9.99113 12.9688 10.25C12.9688 10.5089 12.7589 10.7188 12.5 10.7188ZM12.5 8.71875H11.5C11.2411 8.71875 11.0312 8.50887 11.0312 8.25C11.0312 7.99112 11.2411 7.78125 11.5 7.78125H12.5C12.7589 7.78125 12.9688 7.99112 12.9688 8.25C12.9688 8.50887 12.7589 8.71875 12.5 8.71875Z"
							fill="#69707F"
						/>
					</svg>
				}
				locale={locale}
				format={'DD.MM.YYYY'}
				placeholder={placeholder}
			/>
		</>
	);
};

export default DatePicker;
