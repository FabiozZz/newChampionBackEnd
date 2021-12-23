import React, { useEffect, useRef, useState } from 'react';
import './datapicker.css';
import calendar from '../../assets/images/calendar.svg';
import InputMask from 'react-input-mask';
import { leapYear, renderTable } from '../../helpers/DataPicker/dataPicker';
import PropTypes from 'prop-types';
import classes from './dataPicker.module.css';

/**
 * визуализация <input type="text"> с появлением внешнего окна для выбора даты
 *
 * @param value
 * @param setValue
 * @param name
 * @param style объект стилей применяемый к корневому элементу
 *
 * @param label принимает строку, подпись над компонентом
 *
 * @param disabled булевое значение, выключатель компонента
 *
 * @param simpleClass строка, классы для компонента
 *
 * @param required
 * @returns {JSX.Element}
 * @constructor
 */
export const DataPicker = ({
	value,
	setValue,
	name = '',
	style = {},
	label = '',
	disabled = false,
	simpleClass = '',
	required = false,
}) => {
	let windowWidth = window.innerWidth;
	let date = new Date();
	/**
	 * локальный стейт для отображения календаря
	 */
	const [activeDate, setActiveDay] = useState({
		currentDay: 1,
		currentYear: date.getFullYear(),
		currentMonth: date.getMonth(),
		currentDayWeek: date.getDay(),
	});

	/**
	 * деструктуризация локального стейта
	 */
	const { currentMonth, currentYear, currentDay } = activeDate;

	// /**
	//  * установка значения в поле <input>
	//  */
	// const [userData, setUserData] = useState('');

	/**
	 * стейт для переключения календаря
	 */
	const [toggleIcon, setToggleIcon] = useState(false);

	/**
	 * ссылка для инпута
	 * @type {React.MutableRefObject<null>}
	 */
	const inputRef = useRef(null);

	/**
	 * ссылка для иконки
	 * @type {React.MutableRefObject<null>}
	 */
	const iconRef = useRef(null);

	/**
	 * ссылка для обертки календаря
	 * @type {React.MutableRefObject<null>}
	 */
	const calendarWrapper = useRef(null);

	/**
	 * переключатель месяца в большую сторону
	 * @param e
	 */
	const handleNextMonth = e => {
		e.preventDefault();
		currentMonth + 1 > 11
			? setActiveDay({ ...activeDate, currentMonth: 0, currentYear: currentYear + 1 })
			: setActiveDay({ ...activeDate, currentMonth: currentMonth + 1 });
	};
	/**
	 * переключатель месяца в меньшую сторону
	 * @param e
	 */
	const handlePrevMonth = e => {
		e.preventDefault();
		currentMonth - 1 < 0
			? setActiveDay({ ...activeDate, currentMonth: 11, currentYear: currentYear - 1 })
			: setActiveDay({ ...activeDate, currentMonth: currentMonth - 1 });
	};

	/**
	 * переключатель года в большую сторону
	 * @param e
	 */
	const handleNextYear = e => {
		e.preventDefault();
		setActiveDay({ ...activeDate, currentYear: currentYear + 1 });
	};
	/**
	 * переключатель года в меньшую сторону
	 * @param e
	 */
	const handlePrevYear = e => {
		e.preventDefault();
		setActiveDay({ ...activeDate, currentYear: currentYear - 1 });
	};

	useEffect(() => {
		if (calendarWrapper.current != null) {
			if (calendarWrapper.current.getBoundingClientRect().right > windowWidth) {
				calendarWrapper.current.style.left =
					windowWidth - calendarWrapper.current.getBoundingClientRect().right - 10 + 'px';
				console.log(calendarWrapper.current.style.left);
			}
		}
	}, [toggleIcon, windowWidth]);

	/**
	 * переключатель календаря для клика по иконке
	 * @param e
	 */
	const handleToggleIconCalendar = e => {
		if (!disabled) {
			e.preventDefault();
			setToggleIcon(!toggleIcon);
			// if (userData !== '') {
			//     let newActiveDay = userData.split('.');
			//     setActiveDay({
			//         ...activeDate,
			//         currentDay: Number(newActiveDay[0]) < 32 ? Number(newActiveDay[0]) : currentDay,
			//         currentMonth: Number(newActiveDay[1]) < 13 ? Number(newActiveDay[1] - 1) : activeDate.currentMonth,
			//         currentYear: Number(newActiveDay[2])
			//     })
			// }
		}
	};

	/**
	 * функция для установки значения в поле инпут
	 * @param e
	 */
	const handleChangeInputDate = e => {
		// eslint-disable-next-line no-unused-vars
		let symbol = e.target.value;
		// setUserData(symbol);
		// setValue(symbol);
		setValue(inputRef.current);
	};

	/**
	 * установка дня при клике на календаре числа,
	 * установка значения для <input/> используя стейт календаря
	 * @param e
	 */
	const handleChangeDataPicker = e => {
		let symbol = e.target.textContent;
		setActiveDay({ ...activeDate, currentDay: symbol });
		// setUserData(((symbol < 10) ? '0' + symbol : symbol) + '.' + ((currentMonth + 1) < 10 ? '0' + (currentMonth + 1) : currentMonth + 1) + '.' + currentYear);
		// setValue(((symbol < 10) ? '0' + symbol : symbol) + '.' + ((currentMonth + 1) < 10 ? '0' + (currentMonth + 1) : currentMonth + 1) + '.' + currentYear);
		setValue(inputRef.current);
	};

	/**
	 * массив с кратким наименованием дней недели
	 * @type {string[]}
	 */
	const dayOfTheWeek = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

	/**
	 * массив с наименованием месяцев
	 * @type {string[]}
	 */
	const month = [
		'Январь',
		'Февраль',
		'Март',
		'Апрель',
		'Май',
		'Июнь',
		'Июль',
		'Август',
		'Сентябрь',
		'Октябрь',
		'Ноябрь',
		'Декабрь',
	];

	/**
	 * массив с максимальным колличеством дней для каждого месяца
	 * @type {number[]}
	 */
	const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

	/**
	 * в зависимости от того какой месяц сейчас записан в стейт,
	 * берет максимальное колличество дней для этого месяца
	 * @type {number}
	 */
	let maxDays = days[currentMonth];

	/**
	 * проверка на високосный год, если выбран февраль, и год високосный ->
	 * прибавляет к максимальному колличеству дней еще один
	 */
	if (leapYear(currentYear)) {
		maxDays++;
	}

	/**
	 * установка прослушивания клика на документ,
	 * если клик пришелся вне компонента переключает состояние видимости календаря
	 * после размонтирования документа прослушивание удаляется
	 */
	useEffect(() => {
		const onClick = e => {
			if (calendarWrapper.current && !calendarWrapper.current.contains(e.target)) {
				setToggleIcon(false);
			}
			if (iconRef.current && iconRef.current.contains(e.target)) {
				setToggleIcon(true);
			}
		};
		document.addEventListener('click', onClick);
		return () => document.removeEventListener('click', onClick);
	}, []);

	/**
	 * получение первого дня недели выбранного года и месяца для корректного отображения календаря
	 * @type {number}
	 */
	const firstDayMonth = new Date(currentYear, currentMonth, 0).getDay();

	/**
	 * отрисовка самого календаря используя helper
	 */
	let table = renderTable(
		maxDays,
		firstDayMonth,
		handleChangeDataPicker,
		currentDay,
		classes.activeItemTd
	);
	return (
		<div style={style} className={` ${simpleClass}`}>
			{/* обертка инпута */}
			{/*`dataPicker-wrapper`*/}
			<div className={classes.dataPicker_wrapper}>
				{/*'dataPicker-wrapper__inputWrapper__label'*/}
				<label className={classes.dataPicker_wrapper__label}>{label}</label>
				{/*dataPicker-wrapper__inputWrapper*/}
				<div className={classes.dataPicker_wrapper__input_wrapper}>
					{/*dataPicker-wrapper__inputWrapper__after*/}
					<label className={classes.dataPicker_wrapper__after}>
						<InputMask
							ref={inputRef}
							name={name}
							mask="99.99.9999"
							disabled={disabled}
							placeholder={'Не указано'}
							onChange={handleChangeInputDate}
							value={value}
							required={required}
						/>
						<img
							ref={iconRef}
							src={calendar}
							alt="calendar"
							onClick={handleToggleIconCalendar}
						/>
					</label>
				</div>

				{/* обертка календаря */}

				{toggleIcon && (
					//    dataPicker-wrapper__calendar
					<div ref={calendarWrapper} className={classes.dataPicker_wrapper__calendar}>
						{/*'dataPicker-wrapper__calendar__change'*/}
						<div className={classes.dataPicker_wrapper__calendar__change}>
							{/*'dataPicker-wrapper__calendar__change__wrapper'*/}
							<div className={classes.dataPicker_wrapper__calendar__change__wrapper}>
								<div
									className={classes.dataPicker_wrapper__calendar__change__wrapper__prev}
									onClick={handlePrevMonth}
								/>
								<span>{month[currentMonth]}</span>
								{/*'dataPicker-wrapper__calendar__change__wrapper__next'*/}
								<div
									className={classes.dataPicker_wrapper__calendar__change__wrapper__next}
									onClick={handleNextMonth}
								/>
							</div>
							{/*'dataPicker-wrapper__calendar__change__wrapper'*/}
							<div className={classes.dataPicker_wrapper__calendar__change__wrapper}>
								{/*'dataPicker-wrapper__calendar__change__wrapper__prev'*/}
								<div
									className={classes.dataPicker_wrapper__calendar__change__wrapper__prev}
									onClick={handlePrevYear}
								/>
								<span>{currentYear}</span>
								{/*'dataPicker-wrapper__calendar__change__wrapper__next'*/}
								<div
									className={classes.dataPicker_wrapper__calendar__change__wrapper__next}
									onClick={handleNextYear}
								/>
							</div>
						</div>
						{/*'dataPicker-wrapper__calendar__date'*/}
						<div className={classes.dataPicker_wrapper__calendar__date}>
							<table>
								<thead>
									<tr>
										{dayOfTheWeek.map((el, index) => (
											<th key={index}>{el}</th>
										))}
									</tr>
								</thead>
								<tbody>
									<tr className={classes.separate} />
									{table}
								</tbody>
							</table>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};
DataPicker.defaultProps = {
	style: {},
	label: '',
	disabled: false,
	simpleClass: '',
};

DataPicker.propTypes = {
	style: PropTypes.object,
	label: PropTypes.string,
	disabled: PropTypes.bool,
	simpleClass: PropTypes.string,
};
