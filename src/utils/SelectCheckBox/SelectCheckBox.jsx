import React, { useEffect, useState } from 'react';
import classes from 'utils/SelectCheckBox/select.module.css';
import { CheckboxBtn } from 'utils/CheckboxBtn/CheckboxBtn';
import { Checkbox, Empty } from 'antd';
import { isEmpty } from 'helpers/common';

export const SelectCheckBox = ({ name, label, click, data = {} }) => {
	const [keys, setKeys] = useState(!isEmpty(data) && Object.keys(data));
	const [values, setValues] = useState(!isEmpty(data) && Object.values(data));
	const [count, setCount] = useState(0);
	const [render_checkbox, setRender] = useState([]);
	console.log(render_checkbox);
	useEffect(() => {
		if (keys.length) {
			setRender(keys.map((item, index) => ({ name: item, value: values[index] })));
		}
		if (!isEmpty(data)) {
			let temp_count = 0;
			for (let item in data) {
				if (data[item].value) {
					++temp_count;
				}
			}
			setCount(() => temp_count);
		}
	}, [data, keys, values]);
	const find_value = obj => {
		for (const objKey in obj) {
			if (obj[objKey].value) {
				return obj[objKey].label;
			}
		}
		return false;
	};
	// const setIsChecked = () => {
	//
	// };
	return (
		<>
			<div className={classes.wrapper}>
				{label && <span className={classes.label}>{label}</span>}
				<details>
					<summary>
						<p>
							{count > 0 && count < 2 ? (
								find_value(data)
							) : count >= 2 ? (
								<span>
									Выбрано: <span className={classes.boll}>{count}</span>
								</span>
							) : (
								'Не выбрано'
							)}
						</p>{' '}
						<svg
							width="11"
							height="6"
							viewBox="0 0 11 6"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M1.66437 0.252601C1.25159 -0.114317 0.619519 -0.0771359 0.252601 0.335647C-0.114317 0.74843 -0.0771359 1.3805 0.335647 1.74742L4.83565 5.74742C5.21453 6.08421 5.78549 6.08421 6.16437 5.74742L10.6644 1.74742C11.0772 1.3805 11.1143 0.74843 10.7474 0.335647C10.3805 -0.0771359 9.74843 -0.114317 9.33565 0.252601L5.50001 3.66206L1.66437 0.252601Z"
								fill="#BFC5D2"
							/>
						</svg>
					</summary>
					<div className={classes.list}>
						{!!render_checkbox.length ? (
							render_checkbox.map((_, index) => (
								<div className={classes.item} key={index}>
									<Checkbox
										name={_.name}
										onClick={e => {
											click(e);
										}}>
										{_.value.label}
									</Checkbox>
								</div>
							))
						) : (
							<Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
						)}
						{/*<p className={classes.item} onClick={click}>*/}
						{/*	<CheckboxBtn name={name} isChecked={check} />*/}
						{/*	<span>some</span>*/}
						{/*</p>*/}
						{/*<p className={classes.item} onClick={click}>*/}
						{/*	<CheckboxBtn name={name} isChecked={check} />*/}
						{/*	<span>some</span>*/}
						{/*</p>*/}
						{/*<p className={classes.item} onClick={click}>*/}
						{/*	<CheckboxBtn name={name} isChecked={check} />*/}
						{/*	<span>some</span>*/}
						{/*</p>*/}
						{/*<p className={classes.item} onClick={click}>*/}
						{/*	<CheckboxBtn name={name} isChecked={check} />*/}
						{/*	<span>some</span>*/}
						{/*</p>*/}
						{/*<p className={classes.item} onClick={click}>*/}
						{/*	<CheckboxBtn name={name} isChecked={check} />*/}
						{/*	<span>some</span>*/}
						{/*</p>*/}
						{/*<p className={classes.item} onClick={click}>*/}
						{/*	<CheckboxBtn name={name} isChecked={check} />*/}
						{/*	<span>some</span>*/}
						{/*</p>*/}
						{/*<p className={classes.item} onClick={click}>*/}
						{/*	<CheckboxBtn name={name} isChecked={check} />*/}
						{/*	<span>some</span>*/}
						{/*</p>*/}
						{/*<p className={classes.item} onClick={click}>*/}
						{/*	<CheckboxBtn name={name} isChecked={check} />*/}
						{/*	<span>some</span>*/}
						{/*</p>*/}
						{/*<p className={classes.item} onClick={click}>*/}
						{/*	<CheckboxBtn name={name} isChecked={check} />*/}
						{/*	<span>some</span>*/}
						{/*</p>*/}
						{/*<p className={classes.item} onClick={click}>*/}
						{/*	<CheckboxBtn name={name} isChecked={check} />*/}
						{/*	<span>some</span>*/}
						{/*</p>*/}
						{/*<p className={classes.item} onClick={click}>*/}
						{/*	<CheckboxBtn name={name} isChecked={check} />*/}
						{/*	<span>some</span>*/}
						{/*</p>*/}
						{/*<p className={classes.item} onClick={click}>*/}
						{/*	<CheckboxBtn name={name} isChecked={check} />*/}
						{/*	<span>some</span>*/}
						{/*</p>*/}
					</div>
				</details>
			</div>
		</>
	);
};
// {/*<style jsx>{`*/}
// {/*	details {*/}
// {/*		background: transparent;*/}
// {/*	}*/}
//
// {/*	details summary {*/}
// {/*		*/}
// {/*		*/}
// {/*		*/}
// {/*		*/}
// {/*		*/}
// {/*		*/}
// {/*		*/}
// {/*		*/}
// {/*		*/}
// {/*		*/}
// {/*		*/}
// {/*		*/}
// {/*		*/}
// {/*		*/}
// {/*		*/}
// {/*	}*/}
//
// {/*	details summary {*/}
// {/*		//width: fit-content; /* блок раскрывается при щелчке по кнопке, а не по всей строке */*/}
// 	{/*		outline-style: none; /* удалить обводку при фокусе */*/}
// 		{/*		cursor: pointer;*/}
// 		{/*	}*/}
//
// 		{/*	details summary::-webkit-details-marker {*/}
// 		{/*		/* нестандартный псевдоэлемент Google Chrome */*/}
// 			{/*		display: none;*/}
// 			{/*	}*/}
// 			{/*`}</style>*/}
