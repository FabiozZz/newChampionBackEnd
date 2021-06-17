import React from 'react';
import classes from "../../add.module.css";
import {OtherInput} from "../../../../utils/OtherInput/OtherInput";

/**
 * компонент визуализации ввода данных адреса
 *
 * @param address объект с данными {...address,street,house,corpus,room}
 * @param change функция изменения данных {...address,street,house,corpus,room}
 * @returns {JSX.Element}
 * @constructor
 */
export const Address = ({address,change}) => {

    return (
        <div className={`row ${classes.block_info}`}>

            <div className="col-12 ">
                <h3 className={classes.block_info__title}>адрес проживания</h3>
            </div>

            <div className="col-12">

                <div className="row">

                    <div className={`col-6 ${classes.block_info__item}`}>
                        <OtherInput value={address.street} setValue={change} name={'street'} label={'улица'}/>
                    </div>

                    <div className={`col-2 ${classes.block_info__item}`}>
                        <OtherInput value={address.house} setValue={change} name={'house'} label={'дом'} type={'number'} placeholder={''}/>
                    </div>

                    <div className={`col-2 ${classes.block_info__item}`}>
                        <OtherInput value={address.corpus} setValue={change} name={'corpus'} label={'корпус'} type={'number'} placeholder={''}/>
                    </div>

                    <div className={`col-2 ${classes.block_info__item}`}>
                        <OtherInput value={address.room} setValue={change} name={'room'} label={'квартира'} type={'number'} placeholder={''}/>
                    </div>

                </div>

            </div>

        </div>
    );
};