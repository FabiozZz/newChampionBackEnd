import React from 'react';
import {Btn} from "./Btn/Btn";
import classes from './bgroup.module.css';

export const BtnGroup = ({is_Adult,toggleActive}) => {
    const childrenActive = () => {
        toggleActive(false);
    };
    const adultActive = () => {
        toggleActive(true);
    };
    return (
        <div className={classes.group}>
            <Btn isActive={!is_Adult} onClick={childrenActive}>Дети</Btn>
            <Btn isActive={is_Adult} onClick={adultActive}>Взрослые</Btn>
        </div>
    );
};