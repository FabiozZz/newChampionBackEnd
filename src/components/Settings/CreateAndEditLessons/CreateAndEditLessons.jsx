import React from 'react'
import HeaderNav from '../../common/HeaderNav';
import {Redirect} from '../../common/Redirect';
import classes from './less.module.css';
import {FilterLesson} from "./FilterLesson/FilterLesson";

export const CreateAndEditLessons = () => {
    return (
        <>
            <HeaderNav/>
            <Redirect title={'Настройки расписания'}/>
            <FilterLesson/>
            <div className={classes.wrapper}>

            </div>
        </>
    )
}
