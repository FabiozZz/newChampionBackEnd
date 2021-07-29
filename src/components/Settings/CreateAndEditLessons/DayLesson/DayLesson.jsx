import React, {useContext, useEffect, useState} from 'react';
import classes from '../calendar.module.css';
import moment from "moment";
import 'moment/locale/ru';
import {ContextData} from "../CreateAndEditLessons";

export const DayLesson = () => {

    const {date, setDate} = useContext(ContextData);

    const [currentDate, setCurrentDate] = useState({
        day: date.format('DD'),
        month:date.format('MMMM'),
        year:date.format('YYYY'),
    });

    const handleChangeMonth = (e) => {
        if (e.currentTarget.dataset.valueMonth === 'month') {
            setDate(date.add(1, 'd'))
        }else{
            setDate(date.subtract(1,'d'))
        }
        setCurrentDate({
            day: date.format('DD'),
            month:date.format('MMMM'),
            year:date.format('YYYY'),
        })
    };

    return (
        <>
            <div className={classes.selector_month}>
                <div onClick={handleChangeMonth} className={classes.prev} data-value-month={''}>
                    <svg  width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M6.21426 0.714304C6.21426 0.425403 6.04023 0.16495 5.77332 0.0543924C5.50641 -0.056165 5.19919 0.004946 4.99491 0.209229L0.709209 4.49493C0.430264 4.77387 0.430264 5.22613 0.709209 5.50507L4.99491 9.79077C5.19919 9.99505 5.50641 10.0562 5.77332 9.94561C6.04023 9.83505 6.21426 9.5746 6.21426 9.2857V0.714304Z" fill="#8798AD"/></svg>
                </div>
                <h3 className={classes.text}>{currentDate.day} {currentDate.month} {currentDate.year}</h3>
                <div onClick={handleChangeMonth} className={classes.next} data-value-month={'month'}>
                    <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M6.21426 0.714304C6.21426 0.425403 6.04023 0.16495 5.77332 0.0543924C5.50641 -0.056165 5.19919 0.004946 4.99491 0.209229L0.709209 4.49493C0.430264 4.77387 0.430264 5.22613 0.709209 5.50507L4.99491 9.79077C5.19919 9.99505 5.50641 10.0562 5.77332 9.94561C6.04023 9.83505 6.21426 9.5746 6.21426 9.2857V0.714304Z" fill="#8798AD"/></svg>
                </div>
            </div>
            <div className={classes.calendar}>

            </div>
        </>
    );
};