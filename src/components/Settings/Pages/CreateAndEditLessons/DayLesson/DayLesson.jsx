import React, {useContext, useEffect, useState} from 'react';
import classes from '../calendar.module.css';
import moment from "moment";
import 'moment/locale/ru';
import {ContextData} from "../CreateAndEditLessons";
import {useDispatch, useSelector} from "react-redux";
import {add_lesson, clear_filter_lesson, remove_lesson, search_lesson} from "../../../../../Actions/createLessonsActons";
import {AddedLesson} from "./AddedLesson/AddedLesson";
import {Button} from "../../../../../utils/Buttons/Button";

/**
 * отображение расписания за день
 * @returns {JSX.Element}
 * @constructor
 */
export const DayLesson = () => {

    const {date, setDate} = useContext(ContextData);

    const dispatch = useDispatch();

    const {filter} = useSelector(state => state.lessons);

    const [addedLessons, setAddedLessons] = useState([]);
    const addLesson = () => {
        setAddedLessons(prevState=> [...prevState,{}]);

        console.log(addedLessons)
    };
    const handleChangeItem = (i, object) => {
        let newData = addedLessons.map((item,index)=>{
            if (index === i) {
                return {...item,...object}
            }
            return item
        });
        setAddedLessons(newData);
    };
    const removeItem = (i) => {
        // let newData = addedLessons.map((item,index)=>{
        //     if (index === i) {
        //         console.log(item)
        //         return undefined
        //     }
        //     return item
        // });
        let newData = [...addedLessons];
        newData.splice(i,1)
        setAddedLessons(newData);

    }

    const [currentDate, setCurrentDate] = useState({
        date:date,
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
            ...currentDate,
            date:date,
            day: date.format('DD'),
            month:date.format('MMMM'),
            year:date.format('YYYY'),
        })
        dispatch(search_lesson(currentDate.date.format('YYYY-MM-DD')))
    };

    useEffect(() => {
        dispatch(search_lesson(currentDate.date.format('YYYY-MM-DD')))
        return () => dispatch(clear_filter_lesson());
    },[currentDate.date, dispatch]);

    const submit = () => {
        dispatch(add_lesson(addedLessons))
        let uploadData = {
            date: currentDate.date.format(),
            group_id:addedLessons.map(item=>item.id)
        }
        console.log(uploadData);
    };
    const remove = (id) => {
        dispatch(remove_lesson(id))
    }
    console.log(moment(moment().format('YYYY-MM-DD')).isAfter(currentDate.date.format('YYYY-MM-DD')))
    return (
        <>
            <div className={classes.selector_month}>
                <div onClick={handleChangeMonth} className={classes.prev} data-value-month={''}>
                    <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M6.21426 0.714304C6.21426 0.425403 6.04023 0.16495 5.77332 0.0543924C5.50641 -0.056165 5.19919 0.004946 4.99491 0.209229L0.709209 4.49493C0.430264 4.77387 0.430264 5.22613 0.709209 5.50507L4.99491 9.79077C5.19919 9.99505 5.50641 10.0562 5.77332 9.94561C6.04023 9.83505 6.21426 9.5746 6.21426 9.2857V0.714304Z" fill="#8798AD"/></svg>
                </div>
                <h3 className={classes.text}>{currentDate.day} {currentDate.month} {currentDate.year}</h3>
                <div onClick={handleChangeMonth} className={classes.next} data-value-month={'month'}>
                    <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M6.21426 0.714304C6.21426 0.425403 6.04023 0.16495 5.77332 0.0543924C5.50641 -0.056165 5.19919 0.004946 4.99491 0.209229L0.709209 4.49493C0.430264 4.77387 0.430264 5.22613 0.709209 5.50507L4.99491 9.79077C5.19919 9.99505 5.50641 10.0562 5.77332 9.94561C6.04023 9.83505 6.21426 9.5746 6.21426 9.2857V0.714304Z" fill="#8798AD"/></svg>
                </div>
            </div>
            {filter.length ?
                <table className={classes.table}>
                    <thead>
                    <tr>
                        <th>группа</th>
                        <th>тренер</th>
                        <th>в группе</th>
                        <th>отмечено</th>
                        {moment(moment().format('YYYY-MM-DD')).isAfter(currentDate.date.format('YYYY-MM-DD'))?null:<th/>}
                    </tr>
                    </thead>
                    <tbody>
                    {filter.map(lesson => {
                        let checked_clients = lesson.trainings.filter(client => client.is_visited)
                        return (<tr key={lesson.id}>
                            <td>{lesson.group.name}</td>
                            <td>{lesson.trainer.last_name} {lesson.trainer.first_name} {lesson.trainer.middle_name}</td>
                            <td>{lesson.trainings.length} человек</td>
                            <td>{checked_clients.length} человек</td>
                            {
                                moment(moment().format('YYYY-MM-DD')).isAfter(currentDate.date.format('YYYY-MM-DD'))?
                                    null
                                    :
                                    <td>
                                        <svg onClick={()=>remove(lesson.id)} className={classes.delete_lesson} width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M3 3.00033C3 1.71166 4.04467 0.666992 5.33333 0.666992H6.66667C7.95533 0.666992 9 1.71166 9 3.00033L11.3333 3.00033C11.7015 3.00033 12 3.2988 12 3.66699C12 4.03518 11.7015 4.33366 11.3333 4.33366H10.6667V11.0003C10.6667 12.1049 9.77124 13.0003 8.66667 13.0003H3.33333C2.22876 13.0003 1.33333 12.1049 1.33333 11.0003V4.33366H0.666667C0.298477 4.33366 0 4.03518 0 3.66699C0 3.2988 0.298477 3.00033 0.666667 3.00033L3 3.00033ZM5.33333 6.33366C5.33333 5.96547 5.03486 5.66699 4.66667 5.66699C4.29848 5.66699 4 5.96547 4 6.33366V9.66699C4 10.0352 4.29848 10.3337 4.66667 10.3337C5.03486 10.3337 5.33333 10.0352 5.33333 9.66699V6.33366ZM8 6.33366C8 5.96547 7.70152 5.66699 7.33333 5.66699C6.96514 5.66699 6.66667 5.96547 6.66667 6.33366V9.66699C6.66667 10.0352 6.96514 10.3337 7.33333 10.3337C7.70152 10.3337 8 10.0352 8 9.66699V6.33366Z" fill="#8798AD"/></svg>
                                    </td>
                            }
                        </tr>)
                    })}
                    </tbody>
                </table>
                :
                <p className={classes.no_filter_data}>В расписании еще не добавили занимающиеся группы</p>
            }
            {addedLessons.length ?
                <div>
                    {addedLessons.map((item, i) => {
                            return (
                                <React.Fragment key={i}>
                                    <AddedLesson iterator={i} item={item} remove={removeItem} change={handleChangeItem}/>
                                </React.Fragment>
                            );
                        }
                    )}
                    <Button click={submit} size={'small'} text={'сохранить'} factor={'success'}/>
                </div>
                : null}
            <svg className={classes.add_lesson} onClick={addLesson} width="704" height="16" viewBox="0 0 704 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M352 16C356.418 16 360 12.4183 360 8C360 3.58172 356.418 0 352 0C347.582 0 344 3.58172 344 8C344 12.4183 347.582 16 352 16ZM352.417 7.58334H356.583C356.813 7.58334 357 7.76988 357 8C357 8.23012 356.813 8.41666 356.583 8.41666H352.417V12.5833C352.417 12.8134 352.23 13 352 13C351.77 13 351.583 12.8134 351.583 12.5833V8.41666H347.417C347.187 8.41666 347 8.23012 347 8C347 7.76988 347.187 7.58334 347.417 7.58332H351.583V3.41666C351.583 3.18654 351.77 3 352 3C352.23 3 352.417 3.18654 352.417 3.41666V7.58334Z" fill="#43BF41"/><path d="M8 8L335 8.00003" stroke="#8798AD" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="5 5"/><path d="M369 8H696" stroke="#8798AD" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="5 5"/></svg>

        </>
    );
};