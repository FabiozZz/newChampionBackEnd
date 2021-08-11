import React from 'react';
import classes from './gen.module.css';
import HeaderNav from "../common/HeaderNav";
import ItemCourse from "./ItemCourse/ItemCourse";

const GeneralPage = () => {
    return (
        <>
            <HeaderNav/>
            <h1 className={classes.title}>Расписание</h1>
            <div className={classes.wrapper}>
                <span className={classes.time}>21.10.1989</span>
                <div className={classes.course_list}>
                    <ItemCourse/>
                    <ItemCourse/>
                    <ItemCourse/>
                    <ItemCourse/>
                </div>
            </div>
        </>
    );
};

export default GeneralPage;