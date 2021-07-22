import React, { useState } from 'react'
import { Modal } from '../../../../../utils/Modal/Modal';
import { OtherInput } from '../../../../../utils/OtherInput/OtherInput';
import { UserInfo } from '../UserInfo/UserInfo';
import classes from './modalA.module.css';
import { SelectFilial } from '../../../../Add/common/TestLesson/SelectFilial';
import separate from '../../../../../assets/images/deviderParent.svg';
import { AbonimentType } from '../../../../Clients/FilterClientSection/AbonimentType/AbonimentType';
import { SelectStatus } from '../SelectStatus/SelectStatus';
import { declOfNum } from '../AbonimentInfo';
import { declOfLessonsNum, declOfWeekNum } from '../../../../../helpers/common';

export const ModalAbonement = ({ profile, modal, toggle }) => {
    const { user } = profile;
    const closeModal = () => {
        toggle(!modal)
    }
    // const [selectFilial, setSelectFilial] = useState(user.filial)
    // const handleChangeFilialForUser = (obj) => {
    //     setSelectFilial(obj);
    // };

    const [selectAbonement, setSelectAbonement] = useState(user.club_card.rate)
    const handleChangeAbonementForUser = (obj) => {
        setSelectAbonement(obj);
    };

    const [selectStatus, setSelectStatus] = useState(user.club_card.level)
    const handleChangeStatusForUser = (obj) => {
        setSelectStatus(obj);
    };


    return (
        <Modal hide={modal} toggle={toggle}>

            <p className={classes.wrapper__label}>Редактирование абонемента</p>

            <UserInfo user={user} />
            <div className={classes.block_form}>
                <div className={classes.block_form__item}>
                    <OtherInput label={'перенести абонимент'} placeholder={'ФИО нового владельца'} />
                    {/*<SelectFilial value={selectFilial.name} setValue={handleChangeFilialForUser} label={'филиал'} data={profile.profile} />*/}
                </div>
                <img width={500} src={separate} alt="separate" />
                <div className={classes.block_form__item}>
                    <AbonimentType label={'тип абонимента'} setValue={handleChangeAbonementForUser} value={selectAbonement.name} data={profile.typeAboniment} />
                    <SelectStatus label={'статус'} value={selectStatus.name} setValue={handleChangeStatusForUser} data={profile.status} />
                </div>
                <div className={classes.block_form__cash}>
                    <span className={classes.block_form__cash__label}></span>
                    <div className={classes.block_form__cash__info}>
                        <span>{user.club_card.train_balance} {declOfLessonsNum(user.club_card.train_balance)}</span>
                        <span>{(user.club_card.rate.days_duration/7)>8?<span dangerouslySetInnerHTML={{__html: '&#8734;'}}/>:(user.club_card.rate.days_duration / 7)} {declOfWeekNum(user.club_card.rate.days_duration)}</span>
                    </div>
                </div>
                {/* <img src={separate} alt="separate" />
                    <div></div>
                    <img src={separate} alt="separate" />
                    <div></div>
                    <img src={separate} alt="separate" /> */}
            </div>

        </Modal>
    )
}
