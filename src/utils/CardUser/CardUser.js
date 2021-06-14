import React from 'react';
import {CardUserStatus} from "./Status/CardUserStatus";
import phone from '../../assets/images/phone 1.svg';
import gift from '../../assets/images/gift.svg';
import {NavLink} from "react-router-dom";
import PropTypes from "prop-types";
import success from '../../assets/images/success.svg';
import classes from './cardUser.module.css';
import {useDispatch} from "react-redux";
import {client_change_toDay} from "../../Acnions/timeTableActions";
import Api from "../../Api/Api";
import healthSVG from '../../assets/images/health.svg';
import {CustomTooltip} from "../CustomTooltip/CustomTooltip";

/**
 * компонент для отображения клиента
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
 * @param expire булевой тип, для визуально отображения что скоро закончится абонимент
 *
 * @param style принимает объект стилей для корневого элемента карточки
 *
 * @returns {JSX.Element}
 * @constructor
 */
export const CardUser = ({id, name, surname, status, freeze, health, toDay, call, birthDay, expire, style, course}) => {

    const dispatch = useDispatch();

    /**
     * переключатель видимости галочки на карточке
     */
    const handleToggleSuccess = async (e) => {
        e.preventDefault()
        await Api.checkClient(id, course).then(r => {
            dispatch(client_change_toDay(id, course));
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
                <CardUserStatus className={classes.cardStatus} freeze={freeze} danger={expire} status={status}/>
                <div className={classes.notifications}>
                    {birthDay &&
                        <CustomTooltip placement={'top'} color={'dark'} title={'день рождения'}>
                            <img width={20} height={20} src={gift} alt="gift"/>
                        </CustomTooltip>
                    }
                    {call &&
                        <CustomTooltip placement={'top'} color={'dark'} title={'нужно позвонить'}>
                            <img width={23} height={20} src={phone} alt="phone"/>
                        </CustomTooltip>
                    }
                </div>
                {health &&
                <div className={classes.health}>
                    <img src={healthSVG} title='Необходима справка' alt="Нужна справка"/>
                </div>
                }

                <div className={classes.success} onClick={handleToggleSuccess}>
                    {toDay &&
                    <img src={success} alt="success"/>
                    }
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
