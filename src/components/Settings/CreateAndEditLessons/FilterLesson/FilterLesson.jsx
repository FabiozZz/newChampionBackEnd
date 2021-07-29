import React, {useContext, useState} from 'react';
import classes from './filter.module.css';
import {Btn} from "../../../Clients/FilterClientSection/BtnGroup/Btn/Btn";
import {OtherInput} from "../../../../utils/OtherInput/OtherInput";
import {ContextData} from "../CreateAndEditLessons";

export const FilterLesson = () => {

    const {activeBtn,handleClickBtn} = useContext(ContextData)
    return (
        <div className={classes.wrapper}>
            <div className={classes.selector}>
                <OtherInput label="филиалы"/>
            </div>
            <div className={classes.btn_group}>
                <div className={classes.item}>
                    <Btn onClick={handleClickBtn} isActive={activeBtn === 'day'} data-value-active={'day'} children={'День'}/>
                </div>
                <div className={classes.item}>
                    <Btn onClick={handleClickBtn} isActive={activeBtn === 'week'} data-value-active={'week'} children={'Неделя'}/>
                </div>
                <div className={classes.item}>
                    <Btn onClick={handleClickBtn} isActive={activeBtn === 'month'} data-value-active={'month'} children={'Месяц'}/>
                </div>
            </div>

        </div>
    );
};