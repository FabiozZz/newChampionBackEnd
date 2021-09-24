import React from 'react';
import classes from "../../edit.module.css";
import {OtherInput} from "../../../../../../../../next.js/with-redux-thunk-app/components/ui/OtherInput/OtherInput";

/**
 * компонент визуализации ввода данных источника откуда узнал о клубе
 *
 * @param sale строка
 * @param setSale функция установки sale
 * @returns {JSX.Element}
 * @constructor
 */
export const EditOterSection = ({sale,setSale}) => {
    return (
        <div className={classes.block_info}>
            <h3 className={classes.block_info__title}>Прочее</h3>
            <div className={classes.block_info__item}>
                <div className={classes.sale}>
                    <OtherInput value={sale} onChange={setSale} label={'Откуда узнали о нас'}/>
                </div>
            </div>
        </div>
    );
};