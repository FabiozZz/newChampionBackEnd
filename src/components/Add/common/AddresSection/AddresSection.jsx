import React from 'react';
import classes from "../../add.module.css";
import {OtherInput} from "../../../../utils/OtherInput/OtherInput";

/**
 * компонент визуализации ввода данных адреса
 *
 * @returns {JSX.Element}  jsx
 * @constructor
 */
export const AddresSection = () => {

    return (
        <div className={classes.block_info}>
            <h3 className={classes.block_info__title}>Адресс</h3>
            <div className={classes.block_info__item}>
                <div className={classes.street}>
                    <OtherInput label={'улица'}/>
                </div>
                <div className={classes.house}>
                    <OtherInput label={'дом'}/>
                </div>
                <div className={classes.corspus}>
                    <OtherInput label={"корпус"}/>
                </div>
                <div className={classes.room}>
                    <OtherInput label={"картира"}/>
                </div>
            </div>
        </div>

    );
};