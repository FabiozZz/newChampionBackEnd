import React, {useEffect, useState} from 'react'
import { OtherInput } from '../../../../../../../../../next.js/with-redux-thunk-app/components/ui/OtherInput/OtherInput';
import { UserInfo } from '../UserInfo/UserInfo';
import classes from './modal_edit.module.css';
import separate from '../../../../../assets/images/deviderParent.svg';
import { AbonimentType } from '../../../../Clients/FilterClientSection/AbonimentType/AbonimentType';
import { SelectStatus } from '../SelectStatus/SelectStatus';
import { declOfLessonsNum, declOfWeekNum } from '../../../../../../../../../next.js/with-redux-thunk-app/components/halpers/common';
import success_edit from "../../../../../assets/images/successAbonement.svg";
import edit from "../../../../../assets/images/editAboniment.svg";
import {DataPicker} from "../../../../../utils/DataPicker/DataPicker";
import {Button} from "../../../../../../../../../next.js/with-redux-thunk-app/components/ui/Buttons/Button";
import modal_devider from "../../../../../assets/images/modal_devider.svg";
import {SelectCouch} from "../AddAboniment/SelectCouch/SelectCouch";
import SelectGroup from "../../../../../utils/SelectGroup/SelectGroup";

export const ModalEditAbonement = ({ profile, type, change,toggleModal}) => {
    const { user } = profile;
    // const [selectFilial, setSelectFilial] = useState(user.filial)
    // const handleChangeFilialForUser = (obj) => {
    //     setSelectFilial(obj);
    // };

    const [selectAbonement, setSelectAbonement] = useState(user.club_card.rate)
    const handleChangeAbonementForUser = (obj) => {
        setSelectAbonement(obj);
    };

    const [selectGroup, setSelectGroup] = useState(user.train_group||{})
    const handleChangeGroupForUser = (obj) => {
        setSelectGroup(obj);
    };

    const [selectCouch, setSelectCouch] = useState(user.train_trainer||{})
    const handleChangeCouchForUser = (obj) => {
        setSelectCouch(obj);
    };


    const [selectStatus, setSelectStatus] = useState(user.club_card.level)
    const handleChangeStatusForUser = (obj) => {
        setSelectStatus(obj);
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

    const submitData = () => {
        console.log(selectAbonement)
        console.log(selectGroup)
        console.log(selectCouch)
        // let uploadData = {
        //     ...selectAbonement,
        //
        // }
    };


    return (
        <>
            <p className={classes.wrapper__label}>Редактирование абонемента</p>

            <UserInfo type={type} change={change} user={user}/>
            <div className={classes.block_form}>
                <div className={classes.block_two}>
                    <OtherInput label={'перенести абонемент'} placeholder={'ФИО нового владельца'}/>
                    {/*<SelectFilial value={selectFilial.name} setValue={handleChangeFilialForUser} label={'филиал'} data={profile.profile} />*/}
                </div>
                <img width={500} src={separate} alt="separate"/>
                <div className={classes.block_two}>
                    <AbonimentType label={'тип абонемента'} setValue={handleChangeAbonementForUser}
                                   value={selectAbonement.name} data={profile.typeAboniment}/>
                    <SelectStatus label={'статус'} value={selectStatus.name} setValue={handleChangeStatusForUser}
                                  data={profile.status}/>
                </div>
                <div>
                    <span className={classes.label_cash}>Нужно доплатить</span>
                    <div className={`${classes.sale_count}`}>
                            <span className={`${classes.sale_count_text}`}>{selectAbonement.train_quantity > 20 ? <span
                                dangerouslySetInnerHTML={{__html: '&#8734;'}}/> : selectAbonement.train_quantity} {declOfLessonsNum(selectAbonement.train_quantity)}</span>
                        <span className={`${classes.sale_count_text}`}>{(selectAbonement.days_duration / 7) > 8 ? <span
                            dangerouslySetInnerHTML={{__html: '&#8734;'}}/> : (selectAbonement.days_duration / 7)} {declOfWeekNum((selectAbonement.days_duration / 7))}</span>
                        {/*<img className={classes.sale_count_img} src={devider} alt="devider"/>*/}
                        <div className={classes.flex}>
                            <img className={classes.sale_count_img} src={modal_devider} alt="devider"/>

                            {
                                editPrice.edit ?
                                    <div onClick={toggleEdit} className={classes.edit_block}>
                                        <input autoFocus
                                               className={classes.edit_price}
                                               style={{width: ((String(editPrice.price).length * 10) + 'px')}}
                                               value={editPrice.price}
                                               onChange={handleChangePriceAbonement}
                                               type="number"/>
                                        <span className={classes.edit_block_text}>&#8381;</span>
                                        <img className={classes.img_edit} src={success_edit} alt="edit"/>
                                    </div>
                                    :
                                    <div onClick={toggleEdit} className={classes.edit_block}>
                                        <span className={`${classes.edit_block_text}`}>{editPrice.price}
                                            &#8381;</span>
                                        <img className={classes.img_edit} src={edit} alt="edit"/>
                                    </div>

                            }
                        </div>
                    </div>
                </div>
                <img width={500} src={separate} alt="separate"/>
                <div className={classes.block_two}>
                    <SelectGroup label={'возростная группа'} value={{name:''}} data={{}}/>
                {
                    !selectAbonement.is_personal?
                            <SelectGroup label={'поменять группу'} value={selectGroup}
                                         setValue={handleChangeGroupForUser}
                                         data={profile.group}/>
                         : selectAbonement.is_personal?
                            <SelectCouch label={'поменять тренера'} value={selectCouch}
                                         setValue={handleChangeCouchForUser}
                                         data={profile.couch}/>
                         : null

                }
                </div>
                <img width={500} src={separate} alt="separate"/>
                <div className={classes.block_one}>
                    <DataPicker label={"Заморозить абонемент"}/>
                    <span className={classes.freeze_text_mute}>Доступно <b>3</b> заморозки тренеровок</span>
                </div>
                <div className={classes.end_btn}>
                    <Button click={()=>toggleModal(false)} factor={'danger'} text={'отменить'}/>
                    <Button click={submitData} factor={'success'} text={'сохранить'}/>
                </div>

            </div>
        </>
    );
}
