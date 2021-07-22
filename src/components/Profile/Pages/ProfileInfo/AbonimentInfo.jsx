import React from 'react';
import classes from "../../profile.module.css";
import {CheckboxBtn} from "../../../../utils/CheckboxBtn/CheckboxBtn";
import {declOfLessonsNum, isEmpty} from '../../../../helpers/common';
import moment from "moment";


export const AbonimentInfo = ({user,whatsApp,handleToggleWhatsApp}) => {
    return (
        <>
            <div className={classes.block_info__info_card}>
                <img className={classes.block_info__info_card__img} src='' width={37} height={25} alt="card"/>
                <div>
                    <h4 className={classes.block_info__info_card__general}>{user.club_card.rate.name} со
                        статусом {user.club_card.level.name} клиент</h4>
                    <p className={classes.block_info__info_card__label}>Срок
                        действия: <b>{moment(user.club_card.value_from).format('DD.MM.YYYY')} &mdash; {moment(user.club_card.valid_until).format('DD.MM.YYYY')}.</b> Доступно <b>{user.club_card.train_balance}</b> {declOfLessonsNum(user.club_card.train_balance)}
                    </p>
                </div>

            </div>
            <div className={`${classes.block_info__item}`}>
                {/*<p className={classes.block_info__item_label}>Филиал:</p>*/}
                {/*<span className={classes.block_info__item_label__text}>{user.filial.name}</span>*/}
                {!isEmpty(user.train_group) ?
                    <>
                        <p className={classes.block_info__item_label}>Записан в группу:</p>
                        <span className={classes.block_info__item_label__text}>{user.train_group.name}</span>
                    </>
                    :
                    !isEmpty(user.train_trainer) ?
                        <>
                            <p className={classes.block_info__item_label}>Записан к тренеру:</p>
                            <span className={classes.block_info__item_label__text}>{user.train_trainer.last_name} {user.train_trainer.first_name} {user.train_trainer.middle_name}</span>
                        </>
                        : null
                }
            {/*    <p className={classes.block_info__item_label}>WhatsApp:</p>*/}
            {/*    <span className={classes.block_info__item_label__text}>*/}
            {/*            <div className={classes.block_info__item__checkbox}>*/}
            {/*            <CheckboxBtn isChecked={whatsApp} setIsChecked={handleToggleWhatsApp}/>*/}
            {/*            </div>*/}
            {/*            <span className={classes.block_info__item__description}>Добавлен в чат</span>*/}
            {/*</span>*/}

            </div>
        </>
    );
};