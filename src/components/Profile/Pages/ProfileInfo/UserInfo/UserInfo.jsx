import React from 'react'
import classes from './info.module.css';
import separate from '../../../../../assets/images/lineModalDevider.svg';
import prolongation_aboniment from '../../../../../assets/images/prolongationAbon.svg';
import return_cash from '../../../../../assets/images/returnCash.svg';
import { declOfNum } from '../AbonimentInfo';
import { declOfLessonsNum } from '../../../../../helpers/common';

export const UserInfo = ({ user }) => {
    console.log(user.club_card.train_balance)
    return (
        <div className={classes.wrapper}>
            <img className={classes.top_separate} src={separate} alt="separate" />
            <div className={classes.block_card}>
                <img className={classes.block_card__img} src='' alt={'card'} />
            </div>
            <div className={classes.block_info}>
                <div className={classes.block_info__client}>
                    <p className={classes.block_info__text}>{user.club_card.rate.name} со статусом {user.club_card.level.name} клиент</p>
                    <p className={classes.block_info__mute}>Срок действия: <b>{user.club_card.valid_from} &mdash; {user.club_card.valid_until}.</b> Доступно <b>{(user.club_card.train_balance > 20)? <span dangerouslySetInnerHTML={{__html: '&#8734;'}}/>:user.club_card.train_balance}</b> {declOfLessonsNum(user.club_card.train_balance)}</p>

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
