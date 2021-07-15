import React from 'react'
import classes from './info.module.css';
import separate from '../../../../../assets/images/lineModalDevider.svg';
import prolongation_aboniment from '../../../../../assets/images/prolongationAbon.svg';
import return_cash from '../../../../../assets/images/returnCash.svg';
import { declOfNum } from '../AbonimentInfo';
import { declOfLessonsNum } from '../../../../../helpers/common';

export const UserInfo = ({ user }) => {
    return (
        <div className={classes.wrapper}>
            <img className={classes.top_separate} src={separate} alt="separate" />
            <div className={classes.block_card}>
                <img className={classes.block_card__img} src={user.img} alt={user.statusName.name} />
            </div>
            <div className={classes.block_info}>
                <div className={classes.block_info__client}>
                    <p className={classes.block_info__text}>{user.abonement.name} со статусом {user.statusName.name} клиент</p>
                    <p className={classes.block_info__mute}>Срок действия: <b>{user.cardFrom} &mdash; {user.cardTo}.</b> Доступно <b>{user.abonement.lessons}</b> {declOfLessonsNum(user.abonement.lessons)}</p>

                </div>
                <div className={classes.block_info__images}>
                    <img src={prolongation_aboniment} alt="продление абонимента" />
                    <img src={return_cash} alt="возврат ДС" />

                </div>
            </div>
            <img className={classes.bottom_separate} src={separate} alt="separate" />
        </div>
    )
}
