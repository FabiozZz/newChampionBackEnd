import React, {useEffect, useState} from 'react';
import classes from "../../profile.module.css";
import moment from "moment";
import devider from '../../../../assets/images/deviderParent.svg';
import addCard from '../../../../assets/images/cardAdd.svg';
import {AbonimentInfo} from "./AbonimentInfo";
import {AddAboniment} from "./AddAboniment/AddAboniment";
import edit_profile from '../../../../assets/images/edit_profile.svg';
import {NavLink} from "react-router-dom";
import {isEmpty} from "../../../../helpers/common";
import {SuccessContext} from "../../SuccessContext";
import {SuccessAdd} from "./SuccessAdd/SuccessAdd";
import {Modal} from "../../../../utils/Modal/Modal";
import {ModalEditAbonement} from "./ModalEditAbonement/ModalEditAbonement";
import {ModalChangeAbonement} from "./ModalChangeClient/ModalChangeAbonement";
import axios from "axios";
import Api from "../../../../Api/Api";
import avatar from './avatar.png';
import {
    load_profile_aboniment,
    load_profile_couch,
    load_profile_group,
    load_profile_status
} from "../../../../store/Actions/profileActions";
import {useDispatch} from "react-redux";
import {Button} from "../../../../utils/Buttons/Button";

/**
 * вывод основной информации о польлзователе
 * @param {object} profile профиль порльзователя
 * @returns {JSX.Element}
 * @constructor
 */
export const ProfileInfo = ({profile}) => {
    const {user} = profile
    const [success, setSuccess]  = useState(false);
    const handleChangeSuccess = () => {
        setSuccess(!success);
    };

    const [age, setAge] = useState('');
    const [whatsApp, setWhatsApp] = useState(false);

    const dispatch = useDispatch();

    const handleToggleWhatsApp = () => {
        setWhatsApp(!whatsApp)
    }
    useEffect(() => {
        let dateNow = moment();
        let dateBirth = moment(user.date_of_birth);
        let mathAge = Math.floor(dateNow.diff(dateBirth, 'year'));
        mathAge += (mathAge % 100 < 21 || mathAge % 10 < 1 || (mathAge % 10 > 4 && mathAge % 10 <= 9) || mathAge % 10 === 0) ? ' лет' :
            mathAge % 10 === 1 ? ' год' : ' года';
        setAge(mathAge);
    }, [user.date_of_birth]);

    const [modal, toggleModal] = useState({
        show: false,
        type: 'edit'
    });
    const showModal = () => {
        toggleModal(prevState=>({...prevState,show:!modal.show}));
    };
    const clearType = () => {
        toggleModal(prevState=>({...prevState,type:''}));
    }
    const showAndChangeTypeModalEdit = () => {
        toggleModal(prevState=>({...prevState,show:!modal.show,type:'edit'}));
    }
    const showAndChangeTypeModalChange = () => {
        toggleModal(prevState=>({...prevState,show:!modal.show,type:''}));
    }
    return (
        <>
            {modal.show &&
            <Modal toggle={showModal}>
                {
                    modal.type === 'edit' ?
                        <ModalEditAbonement toggleModal={showModal} change={clearType} type={modal.type} profile={profile}/>
                        :
                        <ModalChangeAbonement toggleModal={showModal} profile={profile} type={modal.type}/>
                }

            </Modal>
            }
            {!user.is_Archive &&
            <div className={classes.block_info}>
                <SuccessContext.Provider value={{success, handleChangeSuccess, profile,showAndChangeTypeModalChange}}>
                    {success && !profile.loading ?
                        <SuccessAdd/>
                        :
                        <>
                            <div className={classes.block_info__header}>

                                {user.club_card.level === null ?

                                    <>
                                        <div className={classes.block_info__title_wrapper}>
                                            <img src={addCard} alt="add"/>
                                            <h3 className={classes.block_info__title_wr_text}>Абонемент</h3>
                                        </div>
                                    </>

                                    :

                                    <>
                                        <h3 className={classes.block_info__title}>Абонемент</h3>
                                        <img onClick={showAndChangeTypeModalEdit} className={classes.block_info__header_img}
                                             src={edit_profile}
                                             alt="edit_profile"/>
                                    </>

                                }
                            </div>
                            {isEmpty(user.club_card.rate) ?

                                <AddAboniment profile={profile}/>
                                :
                                <AbonimentInfo user={user} whatsApp={whatsApp}
                                               handleToggleWhatsApp={handleToggleWhatsApp}/>
                            }
                        </>
                    }

                </SuccessContext.Provider>
            </div>

            }

            <div className={classes.block_info_f}>

                <div className={classes.block_foto} >
                    <img src={avatar} alt=""/>
                </div>

                <div className={classes.block_info}>

                    <div className={classes.block_info__header}>

                        <h3 className={classes.block_info__title}>{!user.is_adult ? 'Информация о ребёнке' : 'личная информация'}</h3>
                        <NavLink className={classes.block_info__header_img_link} to={`/profile/${user.id}/edit`}>
                            <img src={edit_profile} alt="edit_profile"/>
                        </NavLink>
                    </div>

                    <div className={`${classes.block_info__item}`}>

                        <p className={classes.block_info__item_label}>Фамилия:</p>
                        <span className={classes.block_info__item_label__text}>{user.last_name}</span>

                        <p className={classes.block_info__item_label}>Имя:</p>
                        <span className={classes.block_info__item_label__text}>{user.first_name}</span>

                        <p className={classes.block_info__item_label}>Отчество:</p>
                        <span className={classes.block_info__item_label__text}>{user.middle_name}</span>

                        <p className={classes.block_info__item_label}>Дата рождения:</p>
                        <span
                            className={classes.block_info__item_label__text}>{moment(user.date_of_birth).format('DD.MM.YYYY')} ({age})</span>

                        {user.is_adult &&
                        <>
                            <p className={classes.block_info__item_label}>Номер телефона</p>
                            <span className={classes.block_info__item_label__text}>{user.phone_number}</span>
                        </>
                        }

                    </div>
                </div>
            </div>

            {!user.is_adult &&
            <div className={classes.block_info}>

                <div className={classes.block_info__header}>
                    <h3 className={classes.block_info__title}>Информация о родителях</h3>
                    <NavLink className={classes.block_info__header_img_link} to={`/profile/${user.id}/edit`}>
                        <img src={edit_profile} alt="edit_profile"/>
                    </NavLink>
                </div>

                {user.parents.map((parent, index) => {
                    return (
                        <div key={index} className={`${classes.block_info__item} ${classes.block_info__item_parent}`}>

                            {index > 0 && (
                                <img className={classes.block_info__parent_devider} src={devider} alt="devider"/>)}

                            <p className={classes.block_info__item_label}>Фамилия:</p>
                            <span className={classes.block_info__item_label__text}>{parent.last_name}</span>

                            <p className={classes.block_info__item_label}>Имя:</p>
                            <span className={classes.block_info__item_label__text}>{parent.first_name}</span>

                            <p className={classes.block_info__item_label}>Отчество:</p>
                            <span className={classes.block_info__item_label__text}>{parent.middle_name}</span>

                            <p className={classes.block_info__item_label}>Кем приходится:</p>
                            <span className={classes.block_info__item_label__text}>{parent.who}</span>

                            <p className={classes.block_info__item_label}>Номер телефона:</p>
                            <span className={classes.block_info__item_label__text}>{parent.phone_number}</span>

                        </div>
                    )
                })}
            </div>
            }

            <div className={classes.block_info}>

                <div className={classes.block_info__header}>
                    <h3 className={classes.block_info__title}>Адрес проживания</h3>
                    <NavLink className={classes.block_info__header_img_link} to={`/profile/${user.id}/edit`}>
                        <img src={edit_profile} alt="edit_profile"/>
                    </NavLink>
                </div>

                <div className={`${classes.block_info__item_small}`}>

                    <p className={classes.block_info__item_label}>Адрес</p>
                    <span className={classes.block_info__item_label__text}>{user.address}</span>

                    {/* <p className={classes.block_info__item_label}>Улица:</p>
                    <span className={classes.block_info__item_label__text}>{user.address.street}</span>

                    <p className={classes.block_info__item_label}>Дом:</p>
                    <span className={classes.block_info__item_label__text}>{user.address.house}</span>

                    <p className={classes.block_info__item_label}>Корпус:</p>
                    <span className={classes.block_info__item_label__text}>{user.address.corpus}</span>

                    <p className={classes.block_info__item_label}>Квартира:</p>
                    <span className={classes.block_info__item_label__text}>{user.address.room}</span> */}

                </div>
            </div>

            <div className={classes.block_info}>

                <div className={classes.block_info__header}>
                    <h3 className={classes.block_info__title}>прочее</h3>
                    <NavLink className={classes.block_info__header_img_link} to={`/profile/${user.id}/edit`}>
                        <img src={edit_profile} alt="edit_profile" />
                    </NavLink>
                </div>

                <div className={`${classes.block_info__item_small}`}>
                    <p className={classes.block_info__item_label}>Источник:</p>
                    <span className={classes.block_info__item_label__text}>Яндекс</span>
                </div>

            </div>

            <div className={classes.block_info}>

                <div className={classes.block_info__header}>
                    <h3 className={classes.block_info__title}>Оценка качества</h3>
                </div>
                <div className={classes.block_info__ball}>
                    <div className={classes.ball_group}>
                        <div className={classes.ball_group_inputs}>
                            <label><input type="radio" name={'ball'} value="1"/>1</label><label><input type="radio" name={'ball'} value="2"/>2</label><label><input type="radio" name={'ball'} value="3"/>3</label><label><input type="radio" name={'ball'} value="4"/>4</label><label><input type="radio" name={'ball'} value="5"/>5</label><label><input type="radio" name={'ball'} value="6"/>6</label><label><input type="radio" name={'ball'} value="7"/>7</label><label><input type="radio" name={'ball'} value="8"/>8</label><label><input type="radio" name={'ball'} value="9"/>9</label><label><input type="radio" name={'ball'} value="10"/>10</label>
                        </div>
                        <div><Button text={'сохранить'} size={'small'} factor={'success'}/></div>
                    </div>
                    <div className={classes.ball_history}>

                        <div className={classes.block_info__header}>
                            <h4 className={classes.block_info__title}>История оценок</h4>
                        </div>
                        <div className={classes.ball_history_table}>
                            <span className={classes.date}>12.12.2020:</span>
                            <span className={classes.ball}>10</span>
                            <span className={classes.date}>12.12.2020:</span>
                            <span className={classes.ball}>10</span>
                            <span className={classes.date}>12.12.2020:</span>
                            <span className={classes.ball}>10</span>
                        </div>
                    </div>
                </div>

            </div>

        </>
    );

};