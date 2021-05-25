import React, {useEffect, useRef, useState} from 'react';
import './dataPickerRange.css';
import calendar from '../../assets/images/calendar.svg';
import InputMask from 'react-input-mask';
import {leapYear, renderTable} from "../../helpers/DataPicker/dataPicker";
import PropTypes from "prop-types";


/**
 * визуализация <input type="text"> с появлением внешнего окна для выбора даты
 *
 * @param style объект стилей применяемый к корневому элементу
 *
 * @param label принимает строку, подпись над компонентом
 *
 * @param disabled булевое значение, выключатель компонента
 *
 * @param simpleClass строка, классы для компонента
 *
 * @returns {JSX.Element}
 * @constructor
 */
export const DataPickerRange = ({style = {}, label = '', disabled = false, simpleClass = ''}) => {
    let windowWidth = window.innerWidth;

    let date = new Date();
    /**
     * локальный стейт для отображения календаря
     */
    const [fromDate, setFromDay] = useState({
        fromDay: date.getDate(),
        fromYear: date.getFullYear(),
        fromMonth: date.getMonth(),
        fromDayWeek: date.getDay(),
    });
    const [toDate, setToDay] = useState({
        toDay: date.getDate(),
        toYear: date.getFullYear(),
        toMonth: date.getMonth()+1,
        toDayWeek: date.getDay(),
    });


    /**
     * деструктуризация локального стейта
     */
    const {fromMonth, fromYear, fromDay} = fromDate;
    const {toMonth, toYear, toDay} = toDate;
    const [pickerRange,setPickerRange] = useState({max:undefined,min:undefined});


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
     * ссылка для обертки календаря
     * @type {React.MutableRefObject<null>}
     */
    const calendarWrapper = useRef(null);

    /**
     * переключатель месяца в большую сторону
     * @param e
     */
    const handleNextMonthFrom = (e) => {
        e.preventDefault();
        fromMonth + 1 > 11 ?
            setFromDay({...fromDate, fromMonth: 0, fromYear: fromYear + 1}) :
            setFromDay({...fromDate, fromMonth: fromMonth + 1});
    };
    const handleNextMonthTo = (e) => {
        e.preventDefault();
        toMonth + 1 > 11 ?
            setToDay({...toDate, toMonth: 0, toYear: toYear + 1}) :
            setToDay({...toDate, toMonth: toMonth + 1});
    };
    /**
     * переключатель месяца в меньшую сторону
     * @param e
     */
    const handlePrevMonthFrom = (e) => {
        e.preventDefault();
        fromMonth - 1 < 0 ?
            setFromDay({...fromDate, fromMonth: 11, fromYear: fromYear - 1}) :
            setFromDay({...fromDate, fromMonth: fromMonth - 1});
    };
    const handlePrevMonthTo = (e) => {
        e.preventDefault();
        toMonth - 1 < 0 ?
            setToDay({...toDate, toMonth: 11, toYear: toYear - 1}) :
            setToDay({...toDate, toMonth: toMonth - 1});
    };

    /**
     * переключатель года в большую сторону
     * @param e
     */
    const handleNextYearFrom = (e) => {
        e.preventDefault();
        setFromDay({...fromDate, fromYear: fromYear + 1});
    };
    const handleNextYearTo = (e) => {
        e.preventDefault();
        setToDay({...toDate, toYear: toYear + 1});
    };
    /**
     * переключатель года в меньшую сторону
     * @param e
     */
    const handlePrevYearFrom = (e) => {
        e.preventDefault();
        setFromDay({...fromDate, fromYear: fromYear - 1});
    };
    const handlePrevYearTo = (e) => {
        e.preventDefault();
        setToDay({...toDate, toYear: toYear - 1});
    };

    /**
     * переключатель календаря для клика по иконке
     * @param e
     */
    const handleToggleIconCalendar = (e) => {
        if (!disabled) {
            e.preventDefault();
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
     * @param e
     */
    const handleChangeInputDateFrom = (e) => {
        let symbol = e.target.value;
        setFromData(symbol);
    };
    const handleChangeInputDateTo = (e) => {
        let symbol = e.target.value;
        setToData(symbol);
    };

    /**
     * установка дня при клике на календаре числа,
     * установка значения для <input/> используя стейт календаря
     * @param e
     * @param arrayTarget
     */
        // const handleChangeDataPicker = (e) => {
        //     let symbol = e.target.textContent;
        //     setActiveDay({...activeDate, currentDay: symbol})
        //     setUserData(((symbol < 10) ? '0' + symbol : symbol) + '.' + ((currentMonth + 1) < 10 ? '0' + (currentMonth + 1) : currentMonth + 1) + '.' + currentYear)
        // };
    const handleChangeDataPicker = (e) => {
            const {min, max} = pickerRange;

            let numberCell = +e.target.textContent;
            if (min === undefined) {
                setPickerRange(prevState => ({...prevState, min: numberCell}));
                setFromDay(prevState => ({...prevState, fromDay: min}))
            }else if (max === undefined && numberCell > min) {
                setPickerRange(prevState => ({...prevState, max: numberCell}));
                setToDay(prevState=>({...prevState, toDay: max}));
            }else if (numberCell <= min || (numberCell > min && numberCell < max)) {
                setPickerRange(prevState => ({...prevState, max: numberCell}));
                setToDay(prevState=>({...prevState, toDay: max}));
            }else{
                setPickerRange(prevState => ({...prevState, min: numberCell}));
                setFromDay(prevState => ({...prevState, fromDay: min}))
            }
            // if (pickerRange.length <3 ) {
            //     pickerRange.push(+e.target.textContent)
            // }else{
            //     if (+e.target.textContent <= pickerRange[0]) {
            //         pickerRange[0].push(+e.target.textContent);
            //     }else if(+e.target.textContent <= pickerRange[1] || +e.target.textContent >= pickerRange[1]){
            //         pickerRange[1].push(+e.target.textContent);
            //         // arrayTarget[1] = +e.target.textContent;
            //     }
            //
            // }
            console.log(pickerRange)
            console.log(fromDate);
            console.log(toDate);
            // arrayTarget = arrayTarget.sort((a, b) => a - b);
            // setFromData(((min < 10) ? '0' + min : min) + '.' + ((fromMonth + 1) < 10 ? '0' + (fromMonth + 1) : fromMonth + 1) + '.' + fromYear)
            // setFromData(((max < 10) ? '0' + max : max) + '.' + ((toMonth + 1) < 10 ? '0' + (toMonth + 1) : toMonth + 1) + '.' + toYear)
        };


    useEffect(() => {
        if (calendarWrapper.current!=null) {
            if (calendarWrapper.current.getBoundingClientRect().right > windowWidth) {
                calendarWrapper.current.style.left = (windowWidth - calendarWrapper.current.getBoundingClientRect().right - 10 ) + 'px'
            }
        }
    },[toggleIcon, windowWidth]);


    /**
     * массив с кратким наименованием дней недели
     * @type {string[]}tr
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
    let tableFrom = renderTable(maxDaysFrom, firstDayMonthFrom, handleChangeDataPicker, fromDate,toDay);
    let tableTo = renderTable(maxDaysTo, firstDayMonthTo, handleChangeDataPicker,fromDate, toDay);

    return (
        <>
            <div style={style} className={` ${simpleClass}`}>

                {/* обертка инпута */}

                <div className={`dataPickerRange-wrapper`}>
                    <label className={'dataPickerRange-wrapper__inputWrapper__label'}>{label}</label>
                    <div className={`dataPickerRange-wrapper__inputWrapper ${disabled ? 'disabledDataPicker' : ''}`}>
                        <label className={`dataPickerRange-wrapper__inputWrapper__after`}>
                            <InputMask ref={inputRef}
                                       name={'firstDate'}
                                       mask="99.99.9999"
                                       placeholder={'Не указано'}
                                       onChange={handleChangeInputDateFrom}
                                       value={fromData}
                            />
                            <p className={'dataPickerRange-wrapper__inputWrapper__after__icon'}> --- </p>
                            <InputMask ref={inputRef}
                                       mask="99.99.9999"
                                       name={'lastDate'}
                                       placeholder={'Не указано'}
                                       onChange={handleChangeInputDateTo}
                                       value={toData}
                            />
                            <img className={'dataPickerRange-wrapper__inputWrapper__after__icon'} ref={iconRef} src={calendar} alt="calendar" onClick={handleToggleIconCalendar}/>
                        </label>
                    </div>

                    {/* обертка календаря */}

                    {toggleIcon &&
                    <div ref={calendarWrapper} className={'dataPickerRange-wrapper__calendar'}>
                        <div  className={'dataPickerRange-wrapper__calendarFrom'}>
                            <div className={'dataPickerRange-wrapper__calendar__change'}>
                                <div className={'dataPickerRange-wrapper__calendar__change__wrapper'}>
                                    <div className={'dataPickerRange-wrapper__calendar__change__wrapper__prev'}
                                         onClick={handlePrevMonthFrom}/>
                                    <span>{month[fromMonth]}</span>
                                    <div className={'dataPickerRange-wrapper__calendar__change__wrapper__next'}
                                         onClick={handleNextMonthFrom}/>
                                </div>
                                <div className={'dataPickerRange-wrapper__calendar__change__wrapper'}>
                                    <div className={'dataPickerRange-wrapper__calendar__change__wrapper__prev'}
                                         onClick={handlePrevYearFrom}/>
                                    <span>{fromYear}</span>
                                    <div className={'dataPickerRange-wrapper__calendar__change__wrapper__next'}
                                         onClick={handleNextYearFrom}/>
                                </div>
                            </div>
                            <div className={'dataPickerRange-wrapper__calendar__date'}>
                                <table>
                                    <thead>
                                    <tr>{dayOfTheWeek.map((el, index) => <th key={index}>{el}</th>)}</tr>
                                    </thead>
                                    <tbody>
                                    <tr className={'separate'}/>
                                    {tableFrom}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className={'dataPickerRange-wrapper__calendarTo'}>

                            <div className={'dataPickerRange-wrapper__calendar__change'}>
                                <div className={'dataPickerRange-wrapper__calendar__change__wrapper'}>
                                    <div className={'dataPickerRange-wrapper__calendar__change__wrapper__prev'}
                                         onClick={handlePrevMonthTo}/>
                                    <span>{month[toMonth]}</span>
                                    <div className={'dataPickerRange-wrapper__calendar__change__wrapper__next'}
                                         onClick={handleNextMonthTo}/>
                                </div>
                                <div className={'dataPickerRange-wrapper__calendar__change__wrapper'}>
                                    <div className={'dataPickerRange-wrapper__calendar__change__wrapper__prev'}
                                         onClick={handlePrevYearTo}/>
                                    <span>{toYear}</span>
                                    <div className={'dataPickerRange-wrapper__calendar__change__wrapper__next'}
                                         onClick={handleNextYearTo}/>
                                </div>
                            </div>
                            <div className={'dataPickerRange-wrapper__calendar__date'}>
                                <table>
                                    <thead>
                                    <tr>{dayOfTheWeek.map((el, index) => <th key={index}>{el}</th>)}</tr>
                                    </thead>
                                    <tbody>
                                    <tr className={'separate'}/>
                                    {tableTo}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    }
                </div>
            </div>
        </>
    );
};
DataPickerRange.defaultProps = {
    style: {},
    label: '',
    disabled: false,
    simpleClass: ''
};

DataPickerRange.propTypes = {
    style: PropTypes.object,
    label: PropTypes.string,
    disabled: PropTypes.bool,
    simpleClass: PropTypes.string
};
