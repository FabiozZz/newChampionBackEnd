import React from 'react';
import classes from "../../profile.module.css";
import {CheckboxBtn} from "../../../../utils/CheckboxBtn/CheckboxBtn";

export const AbonimentInfo = ({user,whatsApp,handleToggleWhatsApp}) => {
    return (
        <div className={`${classes.block_info__item}`}>
            <p className={classes.block_info__item_label}>Филиал:</p>
            <span className={classes.block_info__item_label__text}>{user.filial}</span>
            <p className={classes.block_info__item_label}>Записан в группу:</p>
            <span className={classes.block_info__item_label__text}>{user.course}</span>
            <p className={classes.block_info__item_label}>WhatsApp:</p>
            <span className={classes.block_info__item_label__text}>
                        <div className={classes.block_info__item__checkbox}>
                        <CheckboxBtn isChecked={whatsApp} setIsChecked={handleToggleWhatsApp} />
                        </div>
                         <span className={classes.block_info__item__description}>Добавлен в чат</span>
            </span>

        </div>
    );
};