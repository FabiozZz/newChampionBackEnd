import React, {useEffect, useState} from 'react';
import {OtherInput} from "../../../../../../../../next.js/with-redux-thunk-app/components/ui/OtherInput/OtherInput";
import {SelectAbonement} from "../../../Profile/Pages/ProfileInfo/SelectAbonement";
import {SelectStatus} from "../../../Profile/Pages/ProfileInfo/SelectStatus/SelectStatus";
import {Counter} from "../../../../utils/Counter/Counter";
import {SelectGroup} from "../../../Profile/Pages/ProfileInfo/AddAboniment/SelectGroup/SelectGroup";
import {SelectCouch} from "../../../Profile/Pages/ProfileInfo/AddAboniment/SelectCouch/SelectCouch";
import {declOfLessonsNum, declOfWeekNum} from "../../../../../../../../next.js/with-redux-thunk-app/components/halpers/common";
import success_edit from "../../../../assets/images/successAbonement.svg";
import edit from "../../../../assets/images/editAboniment.svg";
import {Button} from "../../../../../../../../next.js/with-redux-thunk-app/components/ui/Buttons/Button";
import {useDispatch, useSelector} from "react-redux";
import {buy_abonement} from "../../../../store/Actions/profileActions";
import classes from './add.module.css';
import SelectAgesGroup from "../../../../utils/SelectAgesGroup/SelectAgesGroup";
import {BtnGroup} from "../../../Clients/FilterClientSection/BtnGroup/BtnGroup";

const AddedAbonementModal = ({user}) => {
    const dispatch = useDispatch();

    const [single,setSingle] = useState(false)

    const {added_client} = useSelector(state => state.general_page);

    const {abonements, ages_groups, couches, groups, statuses} = added_client;

    const [selectAboniment, setAboniment] = useState({
        id: null,
        name: ''
    });
    const handleChangeAboniment = (item) => {
        setAboniment(prevState => ({...prevState, ...item}))
    };

    const [selectAgesGroup, setSelectAgesGroup] = useState(user.club_card.age_group)
    const handleChangeAgesGroupForUser = (obj) => {
        setSelectAgesGroup(obj);
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
        if (!single) {
            if (selectAboniment.prices && selectStatus.id) {

                let price = selectAboniment.prices.find(item=>item.age_group.id === user.club_card.age_group.id&&item.level.id === selectStatus.id).price;
                if (price) {
                    setEditPrice(prevState => ({...prevState,price:Number(price)}));
                }
            }
        }else{
            setEditPrice(prevState => ({...prevState,price:500}))
        }
    },[selectAboniment.prices, selectStatus.id, single, user.club_card.age_group.id]);

    const handleSubmitAboniment = async () => {
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
        dispatch(buy_abonement(uploadData));
    };
    return (
        <div className={classes.wrapper}>
            <p className={classes.wrapper__label}>Абонемента нет</p>

            <div className={classes.add_aboniment}>
                <div className={classes.card_number}>
                    <OtherInput value={card} setValue={handleChangeNumCard} label={'номер карты'} disabled={single}/>
                </div>
                <div className={classes.aboniment}>
                    <SelectAbonement value={selectAboniment.name} setValue={handleChangeAboniment}
                                     data={abonements}
                                     label={'тип абонемента'} disabled={single}/>
                </div>
                <div className={classes.status}>
                    <SelectStatus value={selectStatus.name} setValue={handleChangeStatus} data={statuses}
                                  label={'статус'} disabled={single}/>
                </div>
                <div className={classes.counter}>
                    <Counter value={countCard}
                             decrement={handleDecrementCount}
                             increment={handleIncrementCount}
                             setValue={handleChangeCountCard}
                             label={'количество'} disabled={single}/>
                </div>
                <div className={classes.ages_group}>
                    <SelectAgesGroup label={'возростная группа'} value={selectAgesGroup} setValue={handleChangeAgesGroupForUser} data={ages_groups} disabled={single}/>
                </div>
                {
                    !selectAboniment.is_personal?

                        <div className={`${classes.group}`}>
                            <SelectGroup label={'группа'} data={groups} value={selectGroup}
                                         setValue={handleChangeGroup} disabled={single}/>
                        </div>

                        :
                        <div className={`${classes.group}`}>
                            <SelectCouch data={couches} value={selectCouch} setValue={handleChangeCouch}
                                         label={'тренер'} disabled={single}/>
                        </div>
                }
                <div className={classes.switch_box}>
                    <BtnGroup is_Adult={single} toggleActive={setSingle} left={'Месяц'} right={'Разово'}/>
                </div>
            </div>
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
                            {/*<div className={`${classes.success}`}>*/}
                            {/*    <Button click={handleSubmitAboniment} text={'применить'} size={"auto"} factor={"success"}/>*/}
                            {/*</div>*/}
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
        </div>

    );
};

export default AddedAbonementModal;