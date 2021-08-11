import React, {useEffect, useState} from 'react'
import { OtherInput } from '../../../../../utils/OtherInput/OtherInput';
import { UserInfo } from '../UserInfo/UserInfo';
import classes from './modal_change.module.css';
import { AbonimentType } from '../../../../Clients/FilterClientSection/AbonimentType/AbonimentType';
import { SelectStatus } from '../SelectStatus/SelectStatus';
import { declOfLessonsNum, declOfWeekNum } from '../../../../../helpers/common';
import {Counter} from "../../../../../utils/Counter/Counter";
import {SelectGroup} from "../AddAboniment/SelectGroup/SelectGroup";
import {SelectCouch} from "../AddAboniment/SelectCouch/SelectCouch";
import modal_devider from '../../../../../assets/images/modal_devider.svg';
import success_edit from "../../../../../assets/images/successAbonement.svg";
import edit from "../../../../../assets/images/editAboniment.svg";
import {Button} from "../../../../../utils/Buttons/Button";

export const ModalChangeAbonement = ({ profile,toggleModal }) => {
    const { user } = profile;

    const [selectAbonement, setSelectAbonement] = useState(user.club_card.rate)
    const handleChangeAbonementForUser = (obj) => {
        setSelectAbonement(obj);
        console.log(selectAbonement)
    };

    const [selectStatus, setSelectStatus] = useState({...user.club_card.level})
    const handleChangeStatusForUser = (obj) => {
        setSelectStatus(obj);
    };

    const [selectGroup, setSelectGroup] = useState(user.train_group||{})
    const handleChangeGroupForUser = (obj) => {
        setSelectGroup(obj);
    };

    const [selectCouch, setSelectCouch] = useState(user.train_trainer||{})
    const handleChangeTrainerForUser = (obj) => {
        setSelectCouch(obj);
    };

    const [countCard, setCount] = useState(1);
    const handleChangeCountCard = (e) => {
        let symbol = e.target.value;
        setCount(Number(symbol) > 999 ? 999 : Number(symbol) < 1 ? 1 : Number(symbol));
    };
    const handleIncrementCount = () => {
        setCount(countCard < 999 ? countCard + 1 : 999);
    };
    const handleDecrementCount = () => {
        setCount(countCard <= 1 ? 1 : countCard - 1)
    };


    const [editPrice, setEditPrice] = useState({
        price: 0,
        edit: false
    });
    const handleChangePriceAbonement = (e) => {
        setEditPrice(prevState => ({...prevState,price:Number(e.target.value)}));
    };
    const toggleEdit = () => {
        setEditPrice(prevState => ({...prevState, edit: !prevState.edit}));
    };

    useEffect(() => {
        setEditPrice(prevState => ({...prevState,price:Number(selectAbonement.price)}));

    },[selectAbonement.price]);

    return (
        <>
            <p className={classes.wrapper__label}>Продление абонемента</p>

            <UserInfo user={user}/>
            <div className={classes.block_form}>
                <div className={classes.block_one}>
                    <OtherInput label={'перенести абонемент'} />
                    {/*<SelectFilial value={selectFilial.name} setValue={handleChangeFilialForUser} label={'филиал'} data={profile.profile} />*/}
                </div>
                <div className={classes.block_three}>
                    <AbonimentType label={'тип абонемента'} setValue={handleChangeAbonementForUser}
                                   value={selectAbonement.name} data={profile.typeAboniment}/>
                    <SelectStatus label={'статус'} value={selectStatus.name} setValue={handleChangeStatusForUser}
                                  data={profile.status}/>
                    <Counter value={countCard}
                             decrement={handleDecrementCount}
                             increment={handleIncrementCount}
                             setValue={handleChangeCountCard}
                             label={'количество'}/>
                </div>
                {
                    selectAbonement.is_personal === 0?
                        <div className={classes.block_one}>
                            <SelectGroup label={'группа'} value={selectGroup} setValue={handleChangeGroupForUser} data={profile.group}/>
                        </div>
                        : selectAbonement.is_personal === 1?
                        <div className={classes.block_one}>
                            <SelectCouch label={'тренер'} value={selectCouch} setValue={handleChangeTrainerForUser} data={profile.couch}/>
                        </div>

                        :null
                }
                <svg width="498" height="1" viewBox="0 0 498 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line y1="0.5" x2="498" y2="0.5" stroke="#EEF3F5" strokeDasharray="12 12"/>
                </svg>

                <div>
                    <OtherInput label={"скидка"} placeholder={'Не заполнено'}/>
                </div>

                <div className={classes.block_form__cash}>
                    <div className={`${classes.sale_count}`}>
                            <span className={`${classes.sale_count_text}`}>{selectAbonement.train_quantity > 20 ? <span
                                dangerouslySetInnerHTML={{__html: '&#8734;'}}/> : selectAbonement.train_quantity} {declOfLessonsNum(selectAbonement.train_quantity)}</span>
                        <span className={`${classes.sale_count_text}`}>{(selectAbonement.days_duration / 7) > 8 ? <span
                            dangerouslySetInnerHTML={{__html: '&#8734;'}}/> : (selectAbonement.days_duration / 7)} {declOfWeekNum((selectAbonement.days_duration / 7))}</span>
                        <div className={classes.flex}>
                            <img className={classes.sale_count_img} src={modal_devider} alt="devider"/>


                            {
                                editPrice.edit ?
                                    <div onClick={toggleEdit} className={classes.edit_block}>
                                        <input autoFocus
                                               className={classes.edit_price}
                                               style={{width:((String(editPrice.price).length*10)+'px')}}
                                               value={editPrice.price}
                                               onChange={handleChangePriceAbonement}
                                               type="number"/>
                                        <span className={classes.edit_block_text}>&#8381;</span>
                                        <img className={classes.img_edit} src={success_edit} alt="edit"/>
                                    </div>
                                    :
                                    <div onClick={toggleEdit} className={classes.edit_block}>
                                        <span className={`${classes.edit_block_text}`}>{editPrice.price * countCard}
                                            &#8381;</span>
                                        <img className={classes.img_edit} src={edit} alt="edit"/>
                                    </div>

                            }
                        </div>
                    </div>
                </div>
                <div className={classes.end_btn}>
                    <Button click={toggleModal} factor={'danger'} text={'отменить'}/>
                    <Button factor={'success'} text={'сохранить'}/>
                </div>
                {/* <img src={separate} alt="separate" />
                    <div></div>
                    <img src={separate} alt="separate" />
                    <div></div>
                    <img src={separate} alt="separate" /> */}
            </div>
        </>
    );
}
