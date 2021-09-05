/**@memberOf Clients.SortTable*/
import React from 'react';
import classes from "./stuff_sort.module.css";
import {StuffSortSelect} from './StuffSortSelect/StuffSortSelect';
import cn from "classnames";
import {declOfResults} from "../../../helpers/common";

/**
 * @param {Array<object>} clients массив клиентов для отображения общего количества клиентов
 * @param {boolean} active указание активного вида списка отображения клиентов
 * @param {Function} row переключение вида на строчный
 * @param {Function} column переключение вида на блочный
 * @returns {React.Element}
 * @constructor
 */
export const StuffSortTable = ({stuffs,active,row,column}) => {

    return (
        <div className={classes.sort_section}>
            <div className={classes.sort_section__sort}>
                <span className={classes.text_muted}>Показано: <span className={classes.text_result}>{stuffs?.length||0} {declOfResults(stuffs?.length||0)}</span></span>
                <span className={classes.text_muted}>Сортровать по: <StuffSortSelect/></span>
            </div>
            <div className={classes.sort_section_factor}>
                <svg onClick={row} className={cn({[classes.factor_active]:!active},{[classes.factor_rows]:active})} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M7 6C7 4.89543 7.67157 4 8.5 4H20.5C21.3284 4 22 4.89543 22 6C22 7.10457 21.3284 8 20.5 8H8.5C7.67157 8 7 7.10457 7 6ZM7 12C7 10.8954 7.67157 10 8.5 10H20.5C21.3284 10 22 10.8954 22 12C22 13.1046 21.3284 14 20.5 14H8.5C7.67157 14 7 13.1046 7 12ZM7 18C7 16.8954 7.67157 16 8.5 16H20.5C21.3284 16 22 16.8954 22 18C22 19.1046 21.3284 20 20.5 20H8.5C7.67157 20 7 19.1046 7 18Z" fill="black"/><path fillRule="evenodd" clipRule="evenodd" d="M2.40039 5.6C2.40039 4.71634 3.11674 4 4.00039 4C4.88405 4 5.60039 4.71634 5.60039 5.6V6.4C5.60039 7.28366 4.88405 8 4.00039 8C3.11674 8 2.40039 7.28366 2.40039 6.4V5.6ZM2.40039 11.6C2.40039 10.7163 3.11674 10 4.00039 10C4.88405 10 5.60039 10.7163 5.60039 11.6V12.4C5.60039 13.2837 4.88405 14 4.00039 14C3.11674 14 2.40039 13.2837 2.40039 12.4V11.6ZM2.40039 17.6C2.40039 16.7163 3.11674 16 4.00039 16C4.88405 16 5.60039 16.7163 5.60039 17.6V18.4C5.60039 19.2837 4.88405 20 4.00039 20C3.11674 20 2.40039 19.2837 2.40039 18.4V17.6Z" fill="black"/></svg>
                <svg onClick={column} className={cn({[classes.factor_active]:active}, {[classes.factor_column]:!active})} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M6 3C4.34315 3 3 4.34315 3 6V8C3 9.65685 4.34315 11 6 11H8C9.65685 11 11 9.65685 11 8V6C11 4.34315 9.65685 3 8 3H6ZM6 13C4.34315 13 3 14.3431 3 16V18C3 19.6569 4.34315 21 6 21H8C9.65685 21 11 19.6569 11 18V16C11 14.3431 9.65685 13 8 13H6ZM16 13C14.3431 13 13 14.3431 13 16V18C13 19.6569 14.3431 21 16 21H18C19.6569 21 21 19.6569 21 18V16C21 14.3431 19.6569 13 18 13H16ZM16 3C14.3431 3 13 4.34315 13 6V8C13 9.65685 14.3431 11 16 11H18C19.6569 11 21 9.65685 21 8V6C21 4.34315 19.6569 3 18 3H16Z" fill="black"/></svg>
            </div>
        </div>
    );
};