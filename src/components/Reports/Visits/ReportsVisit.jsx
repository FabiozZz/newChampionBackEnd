import React, { useState } from 'react';
import DatePickerRange from '../../../utils/FromAnt/DatePickerRange/DatePickerRange';
import { isEmpty } from '../../../helpers/common';
import DatePicker from '../../../utils/FromAnt/DatePicker/DatePicker';
import Input from '../../../utils/FromAnt/Input/Input';
import { Checkbox, Dropdown, Menu } from 'antd';
import Select from '../../../utils/FromAnt/Select/Select';
import { useInputOnObject } from '../../../hooks';

const couches = [
	{ id: 1, last_name: 'Gro', middle_name: 'sfgas', first_name: 'Bar' },
	{ id: 2, last_name: 'Bro', middle_name: 'ghdfg', first_name: 'Bar' },
	{ id: 3, last_name: 'Fro', middle_name: 'as', first_name: 'Bar' },
	{ id: 4, last_name: 'Dro', middle_name: 'o', first_name: 'Bar' },
	{ id: 5, last_name: 'GFT', middle_name: 'Fo', first_name: 'Bar' },
	{ id: 6, last_name: ':LA', middle_name: 'oo', first_name: 'Bar' },
];

const menuField = [
	{ value: 'all', title: 'Все посещения' },
	{ value: 'train_visit', title: 'Посещено тренировок' },
	{ value: 'train_out', title: 'Пропущено тренировок' },
	{ value: 'train_freeze', title: 'Заморожено тренировок' },
	{ value: 'train_personal', title: 'Персональных тренировок' },
];

export const ReportsVisit = () => {
	const checkboxes = useInputOnObject({});
	const [visible, setVisible] = useState(false);
	// const onclick = e => {
	// 	console.log(menuField.find(item => item.value === e.target.value && item));
	// 	console.log(menuField);
	// 	setfilter([...filtert, menuField.find(item => item.value === e.target.value && item)]);
	// };
	const menu = menuField && menuField.length && (
		<Menu className={'styled-dropdown'}>
			{menuField.map(item => (
				<React.Fragment key={item.value}>
					<Menu.Item>
						<Checkbox name={item.value}>{item.title}</Checkbox>
					</Menu.Item>
				</React.Fragment>
			))}
		</Menu>
	);
	const handleChange = flag => {
		setVisible(flag);
	};
	console.log(checkboxes.state);
	return (
		<div style={{ width: 300 }}>
			<Dropdown
				overlay={menu}
				onVisibleChange={handleChange}
				visible={visible}
				trigger={['click']}
				placement="bottomRight">
				{/*<span>some</span>*/}
				<Select
					// value={
					// 	filtert.length && filtert.length <= 1 && filtert.length > 0
					// 		? filtert[0].title
					// 		: filtert.length > 1
					// 		? 'выбрано ' + filtert.length
					// 		: 'не выбрано'
					// }
					open={false}
					options={null}
				/>
			</Dropdown>
			{/*{filtert}*/}
			<style jsx scoped={true}>{`
				.ant-checkbox-wrapper:hover .ant-checkbox-inner,
				.ant-checkbox:hover .ant-checkbox-inner,
				.ant-checkbox-input:focus + .ant-checkbox-inner {
					border-color: #43bf41;
				}
				.ant-checkbox-checked .ant-checkbox-inner {
					border-color: #43bf41;
					background: transparent;
				}
				.ant-checkbox .ant-checkbox-checked {
				}
				.ant-checkbox-checked .ant-checkbox-inner::after {
					position: absolute;
					display: table;
					border: 2px solid #43bf41;
					border-top-color: #43bf41;
					border-top-style: solid;
					border-top-width: 2px;
					border-left-color: #43bf41;
					border-left-style: solid;
					border-left-width: 2px;
					border-top: 0;
					border-left: 0;
					transform: rotate(45deg) scale(1) translate(-50%, -50%);
					opacity: 1;
					transition: all 0.2s cubic-bezier(0.12, 0.4, 0.29, 1.46) 0.1s;
					content: ' ';
				}
				.ant-checkbox-checked::after {
					content: '';
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					border: 1px solid #43bf41;
					border-radius: 2px;
					animation: antCheckboxEffect 0.36s ease-in-out;
					animation-fill-mode: none;
				}
				.styled-dropdown {
					border-radius: 5px;
					padding-top: 24px !important;
					padding-bottom: 24px !important;
				}
				.styled-dropdown li {
					padding-left: 24px !important;
					padding-right: 24px !important;
				}
				.styled-dropdown li:nth-child(1n + 2) {
					//padding-left: 44px !important;
				}
			`}</style>
		</div>
	);
};
