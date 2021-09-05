import React from 'react';
import classes from "../../add.module.css";
import {OtherInput} from "../../../../utils/OtherInput/OtherInput";

/**
 * компонент визуализации ввода данных адреса
 *
 * @returns {JSX.Element}  jsx
 * @constructor
 */
export const AddresSection = ({error,address,change}) => {
    const {
        street,
        house,
        building,
        apartments
    } = address;

    return (
        <div className={classes.block_info}>
            <h3 className={classes.block_info__title}>Адресс</h3>
            <div className={classes.block_info__item}>
                <div className={classes.street}>
                    <OtherInput danger={error?error.street.length:false} name={'street'} value={street} setValue={change} label={'улица'}/>
                    {(error?.street.length || error?.house.length || error?.building.length || error?.apartments.length) &&<span className={classes.warning_text}>{error.street.join()}</span>}
                </div>
                <div className={classes.house}>
                    <OtherInput danger={error?error.house.length:false} name={'house'} placeholder={''} value={house} setValue={change} label={'дом'}/>
                </div>
                <div className={classes.corspus}>
                    <OtherInput danger={error?error.building.length:false} name={'building'} placeholder={''} value={building} setValue={change} label={"корпус"}/>
                </div>
                <div className={classes.room}>
                    <OtherInput danger={error?error.apartments.length:false} name={'apartments'} placeholder={''} value={apartments} setValue={change} label={"картира"}/>
                </div>
            </div>
        </div>

    );
};