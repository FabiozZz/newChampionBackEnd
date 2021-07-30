import React, {useContext, useEffect, useState} from 'react';
import classes from '../calendar.module.css';
import moment from "moment";
import 'moment/locale/ru';
import {ContextData} from "../CreateAndEditLessons";
import cn from "classnames";
import {useSelector} from "react-redux";
import {declOfLessonsNum} from "../../../../helpers/common";

var defaultWeekdays = Array.apply(null, Array(7)).map(function (_, i) {
    return ;
});

export const WeekLesson = () => {
    const {date, setDate,changeDate,setActiveBtn} = useContext(ContextData);
    const {lessons} = useSelector(state => state.lessons);
    const [currentDate, setCurrentDate] = useState({
        date:date,
        start:moment(date).isoWeekday(1),
        startDay: moment(date).isoWeekday(1).format('DD'),
        startMonth:date.format('MMMM'),
        startYear:date.format('YYYY'),
        lastDay:moment(date).isoWeekday(7).format('DD'),
        lastMonth:moment(date).isoWeekday(7).format('MMMM'),
        lastYear:moment(date).isoWeekday(7).format('YYYY'),
    });

    const handleChangeMonth = (e) => {
        if (e.currentTarget.dataset.valueMonth === 'month') {
            setDate(date.add(7, 'd'))
        }else{
            setDate(date.subtract(7,'d'))
        }
        setCurrentDate({
            date:date,
            start:moment(date).isoWeekday(1),
            startDay: moment(date).isoWeekday(1).format('DD'),
            startMonth:date.format('MMMM'),
            startYear:date.format('YYYY'),
            lastDay:moment(date).isoWeekday(7).format('DD'),
            lastMonth:moment(date).isoWeekday(7).format('MMMM'),
            lastYear:moment(date).isoWeekday(7).format('YYYY'),
        })
    };

    let renderTable=[];
    for (let i = 0; i < 7; i++) {
        let tempLesson = 0;
        let tempClass = false ;
        for (let k =0;k<lessons.length;k++) {
            if (moment(lessons[k].date).format('YYYY-DD-MM') === moment(currentDate.start).format('YYYY-DD-MM')) {
                tempClass = true;
                tempLesson++;
            }
        }

        renderTable.push(<React.Fragment key={i}>
            <span className={classes.weekdays_week}>
                {moment(i, 'e').startOf('week').isoWeekday(i + 1).format('ddd')}
            </span>
            <div id={currentDate.start.format('YYYY-MM-DD')}
                 onClick={(e) => {
                     changeDate(e.currentTarget.id)
                     setActiveBtn('day');
                 }}
                 className={cn(classes.item_week, {[classes.item_week_green]: tempClass})}>
                <span className={classes.date_week}>{currentDate.start.format('DD.MM')}</span>
                {tempLesson ?
                    <span className={classes.label_date_week}>{tempLesson} {declOfLessonsNum(tempLesson)}</span> : null}
            </div>
        </React.Fragment>);
        currentDate.start.add(1,'d')
    }

    return (
        <>
            <div className={classes.selector_month}>
                <div onClick={handleChangeMonth} className={classes.prev} data-value-month={''}>
                    <svg  width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M6.21426 0.714304C6.21426 0.425403 6.04023 0.16495 5.77332 0.0543924C5.50641 -0.056165 5.19919 0.004946 4.99491 0.209229L0.709209 4.49493C0.430264 4.77387 0.430264 5.22613 0.709209 5.50507L4.99491 9.79077C5.19919 9.99505 5.50641 10.0562 5.77332 9.94561C6.04023 9.83505 6.21426 9.5746 6.21426 9.2857V0.714304Z" fill="#8798AD"/></svg>
                </div>
                <h3 className={classes.text}>{currentDate.startDay}-{currentDate.lastDay} {currentDate.startMonth === currentDate.lastMonth?currentDate.lastMonth:`${currentDate.startMonth}-${currentDate.lastMonth}`} {currentDate.startYear === currentDate.lastYear?currentDate.lastYear:`${currentDate.startYear}-${currentDate.lastYear}`} </h3>
                <div onClick={handleChangeMonth} className={classes.next} data-value-month={'month'}>
                    <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M6.21426 0.714304C6.21426 0.425403 6.04023 0.16495 5.77332 0.0543924C5.50641 -0.056165 5.19919 0.004946 4.99491 0.209229L0.709209 4.49493C0.430264 4.77387 0.430264 5.22613 0.709209 5.50507L4.99491 9.79077C5.19919 9.99505 5.50641 10.0562 5.77332 9.94561C6.04023 9.83505 6.21426 9.5746 6.21426 9.2857V0.714304Z" fill="#8798AD"/></svg>
                </div>
            </div>
            <div className={classes.calendar_week}>
                {renderTable}
            </div>
        </>
    );
};