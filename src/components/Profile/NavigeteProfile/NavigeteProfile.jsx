import React from 'react';
import classes from "../profile.module.css";

export const NavigateProfile = ({setIndex,tabIndex,id}) => {
    return (
        <div className={'row'}>
            <div className={`col-12 ${classes.nav_block}`}>

                <span onClick={() => {
                    setIndex(0)
                }}
                      className={`${classes.nav_block__item} ${tabIndex === 0 ? classes.nav_block__item_active : ''}`}>Информация</span>

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
        </div>
    );
};