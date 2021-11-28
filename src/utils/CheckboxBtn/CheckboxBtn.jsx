import React from 'react';
import './checkbox.css';
import PropTypes from 'prop-types';

/**
 * компонент для визуализации <input type="checkbox">,
 * принемает булевое значение и функцию которая срабатывает при клике
 *
 * @param disabled булевое значение, отвечает за активность компонента
 *
 * @param name имя для input
 *
 * @param setIsChecked функция-коллбек для переключения внешнего и внутреннего состояния компонента
 *
 * @param isChecked булевое значение для визуализации компонента
 *
 * @returns {JSX.Element}
 * @constructor
 */
export const CheckboxBtn = ({ disabled = false, name = '', setIsChecked, isChecked = false }) => {
	/**
	 * при disabled = true возвращает разметку показывая что кнопка не активно и выключает <input>
	 * @type {JSX.Element}
	 */
	let disabledBox = disabled ? (
		<div className={'checkboxDisabled'} />
	) : isChecked ? (
		<div className={'checkbox-wrapper'}>
			<div className={'checkCheckBox'} />
		</div>
	) : (
		<div className={'checkbox-nonDisabled'} />
	);

	return (
		<label className={'checkbox-app'}>
			{disabledBox}
			<input
				disabled={disabled}
				onChange={setIsChecked}
				name={name}
				value={isChecked ? 1 : 0}
				type="checkbox"
			/>
		</label>
	);
};

CheckboxBtn.defaultProps = {
	disabled: false,
	name: '',
};

CheckboxBtn.propTypes = {
	disabled: PropTypes.bool,
	name: PropTypes.string,
	setIsChecked: PropTypes.func,
	isChecked: PropTypes.bool.isRequired,
};
