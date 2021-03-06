import React, {useEffect, useRef, useState} from 'react';
// import './dataPickerRange.css';
import calendar from '../../assets/images/calendar.svg';
import InputMask from 'react-input-mask';
import {leapYear, renderTableRange} from "../../helpers/DataPicker/dataPicker";
import PropTypes from "prop-types";
import classes from './dataPickerRange.module.css';

/**
 * визуализация <DataPickerRange/> с появлением внешнего окна для выбора даты
 *
 * @example
 * ```
 * import React, {useState} from 'react';
 *
 * export const Foo = () =>{
 *
 *      const {data,setData} = useState({from:'',to:{}});
 *
 *      const handleChangeDataFrom = (some)=>{
 *          setData(prevState =>({...prevState,from:some}))
 *      }
 *
 *      const handleChangeDataTo = (some)=>{
 *          setData(prevState =>({...prevState,to:some}))
 *      }
 *
 *      return (
 *          <DataPickerRange value={data} setValueFrom={handleChangeDataFrom} setValueTo={handleChangeDataTo}/>
 *      )
 *
 * }
 * ```
 * @param {object} value - объект должен содержать внутриннее поля {from,to}
 * @param {function} setValueFrom - функция устанавливает новые значения в value.from
 * @param {function} setValueTo - функция устанавливает новые значения в value.to
 * @param {object} style - объект стилей применяемый к корневому элементу
 *
 * @param {string} label - принимает строку, подпись над компонентом
 *
 * @param {boolean} disabled - булевое значение, выключатель компонента
 *
 * @param {any} props - пропсы которые будут применяться к контайенеру DataPickerRange
 * @returns {JSX.Element}
 * @constructor
 */
export const DataPickerRange = ({
                                    value,
                                    setValueFrom,
                                    setValueTo,
                                    style = {},
                                    label = '',
                                    disabled = false,
                                    ...props
                                }) => {
    let windowWidth = window.innerWidth;

    let date = new Date();

    /**
     * локальный стейт для отображения календаря
     */
    const [fromDate, setFromDay] = useState({
        fromDay: undefined,
        fromYear: date.getFullYear(),
        fromMonth: date.getMonth(),
        fromDayWeek: date.getDay(),
        fromSelect: ''
    });
    const [toDate, setToDay] = useState({
        toDay: undefined,
        toYear: date.getFullYear(),
        toMonth: date.getMonth(),
        toDayWeek: date.getDay(),
        toSelect: ''
    });

    const [click, setClick] = useState(true);
    /**
     * деструктуризация локального стейта
     */
    const {fromMonth, fromYear, fromDay, fromSelect} = fromDate;
    const {toMonth, toYear, toDay, toSelect} = toDate;


    /**
     * установка значения в поле <input>
     */
    const [fromData, setFromData] = useState('');
    const [toData, setToData] = useState('');

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
     * ссылка для контейнера календаря
     * @type {React.MutableRefObject<null>}
     */
    const calendarWrapper = useRef(null);

    /**
     * переключатель месяца в большую сторону
     */
    const handleNextMonth = () => {
        click ? handleNextMonthFrom() : handleNextMonthTo();
    };

    const handleNextMonthFrom = () => {
        fromMonth + 1 > 11 ?
            setFromDay({...fromDate, fromMonth: 0, fromYear: fromYear + 1}) :
            setFromDay({...fromDate, fromMonth: fromMonth + 1});
    };

    const handleNextMonthTo = () => {
        toMonth + 1 > 11 ?
            setToDay({...toDate, toMonth: 0, toYear: toYear + 1}) :
            setToDay({...toDate, toMonth: toMonth + 1});
    };

    /**
     * переключатель месяца в меньшую сторону
     */
    const handlePrevMonth = () => {
        click ? handlePrevMonthFrom() : handlePrevMonthTo()
    };
    const handlePrevMonthFrom = () => {
        fromMonth - 1 < 0 ?
            setFromDay({...fromDate, fromMonth: 11, fromYear: fromYear - 1}) :
            setFromDay({...fromDate, fromMonth: fromMonth - 1});
    };
    const handlePrevMonthTo = () => {
        toMonth - 1 < 0 ?
            setToDay({...toDate, toMonth: 11, toYear: toYear - 1}) :
            setToDay({...toDate, toMonth: toMonth - 1});
    };


    /**
     * переключатель года в большую сторону
     */
    const handleNextYear = () => {
        click ? handleNextYearFrom() : handleNextYearTo();
    };
    const handleNextYearFrom = () => {
        setFromDay({...fromDate, fromYear: fromYear + 1});
    };
    const handleNextYearTo = () => {
        setToDay({...toDate, toYear: toYear + 1});
    };
    /**
     * переключатель года в меньшую сторону
     */
    const handlePrevYear = () => {
        click ? handlePrevYearFrom() : handlePrevYearTo();
    }

    const handlePrevYearFrom = () => {
        setFromDay({...fromDate, fromYear: fromYear - 1});
    };
    const handlePrevYearTo = () => {
        setToDay({...toDate, toYear: toYear - 1});
    };

    /**
     * переключатель календаря для клика по иконке
     */
    const handleToggleIconCalendar = () => {
        if (!disabled) {
            setToggleIcon(!toggleIcon);
            if (fromData !== '') {
                let newActiveDay = fromData.split('.');
                setFromDay({
                    ...fromDate,
                    fromDay: Number(newActiveDay[0]) < 32 ? Number(newActiveDay[0]) : fromDay,
                    fromMonth: Number(newActiveDay[1]) < 13 ? Number(newActiveDay[1] - 1) : fromMonth,
                    fromYear: Number(newActiveDay[2])
                })
            }
            if (toData !== '') {
                let newActiveDay = toData.split('.');
                setToDay({
                    ...toDate,
                    toDay: Number(newActiveDay[0]) < 32 ? Number(newActiveDay[0]) : toDay,
                    toMonth: Number(newActiveDay[1]) < 13 ? Number(newActiveDay[1] - 1) : toMonth,
                    toYear: Number(newActiveDay[2])
                })
            }

        }
    };

    /**
     * функция для установки значения в поле инпут
     * @param {event} e - события ввода
     */
    const handleChangeInputDateFrom = (e) => {
        let symbol = e.target.value;
        setFromData(symbol);
        setValueFrom(symbol);
    };
    const handleChangeInputDateTo = (e) => {
        let symbol = e.target.value;
        setToData(symbol);
        setValueTo(symbol);
    };

    /**
     * установка дня при клике на календаре числа,
     * установка значения для input используя стейт календаря
     */
    const handleChangeDataPicker = (e) => {
        click ? handleChangeDataPickerFrom(e) : handleChangeDataPickerTo(e);
        setClick(prevState => !prevState);
    };
    const handleChangeDataPickerFrom = (e) => {
        let symbol = e.target.textContent;
        let id = e.target.getAttribute('id');
        setFromDay({...fromDate, fromDay: +symbol, fromSelect: id});
        setFromData(((symbol < 10) ? '0' + symbol : symbol) + '.' + ((fromMonth + 1) < 10 ? '0' + (fromMonth + 1) : fromMonth + 1) + '.' + fromYear)
        setValueFrom(((symbol < 10) ? '0' + symbol : symbol) + '.' + ((fromMonth + 1) < 10 ? '0' + (fromMonth + 1) : fromMonth + 1) + '.' + fromYear)
        setValueTo(((symbol < 10) ? '0' + symbol : symbol) + '.' + ((fromMonth + 1) < 10 ? '0' + (fromMonth + 1) : fromMonth + 1) + '.' + fromYear)
        setToData(((symbol < 10) ? '0' + symbol : symbol) + '.' + ((fromMonth + 1) < 10 ? '0' + (fromMonth + 1) : fromMonth + 1) + '.' + fromYear)
        setToDay({...toDate, toDay: undefined, toMonth: fromMonth, toYear: fromYear, toSelect: id})

    };
    const handleChangeDataPickerTo = (e) => {
        let symbol = e.target.textContent;
        let id = e.target.getAttribute('id');
        setToDay({...toDate, toDay: +symbol, toSelect: id})
        setToData(((symbol < 10) ? '0' + symbol : symbol) + '.' + ((toMonth + 1) < 10 ? '0' + (toMonth + 1) : toMonth + 1) + '.' + toYear)
        setValueTo(((symbol < 10) ? '0' + symbol : symbol) + '.' + ((toMonth + 1) < 10 ? '0' + (toMonth + 1) : toMonth + 1) + '.' + toYear)
    };

    useEffect(() => {
        if (calendarWrapper.current != null) {
            if (calendarWrapper.current.getBoundingClientRect().right > windowWidth) {
                calendarWrapper.current.style.left = (windowWidth - calendarWrapper.current.getBoundingClientRect().right - 10) + 'px'
            }
        }
    }, [toggleIcon, windowWidth]);


    /**
     * массив с кратким наименованием дней недели
     * @type {string[]}
     */
    const dayOfTheWeek = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

    /**
     * массив с наименованием месяцев
     * @type {string[]}
     */
    const month = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']

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
    let maxDaysFrom = days[fromMonth];
    let maxDaysTo = days[toMonth];

    /**
     * проверка на високосный год, если выбран февраль, и год високосный ->
     * прибавляет к максимальному колличеству дней еще один
     */
    if (leapYear(fromYear)) {
        maxDaysFrom++;
    }
    if (leapYear(toYear)) {
        maxDaysTo++;
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
                setToggleIcon(true)
            }
        };
        document.addEventListener('click', onClick);
        return () => document.removeEventListener('click', onClick);
    }, []);

    /**
     * получение первого дня недели выбранного года и месяца для корректного отображения календаря
     * @type {number}
     */
    const firstDayMonthFrom = new Date(fromYear, fromMonth, 0).getDay();
    const firstDayMonthTo = new Date(toYear, toMonth, 0).getDay();

    /**
     * отрисовка самого календаря используя helper
     */
    let tableFrom = renderTableRange(
        click ? maxDaysFrom : maxDaysTo,
        click ? firstDayMonthFrom : firstDayMonthTo,
        handleChangeDataPicker,
        fromDay,
        fromMonth,
        fromYear,
        toDay,
        toMonth,
        toYear,
        fromSelect,
        toSelect,
        click,
        classes
    );

    return (
        <>
            {/* обертка инпута */}
            <div className={`${classes.dataPickerRangeWrapper} ${props.className ? props.className : ''}`}>
                <label className={classes.label}>{label}</label>
                <div className={`${classes.inputWrapper} ${disabled ? 'disabledDataPicker' : ''}`}>
                    <label className={classes.after}>
                        <InputMask ref={inputRef}
                                   name={'firstDate'}
                                   mask="99.99.9999"
                                   className={classes.input}
                                   placeholder={'от'}
                                   onChange={handleChangeInputDateFrom}
                                   value={value.from}
                        />
                        <div className={classes.separator}/>
                        <InputMask ref={inputRef}
                                   mask="99.99.9999"
                                   name={'lastDate'}
                                   className={classes.input}
                                   placeholder={'до'}
                                   onChange={handleChangeInputDateTo}
                                   value={value.to}
                        />
                        <img ref={iconRef} src={calendar} alt="calendar" onClick={handleToggleIconCalendar}/>
                    </label>
                </div>

                {/* обертка календаря */}

                {toggleIcon &&
                <div ref={calendarWrapper} className={classes.calendar}>
                    <div>
                        <div className={classes.change}>
                            <div className={classes.wrapper}>
                                <div className={classes.prev}
                                     onClick={handlePrevMonth}/>
                                <span>{click ? month[fromMonth] : month[toMonth]}</span>
                                <div className={classes.next}
                                     onClick={handleNextMonth}/>
                            </div>
                            <div className={classes.wrapper}>
                                <div className={classes.prev}
                                     onClick={handlePrevYear}/>
                                <span>{click ? fromYear : toYear}</span>
                                <div className={classes.next}
                                     onClick={handleNextYear}/>
                            </div>
                        </div>
                        <div className={classes.date}>
                            <table>
                                <thead>
                                <tr>{dayOfTheWeek.map((el, index) => <th key={index}>{el}</th>)}</tr>
                                </thead>
                                <tbody>
                                <tr className={classes.separate}/>
                                {tableFrom}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                }
            </div>
        </>
    );
};
DataPickerRange.defaultProps = {
    style: {},
    label: '',
    disabled: false,
};

DataPickerRange.propTypes = {
    style: PropTypes.object,
    label: PropTypes.string,
    disabled: PropTypes.bool,
};

