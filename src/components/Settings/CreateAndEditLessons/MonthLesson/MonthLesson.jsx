import React, {useContext, useEffect, useState} from 'react';
import classes from '../calendar.module.css';
import moment from "moment";
import 'moment/locale/ru';
import {ContextData} from "../CreateAndEditLessons";
import cn from "classnames";
import {useSelector} from "react-redux";
import {declOfGroupsNum} from "../../../../helpers/common";

var defaultWeekdays = Array.apply(null, Array(7)).map(function (_, i) {
    return <span className={classes.weekdays_month} key={i}>{moment(i, 'e').startOf('week').isoWeekday(i + 1).format('ddd')}</span>;
});

export const MonthLesson = () => {
    const [renderTable, setTable] = useState([]);
    const addItem = (obj) => {
        setTable(prevState => [...prevState,obj]);
    };
    const clearTable = () => {
        setTable([]);
    };

    const {date, changeDate,setActiveBtn,setDate} = useContext(ContextData);

    const {lessons} = useSelector(state => state.lessons);
    console.log(lessons)
    const [currentDate, setCurrentDate] = useState({
        currentMonth: date.format('MMMM'),
        currentYear: date.format('YYYY'),
        currentMonthDays: date.daysInMonth(),
        startDate: moment(date).date(1).isoWeekday(1),
        firstDay:moment(date).date(1).isoWeekday(1).date(),
        countPrevMonthDays:moment(date).date(1).isoWeekday(1).daysInMonth(),
    });
    console.log(currentDate)
    console.log(defaultWeekdays)
    const handleChangeMonth = (e) => {
        if (e.currentTarget.dataset.valueMonth === 'month') {
            setDate(date.add(1, 'month'))
        }else{
            setDate(date.subtract(1,'month'))
        }
        setCurrentDate({
            currentMonth: date.format('MMMM'),
            currentYear: date.format('YYYY'),
            currentMonthDays: date.daysInMonth(),
            startDate: moment(date).date(1).isoWeekday(1),
            firstDay:moment(date).date(1).isoWeekday(1).date(),
            countPrevMonthDays:moment(date).date(1).isoWeekday(1).daysInMonth(),
        })
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        clearTable();
        for (let i = 0; i < 42; i++) {
            let tempLesson = 0;
            let tempClass = false ;
            let tempMuteCell = currentDate.startDate.format('MMMM') !== currentDate.currentMonth;
            for (let k =0;k<lessons.length;k++) {
                if (moment(lessons[k].date).format('YYYY-DD-MM') === moment(currentDate.startDate).format('YYYY-DD-MM')) {
                    tempClass = true;
                    tempLesson++;
                }
            }
            console.log(tempLesson)
            addItem(<div key={i}
                         id={currentDate.startDate.format('YYYY-DD-MM')}
                         onClick={(e) => {
                             console.log(e.currentTarget.id)
                             setDate(date.set(e.currentTarget.id))
                             setActiveBtn('day');
                         }}
                         className={cn(classes.item_month,
                             {[classes.item_month_mute]: tempMuteCell},
                             {[classes.item_month_green]: tempClass})}>
                <span
                    className={classes.date}>{currentDate.startDate.format('MMMM') === currentDate.currentMonth ? currentDate.startDate.format('DD') : currentDate.startDate.format('DD.MM')}</span>
                <span>{tempLesson ? `${tempLesson} ${declOfGroupsNum(tempLesson)}` : null}</span>
            </div>);
            currentDate.startDate.add(1,'d')
        }

    },[currentDate.currentMonth, currentDate.startDate, lessons]);
    return (
        <>
            <div className={classes.selector_month}>
                <div onClick={handleChangeMonth} className={classes.prev} data-value-month={''}>
                    <svg  width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M6.21426 0.714304C6.21426 0.425403 6.04023 0.16495 5.77332 0.0543924C5.50641 -0.056165 5.19919 0.004946 4.99491 0.209229L0.709209 4.49493C0.430264 4.77387 0.430264 5.22613 0.709209 5.50507L4.99491 9.79077C5.19919 9.99505 5.50641 10.0562 5.77332 9.94561C6.04023 9.83505 6.21426 9.5746 6.21426 9.2857V0.714304Z" fill="#8798AD"/></svg>
                </div>
                <h3 className={classes.text}>{currentDate.currentMonth} {currentDate.currentYear}</h3>
                <div onClick={handleChangeMonth} className={classes.next} data-value-month={'month'}>
                    <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M6.21426 0.714304C6.21426 0.425403 6.04023 0.16495 5.77332 0.0543924C5.50641 -0.056165 5.19919 0.004946 4.99491 0.209229L0.709209 4.49493C0.430264 4.77387 0.430264 5.22613 0.709209 5.50507L4.99491 9.79077C5.19919 9.99505 5.50641 10.0562 5.77332 9.94561C6.04023 9.83505 6.21426 9.5746 6.21426 9.2857V0.714304Z" fill="#8798AD"/></svg>
                </div>
            </div>
            <div className={classes.calendar_month}>
                {defaultWeekdays}
                {renderTable}
            </div>
        </>
    );
};