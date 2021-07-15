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
        <div className={classes.block_info}>
                <h3 className={classes.block_info__title}>прочее</h3>
            <div className={classes.block_info__item}>
                <div className={classes.sale}>
                    <OtherInput value={sale} setValue={setSale} name={'sales'} label={'откуда пришел'}/>
                </div>
            </div>

        </div>
    );
};