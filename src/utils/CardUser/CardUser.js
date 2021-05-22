import React, {useState} from 'react';
import {CardUserStatus} from "./Status/CardUserStatus";
import './cardUser.css';
import phone from '../../assets/images/phone 1.svg';
import gift from '../../assets/images/gift.svg';
import {isBirthDay, isExpire} from "../../helpers/cardUser";
import {NavLink} from "react-router-dom";
import PropTypes from "prop-types";
import success from '../../assets/images/success.svg';

/**
 * компонент для отображения клиента
 *
 * @param name принимает строку, имя клиента
 *
 * @param surname принимает строку, фамилия клиента
 *
 * @param status принимает число, для визуально отображения статуса клиента
 *
 * @param call булевое значение, для визуально отображения необходимости прозвонить клиента
 *
 * @param birthDay прнимает строку в виде даты, для визуально отображения того что скоро будет день рождение клиента
 *
 * @param expire принимает строку в виде даты, для визуально отображения что скоро закончится абонимент
 *
 * @param style принимает объект стилей для корневого элемента карточки
 *
 * @returns {JSX.Element}
 * @constructor
 */
export const CardUser = ({name,surname,status, call, birthDay,expire, style}) => {
    /**
     * возвращает true если у клиента скоро будет день рождение
     * @type {boolean}
     */
    let toggleBirthday = isBirthDay(birthDay);

    /**
     * возвращает true если у клиента скоро сгорит абонимент
     * @type {boolean}
     */
    let toggleExpire = isExpire(expire);

    /**
     * локальный стейт для перехода к настройкам карточки
     */
    const [toggleIcon, setToggleIcon] = useState(false);

    /**
     * локальный стейт для отображения галочки на карточке клиента
     */
    const [showSuccess, setShowSuccess] = useState(false);

    /**
     * переход к настройкам
     */
    const handleOpenSettings = () => {
        setToggleIcon(true)
    };

    /**
     * переключатель видимости галочки на карточке
     */
    const handleToggleSuccess = () => {
        setShowSuccess(prevState => !prevState);
    };

    /**
     * переход к стандартному виду карточки
     */
    const handleCloseSettings = () => {
        setToggleIcon(false)
    };

    return (
        <>
            {toggleIcon?
                    <div className={'cardUser'} style={style}>
                    <div className={'cardUser__border'}/>
                    <div className={'cardUser__settingsCard'}>
                        <svg onClick={handleCloseSettings} className={'cardUser__settingsCard__closeButton'} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 0C3.582 0 0 3.582 0 8C0 12.418 3.582 16 8 16C12.418 16 16 12.418 16 8C16 3.582 12.418 0 8 0ZM11.957 10.543L10.543 11.957L8 9.414L5.457 11.957L4.043 10.543L6.586 8L4.043 5.457L5.457 4.043L8 6.586L10.543 4.043L11.957 5.457L9.414 8L11.957 10.543Z" fill="#BFC5D2"/></svg>
                        <span onClick={handleToggleSuccess}>{showSuccess?'Снять отметку':'Отметить'}</span>
                        <span>Перенести</span>
                        <NavLink to={'/profile/id'}>Перейти к профилю</NavLink>
                    </div>
                </div>
                :
                <div className={'cardUser'} onClick={handleOpenSettings} style={{cursor:'pointer',...style}}>

                <div className={'cardUser__border'}/>
                    <div className="cardUser__names">
                        <span className={'cardUser__names__name'}>{name}</span>
                        <span className={'cardUser__names__surname'}>{surname}</span>
                    </div>
                    <CardUserStatus className={'cardUser__cardStatus'} danger={toggleExpire} status={status}/>
                    <div className={'cardUser__notifications'}>
                        {toggleBirthday&&<img width={20} height={20} src={gift} alt="gift"/>}
                        {call && <img width={23} height={20} src={phone} alt="phone"/>}
                    </div>
                    {showSuccess &&
                    <div className={'cardUser__success'}>
                        <img src={success} width={24} height={24} alt="success"/>
                    </div>
                    }
                </div>

            }
        </>
    );
};
CardUser.defaultProps = {
    status: 0
}
CardUser.propTypes = {
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    status: PropTypes.number,
    call: PropTypes.oneOf([0||false, 1||true]),
    birthDay: PropTypes.string.isRequired,
    expire: PropTypes.string,
    style: PropTypes.object
};
