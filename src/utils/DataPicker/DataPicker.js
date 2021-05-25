import React, {useEffect, useRef, useState} from 'react';
import './datapicker.css';
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
export const DataPicker = ({style = {}, label = '', disabled = false, simpleClass = ''}) => {
    let windowWidth = window.innerWidth;
    /**
     * локальный стейт для отображения календаря
     */
    const [activeDate, setActiveDay] = useState({
        currentDay: 10,
        currentYear: 2000,
        currentMonth: 10,
        currentDayWeek: 1,
    });

    /**
     * деструктуризация локального стейта
     */
    const {currentMonth, currentYear, currentDay} = activeDate;

    /**
     * установка значения в поле <input>
     */
    const [userData, setUserData] = useState('');

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
    const handleNextMonth = (e) => {
        e.preventDefault();
        currentMonth + 1 > 11 ?
            setActiveDay({...activeDate, currentMonth: 0, currentYear: currentYear + 1}) :
            setActiveDay({...activeDate, currentMonth: currentMonth + 1});
    };
    /**
     * переключатель месяца в меньшую сторону
     * @param e
     */
    const handlePrevMonth = (e) => {
        e.preventDefault();
        currentMonth - 1 < 0 ?
            setActiveDay({...activeDate, currentMonth: 11, currentYear: currentYear - 1}) :
            setActiveDay({...activeDate, currentMonth: currentMonth - 1});
    };

    /**
     * переключатель года в большую сторону
     * @param e
     */
    const handleNextYear = (e) => {
        e.preventDefault();
        setActiveDay({...activeDate, currentYear: currentYear + 1});
    };
    /**
     * переключатель года в меньшую сторону
     * @param e
     */
    const handlePrevYear = (e) => {
        e.preventDefault();
        setActiveDay({...activeDate, currentYear: currentYear - 1});
    };

    useEffect(() => {


        if (calendarWrapper.current!=null) {
            if (calendarWrapper.current.getBoundingClientRect().right > windowWidth) {
                calendarWrapper.current.style.left = (windowWidth - calendarWrapper.current.getBoundingClientRect().right - 10) + 'px'
                console.log(calendarWrapper.current.style.left)
            }
            console.log(calendarWrapper.current.getBoundingClientRect().right)
        }
    },[toggleIcon]);


    /**
     * переключатель календаря для клика по иконке
     * @param e
     */
    const handleToggleIconCalendar = (e) => {
        if (!disabled) {
            e.preventDefault();
            setToggleIcon(!toggleIcon);
            if (userData !== '') {
                let newActiveDay = userData.split('.');
                setActiveDay({
                    ...activeDate,
                    currentDay: Number(newActiveDay[0]) < 32 ? Number(newActiveDay[0]) : currentDay,
                    currentMonth: Number(newActiveDay[1]) < 13 ? Number(newActiveDay[1] - 1) : activeDate.currentMonth,
                    currentYear: Number(newActiveDay[2])
                })
            }

        }
    };

    /**
     * функция для установки значения в поле инпут
     * @param e
     */
    const handleChangeInputDate = (e) => {
        let symbol = e.target.value;
        setUserData(symbol);
    };

    /**
     * установка дня при клике на календаре числа,
     * установка значения для <input/> используя стейт календаря
     * @param e
     */
    const handleChangeDataPicker = (e) => {
        let symbol = e.target.textContent;
        setActiveDay({...activeDate, currentDay: symbol})
        setUserData(((symbol < 10) ? '0' + symbol : symbol) + '.' + ((currentMonth + 1) < 10 ? '0' + (currentMonth + 1) : currentMonth + 1) + '.' + currentYear)
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
    const firstDayMonth = new Date(currentYear, currentMonth, 0).getDay();

    /**
     * отрисовка самого календаря используя helper
     */
    let table = renderTable(maxDays, firstDayMonth, handleChangeDataPicker, currentDay);

    return (
            <div style={style} className={` ${simpleClass}`}>

                {/* обертка инпута */}

                <div className={`dataPicker-wrapper`}>
                    <label className={'dataPicker-wrapper__inputWrapper__label'}>{label}</label>
                    <div className={`dataPicker-wrapper__inputWrapper ${disabled ? 'disabledDataPicker' : ''}`}>
                        <label className={`dataPicker-wrapper__inputWrapper__after`}>
                            <InputMask ref={inputRef}
                                       mask="99.99.9999"
                                       disabled={disabled}
                                       placeholder={'Не указано'}
                                       onChange={handleChangeInputDate}
                                       value={userData}
                            />
                            <img ref={iconRef} src={calendar} alt="calendar" onClick={handleToggleIconCalendar}/>
                        </label>
                    </div>

                    {/* обертка календаря */}

                    {toggleIcon &&
                    <div ref={calendarWrapper} className={'dataPicker-wrapper__calendar'}>
                        <div className={'dataPicker-wrapper__calendar__change'}>
                            <div className={'dataPicker-wrapper__calendar__change__wrapper'}>
                                <div className={'dataPicker-wrapper__calendar__change__wrapper__prev'}
                                     onClick={handlePrevMonth}/>
                                <span>{month[currentMonth]}</span>
                                <div className={'dataPicker-wrapper__calendar__change__wrapper__next'}
                                     onClick={handleNextMonth}/>
                            </div>
                            <div className={'dataPicker-wrapper__calendar__change__wrapper'}>
                                <div className={'dataPicker-wrapper__calendar__change__wrapper__prev'}
                                     onClick={handlePrevYear}/>
                                <span>{currentYear}</span>
                                <div className={'dataPicker-wrapper__calendar__change__wrapper__next'}
                                     onClick={handleNextYear}/>
                            </div>
                        </div>
                        <div className={'dataPicker-wrapper__calendar__date'}>
                            <table>
                                <thead>
                                <tr>{dayOfTheWeek.map((el, index) => <th key={index}>{el}</th>)}</tr>
                                </thead>
                                <tbody>
                                <tr className={'separate'}/>

                                {table}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    }
                </div>
            </div>
    );
};
DataPicker.defaultProps = {
    style: {},
    label: '',
    disabled: false,
    simpleClass: ''
};

DataPicker.propTypes = {
    style: PropTypes.object,
    label: PropTypes.string,
    disabled: PropTypes.bool,
    simpleClass: PropTypes.string
};
