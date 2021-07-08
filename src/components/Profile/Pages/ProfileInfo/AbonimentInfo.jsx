import React from 'react';
import classes from "../../profile.module.css";
import {CheckboxBtn} from "../../../../utils/CheckboxBtn/CheckboxBtn";
import { declOfLessonsNum } from '../../../../helpers/common';


export const AbonimentInfo = ({user,whatsApp,handleToggleWhatsApp}) => {
    return (
        <>
            <div className={classes.block_info__info_card}>
                <img className={classes.block_info__info_card__img} src={user.img} width={37} height={25} alt="card"/>
                <div>
                    <h4 className={classes.block_info__info_card__general}>{user.abonement.name} со статусом {user.statusName.name} клиент</h4>
                    <p className={classes.block_info__info_card__label}>Срок действия: <b>{user.cardFrom} &mdash; {user.cardTo}.</b> Доступно <b>{user.abonement.lessons}</b> {declOfLessonsNum(user.abonement.lessons)}</p>
                </div>

            </div>
        <div className={`${classes.block_info__item}`}>
            <p className={classes.block_info__item_label}>Филиал:</p>
            <span className={classes.block_info__item_label__text}>{user.filial.name}</span>
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
        </>
    );
};