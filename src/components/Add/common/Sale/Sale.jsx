import React from 'react';
import classes from "../../add.module.css";
import {OtherInput} from "../../../../utils/OtherInput/OtherInput";

/**
 * компонент визуализации ввода данных источника откуда узнал о клубе
 *
 * @param sale строка
 * @param setSale функция установки sale
 * @returns {JSX.Element}
 * @constructor
 */
export const Sale = ({sale,setSale}) => {
    return (
        <div className={`row ${classes.block_info}`}>

            <div className="col-12">
                <h3 className={classes.block_info__title}>прочее</h3>
            </div>

            <div className={`col-6 ${classes.block_info__item}`}>
                <OtherInput value={sale} setValue={setSale} name={'sales'} label={'откуда пришел'} required={true}/>
            </div>

        </div>
    );
};