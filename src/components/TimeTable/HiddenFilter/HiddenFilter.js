import React from 'react';
import classes from './hiddenFilter.module.css';
import filterHide from './../../../assets/images/filterHide.svg';

export const HiddenFilter = ({hide,toggleHide}) => {
    return (
        <div className={classes.hide_wrapper}>
            {!hide?
                <img onClick={toggleHide} className={classes.hide_wrapper__to} src={filterHide} alt=""/>
            :
                <img onClick={toggleHide} className={classes.hide_wrapper__from} src={filterHide} alt=""/>
            }
        </div>
    );
};