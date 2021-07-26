import React from 'react';
import classes from "../../add.module.css";
import {OtherInput} from "../../../../utils/OtherInput/OtherInput";

/**
 * компонент визуализации ввода данных адреса
 *
 * @param {object} address объект с данными {...address,street,house,corpus,room}
 * @param {function} change функция изменения данных {...address,street,house,corpus,room}
 * @returns {JSX.Element}  jsx
 * @constructor
 */
export const Address = ({address,change}) => {

    return (
        <div className={`${classes.block_info}`}>
                <h3 className={classes.block_info__title}>адрес проживания</h3>
                    <div className={`${classes.block_info__item}`}>
                        <div className={classes.street}>
                            <OtherInput value={address.street} setValue={change} name={'street'} label={'улица'} required={true}/>
                        </div>
                        <div className={classes.house}>
                            <OtherInput value={address.house} setValue={change} name={'house'} label={'дом'} type={'number'} placeholder={''} required={true}/>
                        </div>
                        <div className={classes.corspus}>
                            <OtherInput value={address.corpus} setValue={change} name={'corpus'} label={'корпус'} type={'number'} placeholder={''}/>
                        </div>
                        <div className={classes.room}>
                            <OtherInput value={address.room} setValue={change} name={'room'} label={'квартира'} type={'number'} placeholder={''}/>
                        </div>
                    </div>
        </div>
    );
};