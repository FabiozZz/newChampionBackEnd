import React from 'react';
import classes from "./sort.module.css";
import {SortSelect} from './SortSelect/SortSelect';

export const SortTable = ({clients}) => {
    return (
        <div className={classes.sort_section}>
            <div className={classes.sort_section__sort}>
                <span className={classes.text_muted}>Показано: <span className={classes.text_result}>{clients.length} результатов</span></span>
                <span className={classes.text_muted}>Сортровать по: <SortSelect/></span>
            </div>
            <div className={classes.sort_section_factor}>
                <img src="" alt=""/>
                <img src="" alt=""/>
            </div>

        </div>
    );
};