import React, { useState } from 'react';
// import { CardUserStatus } from "./Status/CardUserStatus";
import phone from '../../assets/images/phone 1.svg';
import gift from '../../assets/images/gift.svg';
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import success from '../../assets/images/success.svg';
import classes from './cardUser.module.css';
import { useDispatch } from "react-redux";
import { client_change_toDay } from "../../store/Actions/timeTableActions";
import Api from "../../Api/Api";
// import healthSVG from '../../assets/images/health.svg';
import { CustomTooltip } from "../CustomTooltip/CustomTooltip";
import cn from 'classnames';
import {declOfLessonsNum, isBirthDay} from "../../../../../../next.js/with-redux-thunk-app/components/halpers/common";
import moment from 'moment';

/**
 * @typedef {object} CardUserProps
 * @property {string} cardStatusName содержит название абонемента и статуса
 * @property {string} cardFrom срок действия абонемента от ... ['YYYY-MM-DD']
 * @property {string} cardTo срок действия абонемента до ... ['YYYY-MM-DD']
 * @property {number} lessons  сколько занятий осталось
 * @property {string} img пока не понятно будет или нет, а если будет то в каком формате ....
 * @property {string} abonimentName наименование абонемента
 * @property {string} lesson_id порядковый номер занятия в базе
 * @property {number} train_id порядковый номер тренировки в базе
 * @property {number} id порядковый номер клиента в базы
 * @property {string} name имя клиента
 * @property {string} surname фамилия клиента
 * @property {number} status старый вариант для моков, сейчас не используется (пока?...)
 * @property {boolean} freeze состояние клиента заморожен или нет
 * @property {boolean} toDay присутствовал ли на занятии
 * @property {boolean} call для визуально отображения необходимости прозвонить клиента
 * @property {string} birthDayDate дата рождения клиента
 * @property {object} style стилей для корневого элемента карточки
 */

/**
 * @deprecated
 * @param {string} cardStatusName содержит название абонемента и статуса
 * @param {string} cardFrom срок действия абонемента от ... ['YYYY-MM-DD']
 * @param {string} cardTo срок действия абонемента до ... ['YYYY-MM-DD']
 * @param {number} lessons  сколько занятий осталось
 * @param {string} img пока не понятно будет или нет, а если будет то в каком формате ....
 * @param {string} abonimentName наименование абонемента
 * @param {string} lesson_id порядковый номер занятия в базе
 * @param {number} train_id порядковый номер тренировки в базе
 * @param {number} id порядковый номер клиента в базы
 * @param {string} name имя клиента
 * @param {string} surname фамилия клиента
 * @param {number} status старый вариант для моков, сейчас не используется (пока?...)
 * @param {boolean} freeze состояние клиента заморожен или нет
 * @param {boolean} toDay присутствовал ли на занятии
 * @param {boolean} call для визуально отображения необходимости прозвонить клиента
 * @param {string} birthDayDate дата рождения клиента
 * @param {object} style стилей для корневого элемента карточки
 * @returns {JSX.Element}
 * @constructor
 */
export const CardUser = ({ lessons, img, abonimentName, cardStatusName, cardFrom, cardTo, lesson_id, train_id, id, name, surname,  freeze, toDay, call, birthDayDate, style}) => {

    // const  = props

    const [check, setCheck] = useState(false);

    const dispatch = useDispatch();


    /**
     * переключатель видимости галочки на карточке
     * @function
     * @async
     * @inner
     */
    const handleToggleSuccess = async (e) => {
        e.preventDefault();
        // console.log('%ctoDay: ', 'color: MidnightBlue; background: Aquamarine;', toDay);
        setCheck(true)
        await Api.checkClient(train_id, !toDay).then(r => {
        setCheck(false)
        dispatch(client_change_toDay(lesson_id, train_id, { ...r.data }));
        });

        // setShowSuccess(prevState => !prevState);
    };

    return (
        <NavLink to={`/profile/${id}`}>
            <div className={classes.cardUser} style={style}>
                <div className={classes.names}>
                    <span>{surname}</span>
                    <span>{name}</span>
                </div>


                {img&&
                <CustomTooltip placement={'top'} color={'dark'} title={()=>(
                    <div className={classes.card_status__tooltip_text_wrapper}>
                        {freeze?
                            <p className={`${classes.card_status__tooltip_text_wrapper__text_center} ${classes.card_status__tooltip_text_wrapper__text_center__date}`}>ЗАМОРОЖЕН</p>:null}
                        <p className={classes.card_status__tooltip_text_wrapper__text_center}>{abonimentName} {cardStatusName}</p>
                        <p className={classes.card_status__tooltip_text_wrapper__text_center}>Срок действия: <span className={classes.card_status__tooltip_text_wrapper__text_center__date}>{moment(cardFrom).format('YYYY.MM.DD')}-{moment(cardTo).format('YYYY.MM.DD')}</span></p>
                        <p className={classes.card_status__tooltip_text_wrapper__text_center}>Доступно: <span className={classes.card_status__tooltip_text_wrapper__text_center__date}>{lessons>998?<span
                            dangerouslySetInnerHTML={{__html: '&#8734;'}}/> :lessons}</span> {declOfLessonsNum(lessons)}</p>
                    </div>
                )}>
                    <div className={classes.cardStatus}>
                        <img width={20} height={15} src={img} alt="card"/>
                    </div>
                </CustomTooltip>

                }

                <div className={classes.notifications}>
                    {isBirthDay(birthDayDate) &&
                        <CustomTooltip placement={'top'} color={'dark'} title={()=>(
                            <div className={classes.tootip_wrapper}>
                                <p className={classes.tooltip_title}>День рождения</p>
                                <p className={classes.tooltip_title}><b>{moment(birthDayDate).format('DD.MM.YYYY')}</b></p>
                            </div>)}>
                            <img width={20} height={20} src={gift} alt="gift"/>
                        </CustomTooltip>
                    }
                    {call &&
                            <img width={23} height={20} src={phone} title={'Нужно позвонить'} alt="звонок"/>
                    }
                </div>
                {/* {health &&
                <div className={classes.health}>
                    <img src={healthSVG} title='Необходима справка' alt="справка"/>
                </div>
                } */}
                <div className={classes.success} onClick={handleToggleSuccess}>
                {check?
                <div className={cn(classes.lds_ring)}><div/><div/><div/><div/></div>
                :toDay&&
                        <img src={success} alt="success" />}

                </div>
            </div>
        </NavLink>
    );
};
CardUser.defaultProps = {
    status: 0,
    danger: false,
    health: false,
    birthDay: false,
    expire: false,
    call: false,
    freeze: false,
    style: {}
}
CardUser.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    surname: PropTypes.string,
    status: PropTypes.number,
    call: PropTypes.bool,
    birthDay: PropTypes.bool,
    expire: PropTypes.bool,
    health: PropTypes.bool,
    style: PropTypes.object
};
