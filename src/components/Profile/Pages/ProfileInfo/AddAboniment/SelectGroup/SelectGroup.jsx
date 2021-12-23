import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import classes from './selectGroup.module.css';

/**
 * компонент для визуальзации выпадающего списка <select>
 *
 * @param label принимает строку, для отображения заголовка поля
 *
 * @param simpleClass принимает строку, установка пользовательских классов для обертки + к существующем классвм
 *
 * @returns {JSX.Element}
 * @constructor
 */
export const SelectGroup = ({
	required = false,
	name,
	value,
	setValue,
	label,
	data = {},
	disabled = false,
	...props
}) => {
	const refInput = useRef(null);

	/**
	 * локальный стейт для установки и хранения значения видимости блока с опциями
	 */
	const [toggleOptionBox, setToggleOptionBox] = useState(false);

	/**
	 * переключатлель видимости блока с опциями
	 * @param e
	 */
	const handleToggleOptionBox = e => {
		e.preventDefault();
		setToggleOptionBox(prevState => !prevState);
	};

	/**
	 * событие смены значения инпута, берется из значений <option>
	 * @param e
	 */
	const handleChangeValue = e => {
		// setValue(e, valueInput);
	};

	/**
	 * ссылка на весь компонент
	 * @type {React.MutableRefObject<null>}
	 */
	const selectRef = useRef(null);

	/**
	 * ссылка на окно с опциями
	 * @type {React.MutableRefObject<null>}
	 */
	const optionBox = useRef(null);

	/**
	 * еффект следит за положением выподающего списка с опциями, эсли он уходит с экрана,
	 * добовляет отступ чтобы список оставался видимым полностью
	 */
	useEffect(() => {
		if (optionBox.current != null) {
			if (optionBox.current.getBoundingClientRect().right > window.innerWidth) {
				optionBox.current.style.left =
					window.innerWidth - optionBox.current.getBoundingClientRect().right - 10 + 'px';
			}
		}
	}, [toggleOptionBox]);

	/**
	 * при монтировании компонента добовляет событие клика для компонента
	 *
	 * если есть блок с выбором опций, и клик произошел не на его дочерних элементах
	 * а так же если есть общее поле селекта и клик произошел не на нем,
	 * сворачивается окно с опциями
	 *
	 * при размонтировании компонента удаляется событие
	 */
	useEffect(() => {
		const onClick = e => {
			if (
				optionBox.current &&
				!optionBox.current.contains(e.target) &&
				selectRef.current &&
				!selectRef.current.contains(e.target)
			) {
				setToggleOptionBox(false);
			}
		};
		document.addEventListener('click', onClick);
		return () => document.removeEventListener('click', onClick);
	}, []);

	// const renderOption = data.map((item,index)=> (<div key={item.id}>
	//     <h3 className={classes.optionBox__title}>{item.name}</h3>
	//     {item.course.map((option,index)=><option key={option.id} onClick={(e)=> {
	//         setValueInput(e);
	//         setValue({id:option.id,name:option.name});
	//         setToggleOptionBox(false);
	//     }} value={option.name} className={classes.optionBox__item}>{option.name}</option>)}
	// </div>));
	const renderOption = data.map((item, index) => (
		<div key={item.id}>
			<option
				onClick={e => {
					setValue({ ...item });
					setToggleOptionBox(false);
				}}
				className={classes.optionBox__item}>
				{item.name}
			</option>
		</div>
	));
	let disabledClass = disabled ? classes.disabled : classes.inputWrapper;

	return (
		<div
			ref={selectRef}
			className={`${classes.selectBoxWrapper} ${props.className}`}
			{...props}>
			<label className={`${classes.label}`}>{label}</label>
			<div className={disabledClass} onClick={!disabled && handleToggleOptionBox}>
				<svg
					className={classes.arrow}
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
				<span />
				<input
					readOnly={true}
					required={required}
					ref={refInput}
					name={name}
					className={classes.input}
					value={value.name || ''}
					onClick={handleChangeValue}
					disabled={disabled}
					type="text"
					placeholder={props.placeholder || 'Не выбрано'}
				/>
				{toggleOptionBox && <div className={classes.arrowOptionBox} />}
			</div>
			{toggleOptionBox && (
				<div ref={optionBox} className={classes.optionBox}>
					{renderOption}
				</div>
			)}
		</div>
	);
};

SelectGroup.defaultProps = {
	label: '',
	style: {},
};

SelectGroup.propTypes = {
	label: PropTypes.string,
	style: PropTypes.object,
};
