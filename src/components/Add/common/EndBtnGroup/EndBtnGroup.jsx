import React from 'react';
import classes from "../../add.module.css";
import {Button} from "../../../../utils/Buttons/Button";

/**
 * компонент визуализации группы кнопок для сохранения или отмены сохранения
 *
 * @property {boolean} save переменная отражает запрос
 * @property {function} goBack функция возврата на предидущую страницу
 * @property {boolean} personal флаг персональных данных
 * @property {boolean} rules флаг првил
 * @property {function} submit функция отправки данных на сервер
 * @returns {JSX.Element}
 * @constructor
 */
export const EndBtnGroup = ({save, goBack, personal = true, rules = true}) => {
    return (
        <div className={`${classes.btn_group}`}>
            <span/>
            <div className={`${classes.btn_group__item}`}>
                <Button click={goBack} text={'отменить'} factor={'danger'}/>
            </div>

            <div className={`${classes.btn_group__item}`}>
                <Button type={'submit'} disabled={(!personal || !rules) && !save} text={'сохранить'}
                        factor={'success'}/>
            </div>
            <span/>

        </div>
    );
};