import React from 'react';
import classes from "../../edit.module.css";
import {OtherInput} from "../../../../utils/OtherInput/OtherInput";

/**
 * компонент визуализации ввода данных адреса
 *
 * @returns {JSX.Element}  jsx
 * @constructor
 */
export const EditAddresSection = ({address,change}) => {
    const {
        street,
        house,
        corpus,
        room
    } = address;

    return (
        <div className={classes.block_info}>
            <h3 className={classes.block_info__title}>Адресс</h3>
            <div className={classes.block_info__item}>
                <div className={classes.street}>
                    <OtherInput name={'street'} value={street} setValue={change} label={'улица'}/>
                </div>
                <div className={classes.house}>
                    <OtherInput name={'house'} placeholder={''} value={house} setValue={change} label={'дом'}/>
                </div>
                <div className={classes.corspus}>
                    <OtherInput name={'corpus'} placeholder={''} value={corpus} setValue={change} label={"корпус"}/>
                </div>
                <div className={classes.room}>
                    <OtherInput name={'room'} placeholder={''} value={room} setValue={change} label={"картира"}/>
                </div>
            </div>
        </div>

    );
};