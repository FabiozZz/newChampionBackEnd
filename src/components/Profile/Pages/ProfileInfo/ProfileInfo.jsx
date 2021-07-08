import React, { useEffect, useState } from 'react';
import classes from "../../profile.module.css";
import moment from "moment";
import devider from '../../../../assets/images/deviderParent.svg';
import addCard from '../../../../assets/images/cardAdd.svg';
import { AbonimentInfo } from "./AbonimentInfo";
import { AddAboniment } from "./AddAboniment/AddAboniment";
import edit_profile from '../../../../assets/images/edit_profile.svg';
import { ModalAbonement } from './ModalAbonement/ModalAbonement';

export const ProfileInfo = ({ profile }) => {
    const { user } = profile
    const [age, setAge] = useState('');
    const [whatsApp, setWhatsApp] = useState(false);

    const handleToggleWhatsApp = () => {
        setWhatsApp(!whatsApp)
    }
    useEffect(() => {
        let dateNow = moment();
        let dateBirth = moment(user.date_of_birth.replace(/(\d{2}).(\d{2}).(\d{4})/g, '$3-$2-$1'));
        let mathAge = Math.floor(dateNow.diff(dateBirth, 'year'));
        mathAge += (mathAge % 100 < 21 || mathAge % 10 < 1 || (mathAge % 10 > 4 && mathAge % 10 <= 9) || mathAge % 10 === 0) ? ' лет' :
            mathAge % 10 === 1 ? ' год' : ' года';
        setAge(mathAge);
        setWhatsApp(user.is_whatsApp)
    }, [user.date_of_birth, user.course, user.is_whatsApp]);

    const [modal,toggleModal] = useState(false);
    const showModal = ()=>{
        toggleModal(true);
    };
    return (
        <>
            {modal&&
            <ModalAbonement profile={profile} modal={modal} toggle={toggleModal}/>
            }
            {!user.is_Archive &&
                <div className={classes.block_info}>

                    <div className={classes.block_info__header}>

                        {user.status < 1 ?

                            <>
                                <div className={classes.block_info__title_wrapper}>
                                    <img src={addCard} alt="add" />
                                    <h3 className={classes.block_info__title_wr_text}>Абонемент</h3>
                                </div>
                            </>

                            :

                            <>
                                <h3 className={classes.block_info__title}>Абонемент</h3>
                                <img onClick={showModal} className={classes.block_info__header_img} src={edit_profile} alt="edit_profile" />
                            </>

                        }
                    </div>
                    {user.status < 1 ?

                        <AddAboniment profile={profile} />
                        :
                        <AbonimentInfo user={user} whatsApp={whatsApp} handleToggleWhatsApp={handleToggleWhatsApp} />
                    }


                </div>

            }

            <div className={classes.block_info}>

                <div className={classes.block_info__header}>

                    <h3 className={classes.block_info__title}>{!user.is_Adult ? 'Информация о ребёнке' : 'личная информация'}</h3>

                    <img className={classes.block_info__header_img} src={edit_profile} alt="edit_profile" />

                </div>

                <div className={`${classes.block_info__item}`}>

                    <p className={classes.block_info__item_label}>Фамилия:</p>
                    <span className={classes.block_info__item_label__text}>{user.last_name}</span>

                    <p className={classes.block_info__item_label}>Имя:</p>
                    <span className={classes.block_info__item_label__text}>{user.first_name}</span>

                    <p className={classes.block_info__item_label}>Отчество:</p>
                    <span className={classes.block_info__item_label__text}>{user.middle_name}</span>

                    <p className={classes.block_info__item_label}>Дата рождения:</p>
                    <span className={classes.block_info__item_label__text}>{user.date_of_birth} ({age})</span>

                </div>
            </div>

            {!user.is_Adult &&
                <div className={classes.block_info}>

                    <div className={classes.block_info__header}>
                        <h3 className={classes.block_info__title}>Информация о родителях</h3>
                        <img className={classes.block_info__header_img} src={edit_profile} alt="edit_profile" />
                    </div>

                    {user.parents.map((parent, index) => {
                        return (
                            <div key={index} className={`${classes.block_info__item} ${classes.block_info__item_parent}`}>

                                {index > 0 && (<img className={classes.block_info__parent_devider} src={devider} alt="devider" />)}

                                <p className={classes.block_info__item_label}>Фамилия:</p>
                                <span className={classes.block_info__item_label__text}>{parent.last_name}</span>

                                <p className={classes.block_info__item_label}>Имя:</p>
                                <span className={classes.block_info__item_label__text}>{parent.first_name}</span>

                                <p className={classes.block_info__item_label}>Отчество:</p>
                                <span className={classes.block_info__item_label__text}>{parent.middle_name}</span>

                                <p className={classes.block_info__item_label}>Кем приходится:</p>
                                <span className={classes.block_info__item_label__text}>{parent.hoIs}</span>

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
                    <img className={classes.block_info__header_img} src={edit_profile} alt="edit_profile" />
                </div>

                <div className={`${classes.block_info__item_small}`}>

                    <p className={classes.block_info__item_label}>Улица:</p>
                    <span className={classes.block_info__item_label__text}>{user.address.street}</span>

                    <p className={classes.block_info__item_label}>Дом:</p>
                    <span className={classes.block_info__item_label__text}>{user.address.house}</span>

                    <p className={classes.block_info__item_label}>Корпус:</p>
                    <span className={classes.block_info__item_label__text}>{user.address.corpus}</span>

                    <p className={classes.block_info__item_label}>Квартира:</p>
                    <span className={classes.block_info__item_label__text}>{user.address.room}</span>

                </div>
            </div>

            <div className={classes.block_info}>

                <div className={classes.block_info__header}>
                    <h3 className={classes.block_info__title}>прочее</h3>
                    <img className={classes.block_info__header_img} src={edit_profile} alt="edit_profile" />
                </div>

                <div className={`${classes.block_info__item_small}`}>
                    <p className={classes.block_info__item_label}>Источник:</p>
                    <span className={classes.block_info__item_label__text}>{user.whereIs}</span>
                </div>

            </div>

        </>
    );

};