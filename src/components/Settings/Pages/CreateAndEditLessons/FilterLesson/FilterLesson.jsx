import React, {useContext} from 'react';
import classes from './filter.module.css';
import {Btn} from "../../../../Clients/FilterClientSection/BtnGroup/Btn/Btn";
import {OtherInput} from "../../../../../../../../../next.js/with-redux-thunk-app/components/ui/OtherInput/OtherInput";
import {ContextData} from "../CreateAndEditLessons";

/**
 * фильтрация расписания
 * @returns {JSX.Element}
 * @constructor
 */
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