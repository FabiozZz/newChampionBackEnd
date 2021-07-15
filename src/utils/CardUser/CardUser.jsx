import React, { useState } from 'react';
import { CardUserStatus } from "./Status/CardUserStatus";
import phone from '../../assets/images/phone 1.svg';
import gift from '../../assets/images/gift.svg';
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import success from '../../assets/images/success.svg';
import classes from './cardUser.module.css';
import { useDispatch } from "react-redux";
import { client_change_toDay } from "../../Acnions/timeTableActions";
import Api from "../../Api/Api";
import healthSVG from '../../assets/images/health.svg';
import { CustomTooltip } from "../CustomTooltip/CustomTooltip";
import cn from 'classnames';

/**
 * компонент для отображения клиента
 *
 * @param cardStatusName строка, содержит название абонимента и статуса
 *
 * @param cardFrom срок действия абонимента от ...
 *
 * @param cardTo срок действия абонимента до ...
 *
 * @param lessons  сколько занятий осталось
 *
 * @param id принимает число, порядковый номер из базы
 *
 * @param name принимает строку, имя клиента
 *
 * @param surname принимает строку, фамилия клиента
 *
 * @param status принимает число, для визуально отображения статуса клиента
 *
 * @param freeze булевой тип, состояние клиента заморожен или нет
 *
 * @param health булевой тип, состояние клиента, принес он справку от врача или нет
 *
 * @param toDay булевой тип,
 *
 * @param call булевой тип, для визуально отображения необходимости прозвонить клиента
 *
 * @param birthDay булевой тип, для визуально отображения того что скоро будет день рождение клиента
 *
 * @param birthDayDate строка, дата рождения клиента
 *
 * @param expire булевой тип, для визуально отображения что скоро закончится абонимент
 *
 * @param style принимает объект стилей для корневого элемента карточки
 *
 * @param course название группы в которой занимается клиент
 *
 * @returns {JSX.Element}
 * @constructor
 */
export const CardUser = ({ img, abonimentName, cardStatusName, cardFrom, cardTo, lesson_id, train_id, id, name, surname, status, freeze, health, toDay, call, birthDay, birthDayDate, expire, style, course }) => {

    const [check, setCheck] = useState(false);

    const dispatch = useDispatch();


    /**
     * переключатель видимости галочки на карточке
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
                    <span>{name}</span>
                    <span>{surname}</span>
                </div>
                {/* {img&&
                <CustomTooltip placement={'top'} color={'dark'} title={()=>(
                    <div className={classes.card_status__tooltip_text_wrapper}>
                        {freeze?
                            <p className={`${classes.card_status__tooltip_text_wrapper__text_center} ${classes.card_status__tooltip_text_wrapper__text_center__date}`}>ЗАМОРОЖЕН</p>:null}
                        <p className={classes.card_status__tooltip_text_wrapper__text_center}>{abonimentName} {cardStatusName}</p>
                        <p className={classes.card_status__tooltip_text_wrapper__text_center}>Срок действия: <span className={classes.card_status__tooltip_text_wrapper__text_center__date}>{cardFrom}-{cardTo}</span></p>
                        <p className={classes.card_status__tooltip_text_wrapper__text_center}>Доступно: <span className={classes.card_status__tooltip_text_wrapper__text_center__date}>{lessons}</span> занятий</p>
                    </div>
                )}>
                    <div className={classes.cardStatus}>
                        <img width={17} height={12} src={img} alt="card"/>
                    </div>
                </CustomTooltip>

                } */}

                {/* <div className={classes.notifications}>
                    {birthDay &&
                        <CustomTooltip placement={'top'} color={'dark'} title={()=>(
                            <div className={classes.cardUser__tooltip_text_wrapper}>
                                <p className={classes.cardUser__tooltip_text_wrapper__text_center}>День рождения</p>
                                <p className={`${classes.cardUser__tooltip_text_wrapper__text_center} ${classes.cardUser__tooltip_text_wrapper__text_center__date}`}>{birthDayDate}</p>
                            </div>)}>
                            <img width={20} height={20} src={gift} alt="gift"/>
                        </CustomTooltip>
                    }
                    {call &&
                            <img width={23} height={20} src={phone} title={'Нужно позвонить'} alt="звонок"/>
                    }
                </div> */}
                {/* {health &&
                <div className={classes.health}>
                    <img src={healthSVG} title='Необходима справка' alt="справка"/>
                </div>
                } */}
                <div className={classes.success} onClick={handleToggleSuccess}>
                {check?
                <div class={cn(classes.lds_ring)}><div></div><div></div><div></div><div></div></div>
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
