import React, {useContext, useEffect, useState} from 'react';
import { OtherInput } from "../../../../../utils/OtherInput/OtherInput";
import classes from '../../../profile.module.css';
import { Button } from "../../../../../utils/Buttons/Button";
import {SelectAbonement} from "../SelectAbonement";
import { Counter } from "../../../../../utils/Counter/Counter";
import { SelectStatus } from "../SelectStatus/SelectStatus";
import {declOfLessonsNum, declOfWeekNum} from '../../../../../helpers/common';
import {SelectCouch} from "./SelectCouch/SelectCouch";
import {SelectGroup} from "./SelectGroup/SelectGroup";
import {useDispatch} from "react-redux";
import {
    buy_abonement,
} from "../../../../../store/Actions/profileActions";
import {SuccessContext} from "../../../SuccessContext";
import devider from '../../../../../assets/images/deviderParent.svg'
import success_edit from '../../../../../assets/images/successAbonement.svg'
import edit from '../../../../../assets/images/editAboniment.svg'


export const AddAboniment = ({profile}) => {

    const {handleChangeSuccess} = useContext(SuccessContext);

    const dispatch = useDispatch();

    const {couch, group, status, typeAboniment, user} = profile;

    const [selectAboniment, setAboniment] = useState({
        id: null,
        name: ''
    });
    const handleChangeAboniment = (item) => {
        setAboniment(prevState => ({...prevState, ...item}))
    };

    const [selectCouch, setCouch] = useState({
        id: null,
        first_name: '',
        last_name: '',
        middle_name: '',
    });
    const handleChangeCouch = (obj) => {
        setCouch(prevState => ({...prevState, ...obj}));
    };

    const [selectGroup, setGroup] = useState({
        id: null,
        name: ''
    });
    const handleChangeGroup = (obj) => {
        setGroup(prevState => ({...prevState, ...obj}));
    };

    const [selectStatus, setStatus] = useState({
        id: null,
        name: ''
    });
    const handleChangeStatus = (obj) => {
        setStatus(prevState => ({...prevState, ...obj}))
    };

    const [card, setCard] = useState('');
    const handleChangeNumCard = (e) => {
        let symbol = e.target.value.replace(/\D/g, '')
        setCard(symbol);
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

    // const [selectParent, setParent] = useState({
    //     first_name: '',
    //     last_name: '',
    //     middle_name: '',
    // });
    // const handleChangeParentData = (obj) => {
    //     setParent({...obj});
    // }

    // const [passport, setPassport] = useState({
    //     number: '',
    //     serial: ''
    // })
    // const handleChangePass = (e) => {
    //     setPassport(prevState => ({...prevState, [e.target.name]: e.target.value}))
    // };

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
        if (selectAboniment.prices && selectStatus.id) {

        let price = selectAboniment.prices.find(item=>item.age_group.id === user.club_card.age_group.id&&item.level.id === selectStatus.id).price;
        if (price) {
            setEditPrice(prevState => ({...prevState,price:Number(price)}));
        }
        // let source = axios.CancelToken.source();
        // (async () => {
        //     if (selectAboniment.id && selectStatus.id) {
        //
        //     }
        // })();
        // return () => source.cancel();
        }
    },[selectAboniment.prices, selectStatus.id, user.club_card.age_group.id]);

    const handleSubmitAboniment = async () => {
        // let dopData;
        // if (Number(editPrice.price) !== Number(selectAboniment.price)) {
        //     // dopData = {
        //     //     // price:editPrice.price
        //     }
        // }else {
        //     // dopData = {};
        // }
        let price = selectAboniment.prices.find(item=>item.age_group.id === user.club_card.age_group.id&&item.level.id === selectStatus.id).price;
        const userPrice = editPrice.price !== Number(price) ? editPrice.price : false;
        let uploadData = {
            id:user.club_card.id,
            rate_id:selectAboniment.id,
            level_id:selectStatus.id,
            train_group:selectGroup.id,
            quantity:countCard,
            ...(userPrice && {price:userPrice})
        };
        // console.log(uploadData)
        dispatch(buy_abonement(uploadData));
        // await Api.editProfileAbonement(user.club_card.id, uploadData).then(r => {
        //     console.log(r);
        //     // dispatch(load_profile_user(r.data))
        //     handleChangeSuccess();
        //
        // });
        // await dispatch(upload_profile_club_card(uploadData));

    };
    return (
        <>
            <div className={classes.add_aboniment}>
                <div className={classes.card_number}>
                    <OtherInput value={card} setValue={handleChangeNumCard} label={'номер карты'}/>
                </div>
                <div className={classes.aboniment}>
                    <SelectAbonement value={selectAboniment.name} setValue={handleChangeAboniment}
                                     data={typeAboniment}
                                     label={'тип абонемента'}/>
                </div>
                <div className={classes.status}>
                    <SelectStatus value={selectStatus.name} setValue={handleChangeStatus} data={status}
                                  label={'статус'}/>
                </div>
                <div className={classes.counter}>
                    <Counter value={countCard}
                             decrement={handleDecrementCount}
                             increment={handleIncrementCount}
                             setValue={handleChangeCountCard}
                             label={'количество'}/>
                </div>
                {
                    !selectAboniment.is_personal?

                        <div className={`${classes.group}`}>
                            <SelectGroup label={'группа'} data={group} value={selectGroup}
                                         setValue={handleChangeGroup}/>
                        </div>

                        :
                        <div className={`${classes.group}`}>
                            <SelectCouch data={couch} value={selectCouch} setValue={handleChangeCouch}
                                         label={'тренер'}/>
                        </div>
                }

                {/*{user.is_adult ?*/}
                {/*    <>*/}
                {/*        <div className={classes.adult_serial}>*/}
                {/*            <MaskInput setValue={handleChangePass} name={'serial'} value={passport.serial}*/}
                {/*                       mask={'9999'}*/}
                {/*                       label={'паспорт'} placeholder={'Серия'}/>*/}
                {/*        </div>*/}
                {/*        <div className={classes.adult_number}>*/}
                {/*            <MaskInput value={passport.number} setValue={handleChangePass} name={'number'}*/}
                {/*                       mask={'999999999'} placeholder={'Номер'}/>*/}
                {/*        </div>*/}
                {/*    </>*/}
                {/*    :*/}
                {/*    <>*/}
                {/*        <div className={classes.parent_select}>*/}
                {/*            <SelectParent value={selectParent} setValue={handleChangeParentData} data={user.parents}*/}
                {/*                          label={'предствитель ребенка'}/>*/}
                {/*        </div>*/}
                {/*        <div className={classes.parent_serial}>*/}
                {/*            <OtherInput label={'паспорт родителя'} placeholder={'Серия'}/>*/}
                {/*        </div>*/}
                {/*        <div className={classes.parent_number}>*/}
                {/*            <OtherInput placeholder={'Номер'}/>*/}
                {/*        </div>*/}
                {/*    </>*/}

                {/*}*/}
            </div>
            {/*{(selectAboniment.id&&selectStatus.id&&selectGroup.id)&&*/}
            {/*    <div className={classes.sales_card}>*/}
            {/*        <div className={`${classes.success}`}>*/}
            {/*            <Button click={handleSubmitAboniment} text={'применить'} size={'auto'} factor={"success"}/>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*}*/}
            {/* module change price */}

            {selectAboniment.name !== '' && selectStatus.name !== '' ?
                <>
                    <h3 className={classes.block_info__title_aboniment}>{selectAboniment.name} для {selectStatus.name.replace(/[а-я]{2}$/gi, 'ых')} клиентов</h3>
                    <div className={classes.add_aboniment}>

                        <div className={classes.sales_card}>
                            {/*<div className={classes.procent}>*/}
                            {/*    <OtherInput label={'скидка'}/>*/}
                            {/*</div>*/}
                            <div className={`${classes.sale_count}`}>
                            <span className={`${classes.sale_count_text}`}>{selectAboniment.train_quantity > 20 ? <span
                                dangerouslySetInnerHTML={{__html: '&#8734;'}}/> : selectAboniment.train_quantity} {declOfLessonsNum(selectAboniment.train_quantity)}</span>
                                <span className={`${classes.sale_count_text}`}>{(selectAboniment.days_duration / 7) > 8 ? <span
                                    dangerouslySetInnerHTML={{__html: '&#8734;'}}/> : (selectAboniment.days_duration / 7)} {declOfWeekNum((selectAboniment.days_duration / 7))}</span>
                                {/*<img className={classes.sale_count_img} src={devider} alt="devider"/>*/}
                                    <svg className={classes.sale_count_img} width="1428" height="2" viewBox="0 0 1428 2" fill="none" xmlns="http://www.w3.org/2000/svg"><line y1="1" x2="1428" y2="1" stroke="#BFC5D2" strokeLinejoin="round" strokeDasharray="5 5"/></svg>

                                {
                                    editPrice.edit ?
                                        <div onClick={toggleEdit} className={classes.edit_block}>
                                            <input autoFocus
                                                   className={classes.edit_price}
                                                   style={{width:((String(editPrice.price).length*10)+'px')}}
                                                   value={editPrice.price * countCard}
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
                            <div className={`${classes.success}`}>
                                <Button click={handleSubmitAboniment} text={'применить'} factor={"success"}/>
                            </div>
                        </div>
                    </div>
                </>
                :
                null

            }

            {/* end module change price */}

            {/*<input className={classes.sale_count__input}*/}
            {/*       type={'number'} size={editPrice.price.length}*/}
            {/*       value={editPrice.price} onChange={handleChangePriceAbonement}/>*/}
        </>
    );
};