import React from 'react';
import classes from "../profile.module.css";

/**
 * навигация по профилю
 * @param {function} setIndex переключение активного таба
 * @param {number} tabIndex активный индекс
 * @returns {JSX.Element}
 * @constructor
 */
export const NavigateProfile = ({ setIndex, tabIndex}) => {
    return (
        <div className={classes.nav_block}>

            <span onClick={() => {
                setIndex(0)
            }} className={`${classes.nav_block__item} ${tabIndex === 0 ? classes.nav_block__item_active : ''}`}>Информация</span>

            <span onClick={() => {
                setIndex(1)
            }} className={`${classes.nav_block__item} ${tabIndex === 1 ? classes.nav_block__item_active : ''}`}>История посещений</span>

            <span onClick={() => {
                setIndex(2)
            }} className={`${classes.nav_block__item} ${tabIndex === 2 ? classes.nav_block__item_active : ''}`}>История оплат</span>

            <span onClick={() => {
                setIndex(3)
            }} className={`${classes.nav_block__item} ${tabIndex === 3 ? classes.nav_block__item_active : ''}`}>Геймификация</span>

        </div>
    );
};