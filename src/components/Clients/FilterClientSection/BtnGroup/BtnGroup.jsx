import React from 'react';
import {Btn} from "../../../../utils/Btn/Btn";
import classes from './bgroup.module.css';

export const BtnGroup = ({is_Adult,toggleActive,left='Дети',right="Взрослые"}) => {
    const childrenActive = () => {
        toggleActive(false);
    };
    const adultActive = () => {
        toggleActive(true);
    };
    return (
        <div className={classes.group}>
            <Btn isActive={!is_Adult} onClick={childrenActive}>{left}</Btn>
            <Btn isActive={is_Adult} onClick={adultActive}>{right}</Btn>
        </div>
    );
};