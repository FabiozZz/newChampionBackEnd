import React from 'react';
import classes from "../../add.module.css";
import {Button} from "../../../../utils/Buttons/Button";

/**
 * компонент визуализации группы кнопок для сохранения или отмены сохранения
 *
 * @param goBack функция возврата на предидущую страницу
 * @param personal флаг персональных данных
 * @param rules флаг првил
 * @param submit функция отправки данных на сервер
 * @returns {JSX.Element}
 * @constructor
 */
export const EndBtnGroup = ({goBack,personal=true,rules=true}) => {
    return (
        <div className={`row ${classes.btn_group}`}>

            <div className={`col-2 ${classes.btn_group__item}`}>
                <Button click={goBack} text={'отменить'} factor={'danger'}/>
            </div>

            <div className={`col-2 ${classes.btn_group__item}`}>
                <Button type={'submit'} disabled={!personal || !rules} text={'сохранить'} factor={'success'}/>
            </div>

        </div>
    );
};